import type { Metadata } from 'next';
import { Suspense } from 'react';
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
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="mb-3">
          <ol className="breadcrumb small text-muted">
            <li className="breadcrumb-item">
              <a href="/school" className="text-secondary text-decoration-none">School Finder</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">比較表</li>
          </ol>
        </nav>

        <div className="mb-4">
          <h1 className="h3 fw-bold text-dark mb-1">
            インターナショナルスクール比較
          </h1>
          <p className="text-secondary small mb-0">
            最大4校まで選択して、学費・カリキュラム・サポート体制を横並びで詳細比較できます。
          </p>
        </div>

        <Suspense fallback={<div className="py-5 text-center text-muted">読み込み中...</div>}>
          <SchoolCompareClient allSchools={allSchools} />
        </Suspense>
      </div>
    </SchoolLayout>
  );
}
