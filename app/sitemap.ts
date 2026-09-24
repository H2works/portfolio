import { MetadataRoute } from 'next';
import { getAllSchools } from '@/lib/schools';
import { getAllPosts } from '@/lib/posts';
import { getAllEducationPosts } from '@/lib/education';
import { EDUCATION_CATEGORIES } from '@/lib/educationCategories';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://h2works.xyz';

  // 1. Static Portfolio & Corporate Pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/aboutme`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/legal`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/imprint`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // 2. School Portal Pages
  const schools = getAllSchools();
  const schoolRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/school`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/school/malaysia`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/school/compare`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...schools.map((school) => ({
      url: `${baseUrl}/school/malaysia/${school.slug}`,
      lastModified: school.lastVerified ? new Date(school.lastVerified) : new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
  ];

  // 3. Technical Blog Pages
  const blogPosts = getAllPosts();
  const blogRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/web/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...blogPosts.map((post) => ({
      url: `${baseUrl}/web/blog/${post.slug}`,
      lastModified: post.date ? new Date(post.date) : new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];

  // 4. Education Media Pages
  const educationPosts = getAllEducationPosts();
  const educationRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/education`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    ...EDUCATION_CATEGORIES.map((cat) => ({
      url: `${baseUrl}/education/${cat.slug}`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    })),
    ...educationPosts.map((post) => ({
      url: `${baseUrl}/education/${post.category}/${post.slug}`,
      lastModified: post.updatedAt ? new Date(post.updatedAt) : (post.publishedAt ? new Date(post.publishedAt) : new Date()),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
  ];

  return [...staticRoutes, ...schoolRoutes, ...blogRoutes, ...educationRoutes];
}
