'use client';

import { useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { SearchFilterParams, CurriculumType } from '@/types/school';

interface SearchParamsSyncProps {
  onSync: (params: SearchFilterParams) => void;
}

export default function SearchParamsSync({ onSync }: SearchParamsSyncProps) {
  const searchParams = useSearchParams();
  const lastQueryRef = useRef<string | null>(null);
  const onSyncRef = useRef(onSync);
  onSyncRef.current = onSync;

  useEffect(() => {
    const currentQuery = searchParams.toString();

    // Prevent redundant updates if query string has not changed
    if (lastQueryRef.current === currentQuery) {
      return;
    }
    lastQueryRef.current = currentQuery;

    const stateParam = searchParams.get('state');
    const areaParam = searchParams.get('area');
    const curriculumParam = searchParams.get('curriculum') as CurriculumType | null;
    const ageParam = searchParams.get('age');
    const maxBudgetParam = searchParams.get('maxBudget');
    const keywordParam = searchParams.get('q');
    const sortByParam = searchParams.get('sort') as 'tuition_asc' | 'tuition_desc' | 'name_asc' | null;

    const hasAnyParam = Boolean(
      stateParam || areaParam || curriculumParam || ageParam || maxBudgetParam || keywordParam || sortByParam
    );

    if (hasAnyParam) {
      onSyncRef.current({
        state: stateParam || undefined,
        area: areaParam || undefined,
        curricula: curriculumParam ? [curriculumParam] : undefined,
        age: ageParam ? parseInt(ageParam, 10) : undefined,
        maxBudget: maxBudgetParam ? parseInt(maxBudgetParam, 10) : undefined,
        keyword: keywordParam || undefined,
        sortBy: sortByParam || 'name_asc',
      });
    }
  }, [searchParams]);

  return null;
}
