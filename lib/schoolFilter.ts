import { School, SearchFilterParams, SchoolSummary } from '@/types/school';

export function filterSchools(schools: School[], filters: SearchFilterParams): School[] {
  let result = [...schools];

  // State filter
  if (filters.state && filters.state !== 'all') {
    result = result.filter(
      (s) => s.location.state.toLowerCase() === filters.state?.toLowerCase()
    );
  }

  // Area filter
  if (filters.area && filters.area !== 'all') {
    result = result.filter(
      (s) => s.location.area.toLowerCase() === filters.area?.toLowerCase()
    );
  }

  // Child age filter
  if (filters.age !== undefined && filters.age !== null && filters.age > 0) {
    result = result.filter(
      (s) => filters.age! >= s.ageRange.minAge && filters.age! <= s.ageRange.maxAge
    );
  }

  // Grade level filter
  if (filters.grade) {
    result = result.filter((s) => s.gradeLevels.includes(filters.grade!));
  }

  // Curricula filter (multi-select: matches if any selected is supported)
  if (filters.curricula && filters.curricula.length > 0) {
    result = result.filter((s) =>
      filters.curricula!.some((c) => s.curricula.includes(c))
    );
  }

  // Budget filter: check if the school's entry tuition is within the budget
  if (filters.maxBudget && filters.maxBudget > 0) {
    result = result.filter(
      (s) => s.currentFees.tuitionMinAnnual <= filters.maxBudget!
    );
  }

  // School Bus
  if (filters.schoolBus) {
    result = result.filter((s) => s.features.schoolBus);
  }

  // Japanese Support
  if (filters.japaneseSupport) {
    result = result.filter((s) => s.languages.japaneseSupport);
  }

  // After School Care
  if (filters.afterSchoolCare) {
    result = result.filter((s) => s.features.afterSchoolCare);
  }

  // Boarding
  if (filters.boarding) {
    result = result.filter((s) => s.features.boardingAvailable);
  }

  // Keyword query
  if (filters.keyword && filters.keyword.trim()) {
    const q = filters.keyword.toLowerCase().trim();
    result = result.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.officialName.toLowerCase().includes(q) ||
        s.location.city.toLowerCase().includes(q) ||
        s.location.area.toLowerCase().includes(q) ||
        s.curricula.some((c) => c.toLowerCase().includes(q)) ||
        s.shortDescription.toLowerCase().includes(q)
    );
  }

  // Sorting
  if (filters.sortBy === 'tuition_asc') {
    result.sort(
      (a, b) => a.currentFees.tuitionMinAnnual - b.currentFees.tuitionMinAnnual
    );
  } else if (filters.sortBy === 'tuition_desc') {
    result.sort(
      (a, b) => b.currentFees.tuitionMaxAnnual - a.currentFees.tuitionMaxAnnual
    );
  } else if (filters.sortBy === 'name_asc') {
    result.sort((a, b) => a.name.localeCompare(b.name));
  }

  return result;
}

export function toSchoolSummary(school: School): SchoolSummary {
  return {
    id: school.id,
    slug: school.slug,
    name: school.name,
    state: school.location.state,
    area: school.location.area,
    curricula: school.curricula,
    ageDisplay: school.ageRange.display,
    tuitionDisplay: school.currentFees.tuitionDisplay,
    tuitionMinAnnual: school.currentFees.tuitionMinAnnual,
    tuitionMaxAnnual: school.currentFees.tuitionMaxAnnual,
    schoolBus: school.features.schoolBus,
    japaneseSupport: school.languages.japaneseSupport,
    shortDescription: school.shortDescription,
  };
}
