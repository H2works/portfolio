'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { School } from '@/types/school';
import SchoolLogo from '@/components/school/SchoolLogo';
import {
  getComparedSchoolSlugs,
  toggleCompareSchool,
  clearComparedSchools,
} from '@/components/school/CompareBar';

interface Props {
  allSchools: School[];
}

export default function SchoolCompareClient({ allSchools }: Props) {
  const searchParams = useSearchParams();
  const [selectedSlugs, setSelectedSlugs] = useState<string[]>([]);

  // Sync selected slugs from URL search param or localStorage
  useEffect(() => {
    const urlParam = searchParams.get('schools');
    if (urlParam) {
      const fromUrl = urlParam.split(',').filter(Boolean);
      setSelectedSlugs(fromUrl);
      try {
        localStorage.setItem('h2works_compare_schools', JSON.stringify(fromUrl));
        window.dispatchEvent(new Event('h2works_compare_change'));
      } catch {}
    } else {
      setSelectedSlugs(getComparedSchoolSlugs());
    }

    const handleSync = () => {
      setSelectedSlugs(getComparedSchoolSlugs());
    };
    window.addEventListener('h2works_compare_change', handleSync);
    window.addEventListener('storage', handleSync);
    return () => {
      window.removeEventListener('h2works_compare_change', handleSync);
      window.removeEventListener('storage', handleSync);
    };
  }, [searchParams]);

  const selectedSchools = useMemo(() => {
    return selectedSlugs
      .map((slug) => allSchools.find((s) => s.slug === slug))
      .filter((s): s is School => s !== undefined);
  }, [selectedSlugs, allSchools]);

  const handleRemove = (slug: string) => {
    toggleCompareSchool(slug);
  };

  const handleAddSchool = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const slug = e.target.value;
    if (slug) {
      toggleCompareSchool(slug);
      e.target.value = '';
    }
  };

  const availableToAdd = allSchools.filter(
    (s) => !selectedSlugs.includes(s.slug)
  );

  if (selectedSchools.length === 0) {
    return (
      <div className="bg-white border rounded-3 p-5 text-center my-4 shadow-sm">
        <div className="fs-1 text-muted mb-3">⚖️</div>
        <h2 className="h4 fw-bold text-dark mb-2">比較する学校が選択されていません</h2>
        <p className="text-secondary small mb-4">
          学校一覧の「＋ 比較」ボタンを押すか、下のセレクトメニューから学校を選択して比較を開始してください。
        </p>

        <div className="d-flex justify-content-center mb-4">
          <div style={{ maxWidth: '360px', width: '100%' }}>
            <select
              className="form-select form-select-lg"
              onChange={handleAddSchool}
              defaultValue=""
            >
              <option value="" disabled>比較する学校を選択する...</option>
              {allSchools.map((s) => (
                <option key={s.slug} value={s.slug}>
                  {s.name} ({s.location.area})
                </option>
              ))}
            </select>
          </div>
        </div>

        <Link
          href="/school/malaysia"
          className="btn btn-outline-dark rounded-pill px-4"
        >
          ← 学校一覧・検索に戻る
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Top Action Toolbar */}
      <div className="bg-white border rounded-3 p-3 mb-4 d-flex flex-wrap align-items-center justify-content-between gap-3 shadow-sm">
        <div className="d-flex align-items-center gap-2">
          <span className="fw-bold text-dark">{selectedSchools.length}校</span>
          <span className="text-secondary small">を比較中（最大4校）</span>
        </div>

        <div className="d-flex flex-wrap align-items-center gap-2">
          {selectedSchools.length < 4 && availableToAdd.length > 0 && (
            <div style={{ minWidth: '220px' }}>
              <select
                className="form-select form-select-sm"
                onChange={handleAddSchool}
                defaultValue=""
              >
                <option value="" disabled>＋ 比較校を追加する...</option>
                {availableToAdd.map((s) => (
                  <option key={s.slug} value={s.slug}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>
          )}

          <button
            type="button"
            onClick={clearComparedSchools}
            className="btn btn-outline-danger btn-sm rounded-pill px-3"
          >
            比較をクリア
          </button>
        </div>
      </div>

      {/* Comparison Matrix Table */}
      <div className="compare-table-wrapper mb-4">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th className="compare-label-col">比較項目</th>
              {selectedSchools.map((school) => (
                <th key={school.slug} className="compare-school-header" style={{ minWidth: '260px', maxWidth: '320px' }}>
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <span className="badge bg-secondary-subtle text-dark small">
                      {school.location.area}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleRemove(school.slug)}
                      className="btn-close small"
                      aria-label="削除"
                      title="比較から除外"
                    ></button>
                  </div>
                  <div className="d-flex justify-content-center mb-2">
                    <SchoolLogo
                      name={school.name}
                      logoUrl={school.logoUrl}
                      size={48}
                    />
                  </div>
                  <h3 className="h6 fw-bold text-dark mb-2" style={{ minHeight: '2.5rem' }}>
                    {school.name}
                  </h3>
                  <div className="d-flex gap-1 justify-content-center">
                    <Link
                      href={`/school/malaysia/${school.slug}`}
                      className="btn btn-primary btn-sm rounded-pill px-3 w-100 fw-medium"
                    >
                      詳細を見る
                    </Link>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* Location */}
            <tr>
              <td className="compare-label-col">所在地 / エリア</td>
              {selectedSchools.map((s) => (
                <td key={s.slug}>
                  <div className="fw-semibold text-dark">{s.location.state}</div>
                  <div className="small text-secondary">{s.location.area} ({s.location.city})</div>
                </td>
              ))}
            </tr>

            {/* Curriculum */}
            <tr>
              <td className="compare-label-col">カリキュラム</td>
              {selectedSchools.map((s) => (
                <td key={s.slug}>
                  <div className="d-flex flex-wrap gap-1">
                    {s.curricula.map((c) => (
                      <span key={c} className="badge-curriculum">
                        {c}
                      </span>
                    ))}
                  </div>
                </td>
              ))}
            </tr>

            {/* Age Range */}
            <tr>
              <td className="compare-label-col">対象年齢</td>
              {selectedSchools.map((s) => (
                <td key={s.slug} className="fw-semibold text-dark">
                  {s.ageRange.display} 歳
                </td>
              ))}
            </tr>

            {/* Annual Tuition */}
            <tr className="table-light">
              <td className="compare-label-col">年間授業料 目安</td>
              {selectedSchools.map((s) => (
                <td key={s.slug}>
                  <div className="fw-bold text-dark fs-6">
                    {s.currentFees.tuitionDisplay}
                  </div>
                  <div className="text-muted small" style={{ fontSize: '0.72rem' }}>
                    {s.currentFees.academicYear}度
                  </div>
                </td>
              ))}
            </tr>

            {/* Application Fee */}
            <tr>
              <td className="compare-label-col">出願料（一時金）</td>
              {selectedSchools.map((s) => (
                <td key={s.slug} className="small text-dark">
                  {s.currentFees.applicationFee
                    ? `RM ${s.currentFees.applicationFee.toLocaleString()}`
                    : '要確認'}
                </td>
              ))}
            </tr>

            {/* Registration Fee */}
            <tr>
              <td className="compare-label-col">入学登録料（一時金）</td>
              {selectedSchools.map((s) => (
                <td key={s.slug} className="small text-dark">
                  {s.currentFees.registrationFee
                    ? `RM ${s.currentFees.registrationFee.toLocaleString()}`
                    : '要確認'}
                </td>
              ))}
            </tr>

            {/* Refundable Deposit */}
            <tr>
              <td className="compare-label-col">保証金（デポジット）</td>
              {selectedSchools.map((s) => (
                <td key={s.slug} className="small text-dark">
                  {s.currentFees.deposit
                    ? `RM ${s.currentFees.deposit.toLocaleString()} (返金可)`
                    : '要確認'}
                </td>
              ))}
            </tr>

            {/* Japanese Support */}
            <tr>
              <td className="compare-label-col">日本語サポート</td>
              {selectedSchools.map((s) => (
                <td key={s.slug}>
                  {s.languages.japaneseSupport ? (
                    <div>
                      <span className="badge bg-success-subtle text-success fw-bold me-1">あり</span>
                      <div className="small text-secondary mt-1" style={{ fontSize: '0.78rem' }}>
                        {s.languages.japaneseSupportDetail}
                      </div>
                    </div>
                  ) : (
                    <span className="badge bg-light text-secondary border">通常英語対応</span>
                  )}
                </td>
              ))}
            </tr>

            {/* English Support (ELL) */}
            <tr>
              <td className="compare-label-col">英語集中サポート (ELL)</td>
              {selectedSchools.map((s) => (
                <td key={s.slug}>
                  {s.languages.ellSupport ? (
                    <span className="badge bg-primary-subtle text-primary">対応プログラムあり</span>
                  ) : (
                    <span className="badge bg-light text-secondary border">標準</span>
                  )}
                </td>
              ))}
            </tr>

            {/* School Bus */}
            <tr>
              <td className="compare-label-col">スクールバス</td>
              {selectedSchools.map((s) => (
                <td key={s.slug}>
                  {s.features.schoolBus ? (
                    <div>
                      <span className="badge bg-success-subtle text-success fw-bold">運行あり</span>
                      {s.currentFees.busFeeEstimate && (
                        <div className="fw-semibold text-dark mt-1" style={{ fontSize: '0.78rem' }}>
                          {s.currentFees.busFeeEstimate}
                        </div>
                      )}
                      <div className="small text-secondary mt-1" style={{ fontSize: '0.75rem' }}>
                        {s.features.busDetail}
                      </div>
                    </div>
                  ) : (
                    <span className="text-muted small">運行なし</span>
                  )}
                </td>
              ))}
            </tr>

            {/* Lunch */}
            <tr>
              <td className="compare-label-col">給食・ランチ代</td>
              {selectedSchools.map((s) => (
                <td key={s.slug} className="small">
                  <div className="fw-medium text-dark">{s.currentFees.lunchFeeEstimate || 'カフェテリア実費'}</div>
                </td>
              ))}
            </tr>

            {/* Boarding */}
            <tr>
              <td className="compare-label-col">学生寮（Boarding）</td>
              {selectedSchools.map((s) => (
                <td key={s.slug}>
                  {s.features.boardingAvailable ? (
                    <div>
                      <span className="badge bg-info-subtle text-dark fw-bold">寮あり</span>
                      <div className="small text-secondary mt-1" style={{ fontSize: '0.75rem' }}>
                        {s.features.boardingDetail}
                      </div>
                    </div>
                  ) : (
                    <span className="text-muted small">通学のみ</span>
                  )}
                </td>
              ))}
            </tr>

            {/* Facilities */}
            <tr>
              <td className="compare-label-col">主な設備</td>
              {selectedSchools.map((s) => (
                <td key={s.slug}>
                  <ul className="list-unstyled mb-0 small text-secondary" style={{ fontSize: '0.78rem' }}>
                    {s.facilities.slice(0, 5).map((f, i) => (
                      <li key={i} className="mb-1">
                        • {f}
                      </li>
                    ))}
                    {s.facilities.length > 5 && (
                      <li className="text-muted">+ 他{s.facilities.length - 5}施設</li>
                    )}
                  </ul>
                </td>
              ))}
            </tr>

            {/* Official Website */}
            <tr>
              <td className="compare-label-col">公式サイト</td>
              {selectedSchools.map((s) => (
                <td key={s.slug} className="small">
                  <a
                    href={s.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-decoration-none fw-medium"
                  >
                    公式サイトへ ↗
                  </a>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      <div className="text-center my-4">
        <Link href="/school/malaysia" className="btn btn-outline-dark rounded-pill px-4">
          ← 学校一覧・検索に戻る
        </Link>
      </div>
    </div>
  );
}
