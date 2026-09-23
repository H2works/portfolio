import type { Metadata } from 'next';
import { Suspense } from 'react';
import Link from 'next/link';
import SchoolLayout from '@/components/school/SchoolLayout';
import SchoolCompareClient from './SchoolCompareClient';
import { getAllSchools } from '@/lib/schools';

export const metadata: Metadata = {
  title: 'インターナショナルスクール比較 | H2works School Finder',
  description: 'マレーシアのインターナショナルスクールを最大4校まで横並びで比較。学費、カリキュラム、スクールバス、日本語サポート、設備などの違いをひと目で確認。',
  openGraph: {
    title: 'インターナショナルスクール比較 | H2works School Finder',
    description: 'マレーシアのインターナショナルスクールを横並びで比較。',
    type: 'website',
  },
};

export default function ComparePage() {
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
                <li className="breadcrumb-item active text-white" aria-current="page">比較表</li>
              </ol>
            </nav>
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
              <div>
                <h1 className="h2 fw-bold text-white mb-2">
                  インターナショナルスクール比較
                </h1>
                <p className="text-light opacity-90 mb-0 small">
                  最大4校まで選択して、学費・カリキュラム・サポート体制を横並びで詳細比較できます。
                </p>
              </div>
              <div className="d-flex align-items-center gap-2">
                <Link href="/school/malaysia" className="btn btn-outline-light btn-sm rounded-pill px-3">
                  ← 学校一覧・検索へ戻る
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Suspense fallback={<div className="py-5 text-center text-muted">読み込み中...</div>}>
          <SchoolCompareClient allSchools={allSchools} />
        </Suspense>
      </div>
    </SchoolLayout>
  );
}
