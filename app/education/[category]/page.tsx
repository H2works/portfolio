import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import EducationLayout from '@/components/education/EducationLayout';
import EducationArticleCard from '@/components/education/EducationArticleCard';
import Breadcrumbs from '@/components/education/Breadcrumbs';
import SchoolCtaBanner from '@/components/education/SchoolCtaBanner';
import {
  getEducationPostsByCategory,
  getAllEducationCategoryParams,
} from '@/lib/education';
import {
  getEducationCategoryBySlug,
  EDUCATION_CATEGORIES,
} from '@/lib/educationCategories';

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return getAllEducationCategoryParams();
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getEducationCategoryBySlug(categorySlug);

  if (!category) {
    return {
      title: 'カテゴリが見つかりません | H2works Education',
    };
  }

  return {
    title: `${category.name} | H2works Education`,
    description: category.metaDescription,
    openGraph: {
      title: `${category.name} | H2works Education`,
      description: category.metaDescription,
      type: 'website',
      locale: 'ja_JP',
    },
  };
}

export default async function EducationCategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params;
  const category = getEducationCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  const posts = getEducationPostsByCategory(categorySlug);

  return (
    <EducationLayout>
      {/* Category Banner */}
      <section className="education-category-banner">
        <div className="container-xl px-3">
          <Breadcrumbs
            items={[
              { label: category.shortName },
            ]}
          />
          <div className="category-badge-lg mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              fill="currentColor"
              className="bi bi-tag"
              viewBox="0 0 16 16"
              aria-hidden="true"
            >
              <path d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0"/>
              <path d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1zm4 3.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
            </svg>
            <span>CATEGORY</span>
          </div>
          <h1 className="category-title">{category.name}</h1>
          <p className="category-description mb-3">{category.description}</p>
          <div className="text-muted small">
            公開記事数: <strong>{posts.length}</strong> 件
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container-xl px-3 py-5">
        <div className="row g-4 mb-5">
          <div className="col-12 col-lg-8">
            <div className="d-flex align-items-center justify-content-between mb-4 border-bottom pb-2">
              <h2 className="h5 fw-bold m-0">{category.name} の記事一覧</h2>
            </div>

            {posts.length === 0 ? (
              <div className="alert alert-secondary py-4 text-center">
                現在、このカテゴリーの記事を準備中です。
              </div>
            ) : (
              <div className="d-flex flex-column gap-3">
                {posts.map((post) => (
                  <EducationArticleCard key={post.slug} post={post} />
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="col-12 col-lg-4">
            <div className="card border rounded-3 p-3 bg-white shadow-sm mb-4">
              <h3 className="h6 fw-bold mb-3 border-bottom pb-2">他のテーマを見る</h3>
              <ul className="list-unstyled m-0">
                {EDUCATION_CATEGORIES.map((cat) => (
                  <li key={cat.slug} className="mb-2">
                    <Link
                      href={`/education/${cat.slug}`}
                      className={`d-flex align-items-center justify-content-between text-decoration-none py-1 px-2 rounded small ${
                        cat.slug === categorySlug
                          ? 'bg-primary text-white fw-bold'
                          : 'text-dark link-opacity-75-hover'
                      }`}
                    >
                      <span>{cat.name}</span>
                      <span className="small opacity-75">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* School Finder CTA in Sidebar */}
            <div className="card border rounded-3 p-3 bg-light shadow-sm">
              <span className="badge bg-primary-subtle text-primary fw-semibold small mb-2 d-inline-block">
                RECOMMENDED
              </span>
              <h4 className="h6 fw-bold mb-2">マレーシアのインター校を比較</h4>
              <p className="text-muted small mb-3 lh-base">
                20校以上の学費・カリキュラム・エリア情報を一括検索できる専門データベース。
              </p>
              <Link
                href="/school/malaysia"
                className="btn btn-sm btn-primary w-100"
              >
                学校一覧を見る ↗
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <SchoolCtaBanner />
      </div>
    </EducationLayout>
  );
}
