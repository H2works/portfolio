import Image from 'next/image';
import Link from 'next/link';
import { EducationPostMetadata } from '@/types/education';
import { getEducationCategoryBySlug } from '@/lib/educationCategories';

export default function EducationArticleCard({
  post,
}: {
  post: EducationPostMetadata;
  featured?: boolean;
}) {
  const categoryInfo = getEducationCategoryBySlug(post.category);
  const categoryName = categoryInfo ? categoryInfo.name : post.category;
  const postUrl = `/education/${post.category}/${post.slug}`;
  const coverImage = post.coverImage || '/img/education/education-default.jpg';
  const formattedDate = post.publishedAt ? post.publishedAt.replace(/-/g, '.') : '';

  return (
    <article className="education-media-card h-100">
      <Link href={postUrl} className="card-thumb-link" tabIndex={-1} aria-hidden="true">
        <div className="card-thumb-wrapper">
          <Image
            src={coverImage}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="card-thumb-img"
          />
        </div>
      </Link>

      <div className="card-body-content">
        {/* カテゴリラベル（塗りの強いピルを廃止し、アクセントテキストのみ） */}
        <div className="card-category-label">
          <Link href={`/education/${post.category}`}>
            {categoryName}
          </Link>
        </div>

        {/* タイトル（Bold 700 / 行間 1.55 / 視認性向上） */}
        <h3 className="card-title">
          <Link href={postUrl}>{post.title}</Link>
        </h3>

        {/* メタ情報（タイトルの直下にミニマル配置: 日付 · 読了目安） */}
        <div className="card-meta">
          {formattedDate && <time dateTime={post.publishedAt}>{formattedDate}</time>}
          {formattedDate && post.readingTime && <span className="meta-separator">·</span>}
          {post.readingTime && <span>{post.readingTime} read</span>}
        </div>

        {/* 本文プレビュー（2行クランプで均一なカード高さを維持） */}
        {post.description && (
          <p className="card-excerpt">{post.description}</p>
        )}
      </div>
    </article>
  );
}
