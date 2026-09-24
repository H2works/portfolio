import { EducationPostData } from '@/types/education';

interface StructuredDataProps {
  post: EducationPostData;
  url: string;
}

export default function EducationStructuredData({ post, url }: StructuredDataProps) {
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    headline: post.title,
    description: post.description,
    image: post.coverImage ? `https://h2works.xyz${post.coverImage}` : undefined,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      '@type': 'Person',
      name: 'H2works',
      url: 'https://h2works.xyz/aboutme',
    },
    publisher: {
      '@type': 'Organization',
      name: 'H2works Education',
      logo: {
        '@type': 'ImageObject',
        url: 'https://h2works.xyz/favicon.svg',
      },
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Education',
        item: 'https://h2works.xyz/education',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: post.category,
        item: `https://h2works.xyz/education/${post.category}`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: url,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}
