import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import MainLayout from '@/components/MainLayout';
import { getAllPostSlugs, getPostBySlug } from '@/lib/posts';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllPostSlugs();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: '記事が見つかりません | H2works',
    };
  }

  return {
    title: `${post.title} | H2works Blog`,
    description: post.description || `${post.title}についての記事です。`,
    openGraph: {
      title: `${post.title} | H2works Blog`,
      description: post.description || `${post.title}についての記事です。`,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <MainLayout bgimg="bck2" darkMode={false} colorModifier="black">
      <div className="row d-flex justify-content-center">
        <div className="col-12 col-xl-10 col-xxl-8 mt-3" data-aos="fade-left" data-aos-delay="0">
          {/* Breadcrumb Navigation */}
          <nav aria-label="breadcrumb" className="mb-4">
            <ol className="breadcrumb small text-muted">
              <li className="breadcrumb-item">
                <Link href="/" className="text-secondary text-decoration-none">
                  ホーム
                </Link>
              </li>
              <li className="breadcrumb-item">
                <Link href="/blog" className="text-secondary text-decoration-none">
                  Blog
                </Link>
              </li>
              <li className="breadcrumb-item active text-truncate" aria-current="page" style={{ maxWidth: '240px' }}>
                {post.title}
              </li>
            </ol>
          </nav>

          <article>
            {/* Header */}
            <header className="mb-4 pb-3 border-bottom">
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

              <h1 className="fw-bold mb-3">{post.title}</h1>

              {post.tags && post.tags.length > 0 && (
                <div className="d-flex flex-wrap gap-1 mt-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="blog-tag">
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </header>

            {/* Markdown Body Content */}
            <div
              className="blog-content mb-5"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />

            {/* Footer / Navigation */}
            <footer className="mt-5 pt-4 border-top">
              <div className="row g-3 mb-4">
                <div className="col-12 col-md-6">
                  {post.prevPost ? (
                    <Link
                      href={`/blog/${post.prevPost.slug}`}
                      className="p-3 border rounded text-decoration-none d-block h-100 link-dark bg-white hover-shadow"
                    >
                      <small className="text-muted d-block mb-1">← 前の記事</small>
                      <span className="fw-medium text-truncate d-block">
                        {post.prevPost.title}
                      </span>
                    </Link>
                  ) : null}
                </div>
                <div className="col-12 col-md-6 text-md-end">
                  {post.nextPost ? (
                    <Link
                      href={`/blog/${post.nextPost.slug}`}
                      className="p-3 border rounded text-decoration-none d-block h-100 link-dark bg-white hover-shadow"
                    >
                      <small className="text-muted d-block mb-1">次の記事 →</small>
                      <span className="fw-medium text-truncate d-block">
                        {post.nextPost.title}
                      </span>
                    </Link>
                  ) : null}
                </div>
              </div>

              <div className="text-center my-4">
                <Link
                  href="/blog"
                  className="btn btn-outline-dark px-4 py-2 rounded-pill"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    fill="currentColor"
                    className="bi bi-arrow-left me-2"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                  >
                    <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                  </svg>
                  記事一覧に戻る
                </Link>
              </div>
            </footer>
          </article>
        </div>
      </div>
    </MainLayout>
  );
}
