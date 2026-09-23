import type { Metadata } from 'next';
import Link from 'next/link';
import MainLayout from '@/components/MainLayout';
import { getAllPosts } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Blog | H2works',
  description: 'Next.js、TypeScript、Web開発、パフォーマンス最適化、SEOなどに関する技術ブログ・開発メモです。',
  openGraph: {
    title: 'Blog | H2works',
    description: 'Next.js、TypeScript、Web開発、パフォーマンス最適化、SEOなどに関する技術ブログ・開発メモです。',
    type: 'website',
  },
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <MainLayout bgimg="bck2" darkMode={false} colorModifier="black">
      <div className="row d-flex justify-content-center">
        <div className="col-12 col-xl-10 col-xxl-8 mt-3" data-aos="fade-left" data-aos-delay="0">
          <header className="mb-4">
            <h1 className="fw-bold mb-2">Blog</h1>
            <p className="lead text-muted">
              Web開発、Next.js、TypeScript、パフォーマンス最適化などの技術メモや知見を投稿しています。
            </p>
          </header>

          {posts.length === 0 ? (
            <div className="alert alert-secondary py-4 text-center">
              記事はまだ投稿されていません。
            </div>
          ) : (
            <div className="post-list">
              {posts.map((post, index) => (
                <article
                  key={post.slug}
                  className="blog-card p-4 mb-4 shadow-sm"
                  data-aos="fade-left"
                  data-aos-delay={`${(index + 1) * 100}`}
                >
                  <div className="d-flex flex-wrap align-items-center gap-3 text-muted small mb-2">
                    {post.date && (
                      <time dateTime={post.date} className="d-flex align-items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          fill="currentColor"
                          className="bi bi-calendar3 me-1 text-secondary"
                          viewBox="0 0 16 16"
                          aria-hidden="true"
                        >
                          <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
                          <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                        </svg>
                        {post.date}
                      </time>
                    )}
                    {post.readingTime && (
                      <span className="d-flex align-items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
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

                  <h2 className="h4 fw-bold mb-2">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="link-dark text-decoration-none link-opacity-75-hover"
                    >
                      {post.title}
                    </Link>
                  </h2>

                  {post.description && (
                    <p className="text-secondary mb-3 small lh-base">
                      {post.description}
                    </p>
                  )}

                  <div className="d-flex flex-wrap align-items-center justify-content-between pt-2 border-top">
                    <div className="d-flex flex-wrap gap-1">
                      {post.tags &&
                        post.tags.map((tag) => (
                          <span key={tag} className="blog-tag">
                            #{tag}
                          </span>
                        ))}
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="btn btn-sm btn-outline-dark rounded-pill px-3 py-1"
                    >
                      続きを読む
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        fill="currentColor"
                        className="bi bi-arrow-right ms-1"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
}
