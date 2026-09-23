import fs from 'fs';
import path from 'path';

const outputDir = path.resolve('data', 'pdf_archives');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function downloadPdfs() {
  const files = fs.readdirSync('data/schools').filter(f => f.endsWith('.json'));
  console.log(`Checking official PDF sources across ${files.length} schools...\n`);

  for (const f of files) {
    const data = JSON.parse(fs.readFileSync('data/schools/' + f, 'utf8'));
    const pdfSources = (data.sources || []).filter(s => s.sourceType === 'official_pdf' || s.url.endsWith('.pdf'));

    if (pdfSources.length === 0) {
      console.log(`[${data.name}]: No PDF source (Publishes fees directly via HTML table/calculator on official website)`);
      continue;
    }

    for (const src of pdfSources) {
      try {
        console.log(`[${data.name}] Downloading PDF: ${src.url}`);
        const res = await fetch(src.url, {
          headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' }
        });
        if (!res.ok) {
          console.log(`  -> Failed with HTTP ${res.status}`);
          continue;
        }
        const buffer = await res.arrayBuffer();
        const safeFilename = `${data.slug}_fee_schedule.pdf`;
        const destPath = path.join(outputDir, safeFilename);
        fs.writeFileSync(destPath, Buffer.from(buffer));
        console.log(`  -> Saved: ${safeFilename} (${(buffer.byteLength / 1024).toFixed(1)} KB)`);
      } catch (err) {
        console.log(`  -> Error: ${err.message}`);
      }
    }
  }
  console.log(`\nAll available official PDFs downloaded into ${outputDir}`);
}

downloadPdfs();
