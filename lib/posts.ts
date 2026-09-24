import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import yaml from 'js-yaml';
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';
import hljs from 'highlight.js';

const postsDirectory = path.join(process.cwd(), 'posts');

export interface PostMetadata {
  slug: string;
  title: string;
  date: string;
  description?: string;
  tags?: string[];
  coverImage?: string;
  readingTime?: string;
}

export interface PostData extends PostMetadata {
  contentHtml: string;
  prevPost?: { slug: string; title: string } | null;
  nextPost?: { slug: string; title: string } | null;
}

// gray-matter options to ensure compatibility with js-yaml v4
const matterOptions = {
  engines: {
    yaml: (str: string) => yaml.load(str) as Record<string, unknown>,
  },
};

function estimateReadingTime(content: string): string {
  // Approximate reading speed: ~500 Japanese characters / ~200 English words per minute
  const charCount = content.replace(/\s+/g, '').length;
  const minutes = Math.max(1, Math.ceil(charCount / 500));
  return `${minutes}分`;
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

  const replacedHtml = protectedHtml.replace(/\*\*([^\*\r\n]+?)\*\*/g, '<strong>$1</strong>');

  let restoredHtml = replacedHtml;
  for (const item of codeBlocks) {
    restoredHtml = restoredHtml.replace(item.token, item.match);
  }

  return restoredHtml;
}

function highlightAndFormatCodeBlocks(contentHtml: string): string {
  const normalizedHtml = fixUnparsedBold(contentHtml);
  // Highlight code blocks
  let formatted = normalizedHtml.replace(
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

  // Wrap tables with table-responsive div for mobile friendliness
  formatted = formatted.replace(
    /<table>([\s\S]*?)<\/table>/g,
    '<div class="table-responsive my-4"><table class="table table-bordered table-striped">$1</table></div>'
  );

  return formatted;
}

export function getAllPosts(): PostMetadata[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData: PostMetadata[] = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      const matterResult = matter(fileContents, matterOptions);
      const data = matterResult.data as Record<string, any>;

      return {
        slug,
        title: data.title || slug,
        date: data.date ? String(data.date) : '',
        description: data.description || '',
        tags: Array.isArray(data.tags) ? data.tags : data.tags ? [data.tags] : [],
        coverImage: data.coverImage || undefined,
        readingTime: estimateReadingTime(matterResult.content),
      };
    });

  // Sort posts by date in descending order
  return allPostsData.sort((a, b) => {
    if (!a.date) return 1;
    if (!b.date) return -1;
    return a.date < b.date ? 1 : -1;
  });
}

export function getAllPostSlugs(): { slug: string }[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => ({
      slug: fileName.replace(/\.md$/, ''),
    }));
}

export async function getPostBySlug(slug: string): Promise<PostData | null> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents, matterOptions);
  const data = matterResult.data as Record<string, any>;

  // Convert markdown to HTML with GFM
  const processedContent = await remark()
    .use(remarkGfm)
    .use(html, { sanitize: false })
    .process(matterResult.content);

  const rawHtml = processedContent.toString();
  const contentHtml = highlightAndFormatCodeBlocks(rawHtml);

  // Get previous and next posts for navigation
  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const nextPost = currentIndex > 0 ? { slug: allPosts[currentIndex - 1].slug, title: allPosts[currentIndex - 1].title } : null;
  const prevPost = currentIndex < allPosts.length - 1 && currentIndex >= 0 ? { slug: allPosts[currentIndex + 1].slug, title: allPosts[currentIndex + 1].title } : null;

  return {
    slug,
    title: data.title || slug,
    date: data.date ? String(data.date) : '',
    description: data.description || '',
    tags: Array.isArray(data.tags) ? data.tags : data.tags ? [data.tags] : [],
    coverImage: data.coverImage || undefined,
    readingTime: estimateReadingTime(matterResult.content),
    contentHtml,
    prevPost,
    nextPost,
  };
}
