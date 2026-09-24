import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import EducationLayout from '@/components/education/EducationLayout';
import Breadcrumbs from '@/components/education/Breadcrumbs';
import TableOfContents from '@/components/education/TableOfContents';
import SchoolCtaBanner from '@/components/education/SchoolCtaBanner';
import EducationArticleCard from '@/components/education/EducationArticleCard';
import EducationStructuredData from '@/components/education/EducationStructuredData';
import {
  getEducationPostBySlug,
  getAllEducationStaticParams,
} from '@/lib/education';
import { getEducationCategoryBySlug } from '@/lib/educationCategories';

interface EducationDetailPageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return getAllEducationStaticParams();
}

export async function generateMetadata({
  params,
}: EducationDetailPageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const post = await getEducationPostBySlug(category, slug);

  if (!post) {
    return {
      title: '記事が見つかりません | H2works Education',
    };
  }

  const categoryInfo = getEducationCategoryBySlug(category);
  const siteUrl = 'https://h2works.xyz';
  const postUrl = `${siteUrl}/education/${category}/${slug}`;

  return {
    title: `${post.title} | H2works Education`,
    description: post.description,
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      title: `${post.title} | H2works Education`,
      description: post.description,
      type: 'article',
      url: postUrl,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      tags: post.tags,
      locale: 'ja_JP',
      section: categoryInfo?.name,
    },
  };
}

export default async function EducationDetailPage({
  params,
}: EducationDetailPageProps) {
  const { category: categorySlug, slug } = await params;
  const post = await getEducationPostBySlug(categorySlug, slug);

  if (!post) {
    notFound();
  }

  const category = getEducationCategoryBySlug(categorySlug);
  const postUrl = `https://h2works.xyz/education/${categorySlug}/${slug}`;

  return (
    <EducationLayout>
      <EducationStructuredData post={post} url={postUrl} />

      <div className="container-xl px-3 py-4 py-md-5">
        <Breadcrumbs
          items={[
            {
              label: category ? category.shortName : categorySlug,
              href: `/education/${categorySlug}`,
            },
            { label: post.title },
          ]}
        />

        <div className="row g-4 justify-content-center">
          <div className="col-12 col-lg-8">
            <article className="bg-white border rounded-3 p-4 p-md-5 shadow-sm">
              {/* Post Header */}
              <header className="mb-4 pb-3 border-bottom">
                <div className="d-flex flex-wrap align-items-center gap-2 mb-2">
                  <Link
                    href={`/education/${post.category}`}
                    className="badge-category"
                  >
                    {category ? category.shortName : post.category}
                  </Link>
                  {post.featured && <span className="badge-featured">注目</span>}
                </div>

                <h1 className="h2 fw-bold text-dark mb-3 lh-base">
                  {post.title}
                </h1>

                <div className="d-flex flex-wrap align-items-center gap-3 text-muted small">
                  {post.publishedAt && (
                    <time dateTime={post.publishedAt} className="d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="13"
                        fill="currentColor"
                        className="bi bi-calendar3 me-1 text-secondary"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
                        <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                      </svg>
                      公開: {post.publishedAt}
                    </time>
                  )}
                  {post.updatedAt && post.updatedAt !== post.publishedAt && (
                    <span className="d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="13"
                        fill="currentColor"
                        className="bi bi-arrow-clockwise me-1 text-secondary"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"/>
                        <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"/>
                      </svg>
                      更新: {post.updatedAt}
                    </span>
                  )}
                  {post.readingTime && (
                    <span className="d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="13"
                        fill="currentColor"
                        className="bi bi-clock me-1 text-secondary"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                      </svg>
                      読了目安: {post.readingTime}
                    </span>
                  )}
                </div>

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="d-flex flex-wrap gap-1 mt-3">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-secondary small"
                        style={{
                          backgroundColor: '#f1f5f9',
                          border: '1px solid #e2e8f0',
                          padding: '0.2rem 0.55rem',
                          borderRadius: '4px',
                          fontSize: '0.75rem',
                        }}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </header>

              {/* Table of Contents */}
              <TableOfContents toc={post.toc} />

              {/* Markdown Content Body */}
              <div
                className="education-content"
                dangerouslySetInnerHTML={{ __html: post.contentHtml }}
              />

              {/* In-article School CTA */}
              <SchoolCtaBanner
                title="マレーシアのインターナショナルスクールを探す"
                description="学費、所在地、カリキュラム、英語補講（EAL）の有無など、20校以上の公式データを一括比較できます。"
                className="my-5"
              />

              {/* Post Navigation (Prev / Next) */}
              {(post.prevPost || post.nextPost) && (
                <nav className="border-top pt-4 mt-5">
                  <div className="row g-3">
                    <div className="col-12 col-md-6">
                      {post.prevPost && (
                        <div
                          className="card h-100 p-3 bg-white"
                          style={{
                            border: '1px solid #e2e8f0',
                            borderRadius: '12px',
                            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.04)',
                          }}
                        >
                          <span className="small text-muted mb-1">← 前の記事</span>
                          <Link
                            href={`/education/${post.prevPost.category}/${post.prevPost.slug}`}
                            className="text-dark fw-bold text-decoration-none small text-truncate-2"
                          >
                            {post.prevPost.title}
                          </Link>
                        </div>
                      )}
                    </div>
                    <div className="col-12 col-md-6 text-md-end">
                      {post.nextPost && (
                        <div
                          className="card h-100 p-3 bg-white"
                          style={{
                            border: '1px solid #e2e8f0',
                            borderRadius: '12px',
                            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.04)',
                          }}
                        >
                          <span className="small text-muted mb-1">次の記事 →</span>
                          <Link
                            href={`/education/${post.nextPost.category}/${post.nextPost.slug}`}
                            className="text-dark fw-bold text-decoration-none small text-truncate-2"
                          >
                            {post.nextPost.title}
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </nav>
              )}
            </article>

            {/* Related Articles Section */}
            {post.relatedPosts && post.relatedPosts.length > 0 && (
              <section className="mt-5">
                <h2 className="h5 fw-bold mb-3 border-bottom pb-2">
                  こちらの記事も読まれています
                </h2>
                <div className="row g-3">
                  {post.relatedPosts.map((related) => (
                    <div key={related.slug} className="col-12 col-md-4">
                      <EducationArticleCard post={related} />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </EducationLayout>
  );
}
