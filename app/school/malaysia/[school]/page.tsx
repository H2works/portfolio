import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import SchoolLayout from '@/components/school/SchoolLayout';
import { SchoolStructuredData, BreadcrumbStructuredData } from '@/components/school/StructuredData';
import { getAllSchoolSlugs, getSchoolBySlug } from '@/lib/schools';
import SchoolLogo from '@/components/school/SchoolLogo';
import SchoolDetailCompareButton from './SchoolDetailCompareButton';

interface PageProps {
  params: Promise<{ school: string }>;
}

export async function generateStaticParams() {
  return getAllSchoolSlugs();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { school: slug } = await params;
  const school = getSchoolBySlug(slug);

  if (!school) {
    return {
      title: '学校が見つかりません | H2works School Finder',
    };
  }

  const title = `${school.name} 学費・カリキュラム・入学情報 | マレーシア School Finder`;
  const description = `${school.name}（${school.location.city}・${school.location.area}）の学費（${school.currentFees.academicYear}度）、カリキュラム（${school.curricula.join('・')}）、対象年齢（${school.ageRange.display}歳）、バス送迎、日本語対応状況の詳細情報。`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
    },
  };
}

export default async function SchoolDetailPage({ params }: PageProps) {
  const { school: slug } = await params;
  const school = getSchoolBySlug(slug);

  if (!school) {
    notFound();
  }

  const breadcrumbs = [
    { name: 'School Finder', url: 'https://h2works.xyz/school' },
    { name: 'Malaysia', url: 'https://h2works.xyz/school/malaysia' },
    { name: school.name, url: `https://h2works.xyz/school/malaysia/${school.slug}` },
  ];

  return (
    <SchoolLayout>
      <SchoolStructuredData school={school} />
      <BreadcrumbStructuredData items={breadcrumbs} />

      {/* Header Banner */}
      <section className="school-detail-header">
        <div className="container-xl px-3">
          {/* Breadcrumbs */}
          <nav aria-label="breadcrumb" className="mb-3">
            <ol className="breadcrumb small text-muted">
              <li className="breadcrumb-item">
                <Link href="/school" className="text-secondary text-decoration-none">
                  School Finder
                </Link>
              </li>
              <li className="breadcrumb-item">
                <Link href="/school/malaysia" className="text-secondary text-decoration-none">
                  Malaysia
                </Link>
              </li>
              <li className="breadcrumb-item active text-truncate" aria-current="page">
                {school.name}
              </li>
            </ol>
          </nav>

          <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
            <div className="d-flex align-items-start align-items-sm-center gap-3">
              <SchoolLogo
                name={school.name}
                logoUrl={school.logoUrl}
                size={72}
              />
              <div>
                <div className="d-flex flex-wrap align-items-center gap-2 mb-2">
                  <span className="badge bg-secondary-subtle text-dark fw-medium">
                    {school.location.state} • {school.location.area}
                  </span>
                  <span className="verified-badge">
                    ✓ 公式情報確認済み
                  </span>
                  <span className="text-muted small">
                    最終確認: {school.lastVerified}
                  </span>
                </div>
                <h1 className="h2 fw-bold text-dark mb-1">{school.name}</h1>
                <div className="text-muted small mb-0">{school.officialName}</div>
              </div>
            </div>

            <div className="d-flex align-items-center gap-2">
              <SchoolDetailCompareButton slug={school.slug} />
              <a
                href={school.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-dark rounded-pill px-3 fw-medium"
              >
                学校公式サイト ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container-xl px-3 py-4">
        <div className="row g-4">
          {/* Left Main Column */}
          <div className="col-12 col-lg-8">
            {/* Overview Card */}
            <div className="detail-card shadow-sm">
              <h2 className="card-title-lg">
                <span>🏫</span> 学校概要
              </h2>
              <p className="lh-lg text-secondary mb-4">
                {school.overview}
              </p>

              <div className="row g-3">
                <div className="col-6 col-sm-4">
                  <div className="p-2 border rounded bg-light-subtle">
                    <div className="text-muted small">カリキュラム</div>
                    <div className="fw-bold text-dark">{school.curricula.join(' / ')}</div>
                  </div>
                </div>
                <div className="col-6 col-sm-4">
                  <div className="p-2 border rounded bg-light-subtle">
                    <div className="text-muted small">対象年齢</div>
                    <div className="fw-bold text-dark">{school.ageRange.display} 歳</div>
                  </div>
                </div>
                <div className="col-6 col-sm-4">
                  <div className="p-2 border rounded bg-light-subtle">
                    <div className="text-muted small">創立年</div>
                    <div className="fw-bold text-dark">{school.establishedYear ? `${school.establishedYear}年` : '未公表'}</div>
                  </div>
                </div>
                <div className="col-6 col-sm-4">
                  <div className="p-2 border rounded bg-light-subtle">
                    <div className="text-muted small">主要授業言語</div>
                    <div className="fw-bold text-dark">{school.languages.instructionLanguage}</div>
                  </div>
                </div>
                <div className="col-6 col-sm-4">
                  <div className="p-2 border rounded bg-light-subtle">
                    <div className="text-muted small">スクールバス</div>
                    <div className="fw-bold text-dark">{school.features.schoolBus ? '運行あり' : '運行なし'}</div>
                  </div>
                </div>
                <div className="col-6 col-sm-4">
                  <div className="p-2 border rounded bg-light-subtle">
                    <div className="text-muted small">日本語サポート</div>
                    <div className="fw-bold text-dark">
                      {school.languages.japaneseSupport ? 'あり (対応窓口・会)' : 'なし (通常英語対応)'}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fees Schedule Card */}
            <div className="detail-card shadow-sm">
              <div className="d-flex flex-wrap align-items-center justify-content-between mb-3 border-bottom pb-2">
                <h2 className="card-title-lg mb-0 border-0 p-0">
                  <span>💰</span> 学費・納入金一覧
                </h2>
                <span className="badge bg-primary-subtle text-primary fw-semibold px-2 py-1">
                  対象年度: {school.currentFees.academicYear}
                </span>
              </div>

              <div className="alert alert-secondary py-2 px-3 small mb-4">
                <strong>年間授業料の目安:</strong> <span className="fw-bold fs-6 text-dark ms-1">{school.currentFees.tuitionDisplay}</span>
                <span className="text-muted d-block mt-1" style={{ fontSize: '0.78rem' }}>
                  ※ 学年（Nursery / Primary / Secondary / Sixth Form）により金額が異なります。下記の内訳をご確認ください。
                </span>
              </div>

              {/* Tuition Items Table */}
              <h3 className="h6 fw-bold text-dark mb-2">学年別 年間授業料（Tuition Fees）</h3>
              <div className="table-responsive mb-4">
                <table className="table fee-table table-bordered">
                  <thead>
                    <tr>
                      <th>学年区分 / 項目名</th>
                      <th className="text-end">金額 (MYR)</th>
                      <th>納入頻度</th>
                      <th>備考</th>
                    </tr>
                  </thead>
                  <tbody>
                    {school.currentFees.items
                      .filter((f) => f.feeType === 'tuition')
                      .map((item, idx) => (
                        <tr key={idx}>
                          <td className="fw-medium text-dark">{item.label}</td>
                          <td className="text-end fw-bold text-dark text-nowrap">
                            RM {item.amount.toLocaleString()}
                          </td>
                          <td className="small text-secondary">{item.frequency}</td>
                          <td className="small text-secondary">{item.notes || '—'}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>

              {/* One-time Fees Table */}
              <h3 className="h6 fw-bold text-dark mb-2">入学時の一時納入金（One-time Fees）</h3>
              <div className="table-responsive mb-4">
                <table className="table fee-table table-bordered">
                  <thead>
                    <tr>
                      <th>費用名</th>
                      <th className="text-end">金額 (MYR)</th>
                      <th>返金区分</th>
                      <th>備考</th>
                    </tr>
                  </thead>
                  <tbody>
                    {school.currentFees.items
                      .filter((f) => f.feeType !== 'tuition')
                      .map((item, idx) => (
                        <tr key={idx}>
                          <td className="fw-medium text-dark">{item.label}</td>
                          <td className="text-end fw-bold text-dark text-nowrap">
                            RM {item.amount.toLocaleString()}
                          </td>
                          <td>
                            {item.isRefundable ? (
                              <span className="badge bg-success-subtle text-success">返金対象</span>
                            ) : (
                              <span className="badge bg-secondary-subtle text-secondary">返金不可</span>
                            )}
                          </td>
                          <td className="small text-secondary">{item.notes || '—'}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>

              {/* Ancillary Fees Estimates */}
              <div className="d-flex flex-wrap align-items-center justify-content-between mb-2">
                <h3 className="h6 fw-bold text-dark mb-0">通学・給食等の諸費用（目安）</h3>
                <span className="badge bg-light text-secondary border small">利用状況・距離により変動</span>
              </div>
              <ul className="list-group list-group-flush border rounded-2 small mb-2">
                <li className="list-group-item d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-1 py-3">
                  <span className="fw-medium text-secondary">🚌 スクールバス運賃</span>
                  <span className="fw-semibold text-dark text-sm-end">{school.currentFees.busFeeEstimate || 'ルート・距離に応じて別見積'}</span>
                </li>
                <li className="list-group-item d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-1 py-3">
                  <span className="fw-medium text-secondary">🍱 給食・ランチ代</span>
                  <span className="fw-semibold text-dark text-sm-end">{school.currentFees.lunchFeeEstimate || '利用時別途実費'}</span>
                </li>
              </ul>
              <div className="text-muted small mb-4" style={{ fontSize: '0.75rem' }}>
                ※ スクールバス・給食代は学校提携の専門運行会社またはカフェテリア業者への直接精算となる場合が多く、居住地や学年によって異なります。多くの学校でお弁当の持参も可能です。
              </div>

              {/* Historical Fees Notice */}
              {school.historicalFees && school.historicalFees.length > 0 && (
                <div className="bg-light p-3 rounded-2 small text-secondary">
                  <strong>過去の学費実績（履歴）:</strong>
                  {school.historicalFees.map((h, i) => (
                    <span key={i} className="ms-2">
                      {h.academicYear}度: {h.tuitionDisplay}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Language & Support Card */}
            <div className="detail-card shadow-sm">
              <h2 className="card-title-lg">
                <span>🗣️</span> 言語サポート・日本語対応
              </h2>
              <div className="mb-3">
                <h3 className="h6 fw-bold text-dark mb-1">第二外国語 / 語学選択</h3>
                <p className="text-secondary small mb-3">
                  {school.languages.secondLanguages.join(', ')}
                </p>
              </div>

              <div className="p-3 border rounded-3 mb-3 bg-light-subtle">
                <h3 className="h6 fw-bold text-dark mb-1 d-flex align-items-center gap-2">
                  <span>🇯🇵</span> 日本語サポート
                  {school.languages.japaneseSupport ? (
                    <span className="badge bg-success text-white small">対応あり</span>
                  ) : (
                    <span className="badge bg-secondary text-white small">一般対応</span>
                  )}
                </h3>
                <p className="text-secondary small mb-0">
                  {school.languages.japaneseSupportDetail || '学校への連絡・手続きは原則すべて英語での対応となります。'}
                </p>
              </div>

              <div className="p-3 border rounded-3 bg-light-subtle">
                <h3 className="h6 fw-bold text-dark mb-1 d-flex align-items-center gap-2">
                  <span>📘</span> 英語集中サポート (ELL / ESL)
                  {school.languages.ellSupport ? (
                    <span className="badge bg-primary text-white small">プログラム有</span>
                  ) : (
                    <span className="badge bg-secondary text-white small">標準</span>
                  )}
                </h3>
                <p className="text-secondary small mb-0">
                  {school.languages.ellSupportDetail || '入学時に一定の英語力が求められる場合があります。'}
                </p>
              </div>
            </div>

            {/* Facilities Card */}
            <div className="detail-card shadow-sm">
              <h2 className="card-title-lg">
                <span>🏊‍♂️</span> キャンパス設備
              </h2>
              <div className="row g-2">
                {school.facilities.map((facility, idx) => (
                  <div key={idx} className="col-12 col-sm-6">
                    <div className="p-2 border rounded bg-light-subtle small d-flex align-items-center">
                      <span className="text-primary me-2">✓</span>
                      <span className="text-dark fw-medium">{facility}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar Column */}
          <div className="col-12 col-lg-4">
            {/* Admissions Card */}
            <div className="detail-card shadow-sm">
              <h2 className="card-title-lg">
                <span>📝</span> 入学・学期情報
              </h2>
              <div className="mb-3">
                <div className="text-muted small">学期スケジュール</div>
                <div className="fw-bold text-dark small">{school.admissions.academicYearSchedule}</div>
              </div>
              <div className="mb-3">
                <div className="text-muted small">主な入学時期 (Intakes)</div>
                <div className="d-flex flex-wrap gap-1 mt-1">
                  {school.admissions.intakeMonths.map((m) => (
                    <span key={m} className="badge bg-dark-subtle text-dark">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mb-3">
                <div className="text-muted small">入学試験・アセスメント</div>
                <div className="small text-dark">
                  {school.admissions.assessmentRequired ? 'あり (学力・英語診断等の受検要)' : '書類審査のみ'}
                </div>
              </div>
              <div>
                <div className="text-muted small">出願プロセス</div>
                <div className="small text-secondary lh-base mt-1">
                  {school.admissions.applicationProcess}
                </div>
              </div>
            </div>

            {/* Transport & Bus Card */}
            <div className="detail-card shadow-sm">
              <h2 className="card-title-lg">
                <span>🚌</span> 通学・スクールバス
              </h2>
              <p className="text-secondary small mb-3">
                {school.features.busDetail || 'スクールバスの運行状況については学校へお問い合わせください。'}
              </p>
              {school.features.boardingAvailable && (
                <div className="p-2 border rounded bg-light small mb-2">
                  <strong>学生寮（Boarding）:</strong> {school.features.boardingDetail || '寮施設あり'}
                </div>
              )}
            </div>

            {/* Contact & Location Card */}
            <div className="detail-card shadow-sm">
              <h2 className="card-title-lg">
                <span>📍</span> 所在地・連絡先
              </h2>
              <p className="text-secondary small mb-2">
                <strong>住所:</strong><br />
                {school.location.address}
              </p>
              {school.location.googleMapsUrl && (
                <a
                  href={school.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-secondary btn-sm rounded-pill mb-3 w-100"
                >
                  Google Maps で開く ↗
                </a>
              )}

              <div className="border-top pt-2 small">
                {school.contact.phone && (
                  <div className="mb-1">
                    <strong>TEL:</strong> {school.contact.phone}
                  </div>
                )}
                {school.contact.email && (
                  <div className="mb-2">
                    <strong>Email:</strong> {school.contact.email}
                  </div>
                )}
                <a
                  href={school.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm rounded-pill w-100 fw-bold"
                >
                  公式ウェブサイトへ ↗
                </a>
              </div>
            </div>

            {/* Information Sources & Verification */}
            <div className="detail-card shadow-sm bg-light-subtle">
              <h2 className="card-title-lg fs-6">
                <span>🔍</span> 情報源と確認日
              </h2>
              <p className="text-secondary" style={{ fontSize: '0.8rem' }}>
                当データは以下の一次情報をもとに調査・検証しています（最終確認: {school.lastVerified}）。
              </p>
              <ul className="list-unstyled mb-0" style={{ fontSize: '0.8rem' }}>
                {school.sources.map((src, i) => (
                  <li key={i} className="mb-2">
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none text-primary fw-medium"
                    >
                      {src.title} ↗
                    </a>
                    <span className="text-muted d-block" style={{ fontSize: '0.72rem' }}>
                      確認年月: {src.checkedAt} ({src.sourceType})
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SchoolLayout>
  );
}
