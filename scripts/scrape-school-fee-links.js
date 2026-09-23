import fs from 'fs';

async function scrapeLinks(url) {
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
      },
      redirect: 'follow'
    });
    console.log(`URL: ${url} -> Status: ${res.status}`);
    if (!res.ok) return;
    const html = await res.text();
    const regex = /href=["']([^"']+)["']/gi;
    let m;
    const matches = new Set();
    while ((m = regex.exec(html)) !== null) {
      let href = m[1].trim();
      const lower = href.toLowerCase();
      if (lower.includes('fee') || lower.includes('tuition') || lower.includes('pdf') || lower.includes('cost') || lower.includes('admission')) {
        if (href.startsWith('/')) {
          const u = new URL(url);
          href = `${u.origin}${href}`;
        }
        matches.add(href);
      }
    }
    console.log('Found matches:');
    for (const match of matches) {
      console.log('  ', match);
    }
  } catch (err) {
    console.error('Error:', err.message);
  }
}

const targetUrl = process.argv[2] || 'https://www.epsomcollege.edu.my';
scrapeLinks(targetUrl);
