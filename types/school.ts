export type CurriculumType =
  | 'British'
  | 'Cambridge'
  | 'IB'
  | 'American'
  | 'Australian'
  | 'Canadian'
  | 'IPC'
  | 'Other';

export type GradeLevel =
  | 'Nursery'
  | 'Kindergarten'
  | 'Reception'
  | 'Primary'
  | 'Secondary'
  | 'Sixth Form';

export type FeeType =
  | 'tuition'
  | 'application_fee'
  | 'registration_fee'
  | 'enrollment_fee'
  | 'deposit'
  | 'bus'
  | 'lunch'
  | 'uniform'
  | 'books'
  | 'technology_fee'
  | 'other';

export type SourceType =
  | 'official'
  | 'official_pdf'
  | 'government'
  | 'directory'
  | 'other';

export interface SourceItem {
  url: string;
  title: string;
  sourceType: SourceType;
  checkedAt: string; // e.g. "2026-09"
  academicYear?: string; // e.g. "2025/2026"
}

export interface FeeItem {
  academicYear: string; // e.g. "2025/2026"
  feeType: FeeType;
  label: string; // e.g. "Year 1 Tuition", "Application Fee"
  amount: number; // in MYR
  currency: 'MYR';
  frequency: 'annual' | 'term' | 'one-time' | 'monthly';
  applicableGrade?: string; // e.g. "Year 1 - Year 6", "All Grades"
  isRefundable?: boolean;
  notes?: string;
  sourceUrl?: string;
}

export interface AcademicYearFees {
  academicYear: string; // e.g. "2025/2026"
  tuitionMinAnnual: number;
  tuitionMaxAnnual: number;
  tuitionDisplay: string; // e.g. "RM 38,000 - RM 89,000 / year"
  applicationFee?: number;
  registrationFee?: number;
  deposit?: number;
  busFeeEstimate?: string;
  lunchFeeEstimate?: string;
  items: FeeItem[];
}

export interface LocationInfo {
  country: 'Malaysia' | string;
  state: 'Kuala Lumpur' | 'Selangor' | string;
  city: string;
  area: string; // e.g. "Mont Kiara", "Ampang", "Subang Jaya"
  address: string;
  googleMapsUrl?: string;
}

export interface AgeRange {
  minAge: number;
  maxAge: number;
  display: string; // e.g. "3–18"
}

export interface LanguageInfo {
  instructionLanguage: string; // e.g. "English"
  secondLanguages: string[]; // e.g. ["Mandarin", "Malay", "French", "Spanish"]
  japaneseSupport: boolean;
  japaneseSupportDetail?: string; // e.g. "Japanese liaison staff available, Japanese mother tongue support"
  ellSupport: boolean; // English Language Learner / ESL support
  ellSupportDetail?: string;
}

export interface FeaturesInfo {
  schoolBus: boolean;
  busDetail?: string;
  lunchProvided: boolean;
  lunchDetail?: string;
  boardingAvailable: boolean;
  boardingDetail?: string;
  afterSchoolCare: boolean;
  afterSchoolCareDetail?: string;
}

export interface AdmissionsInfo {
  intakeMonths: string[]; // e.g. ["August", "January"]
  academicYearSchedule: string; // e.g. "3 Terms (Aug - Jul)"
  applicationProcess?: string;
  assessmentRequired: boolean;
}

export interface School {
  id: string;
  slug: string;
  name: string;
  officialName: string;
  logoUrl?: string;
  heroImageUrl?: string;
  shortDescription: string;
  overview: string;
  establishedYear?: number;
  location: LocationInfo;
  ageRange: AgeRange;
  curricula: CurriculumType[];
  gradeLevels: GradeLevel[];
  languages: LanguageInfo;
  features: FeaturesInfo;
  admissions: AdmissionsInfo;
  facilities: string[];
  currentFees: AcademicYearFees;
  historicalFees?: AcademicYearFees[];
  websiteUrl: string;
  contact: {
    email?: string;
    phone?: string;
  };
  lastVerified: string; // e.g. "September 2026"
  sources: SourceItem[];
}

export interface SearchFilterParams {
  state?: string;
  area?: string;
  age?: number;
  grade?: GradeLevel;
  curricula?: CurriculumType[];
  maxBudget?: number; // max annual tuition in MYR
  schoolBus?: boolean;
  japaneseSupport?: boolean;
  afterSchoolCare?: boolean;
  boarding?: boolean;
  keyword?: string;
  sortBy?: 'tuition_asc' | 'tuition_desc' | 'name_asc';
}

export interface SchoolSummary {
  id: string;
  slug: string;
  name: string;
  state: string;
  area: string;
  curricula: CurriculumType[];
  ageDisplay: string;
  tuitionDisplay: string;
  tuitionMinAnnual: number;
  tuitionMaxAnnual: number;
  schoolBus: boolean;
  japaneseSupport: boolean;
  shortDescription: string;
}
