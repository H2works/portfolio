import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import yaml from 'js-yaml';
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';
import hljs from 'highlight.js';
import {
  EducationPostMetadata,
  EducationPostData,
  TocItem,
} from '@/types/education';
import { EDUCATION_CATEGORIES } from './educationCategories';

const educationDirectory = path.join(process.cwd(), 'content', 'education');

const matterOptions = {
  engines: {
    yaml: (str: string) => yaml.load(str) as Record<string, unknown>,
  },
};

function estimateReadingTime(content: string): string {
  const charCount = content.replace(/\s+/g, '').length;
  const minutes = Math.max(1, Math.ceil(charCount / 500));
  return `${minutes}分`;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function unescapeHtml(str: string): string {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function fixUnparsedBold(contentHtml: string): string {
  // Protect code blocks and inline code from replacement
  const codeBlocks: { token: string; match: string }[] = [];
  let placeholderIndex = 0;

  const protectedHtml = contentHtml.replace(
    /(<pre[\s\S]*?<\/pre>|<code[\s\S]*?<\/code>)/gi,
    (match) => {
      const token = `___CODE_PLACEHOLDER_${placeholderIndex++}___`;
      codeBlocks.push({ token, match });
      return token;
    }
  );

  // Replace unparsed **bold** with <strong>...</strong> (common issue in Japanese text where
  // full-width punctuation or characters block CommonMark word-boundary detection)
  const replacedHtml = protectedHtml.replace(/\*\*([^\*\r\n]+?)\*\*/g, '<strong>$1</strong>');

  // Restore code blocks and inline code
  let restoredHtml = replacedHtml;
  for (const item of codeBlocks) {
    restoredHtml = restoredHtml.replace(item.token, item.match);
  }

  return restoredHtml;
}

function processHtmlAndExtractToc(rawHtml: string): {
  contentHtml: string;
  toc: TocItem[];
} {
  const normalizedHtml = fixUnparsedBold(rawHtml);
  const toc: TocItem[] = [];
  let headingIndex = 0;

  // Add IDs to h2 and h3, and build TOC
  const contentWithHeadingIds = normalizedHtml.replace(
    /<h([2-3])>([\s\S]*?)<\/h\1>/g,
    (_, levelStr: string, textInside: string) => {
      const level = parseInt(levelStr, 10);
      const plainText = textInside.replace(/<[^>]+>/g, '').trim();
      headingIndex += 1;
      const id = `section-${headingIndex}-${slugify(plainText) || 'heading'}`;

      toc.push({
        id,
        text: plainText,
        level,
      });

      return `<h${level} id="${id}">${textInside}</h${level}>`;
    }
  );

  // Wrap code blocks
  let formatted = contentWithHeadingIds.replace(
    /<pre><code(?: class="language-([a-zA-Z0-9_-]+)")?>([\s\S]*?)<\/code><\/pre>/g,
    (_, lang: string | undefined, rawCode: string) => {
      const unescaped = unescapeHtml(rawCode);
      let highlighted = '';
      const validLang = lang && hljs.getLanguage(lang) ? lang : null;

      try {
        if (validLang) {
          highlighted = hljs.highlight(unescaped, { language: validLang }).value;
        } else {
          highlighted = hljs.highlightAuto(unescaped).value;
        }
      } catch {
        highlighted = rawCode;
      }

      const displayLang = validLang ? validLang.toUpperCase() : (lang ? lang.toUpperCase() : 'CODE');

      return `
        <div class="code-block-wrapper my-4">
          <div class="code-block-header d-flex justify-content-between align-items-center px-3 py-1 bg-dark text-white-50 border-bottom border-secondary small">
            <span class="code-lang fw-bold">${displayLang}</span>
          </div>
          <pre class="blog-pre m-0 p-3"><code class="hljs ${validLang ? `language-${validLang}` : ''}">${highlighted}</code></pre>
        </div>
      `;
    }
  );

  // Wrap tables with table-responsive
  formatted = formatted.replace(
    /<table>([\s\S]*?)<\/table>/g,
    '<div class="table-responsive my-4"><table class="table table-bordered table-striped">$1</table></div>'
  );

  return {
    contentHtml: formatted,
    toc,
  };
}

export function getAllEducationPosts(): EducationPostMetadata[] {
  if (!fs.existsSync(educationDirectory)) {
    return [];
  }

  const posts: EducationPostMetadata[] = [];
  const categoryFolders = fs.readdirSync(educationDirectory);

  for (const categoryFolder of categoryFolders) {
    const categoryPath = path.join(educationDirectory, categoryFolder);
    if (!fs.statSync(categoryPath).isDirectory()) continue;

    const fileNames = fs.readdirSync(categoryPath);
    for (const fileName of fileNames) {
      if (!fileName.endsWith('.md')) continue;

      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(categoryPath, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      const matterResult = matter(fileContents, matterOptions);
      const data = matterResult.data as Record<string, any>;

      posts.push({
        slug,
        title: data.title || slug,
        description: data.description || '',
        category: data.category || categoryFolder,
        tags: Array.isArray(data.tags) ? data.tags : data.tags ? [data.tags] : [],
        publishedAt: data.publishedAt ? String(data.publishedAt) : (data.date ? String(data.date) : ''),
        updatedAt: data.updatedAt ? String(data.updatedAt) : undefined,
        coverImage: data.coverImage || undefined,
        featured: Boolean(data.featured),
        readingTime: estimateReadingTime(matterResult.content),
      });
    }
  }

  // Sort by publishedAt descending
  return posts.sort((a, b) => {
    if (!a.publishedAt) return 1;
    if (!b.publishedAt) return -1;
    return a.publishedAt < b.publishedAt ? 1 : -1;
  });
}

export function getEducationPostsByCategory(categorySlug: string): EducationPostMetadata[] {
  return getAllEducationPosts().filter((post) => post.category === categorySlug);
}

export function getFeaturedEducationPosts(): EducationPostMetadata[] {
  const all = getAllEducationPosts();
  const featured = all.filter((p) => p.featured);
  return featured.length > 0 ? featured : all.slice(0, 3);
}

export function getAllEducationStaticParams(): { category: string; slug: string }[] {
  const posts = getAllEducationPosts();
  return posts.map((post) => ({
    category: post.category,
    slug: post.slug,
  }));
}

export function getAllEducationCategoryParams(): { category: string }[] {
  return EDUCATION_CATEGORIES.map((cat) => ({
    category: cat.slug,
  }));
}

export async function getEducationPostBySlug(
  category: string,
  slug: string
): Promise<EducationPostData | null> {
  const fullPath = path.join(educationDirectory, category, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents, matterOptions);
  const data = matterResult.data as Record<string, any>;

  // Convert markdown to HTML
  const processedContent = await remark()
    .use(remarkGfm)
    .use(html, { sanitize: false })
    .process(matterResult.content);

  const rawHtml = processedContent.toString();
  const { contentHtml, toc } = processHtmlAndExtractToc(rawHtml);

  const allPosts = getAllEducationPosts();
  const categoryPosts = allPosts.filter((p) => p.category === category);
  const currentIndex = categoryPosts.findIndex((p) => p.slug === slug);

  const nextPost =
    currentIndex > 0
      ? {
          slug: categoryPosts[currentIndex - 1].slug,
          category: categoryPosts[currentIndex - 1].category,
          title: categoryPosts[currentIndex - 1].title,
        }
      : null;

  const prevPost =
    currentIndex < categoryPosts.length - 1 && currentIndex >= 0
      ? {
          slug: categoryPosts[currentIndex + 1].slug,
          category: categoryPosts[currentIndex + 1].category,
          title: categoryPosts[currentIndex + 1].title,
        }
      : null;

  // Find related posts (same category first, excluding current post, up to 3)
  const relatedPosts = allPosts
    .filter((p) => !(p.slug === slug && p.category === category))
    .sort((a, b) => {
      // Prioritize same category
      if (a.category === category && b.category !== category) return -1;
      if (a.category !== category && b.category === category) return 1;
      return 0;
    })
    .slice(0, 3);

  return {
    slug,
    title: data.title || slug,
    description: data.description || '',
    category: data.category || category,
    tags: Array.isArray(data.tags) ? data.tags : data.tags ? [data.tags] : [],
    publishedAt: data.publishedAt ? String(data.publishedAt) : (data.date ? String(data.date) : ''),
    updatedAt: data.updatedAt ? String(data.updatedAt) : undefined,
    coverImage: data.coverImage || undefined,
    featured: Boolean(data.featured),
    readingTime: estimateReadingTime(matterResult.content),
    contentHtml,
    toc,
    prevPost,
    nextPost,
    relatedPosts,
  };
}
