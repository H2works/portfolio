import fs from 'fs';
import path from 'path';
import { School } from '@/types/school';
export * from './schoolFilter';

const schoolsDirectory = path.join(process.cwd(), 'data', 'schools');

export function getAllSchools(): School[] {
  if (!fs.existsSync(schoolsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(schoolsDirectory);
  const schools: School[] = [];

  for (const fileName of fileNames) {
    if (fileName.endsWith('.json')) {
      const fullPath = path.join(schoolsDirectory, fileName);
      try {
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const school = JSON.parse(fileContents) as School;
        schools.push(school);
      } catch (err) {
        console.error(`Error loading school data from ${fileName}:`, err);
      }
    }
  }

  // Sort by default by name
  return schools.sort((a, b) => a.name.localeCompare(b.name));
}

export function getSchoolBySlug(slug: string): School | null {
  const fullPath = path.join(schoolsDirectory, `${slug}.json`);
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    return JSON.parse(fileContents) as School;
  } catch (err) {
    console.error(`Error loading school data for slug ${slug}:`, err);
    return null;
  }
}

export function getAllSchoolSlugs(): { school: string }[] {
  if (!fs.existsSync(schoolsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(schoolsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.json'))
    .map((fileName) => ({
      school: fileName.replace(/\.json$/, ''),
    }));
}
