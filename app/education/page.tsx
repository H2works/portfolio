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

  return (
    <EducationLayout>
      {/* ヒーローエリア（背景・グラデーション画像は維持） */}
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
        {/* ① 注目の記事セクション（横3列グリッド & 2段構成ヘッダー） */}
        {featuredPosts.length > 0 && (
          <section className="education-section-spacer">
            <div className="section-header-dual">
              <div className="header-titles">
                <span className="sub-catch">FEATURED STORIES</span>
                <h2 className="main-title">注目の記事</h2>
              </div>
              <a href="#latest-articles" className="header-link">
                <span>すべての記事を見る</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="row g-4">
              {featuredPosts.slice(0, 3).map((post) => (
                <div key={post.slug} className="col-12 col-md-6 col-lg-4">
                  <EducationArticleCard post={post} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ② School Finder CTA Banner */}
        <section className="education-section-spacer">
          <SchoolCtaBanner
            title="マレーシアのインターナショナルスクールを探すなら"
            description="学費表、カリキュラム、英語サポート（EAL）、寮の有無から20校以上の公式データを一括比較。学校選びをスムーズに。"
          />
        </section>

        {/* ③ テーマから探すセクション（2段構成ヘッダー & 統一カード） */}
        <section className="education-section-spacer">
          <div className="section-header-dual">
            <div className="header-titles">
              <span className="sub-catch">CATEGORIES</span>
              <h2 className="main-title">テーマから探す</h2>
            </div>
          </div>

          <div className="row g-4">
            {EDUCATION_CATEGORIES.map((category) => {
              const categoryPosts = getEducationPostsByCategory(category.slug);

              return (
                <div key={category.slug} className="col-12 col-md-6 col-lg-4">
                  <div
                    className="card h-100 p-4 bg-white d-flex flex-column justify-content-between"
                    style={{
                      border: '1px solid #e2e8f0',
                      borderRadius: '14px',
                      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.04)',
                    }}
                  >
                    <div>
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <Link
                          href={`/education/${category.slug}`}
                          className="h6 fw-bold text-dark text-decoration-none m-0"
                          style={{ letterSpacing: '-0.01em' }}
                        >
                          {category.name}
                        </Link>
                        <span
                          className="text-secondary small fw-medium"
                          style={{
                            backgroundColor: '#f1f5f9',
                            padding: '0.2rem 0.5rem',
                            borderRadius: '4px',
                            fontSize: '0.75rem',
                          }}
                        >
                          {categoryPosts.length} 記事
                        </span>
                      </div>
                      <p className="text-secondary small mb-3 lh-base">
                        {category.description}
                      </p>

                      {categoryPosts.length > 0 && (
                        <ul className="list-unstyled m-0 border-top pt-3 small">
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

                    <div className="pt-3 border-top mt-3 text-end">
                      <Link
                        href={`/education/${category.slug}`}
                        className="small text-primary text-decoration-none fw-semibold d-inline-flex align-items-center gap-1"
                      >
                        <span>記事一覧を見る</span>
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ④ 最新の記事セクション（2段構成ヘッダー & 横3列グリッド） */}
        <section id="latest-articles" className="education-section-spacer">
          <div className="section-header-dual">
            <div className="header-titles">
              <span className="sub-catch">LATEST ARTICLES</span>
              <h2 className="main-title">最新の記事</h2>
            </div>
            <span className="text-muted small fw-medium">全 {allPosts.length} 件</span>
          </div>

          {allPosts.length === 0 ? (
            <div className="alert alert-secondary py-4 text-center" style={{ borderRadius: '12px' }}>
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
