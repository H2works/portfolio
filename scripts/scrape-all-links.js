import fs from 'fs';

async function scrapeAllLinks(url) {
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
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
      if (href.startsWith('/')) {
        const u = new URL(url);
        href = `${u.origin}${href}`;
      }
      matches.add(href);
    }
    for (const match of matches) {
      if (match.startsWith('http') && !match.includes('.css') && !match.includes('.js')) {
        console.log('  ', match);
      }
    }
  } catch (err) {
    console.error('Error:', err.message);
  }
}

const targetUrl = process.argv[2] || 'https://www.sji-international.edu.my/admissions-information/';
scrapeAllLinks(targetUrl);
