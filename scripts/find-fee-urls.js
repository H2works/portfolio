import fs from 'fs';

async function checkSite(name, homeUrl) {
  try {
    const res = await fetch(homeUrl, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' },
      redirect: 'follow'
    });
    if (!res.ok) {
      console.log(`[${name}] Home failed: ${res.status}`);
      return [];
    }
    const html = await res.text();
    const regex = /href=["']([^"']*(?:fee|tuition|admissions)[^"']*)["']/gi;
    const found = new Set();
    let m;
    while ((m = regex.exec(html)) !== null) {
      let href = m[1].trim();
      if (href.startsWith('/')) {
        const u = new URL(homeUrl);
        href = `${u.origin}${href}`;
      }
      if (href.startsWith('http') && (href.toLowerCase().includes('fee') || href.toLowerCase().includes('tuition'))) {
        found.add(href);
      }
    }
    return Array.from(found);
  } catch (e) {
    console.log(`[${name}] Error:`, e.message);
    return [];
  }
}

async function main() {
  const files = fs.readdirSync('data/schools').filter(f => f.endsWith('.json'));
  for (const f of files) {
    const data = JSON.parse(fs.readFileSync('data/schools/' + f, 'utf8'));
    console.log(`\n=== ${data.name} (${data.websiteUrl}) ===`);
    const links = await checkSite(data.slug, data.websiteUrl);
    if (links.length === 0) {
      console.log('  No fee links found on homepage HTML');
    } else {
      for (const link of links.slice(0, 5)) {
        try {
          const testRes = await fetch(link, { method: 'HEAD', headers: { 'User-Agent': 'Mozilla/5.0' }, redirect: 'follow' });
          console.log(`  [${testRes.status}] ${link}`);
        } catch (err) {
          console.log(`  [ERR: ${err.message}] ${link}`);
        }
      }
    }
  }
}

main();
