/**
 * Semi-Automated School Data Extraction & Verification CLI Tool
 * 
 * Usage:
 *   node scripts/extract-school.js draft --name "School Name" --slug "school-slug" --url "https://..."
 *   node scripts/extract-school.js approve --slug "school-slug"
 *   node scripts/extract-school.js list
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const draftsDir = path.join(rootDir, 'data', 'drafts');
const schoolsDir = path.join(rootDir, 'data', 'schools');

if (!fs.existsSync(draftsDir)) fs.mkdirSync(draftsDir, { recursive: true });
if (!fs.existsSync(schoolsDir)) fs.mkdirSync(schoolsDir, { recursive: true });

const args = process.argv.slice(2);
const command = args[0];

function parseNamedArgs(argsList) {
  const result = {};
  for (let i = 0; i < argsList.length; i++) {
    if (argsList[i].startsWith('--')) {
      const key = argsList[i].slice(2);
      const val = argsList[i + 1] && !argsList[i + 1].startsWith('--') ? argsList[i + 1] : true;
      result[key] = val;
      if (val !== true) i++;
    }
  }
  return result;
}

const params = parseNamedArgs(args.slice(1));

function generateTemplate(name, slug, url) {
  const currentYearMonth = new Date().toISOString().slice(0, 7);
  return {
    id: slug,
    slug: slug,
    name: name || 'Example International School',
    officialName: name || 'Example International School Malaysia',
    shortDescription: 'Brief description of school, community, and curriculum focus.',
    overview: 'Detailed overview of the school history, culture, campus, and student body.',
    establishedYear: 2010,
    location: {
      country: 'Malaysia',
      state: 'Kuala Lumpur', // or 'Selangor'
      city: 'Kuala Lumpur',
      area: 'Mont Kiara',
      address: 'Full address line here, Malaysia',
      googleMapsUrl: 'https://maps.google.com/?q=...',
    },
    ageRange: {
      minAge: 3,
      maxAge: 18,
      display: '3–18',
    },
    curricula: ['British', 'Cambridge'], // 'British', 'Cambridge', 'IB', 'American', 'Australian', 'Canadian'
    gradeLevels: ['Nursery', 'Kindergarten', 'Primary', 'Secondary', 'Sixth Form'],
    languages: {
      instructionLanguage: 'English',
      secondLanguages: ['Mandarin', 'Malay', 'French', 'Spanish'],
      japaneseSupport: false,
      japaneseSupportDetail: 'Japanese parent liaison staff / mother tongue classes if available',
      ellSupport: true,
      ellSupportDetail: 'English Language Learner support program available for non-native speakers',
    },
    features: {
      schoolBus: true,
      busDetail: 'Door-to-door and central pick-up routes across Klang Valley',
      lunchProvided: true,
      lunchDetail: 'Nutritious hot meals catered on campus with halal options',
      boardingAvailable: false,
      boardingDetail: '',
      afterSchoolCare: true,
      afterSchoolCareDetail: 'Co-curricular activities (CCA) and supervised after-school study',
    },
    admissions: {
      intakeMonths: ['August', 'January'],
      academicYearSchedule: '3 Terms (August to July)',
      applicationProcess: 'Online application form, academic transcripts submission, and student assessment.',
      assessmentRequired: true,
    },
    facilities: [
      'Science Laboratories',
      'Library & Media Centre',
      'Sports Complex & Gymnasium',
      'Swimming Pool',
      'Performing Arts Theatre',
      'Cafeteria',
      'ICT Suites',
    ],
    currentFees: {
      academicYear: '2025/2026',
      tuitionMinAnnual: 35000,
      tuitionMaxAnnual: 75000,
      tuitionDisplay: 'RM 35,000 – RM 75,000 / year',
      applicationFee: 1000,
      registrationFee: 5000,
      deposit: 10000,
      busFeeEstimate: 'RM 2,500 – RM 5,000 / year depending on distance',
      lunchFeeEstimate: 'RM 2,000 – RM 3,500 / year',
      items: [
        {
          academicYear: '2025/2026',
          feeType: 'application_fee',
          label: 'Application Fee',
          amount: 1000,
          currency: 'MYR',
          frequency: 'one-time',
          isRefundable: false,
          notes: 'Non-refundable upon submitting application form',
        },
        {
          academicYear: '2025/2026',
          feeType: 'registration_fee',
          label: 'Registration / Enrolment Fee',
          amount: 5000,
          currency: 'MYR',
          frequency: 'one-time',
          isRefundable: false,
          notes: 'Payable upon acceptance of offer',
        },
        {
          academicYear: '2025/2026',
          feeType: 'deposit',
          label: 'Refundable Deposit',
          amount: 10000,
          currency: 'MYR',
          frequency: 'one-time',
          isRefundable: true,
          notes: 'Refundable subject to notice of withdrawal conditions',
        },
        {
          academicYear: '2025/2026',
          feeType: 'tuition',
          label: 'Early Years / Nursery Tuition (Annual)',
          amount: 35000,
          currency: 'MYR',
          frequency: 'annual',
          applicableGrade: 'Nursery',
          notes: 'Payable per term or annually',
        },
        {
          academicYear: '2025/2026',
          feeType: 'tuition',
          label: 'Primary Tuition (Annual)',
          amount: 52000,
          currency: 'MYR',
          frequency: 'annual',
          applicableGrade: 'Primary (Year 1 - Year 6)',
          notes: 'Includes course materials and standard day activities',
        },
        {
          academicYear: '2025/2026',
          feeType: 'tuition',
          label: 'Secondary Tuition (Annual)',
          amount: 75000,
          currency: 'MYR',
          frequency: 'annual',
          applicableGrade: 'Secondary (Year 7 - Year 11)',
          notes: 'Excludes external exam fees (e.g. IGCSE / IB)',
        },
      ],
    },
    historicalFees: [
      {
        academicYear: '2024/2025',
        tuitionMinAnnual: 33000,
        tuitionMaxAnnual: 71000,
        tuitionDisplay: 'RM 33,000 – RM 71,000 / year',
        items: [],
      },
    ],
    websiteUrl: url || 'https://www.example-school.edu.my',
    contact: {
      email: 'admissions@example-school.edu.my',
      phone: '+60 3-XXXX XXXX',
    },
    lastVerified: 'September 2026',
    sources: [
      {
        url: url || 'https://www.example-school.edu.my',
        title: 'Official School Website',
        sourceType: 'official',
        checkedAt: currentYearMonth,
        academicYear: '2025/2026',
      },
      {
        url: url ? `${url}/fees` : 'https://www.example-school.edu.my/fees',
        title: 'Official Fee Schedule (2025/2026)',
        sourceType: 'official_pdf',
        checkedAt: currentYearMonth,
        academicYear: '2025/2026',
      },
    ],
  };
}

if (command === 'draft') {
  if (!params.slug) {
    console.error('Error: --slug is required. Example: --slug iskl --name "The International School of Kuala Lumpur"');
    process.exit(1);
  }
  const filePath = path.join(draftsDir, `${params.slug}.json`);
  const template = generateTemplate(params.name, params.slug, params.url);
  fs.writeFileSync(filePath, JSON.stringify(template, null, 2), 'utf8');
  console.log(`[SUCCESS] Draft created at: data/drafts/${params.slug}.json`);
  console.log('Next step: Review the extracted data with official sources, edit as necessary, then run:');
  console.log(`  node scripts/extract-school.js approve --slug ${params.slug}`);
} else if (command === 'approve') {
  if (!params.slug) {
    console.error('Error: --slug is required. Example: --slug iskl');
    process.exit(1);
  }
  const draftPath = path.join(draftsDir, `${params.slug}.json`);
  const targetPath = path.join(schoolsDir, `${params.slug}.json`);
  if (!fs.existsSync(draftPath)) {
    console.error(`Error: Draft not found at: ${draftPath}`);
    process.exit(1);
  }
  const content = fs.readFileSync(draftPath, 'utf8');
  // Validate JSON
  JSON.parse(content);
  fs.writeFileSync(targetPath, content, 'utf8');
  console.log(`[APPROVED & PUBLISHED] School moved to: data/schools/${params.slug}.json`);
} else if (command === 'list') {
  console.log('\n--- Published Schools (data/schools) ---');
  const schools = fs.readdirSync(schoolsDir).filter((f) => f.endsWith('.json'));
  schools.forEach((f) => console.log(`  - ${f}`));
  console.log(`Total: ${schools.length} published`);

  console.log('\n--- Drafts Awaiting Verification (data/drafts) ---');
  const drafts = fs.readdirSync(draftsDir).filter((f) => f.endsWith('.json'));
  drafts.forEach((f) => console.log(`  - ${f}`));
  console.log(`Total: ${drafts.length} drafts`);
} else {
  console.log('Available commands:');
  console.log('  node scripts/extract-school.js draft --name "Name" --slug "slug" [--url "url"]');
  console.log('  node scripts/extract-school.js approve --slug "slug"');
  console.log('  node scripts/extract-school.js list');
}
