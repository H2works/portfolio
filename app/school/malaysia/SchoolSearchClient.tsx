'use client';

import { useState, useMemo, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { School, SearchFilterParams, CurriculumType, GradeLevel } from '@/types/school';
import SchoolFilter from '@/components/school/SchoolFilter';
import SchoolCard from '@/components/school/SchoolCard';
import { filterSchools } from '@/lib/schoolFilter';

interface SchoolSearchClientProps {
  allSchools: School[];
}

export default function SchoolSearchClient({ allSchools }: SchoolSearchClientProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Initialize filters from search params
  const [filters, setFilters] = useState<SearchFilterParams>(() => {
    const stateParam = searchParams.get('state');
    const areaParam = searchParams.get('area');
    const curriculumParam = searchParams.get('curriculum') as CurriculumType | null;
    const ageParam = searchParams.get('age');
    const maxBudgetParam = searchParams.get('maxBudget');
    const keywordParam = searchParams.get('q');
    const sortByParam = searchParams.get('sort') as 'tuition_asc' | 'tuition_desc' | 'name_asc' | null;

    return {
      state: stateParam || undefined,
      area: areaParam || undefined,
      curricula: curriculumParam ? [curriculumParam] : undefined,
      age: ageParam ? parseInt(ageParam, 10) : undefined,
      maxBudget: maxBudgetParam ? parseInt(maxBudgetParam, 10) : undefined,
      keyword: keywordParam || undefined,
      sortBy: sortByParam || 'name_asc',
    };
  });

  // Calculate filtered schools
  const filteredSchools = useMemo(() => {
    return filterSchools(allSchools, filters);
  }, [allSchools, filters]);

  // Count active filters
  const activeFiltersCount = useMemo(() => {
    let count = 0;
    if (filters.state) count++;
    if (filters.area) count++;
    if (filters.age) count++;
    if (filters.grade) count++;
    if (filters.curricula && filters.curricula.length > 0) count += filters.curricula.length;
    if (filters.maxBudget) count++;
    if (filters.schoolBus) count++;
    if (filters.japaneseSupport) count++;
    if (filters.afterSchoolCare) count++;
    if (filters.boarding) count++;
    if (filters.keyword) count++;
    return count;
  }, [filters]);

  const handleFilterChange = (updated: SearchFilterParams) => {
    setFilters(updated);
  };

  const handleReset = () => {
    setFilters({ sortBy: 'name_asc' });
    router.replace('/school/malaysia');
  };

  return (
    <div>
      {/* Mobile Filter Toggle Bar */}
      <div className="d-lg-none mb-3 d-flex justify-content-between align-items-center">
        <button
          type="button"
          className="btn btn-outline-dark btn-sm rounded-pill px-3 d-flex align-items-center gap-2"
          onClick={() => setIsMobileFilterOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
          </svg>
          絞り込み条件 {activeFiltersCount > 0 ? `(${activeFiltersCount})` : ''}
        </button>

        <div className="text-secondary small">
          <strong>{filteredSchools.length}</strong> 校 ヒット
        </div>
      </div>

      <div className="row g-4">
        {/* Desktop Left Sidebar Filter */}
        <div className="d-none d-lg-block col-lg-4 col-xl-3">
          <SchoolFilter
            filters={filters}
            onChange={handleFilterChange}
            onReset={handleReset}
          />
        </div>

        {/* Right Search Results */}
        <div className="col-12 col-lg-8 col-xl-9">
          {/* Top Controls Bar */}
          <div className="bg-white border rounded-3 p-3 mb-3 d-flex flex-wrap align-items-center justify-content-between gap-3 shadow-sm">
            <div className="text-dark fw-bold">
              <span className="fs-5">{filteredSchools.length}</span> 校の学校が見つかりました
              {activeFiltersCount > 0 && (
                <span className="text-muted small fw-normal ms-2">
                  （{activeFiltersCount}件の条件を適用中）
                </span>
              )}
            </div>

            <div className="d-flex align-items-center gap-2">
              <label htmlFor="sort-select" className="text-secondary small text-nowrap">並び替え:</label>
              <select
                id="sort-select"
                className="form-select form-select-sm"
                style={{ width: 'auto' }}
                value={filters.sortBy || 'name_asc'}
                onChange={(e) =>
                  setFilters({
                    ...filters,
                    sortBy: e.target.value as 'tuition_asc' | 'tuition_desc' | 'name_asc',
                  })
                }
              >
                <option value="name_asc">校名順 (A–Z)</option>
                <option value="tuition_asc">学費が安い順</option>
                <option value="tuition_desc">学費が高い順</option>
              </select>
            </div>
          </div>

          {/* Cards List */}
          {filteredSchools.length === 0 ? (
            <div className="bg-white border rounded-3 p-5 text-center my-4 shadow-sm">
              <div className="text-secondary mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="text-muted" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>
              </div>
              <h3 className="h5 fw-bold text-dark mb-2">条件に一致する学校が見つかりませんでした</h3>
              <p className="text-secondary small mb-4">
                カリキュラムや学費上限、地域などの条件を緩和して再度お試しください。
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="btn btn-outline-dark rounded-pill px-4"
              >
                すべての条件をリセット
              </button>
            </div>
          ) : (
            <div className="d-flex flex-column gap-2">
              {filteredSchools.map((school) => (
                <SchoolCard key={school.id} school={school} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Filter Modal / Drawer */}
      {isMobileFilterOpen && (
        <div
          className="modal fade show d-block"
          tabIndex={-1}
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
          role="dialog"
          aria-modal="true"
        >
          <div className="modal-dialog modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title fw-bold">絞り込みフィルター</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setIsMobileFilterOpen(false)}
                  aria-label="閉じる"
                ></button>
              </div>
              <div className="modal-body">
                <SchoolFilter
                  filters={filters}
                  onChange={handleFilterChange}
                  onReset={handleReset}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary w-100 rounded-pill fw-bold"
                  onClick={() => setIsMobileFilterOpen(false)}
                >
                  {filteredSchools.length}校の結果を表示する
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
