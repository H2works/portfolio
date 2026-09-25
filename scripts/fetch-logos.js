/**
 * Script to automatically fetch and save school logos / high-res icons
 * 
 * Usage:
 *   node scripts/fetch-logos.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const schoolsDir = path.join(rootDir, 'data', 'schools');
const logosDir = path.join(rootDir, 'public', 'img', 'schools', 'logos');

if (!fs.existsSync(logosDir)) {
  fs.mkdirSync(logosDir, { recursive: true });
}

function getDomain(urlStr) {
  try {
    const u = new URL(urlStr);
    return u.hostname.replace(/^www\./, '');
  } catch {
    return null;
  }
}

async function fetchBuffer(url) {
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      },
      signal: AbortSignal.timeout(10000),
    });
    if (!res.ok) return null;
    const contentType = res.headers.get('content-type') || '';
    if (contentType.includes('text/html')) return null; // We want image binary
    const arrayBuffer = await res.arrayBuffer();
    return Buffer.from(arrayBuffer);
  } catch (err) {
    return null;
  }
}

async function findLogoUrlFromHtml(websiteUrl) {
  try {
    const res = await fetch(websiteUrl, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      },
      signal: AbortSignal.timeout(10000),
    });
    if (!res.ok) return null;
    const html = await res.text();

    // 1. Look for apple-touch-icon (high-res PNG, 180x180)
    const appleMatch = html.match(/<link[^>]+rel=["']apple-touch-icon(?:-precomposed)?["'][^>]+href=["']([^"']+)["']/i) ||
                       html.match(/<link[^>]+href=["']([^"']+)["'][^>]+rel=["']apple-touch-icon(?:-precomposed)?["']/i);
    if (appleMatch && appleMatch[1]) {
      return new URL(appleMatch[1], websiteUrl).href;
    }

    // 2. Look for high-res favicon with sizes
    const iconMatch = html.match(/<link[^>]+rel=["'](?:shortcut )?icon["'][^>]+href=["']([^"']+)["']/i) ||
                      html.match(/<link[^>]+href=["']([^"']+)["'][^>]+rel=["'](?:shortcut )?icon["']/i);
    if (iconMatch && iconMatch[1]) {
      return new URL(iconMatch[1], websiteUrl).href;
    }

    return null;
  } catch {
    return null;
  }
}

async function downloadSchoolLogo(school) {
  const slug = school.slug;
  const targetFile = path.join(logosDir, `${slug}.png`);
  const domain = getDomain(school.websiteUrl);

  console.log(`\nFetching logo for: ${school.name} (${domain})`);

  let imageBuffer = null;

  // Try Strategy 1: Find apple-touch-icon / favicon from school HTML
  const foundUrl = await findLogoUrlFromHtml(school.websiteUrl);
  if (foundUrl) {
    console.log(`  Found icon URL in HTML: ${foundUrl}`);
    imageBuffer = await fetchBuffer(foundUrl);
  }

  // Try Strategy 2: Google 128px high-res favicon service
  if (!imageBuffer && domain) {
    const googleFaviconUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
    console.log(`  Falling back to Google Favicon 128px service: ${googleFaviconUrl}`);
    imageBuffer = await fetchBuffer(googleFaviconUrl);
  }

  if (imageBuffer && imageBuffer.length > 200) {
    fs.writeFileSync(targetFile, imageBuffer);
    console.log(`  ✓ Saved logo to: public/img/schools/logos/${slug}.png (${imageBuffer.length} bytes)`);
    return `/img/schools/logos/${slug}.png`;
  } else {
    console.log(`  ✗ Could not fetch logo for ${slug}`);
    return null;
  }
}

async function main() {
  const targetSlug = process.argv[2];
  const files = fs.readdirSync(schoolsDir).filter((f) => f.endsWith('.json'));
  const targetFiles = targetSlug
    ? files.filter((f) => f === `${targetSlug}.json` || f.replace('.json', '') === targetSlug)
    : files;

  console.log(`Found ${targetFiles.length} schools to process...`);

  let updatedCount = 0;

  for (const file of targetFiles) {
    const fullPath = path.join(schoolsDir, file);
    const content = fs.readFileSync(fullPath, 'utf8');
    const school = JSON.parse(content);

    // Skip if custom/existing logo already exists on disk unless a specific slug is targeted
    if (!targetSlug && school.logoUrl) {
      const existingLogoPath = path.join(rootDir, 'public', school.logoUrl.replace(/^\//, ''));
      if (fs.existsSync(existingLogoPath)) {
        console.log(`Skipping ${school.name} (logo already exists: ${school.logoUrl})`);
        continue;
      }
    }

    const logoRelativePath = await downloadSchoolLogo(school);
    if (logoRelativePath) {
      school.logoUrl = logoRelativePath;
      fs.writeFileSync(fullPath, JSON.stringify(school, null, 2), 'utf8');
      updatedCount++;
    }
  }

  console.log(`\nDone! Successfully updated ${updatedCount} / ${targetFiles.length} schools with logoUrl.`);
}

main().catch(console.error);
