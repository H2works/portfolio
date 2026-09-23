import type { Metadata } from 'next';
import { Suspense } from 'react';
import Link from 'next/link';
import SchoolLayout from '@/components/school/SchoolLayout';
import SchoolSearchClient from './SchoolSearchClient';
import { getAllSchools } from '@/lib/schools';

export const metadata: Metadata = {
  title: 'マレーシア インターナショナルスクール一覧・検索 | H2works School Finder',
  description: 'マレーシア（クアラルンプール・セランゴール）のインターナショナルスクール一覧。カリキュラム、学費上限、対象年齢、スクールバス、日本語サポートなどの条件で即時絞り込み検索。',
  openGraph: {
    title: 'マレーシア インターナショナルスクール一覧・検索 | H2works',
    description: 'マレーシアのインターナショナルスクール一覧。条件で即時絞り込み検索。',
    type: 'website',
  },
};

export default function MalaysiaSchoolsPage() {
  const allSchools = getAllSchools();

  return (
    <SchoolLayout>
      <div className="container-xl px-3 py-4">
        {/* Page Header Banner */}
        <div className="school-page-banner rounded-4 mb-4 p-4 p-md-5 text-white position-relative overflow-hidden shadow-sm">
          <div className="position-relative z-1">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb small mb-2 opacity-75">
                <li className="breadcrumb-item">
                  <Link href="/school" className="text-white text-decoration-none opacity-75">School Finder</Link>
                </li>
                <li className="breadcrumb-item active text-white" aria-current="page">Malaysia</li>
              </ol>
            </nav>
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
              <div>
                <h1 className="h2 fw-bold text-white mb-2">
                  マレーシアのインターナショナルスクール検索
                </h1>
                <p className="text-light opacity-90 mb-0 small">
                  クランバレー（KL・セランゴール）全18校の学費・カリキュラム・付帯費用を即時絞り込み
                </p>
              </div>
              <div className="d-flex align-items-center gap-2">
                <span className="badge bg-white bg-opacity-10 border border-white border-opacity-25 text-white px-3 py-2 rounded-pill small">
                  公式データ検証済
                </span>
                <Link href="/school/compare" className="btn btn-outline-light btn-sm rounded-pill px-3">
                  比較表を開く
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Search & Filter Interface (wrapped in Suspense for useSearchParams) */}
        <Suspense fallback={<div className="py-5 text-center text-muted">読み込み中...</div>}>
          <SchoolSearchClient allSchools={allSchools} />
        </Suspense>
      </div>
    </SchoolLayout>
  );
}
