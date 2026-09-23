import type { Metadata } from 'next';
import { Suspense } from 'react';
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
        {/* Page Header */}
        <div className="mb-4">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb small text-muted mb-2">
              <li className="breadcrumb-item">
                <a href="/school" className="text-secondary text-decoration-none">School Finder</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">Malaysia</li>
            </ol>
          </nav>
          <h1 className="h3 fw-bold text-dark mb-1">
            マレーシアのインターナショナルスクール検索
          </h1>
          <p className="text-secondary small mb-0">
            クランバレー（Kuala Lumpur & Selangor）の学校情報を横断検索できます。
          </p>
        </div>

        {/* Search & Filter Interface (wrapped in Suspense for useSearchParams) */}
        <Suspense fallback={<div className="py-5 text-center text-muted">読み込み中...</div>}>
          <SchoolSearchClient allSchools={allSchools} />
        </Suspense>
      </div>
    </SchoolLayout>
  );
}
