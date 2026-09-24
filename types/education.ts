export interface TocItem {
  id: string;
  text: string;
  level: number;
}

export interface EducationCategory {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
}

export interface EducationPostMetadata {
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  publishedAt: string;
  updatedAt?: string;
  coverImage?: string;
  featured?: boolean;
  readingTime: string;
}

export interface EducationPostData extends EducationPostMetadata {
  contentHtml: string;
  toc: TocItem[];
  prevPost?: {
    slug: string;
    category: string;
    title: string;
  } | null;
  nextPost?: {
    slug: string;
    category: string;
    title: string;
  } | null;
  relatedPosts: EducationPostMetadata[];
}
