import Link from 'next/link';
import { EducationPostMetadata } from '@/types/education';
import { getEducationCategoryBySlug } from '@/lib/educationCategories';

export default function EducationArticleCard({
  post,
  featured = false,
}: {
  post: EducationPostMetadata;
  featured?: boolean;
}) {
  const categoryInfo = getEducationCategoryBySlug(post.category);
  const categoryName = categoryInfo ? categoryInfo.shortName : post.category;
  const postUrl = `/education/${post.category}/${post.slug}`;

  if (featured) {
    return (
      <article className="education-featured-card h-100">
        <div className="row g-0 h-100">
          <div className="col-12 col-lg-5 featured-image-wrapper"></div>
          <div className="col-12 col-lg-7 d-flex flex-column justify-content-between featured-content">
            <div>
              <div className="d-flex align-items-center gap-2 mb-2">
                <span className="badge-featured">注目記事</span>
                <Link
                  href={`/education/${post.category}`}
                  className="badge-category"
                >
                  {categoryName}
                </Link>
              </div>
              <h2 className="featured-title">
                <Link href={postUrl}>{post.title}</Link>
              </h2>
              {post.description && (
                <p className="featured-lead">{post.description}</p>
              )}
            </div>

            <div className="d-flex flex-wrap align-items-center justify-content-between pt-3 border-top mt-3 small text-muted">
              <div className="d-flex align-items-center gap-3">
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
                    {post.publishedAt}
                  </time>
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
                    読了: {post.readingTime}
                  </span>
                )}
              </div>
              <Link
                href={postUrl}
                className="btn btn-sm btn-outline-dark rounded-pill px-3 py-1"
              >
                記事を読む →
              </Link>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="education-card">
      <div className="card-category-row">
        <Link
          href={`/education/${post.category}`}
          className="badge-category"
        >
          {categoryName}
        </Link>
        {post.featured && <span className="badge-featured">PICK UP</span>}
      </div>

      <h3 className="card-title">
        <Link href={postUrl}>{post.title}</Link>
      </h3>

      {post.description && (
        <p className="card-description">{post.description}</p>
      )}

      <div className="card-footer-meta">
        <div className="d-flex align-items-center gap-2">
          {post.publishedAt && (
            <time dateTime={post.publishedAt}>{post.publishedAt}</time>
          )}
          {post.readingTime && <span>・{post.readingTime}</span>}
        </div>
        <Link
          href={postUrl}
          className="link-primary text-decoration-none fw-semibold small"
        >
          読む →
        </Link>
      </div>
    </article>
  );
}
