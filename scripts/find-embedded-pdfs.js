import fs from 'fs';

async function findPdfs() {
  const files = fs.readdirSync('data/schools').filter(f => f.endsWith('.json'));
  for (const f of files) {
    const data = JSON.parse(fs.readFileSync('data/schools/' + f, 'utf8'));
    const feeSource = (data.sources || []).find(s => s.url !== data.websiteUrl) || data.sources[0];
    if (!feeSource) continue;
    try {
      const res = await fetch(feeSource.url, {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' },
        redirect: 'follow'
      });
      if (!res.ok) continue;
      const html = await res.text();
      const pdfMatches = [...html.matchAll(/href=["']([^"']+\.pdf[^"']*)["']/gi)].map(m => m[1]);
      const uniquePdfs = [...new Set(pdfMatches)].map(p => {
        if (p.startsWith('/')) {
          const u = new URL(feeSource.url);
          return `${u.origin}${p}`;
        }
        return p;
      }).filter(p => p.startsWith('http'));
      console.log(`\n[${data.name}] Fee page: ${feeSource.url}`);
      if (uniquePdfs.length > 0) {
        uniquePdfs.forEach(p => console.log('  PDF:', p));
      } else {
        console.log('  (No direct PDF link found; fees displayed directly on HTML table/calculator)');
      }
    } catch (e) {
      console.log(`[${data.name}] Error:`, e.message);
    }
  }
}

findPdfs();
