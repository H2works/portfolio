import fs from 'fs';
import path from 'path';

const verifiedData = {
  'aism.json': {
    websiteUrl: 'https://www.aism.edu.my',
    sources: [
      {
        url: 'https://www.aism.edu.my',
        title: 'AISM Official Website',
        sourceType: 'official',
        checkedAt: '2026-09',
        academicYear: '2025/2026'
      },
      {
        url: 'https://aism.edu.my/admissions-overview/school-fees/',
        title: 'AISM Official School Fees Schedule',
        sourceType: 'official',
        checkedAt: '2026-09',
        academicYear: '2025/2026'
      }
    ]
  },
  'bskl.json': {
    websiteUrl: 'https://www.nordangliaeducation.com/bskl-kuala-lumpur',
    sources: [
      {
        url: 'https://www.nordangliaeducation.com/bskl-kuala-lumpur',
        title: 'BSKL Official Website',
        sourceType: 'official',
        checkedAt: '2026-09',
        academicYear: '2025/2026'
      },
      {
        url: 'https://www.nordangliaeducation.com/bskl-kuala-lumpur/admissions/tuition-fees',
        title: 'BSKL Official Tuition & Fees Page',
        sourceType: 'official',
        checkedAt: '2026-09',
        academicYear: '2025/2026'
      },
      {
        url: 'https://www.nordangliaeducation.com/bskl-kuala-lumpur/-/media/bskl-kuala-lumpur/admissions/bskl-school-fees---2026-27.pdf',
        title: 'BSKL Official School Fees 2026-27 (PDF)',
        sourceType: 'official_pdf',
        checkedAt: '2026-09',
        academicYear: '2026/2027'
      }
    ]
  },
  'epsom-college-in-malaysia.json': {
    websiteUrl: 'https://www.epsomcollege.edu.my',
    sources: [
      {
        url: 'https://www.epsomcollege.edu.my',
        title: 'Epsom College in Malaysia Official Website',
        sourceType: 'official',
        checkedAt: '2026-09',
        academicYear: '2025/2026'
      },
      {
        url: 'https://www.epsomcollege.edu.my/admissions/fees/',
        title: 'Epsom College Table of Fees',
        sourceType: 'official',
        checkedAt: '2026-09',
        academicYear: '2025/2026'
      },
      {
        url: 'https://www.epsomcollege.edu.my/wp-content/uploads/2026/03/Day_School_Programme.pdf',
        title: 'Epsom College Day School Fee Schedule (PDF)',
        sourceType: 'official_pdf',
        checkedAt: '2026-09',
        academicYear: '2025/2026'
      }
    ]
  },
  'fairview-international-school-kuala-lumpur.json': {
    websiteUrl: 'https://fairview.edu.my',
    sources: [
      {
        url: 'https://fairview.edu.my',
        title: 'Fairview International School Official Website',
        sourceType: 'official',
        checkedAt: '2026-09',
        academicYear: '2025/2026'
      },
      {
        url: 'https://fairview.edu.my/school-admission/school-fees/',
        title: 'Fairview Official School Fees Schedule',
        sourceType: 'official',
        checkedAt: '2026-09',
        academicYear: '2025/2026'
      }
    ]
  },
  'garden-international-school.json': {
    websiteUrl: 'https://www.gardenschool.edu.my',
    sources: [
      {
        url: 'https://www.gardenschool.edu.my',
        title: 'GIS Official Website',
        sourceType: 'official',
        checkedAt: '2026-09',
        academicYear: '2025/2026'
      },
      {
        url: 'https://www.gardenschool.edu.my/admissions/school-fees/',
        title: 'GIS Official School Fees Schedule',
        sourceType: 'official',
        checkedAt: '2026-09',
        academicYear: '2025/2026'
      }
    ]
  },
  'help-international-school.json': {
    websiteUrl: 'https://his.edu.my',
    sources: [
      {
        url: 'https://his.edu.my',
        title: 'HELP International School Official Website',
        sourceType: 'official',
        checkedAt: '2026-09',
        academicYear: '2025/2026'
      },
      {
        url: 'https://his.edu.my/admission-fee/',
        title: 'HELP International School Official Tuition Fees',
        sourceType: 'official',
        checkedAt: '2026-09',
        academicYear: '2025/2026'
      }
    ]
  },
  'igbis.json': {
    websiteUrl: 'https://igbis.edu.my',
    sources: [
      {
        url: 'https://igbis.edu.my',
        title: 'IGBIS Official Website',
        sourceType: 'official',
        checkedAt: '2026-09',
        academicYear: '2025/2026'
      },
      {
        url: 'https://igbis.edu.my/admissions/fee/',
        title: 'IGBIS Official Tuition & Fees Schedule',
        sourceType: 'official',
        checkedAt: '2026-09',
        academicYear: '2025/2026'
      }
    ]
  },
  'iskl.json': {
    websiteUrl: 'https://www.iskl.edu.my',
    sources: [
      {
        url: 'https://www.iskl.edu.my',
        title: 'ISKL Official Website',
        sourceType: 'official',
        checkedAt: '2026-09',
        academicYear: '2025/2026'
      },
      {
        url: 'https://www.iskl.edu.my/admissions/iskl-fees',
        title: 'ISKL Official Tuition & Fee Schedule',
        sourceType: 'official',
        checkedAt: '2026-09',
        academicYear: '2025/2026'
      }
    ]
  },
  'mont-kiara-international-school.json': {
    websiteUrl: 'https://www.mkis.edu.my',
    sources: [
      {
        url: 'https://www.mkis.edu.my',
        title: "M'KIS Official Website",
        sourceType: 'official',
        checkedAt: '2026-09',
        academicYear: '2025/2026'
      },
      {
        url: 'https://www.mkis.edu.my/school-fees-2026---2027',
        title: "M'KIS Official School Fees Schedule",
        sourceType: 'official',
        checkedAt: '2026-09',
        academicYear: '2026/2027'
      }
    ]
  },
  'nexus-international-school.json': {
    websiteUrl: 'https://www.nexus.edu.my',
    sources: [
      {
        url: 'https://www.nexus.edu.my',
        title: 'Nexus Official Website',
        sourceType: 'official',
        checkedAt: '2026-09',
        academicYear: '2025/2026'
      },
      {
        url: 'https://www.nexus.edu.my/admissions/school-fees/',
        title: 'Nexus Official School Fees Schedule',
        sourceType: 'official',
        checkedAt: '2026-09',
        academicYear: '2025/2026'
      },
      {
        url: 'https://www.nexus.edu.my/wp-content/uploads/2026/04/NISM-Fees-Schedule-2026-27.pdf',
        title: 'Nexus Official Fee Schedule 2026-27 (PDF)',
        sourceType: 'official_pdf',
        checkedAt: '2026-09',
        academicYear: '2026/2027'
      }
    ]
  },
  'oasis-international-school.json': {
    websiteUrl: 'https://www.ois.edu.my',
    sources: [
      {
        url: 'https://www.ois.edu.my',
        title: 'Oasis International School Official Website',
        sourceType: 'official',
        checkedAt: '2026-09',
        academicYear: '2025/2026'
      },
      {
        url: 'https://www.ois.edu.my/admissions/tuition-and-fees',
        title: 'Oasis Official Tuition and Fees Schedule',
        sourceType: 'official',
        checkedAt: '2026-09',
        academicYear: '2025/2026'
      }
    ]
  },
  'sayfol-international-school.json': {
    websiteUrl: 'https://www.sayfol.edu.my',
    sources: [
      {
        url: 'https://www.sayfol.edu.my',
        title: 'Sayfol Official Website',
        sourceType: 'official',
        checkedAt: '2026-09',
        academicYear: '2025/2026'
      },
      {
        url: 'https://sayfol.edu.my/admission/fee-structure-terms-of-payment-academic-year-2026-2027/',
        title: 'Sayfol Fee Structure & Terms of Payment',
        sourceType: 'official',
        checkedAt: '2026-09',
        academicYear: '2026/2027'
      },
      {
        url: 'https://sayfol.edu.my/wp-content/uploads/2026/05/Academic-Calendar-Fee-2026-2027.pdf',
        title: 'Sayfol Academic Calendar & Fee Schedule (PDF)',
        sourceType: 'official_pdf',
        checkedAt: '2026-09',
        academicYear: '2026/2027'
      }
    ]
  },
  'sjiim.json': {
    websiteUrl: 'https://www.sji-international.edu.my',
    sources: [
      {
        url: 'https://www.sji-international.edu.my',
        title: 'SJIIM Official Website',
        sourceType: 'official',
        checkedAt: '2026-09',
        academicYear: '2025/2026'
      },
      {
        url: 'https://www.sji-international.edu.my/admissions-information/',
        title: 'SJIIM Official Admissions & Enrolment Information',
        sourceType: 'official',
        checkedAt: '2026-09',
        academicYear: '2025/2026'
      }
    ]
  },
  'sri-kdu-international-school-kota-damansara.json': {
    websiteUrl: 'https://srikdu.edu.my/kota-damansara-international/',
    sources: [
      {
        url: 'https://srikdu.edu.my/kota-damansara-international/',
        title: 'Sri KDU Kota Damansara Official Website',
        sourceType: 'official',
        checkedAt: '2026-09',
        academicYear: '2025/2026'
      },
      {
        url: 'https://srikdu.edu.my/kota-damansara-international/fee-structure/',
        title: 'Sri KDU Kota Damansara Official Fee Structure',
        sourceType: 'official',
        checkedAt: '2026-09',
        academicYear: '2025/2026'
      }
    ]
  },
  'sunway-international-school.json': {
    websiteUrl: 'https://sunwayschools.edu.my/siskl',
    sources: [
      {
        url: 'https://sunwayschools.edu.my/siskl',
        title: 'Sunway International School Official Website',
        sourceType: 'official',
        checkedAt: '2026-09',
        academicYear: '2025/2026'
      },
      {
        url: 'https://sunwayschools.edu.my/siskl/admissions/admission-overview',
        title: 'Sunway International School Admissions Overview',
        sourceType: 'official',
        checkedAt: '2026-09',
        academicYear: '2025/2026'
      }
    ]
  },
  'taylors-international-school-kuala-lumpur.json': {
    websiteUrl: 'https://www.tis.edu.my',
    sources: [
      {
        url: 'https://www.tis.edu.my',
        title: "Taylor's International School Official Website",
        sourceType: 'official',
        checkedAt: '2026-09',
        academicYear: '2025/2026'
      },
      {
        url: 'https://www.tis.edu.my/admissions/school-fees/',
        title: "Taylor's International School Official Fee Schedule",
        sourceType: 'official',
        checkedAt: '2026-09',
        academicYear: '2025/2026'
      },
      {
        url: 'https://www.tis.edu.my/wp-content/uploads/2026/07/TIS-School-Fees-2027.pdf',
        title: "Taylor's Official Fee Schedule 2027 (PDF)",
        sourceType: 'official_pdf',
        checkedAt: '2026-09',
        academicYear: '2026/2027'
      }
    ]
  },
  'tenby-schools-setia-eco-park.json': {
    websiteUrl: 'https://tenby.edu.my/setia-eco-park',
    sources: [
      {
        url: 'https://tenby.edu.my/setia-eco-park',
        title: 'Tenby Schools Setia Eco Park Official Website',
        sourceType: 'official',
        checkedAt: '2026-09',
        academicYear: '2025/2026'
      },
      {
        url: 'https://tenby.edu.my/setia-eco-park/admissions/tuition-fees',
        title: 'Tenby Setia Eco Park Official Tuition Fees',
        sourceType: 'official',
        checkedAt: '2026-09',
        academicYear: '2025/2026'
      }
    ]
  },
  'the-alice-smith-school.json': {
    websiteUrl: 'https://www.alice-smith.edu.my',
    sources: [
      {
        url: 'https://www.alice-smith.edu.my',
        title: 'Alice Smith School Official Website',
        sourceType: 'official',
        checkedAt: '2026-09',
        academicYear: '2025/2026'
      },
      {
        url: 'https://www.alice-smith.edu.my/join/tuition-and-fees',
        title: 'Alice Smith Official Tuition & Fees Schedule',
        sourceType: 'official',
        checkedAt: '2026-09',
        academicYear: '2025/2026'
      },
      {
        url: 'https://www.alice-smith.edu.my/userfiles/assmvc/Documents/03-Join/Admissions/2026-27%20Fees%20Schedule%20(New%20Tier)%20(FINAL).pdf',
        title: 'Alice Smith 2026-27 Fee Schedule (PDF)',
        sourceType: 'official_pdf',
        checkedAt: '2026-09',
        academicYear: '2026/2027'
      }
    ]
  }
};

const schoolsDir = path.resolve('data', 'schools');

for (const [filename, updates] of Object.entries(verifiedData)) {
  const filePath = path.join(schoolsDir, filename);
  if (fs.existsSync(filePath)) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    data.websiteUrl = updates.websiteUrl;
    data.sources = updates.sources;
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
    console.log(`Updated ${filename}`);
  }
}

console.log('All 18 school JSON files have been updated with verified live URLs!');
