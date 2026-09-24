import type { Metadata } from 'next';
import Link from 'next/link';
import EducationLayout from '@/components/education/EducationLayout';
import EducationArticleCard from '@/components/education/EducationArticleCard';
import SchoolCtaBanner from '@/components/education/SchoolCtaBanner';
import {
  getAllEducationPosts,
  getFeaturedEducationPosts,
  getEducationPostsByCategory,
} from '@/lib/education';
import { EDUCATION_CATEGORIES } from '@/lib/educationCategories';

export const metadata: Metadata = {
  title: 'H2works Education | 海外教育・インターナショナルスクール・通信制高校メディア',
  description: 'マレーシア留学、インターナショナルスクール選び、海外在住者の通信制高校活用、大学進学ルートなど、多様化する教育・進路の選択肢をわかりやすく整理して発信する教育情報メディアです。',
  openGraph: {
    title: 'H2works Education | 海外教育・進路情報メディア',
    description: 'マレーシア留学、インターナショナルスクール選び、海外在住者の通信制高校活用、大学進学ルートなど、多様化する教育・進路の選択肢をわかりやすく整理して発信する教育情報メディアです。',
    type: 'website',
    locale: 'ja_JP',
  },
};

export default function EducationIndex() {
  const allPosts = getAllEducationPosts();
  const featuredPosts = getFeaturedEducationPosts();
  const primaryFeatured = featuredPosts[0];

  return (
    <EducationLayout>
      {/* Education Hero Section */}
      <section className="education-hero-section">
        <div className="container-xl px-3">
          <div className="row justify-content-center text-center">
            <div className="col-12 col-lg-10 col-xl-9">
              <div className="hero-badge mb-3">
                <span>EDUCATION & PATHWAYS</span>
              </div>
              <h1 className="hero-title mb-3">
                海外教育・進路をもっと身近に。
              </h1>
              <p className="hero-lead mb-4 mx-auto" style={{ maxWidth: '720px' }}>
                海外で学ぶ、日本で学ぶ。インターナショナルスクール、母子留学、通信制高校の活用まで、実態に基づいた教育・進路情報を体系的にお届けします。
              </p>

              {/* Category Chips */}
              <div className="d-flex flex-wrap justify-content-center gap-2">
                {EDUCATION_CATEGORIES.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/education/${cat.slug}`}
                    className="hero-category-chip"
                  >
                    {cat.shortName}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="container-xl px-3 py-5">
        {/* Featured / Pick Up Section */}
        {primaryFeatured && (
          <section className="mb-5">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <h2 className="h5 fw-bold m-0 d-flex align-items-center gap-2">
                <span className="badge bg-primary" style={{ width: '4px', height: '18px', padding: 0 }}></span>
                <span>注目の記事</span>
              </h2>
            </div>
            <EducationArticleCard post={primaryFeatured} featured={true} />
          </section>
        )}

        {/* School Finder CTA Banner */}
        <SchoolCtaBanner
          title="マレーシアのインターナショナルスクールを探すなら"
          description="学費表、カリキュラム、英語サポート（EAL）、寮の有無から20校以上の公式データを一括比較。学校選びをスムーズに。"
          className="mb-5"
        />

        {/* Category Sections */}
        <section className="mb-5">
          <div className="d-flex align-items-center justify-content-between mb-4 border-bottom pb-2">
            <h2 className="h4 fw-bold m-0">テーマから探す</h2>
          </div>

          <div className="row g-4">
            {EDUCATION_CATEGORIES.map((category) => {
              const categoryPosts = getEducationPostsByCategory(category.slug);

              return (
                <div key={category.slug} className="col-12 col-md-6 col-lg-4">
                  <div className="card h-100 border rounded-3 p-3 bg-white shadow-sm d-flex flex-column justify-content-between">
                    <div>
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <Link
                          href={`/education/${category.slug}`}
                          className="h6 fw-bold text-dark text-decoration-none"
                        >
                          {category.name}
                        </Link>
                        <span className="badge bg-light text-secondary border small">
                          {categoryPosts.length} 記事
                        </span>
                      </div>
                      <p className="text-muted small mb-3 lh-base">
                        {category.description}
                      </p>

                      {categoryPosts.length > 0 && (
                        <ul className="list-unstyled m-0 border-top pt-2 small">
                          {categoryPosts.slice(0, 2).map((post) => (
                            <li key={post.slug} className="mb-2 text-truncate">
                              <Link
                                href={`/education/${post.category}/${post.slug}`}
                                className="text-secondary text-decoration-none"
                              >
                                ・{post.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    <div className="pt-2 border-top mt-3 text-end">
                      <Link
                        href={`/education/${category.slug}`}
                        className="small text-primary text-decoration-none fw-semibold"
                      >
                        記事一覧を見る →
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Latest Articles Stream */}
        <section>
          <div className="d-flex align-items-center justify-content-between mb-4 border-bottom pb-2">
            <h2 className="h4 fw-bold m-0">最新の記事</h2>
            <span className="text-muted small">全 {allPosts.length} 件</span>
          </div>

          {allPosts.length === 0 ? (
            <div className="alert alert-secondary py-4 text-center">
              記事はまだ公開されていません。
            </div>
          ) : (
            <div className="row g-4">
              {allPosts.map((post) => (
                <div key={`${post.category}-${post.slug}`} className="col-12 col-md-6 col-lg-4">
                  <EducationArticleCard post={post} />
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </EducationLayout>
  );
}
