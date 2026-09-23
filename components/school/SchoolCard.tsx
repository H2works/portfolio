'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { School } from '@/types/school';
import { getComparedSchoolSlugs, toggleCompareSchool } from './CompareBar';

import SchoolLogo from './SchoolLogo';

interface SchoolCardProps {
  school: School;
}

export default function SchoolCard({ school }: SchoolCardProps) {
  const [isCompared, setIsCompared] = useState(false);

  useEffect(() => {
    const checkCompared = () => {
      const list = getComparedSchoolSlugs();
      setIsCompared(list.includes(school.slug));
    };
    checkCompared();
    window.addEventListener('h2works_compare_change', checkCompared);
    return () => {
      window.removeEventListener('h2works_compare_change', checkCompared);
    };
  }, [school.slug]);

  const handleCompareClick = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleCompareSchool(school.slug);
  };

  return (
    <article className="school-card shadow-sm">
      <div className="row align-items-center g-3">
        {/* Main Info */}
        <div className="col-12 col-lg-8">
          <div className="d-flex align-items-start gap-3 mb-3">
            <Link
              href={`/school/malaysia/${school.slug}`}
              className="text-decoration-none flex-shrink-0"
              tabIndex={-1}
              aria-hidden="true"
            >
              <SchoolLogo
                name={school.name}
                logoUrl={school.logoUrl}
                size={54}
              />
            </Link>

            <div className="flex-grow-1 min-w-0">
              <div className="d-flex flex-wrap align-items-center gap-2 mb-1">
                <span className="text-secondary small d-flex align-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    fill="currentColor"
                    className="bi bi-geo-alt-fill me-1 text-danger"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                  </svg>
                  {school.location.state} • {school.location.area}
                </span>
                <span className="text-muted small">|</span>
                <span className="text-secondary small">対象: {school.ageRange.display} 歳</span>
              </div>

              <h3 className="school-card-title">
                <Link href={`/school/malaysia/${school.slug}`}>
                  {school.name}
                </Link>
              </h3>
            </div>
          </div>

          <div className="d-flex flex-wrap gap-1 mb-2">
            {school.curricula.map((curriculum) => (
              <span key={curriculum} className="badge-curriculum">
                {curriculum}
              </span>
            ))}
          </div>

          <p className="text-secondary small mb-3 lh-base">
            {school.shortDescription}
          </p>

          <div className="d-flex flex-wrap gap-1 align-items-center">
            {school.features.schoolBus && (
              <span className="badge-feature">
                🚌 スクールバス
              </span>
            )}
            {school.languages.japaneseSupport && (
              <span className="badge-feature badge-highlight">
                🇯🇵 日本語サポート
              </span>
            )}
            {school.features.boardingAvailable && (
              <span className="badge-feature">
                🏠 学生寮（Boarding）
              </span>
            )}
            {school.features.afterSchoolCare && (
              <span className="badge-feature">
                ⏰ 学童・課外活動
              </span>
            )}
          </div>
        </div>

        {/* Tuition & Actions */}
        <div className="col-12 col-lg-4 d-flex flex-column justify-content-between text-lg-end border-top border-lg-0 pt-3 pt-lg-0">
          <div className="tuition-box mb-3 mb-lg-4">
            <div className="tuition-label">年間授業料 目安</div>
            <div className="tuition-amount">{school.currentFees.tuitionDisplay}</div>
            <div className="text-muted small" style={{ fontSize: '0.72rem' }}>
              学年により変動（{school.currentFees.academicYear}度）
            </div>
          </div>

          <div className="d-flex align-items-center justify-content-lg-end gap-2">
            <button
              type="button"
              onClick={handleCompareClick}
              className={`btn btn-sm rounded-pill px-3 fw-medium ${
                isCompared
                  ? 'btn-dark'
                  : 'btn-outline-secondary'
              }`}
            >
              {isCompared ? '✓ 比較中' : '＋ 比較'}
            </button>
            <Link
              href={`/school/malaysia/${school.slug}`}
              className="btn btn-sm btn-primary rounded-pill px-3 fw-medium"
            >
              詳細を見る
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                className="bi bi-arrow-right ms-1"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
