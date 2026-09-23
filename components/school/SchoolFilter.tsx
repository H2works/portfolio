'use client';

import { CurriculumType, GradeLevel, SearchFilterParams } from '@/types/school';

interface SchoolFilterProps {
  filters: SearchFilterParams;
  onChange: (updated: SearchFilterParams) => void;
  onReset: () => void;
}

const ALL_CURRICULA: CurriculumType[] = [
  'British',
  'Cambridge',
  'IB',
  'American',
  'Australian',
  'Canadian',
  'IPC',
];

const ALL_GRADES: GradeLevel[] = [
  'Nursery',
  'Kindergarten',
  'Primary',
  'Secondary',
  'Sixth Form',
];

const BUDGET_OPTIONS = [
  { label: '指定なし', value: 0 },
  { label: '〜 RM 30,000 / 年', value: 30000 },
  { label: '〜 RM 40,000 / 年', value: 40000 },
  { label: '〜 RM 50,000 / 年', value: 50000 },
  { label: '〜 RM 60,000 / 年', value: 60000 },
  { label: '〜 RM 80,000 / 年', value: 80000 },
  { label: '〜 RM 100,000 / 年', value: 100000 },
];

export default function SchoolFilter({ filters, onChange, onReset }: SchoolFilterProps) {
  const handleCurriculumToggle = (curriculum: CurriculumType) => {
    const current = filters.curricula || [];
    const exists = current.includes(curriculum);
    const updated = exists
      ? current.filter((c) => c !== curriculum)
      : [...current, curriculum];
    onChange({ ...filters, curricula: updated });
  };

  return (
    <div className="filter-card shadow-sm">
      <div className="d-flex align-items-center justify-content-between mb-3 border-bottom pb-2">
        <h4 className="h6 fw-bold mb-0 text-dark">絞り込み検索</h4>
        <button
          type="button"
          onClick={onReset}
          className="btn btn-link btn-sm text-secondary text-decoration-none p-0"
        >
          リセット
        </button>
      </div>

      {/* State / Location */}
      <div className="mb-3">
        <label className="filter-section-title d-block" htmlFor="filter-state">地域（State）</label>
        <select
          id="filter-state"
          className="form-select form-select-sm"
          value={filters.state || 'all'}
          onChange={(e) => onChange({ ...filters, state: e.target.value === 'all' ? undefined : e.target.value })}
        >
          <option value="all">マレーシア全域（KL・Selangor）</option>
          <option value="Kuala Lumpur">クアラルンプール (Kuala Lumpur)</option>
          <option value="Selangor">セランゴール州 (Selangor)</option>
        </select>
      </div>

      {/* Child Age */}
      <div className="mb-3">
        <label className="filter-section-title d-block" htmlFor="filter-age">子どもの年齢</label>
        <select
          id="filter-age"
          className="form-select form-select-sm"
          value={filters.age || 0}
          onChange={(e) => {
            const val = parseInt(e.target.value, 10);
            onChange({ ...filters, age: val > 0 ? val : undefined });
          }}
        >
          <option value={0}>年齢指定なし</option>
          {[3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map((age) => (
            <option key={age} value={age}>
              {age} 歳
            </option>
          ))}
        </select>
      </div>

      {/* Grade Level */}
      <div className="mb-3">
        <label className="filter-section-title d-block" htmlFor="filter-grade">学年区分</label>
        <select
          id="filter-grade"
          className="form-select form-select-sm"
          value={filters.grade || ''}
          onChange={(e) =>
            onChange({
              ...filters,
              grade: e.target.value ? (e.target.value as GradeLevel) : undefined,
            })
          }
        >
          <option value="">学年指定なし</option>
          {ALL_GRADES.map((grade) => (
            <option key={grade} value={grade}>
              {grade}
            </option>
          ))}
        </select>
      </div>

      {/* Budget Limit */}
      <div className="mb-3">
        <label className="filter-section-title d-block" htmlFor="filter-budget">年間学費（上限目安）</label>
        <select
          id="filter-budget"
          className="form-select form-select-sm"
          value={filters.maxBudget || 0}
          onChange={(e) => {
            const val = parseInt(e.target.value, 10);
            onChange({ ...filters, maxBudget: val > 0 ? val : undefined });
          }}
        >
          {BUDGET_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* Curricula checkboxes */}
      <div className="mb-3">
        <label className="filter-section-title d-block">カリキュラム</label>
        <div className="d-flex flex-column gap-1">
          {ALL_CURRICULA.map((curriculum) => {
            const checked = (filters.curricula || []).includes(curriculum);
            return (
              <div key={curriculum} className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id={`curriculum-${curriculum}`}
                  checked={checked}
                  onChange={() => handleCurriculumToggle(curriculum)}
                />
                <label
                  className="form-check-label"
                  htmlFor={`curriculum-${curriculum}`}
                >
                  {curriculum}
                </label>
              </div>
            );
          })}
        </div>
      </div>

      {/* Features & Support */}
      <div className="mb-2">
        <label className="filter-section-title d-block">特徴・サポート</label>
        <div className="d-flex flex-column gap-1">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="feature-japanese"
              checked={!!filters.japaneseSupport}
              onChange={(e) =>
                onChange({ ...filters, japaneseSupport: e.target.checked || undefined })
              }
            />
            <label className="form-check-label" htmlFor="feature-japanese">
              🇯🇵 日本語サポート対応
            </label>
          </div>

          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="feature-bus"
              checked={!!filters.schoolBus}
              onChange={(e) =>
                onChange({ ...filters, schoolBus: e.target.checked || undefined })
              }
            />
            <label className="form-check-label" htmlFor="feature-bus">
              🚌 スクールバスあり
            </label>
          </div>

          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="feature-afterschool"
              checked={!!filters.afterSchoolCare}
              onChange={(e) =>
                onChange({ ...filters, afterSchoolCare: e.target.checked || undefined })
              }
            />
            <label className="form-check-label" htmlFor="feature-afterschool">
              ⏰ 学童・課外活動あり
            </label>
          </div>

          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="feature-boarding"
              checked={!!filters.boarding}
              onChange={(e) =>
                onChange({ ...filters, boarding: e.target.checked || undefined })
              }
            />
            <label className="form-check-label" htmlFor="feature-boarding">
              🏠 学生寮（Boarding）あり
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
