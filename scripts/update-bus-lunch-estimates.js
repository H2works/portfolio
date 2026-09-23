/**
 * Update busFeeEstimate and lunchFeeEstimate for all 18 schools according to Option A
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const schoolsDir = path.resolve(__dirname, '..', 'data', 'schools');

const customEstimates = {
  'iskl': {
    bus: 'ルート・距離別: 約RM 5,000 – RM 9,000 / 年（公式提携バス会社）',
    lunch: 'カフェテリア都度払い（1食 約RM 16〜22目安 / プリペイドカード利用 / お弁当持参可）',
  },
  'garden-international-school': {
    bus: 'Zone別: 約RM 4,500 – RM 8,000 / 年（公式Zone運賃表）',
    lunch: '学期制ミールプラン または カフェテリア都度払い（1食 約RM 15〜20目安 / お弁当持参可）',
  },
  'the-alice-smith-school': {
    bus: 'Zone別: 約RM 4,800 – RM 8,500 / 年（公式Zone運賃表）',
    lunch: '学期制ミールプラン または カフェテリア都度払い（1食 約RM 15〜20目安 / お弁当持参可）',
  },
  'bskl': {
    bus: 'Zone別: 約RM 4,800 – RM 8,500 / 年（公式提携バス会社）',
    lunch: '学期制ホットランチ（年約RM 3,000〜4,200目安） または カフェテリア都度払い',
  },
  'mont-kiara-international-school': {
    bus: '個別見積もり（Mont Kiara近郊〜KL市内 / 相場目安: 約RM 4,200〜/年）',
    lunch: 'カフェテリア都度払い（1食 約RM 16〜22目安 / お弁当持参可）',
  },
  'aism': {
    bus: '個別見積もり（ルート・距離による / 相場目安: 約RM 4,000〜/年）',
    lunch: 'カフェテリア都度払い（1食 約RM 15〜20目安 / お弁当持参可）',
  },
  'sjiim': {
    bus: '個別見積もり（Tropicana・PJ等 / 相場目安: 約RM 3,800〜/年）',
    lunch: 'カフェテリア都度払い（1食 約RM 15〜20目安 / お弁当持参可）',
  },
  'igbis': {
    bus: 'ルート別: 約RM 4,500 – RM 8,000 / 年（公式提携バス）',
    lunch: 'カフェテリア都度払い（1食 約RM 15〜22目安 / プリペイドカード利用 / お弁当持参可）',
  },
  'sunway-international-school': {
    bus: '個別見積もり（Subang・PJ・KL方面 / 相場目安: 約RM 3,500〜/年）',
    lunch: 'カフェテリア都度払い（1食 約RM 14〜18目安 / 寮生は全食事込み）',
  },
  'nexus-international-school': {
    bus: 'エリア別: 約RM 4,500 – RM 8,500 / 年（公式提携バス）',
    lunch: '学期制ミールプラン または カフェテリア都度払い（1食 約RM 15〜22目安 / 寮生は全食事込み）',
  },
  'epsom-college-in-malaysia': {
    bus: '通学時: 約RM 5,000 – RM 9,000 / 年（KL市内・空港方面 / 寮生は不要）',
    lunch: '通学生: カフェテリア都度払い（1食 約RM 18〜22目安） / 寮生: 全寮費に全食事を含む',
  },
  'oasis-international-school': {
    bus: '個別見積もり（Kota Kemuning・Subang等 / 相場目安: 約RM 3,600〜/年）',
    lunch: 'カフェテリア都度払い（1食 約RM 14〜18目安 / お弁当持参可）',
  },
  'sri-kdu-international-school-kota-damansara': {
    bus: '個別見積もり（PJ・Damansara等 / 相場目安: 約RM 3,000〜/年）',
    lunch: '学期制給食セット または カフェテリア都度払い（1食 約RM 12〜16目安 / お弁当持参可）',
  },
  'help-international-school': {
    bus: '個別見積もり（Subang・Shah Alam等 / 相場目安: 約RM 3,200〜/年）',
    lunch: 'カフェテリア都度払い（1食 約RM 12〜16目安 / お弁当持参可）',
  },
  'tenby-schools-setia-eco-park': {
    bus: '個別見積もり（Setia Alam・Klang等 / 相場目安: 約RM 2,600〜/年）',
    lunch: 'カフェテリア都度払い（1食 約RM 10〜15目安 / お弁当持参可）',
  },
  'taylors-international-school-kuala-lumpur': {
    bus: '個別見積もり（Cheras・KL市内等 / 相場目安: 約RM 2,800〜/年）',
    lunch: '学期制ランチセット または カフェテリア都度払い（1食 約RM 12〜16目安 / お弁当持参可）',
  },
  'sayfol-international-school': {
    bus: '個別見積もり（Ampang・KLCC等 / 相場目安: 約RM 2,400〜/年）',
    lunch: 'カフェテリア都度払い（1食 約RM 10〜14目安 / お弁当持参可）',
  },
  'fairview-international-school-kuala-lumpur': {
    bus: '個別見積もり（Wangsa Maju・KL市内 / 相場目安: 約RM 2,800〜/年）',
    lunch: 'カフェテリア都度払い（1食 約RM 12〜16目安 / 寮生は全食事込み）',
  },
};

const files = fs.readdirSync(schoolsDir).filter((f) => f.endsWith('.json'));
console.log(`Updating ${files.length} schools...`);

for (const file of files) {
  const fullPath = path.join(schoolsDir, file);
  const data = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
  const slug = data.slug;

  if (customEstimates[slug]) {
    data.currentFees.busFeeEstimate = customEstimates[slug].bus;
    data.currentFees.lunchFeeEstimate = customEstimates[slug].lunch;
    fs.writeFileSync(fullPath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`  ✓ Updated ${slug}`);
  } else {
    console.log(`  - No custom rule for ${slug}`);
  }
}

console.log('Finished updating bus and lunch fee estimates!');
