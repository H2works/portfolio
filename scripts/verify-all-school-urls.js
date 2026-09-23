import fs from 'fs';
import path from 'path';

async function testAllSchools() {
  const schoolsDir = path.resolve('data', 'schools');
  const files = fs.readdirSync(schoolsDir).filter(f => f.endsWith('.json'));

  console.log(`Starting live URL verification for all ${files.length} schools...\n`);

  let totalUrls = 0;
  let successCount = 0;
  let errorCount = 0;

  for (const f of files) {
    const data = JSON.parse(fs.readFileSync(path.join(schoolsDir, f), 'utf8'));
    console.log(`=== ${data.name} (${f}) ===`);

    const urlsToTest = [];
    if (data.websiteUrl) {
      urlsToTest.push({ type: 'Website', url: data.websiteUrl });
    }
    for (const src of data.sources || []) {
      if (src.url && src.url !== data.websiteUrl) {
        urlsToTest.push({ type: src.sourceType || 'Source', url: src.url });
      }
    }

    for (const item of urlsToTest) {
      totalUrls++;
      try {
        const res = await fetch(item.url, {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
          },
          redirect: 'follow'
        });
        if (res.ok) {
          console.log(`  [${res.status} OK] ${item.type}: ${item.url}`);
          successCount++;
        } else {
          console.log(`  [${res.status} FAIL] ${item.type}: ${item.url}`);
          errorCount++;
        }
      } catch (err) {
        console.log(`  [ERR: ${err.message}] ${item.type}: ${item.url}`);
        errorCount++;
      }
    }
  }

  console.log(`\n========================================`);
  console.log(`Verification Complete: ${successCount}/${totalUrls} URLs active (Errors: ${errorCount})`);
  console.log(`========================================\n`);

  if (errorCount > 0) {
    process.exit(1);
  }
}

testAllSchools();
