'use client';

import { useState, useRef, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { School } from '@/types/school';
import SchoolLogo from './SchoolLogo';

interface SchoolSearchBarProps {
  allSchools: School[];
  value: string;
  onChange: (keyword: string) => void;
  className?: string;
}

export default function SchoolSearchBar({
  allSchools,
  value,
  onChange,
  className = '',
}: SchoolSearchBarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Filter suggestions based on input value
  const suggestions = useMemo(() => {
    const q = value.trim().toLowerCase();
    if (!q) return [];

    const tokens = q.split(/\s+/).filter(Boolean);

    return allSchools
      .filter((s) => {
        const target = [
          s.name,
          s.officialName,
          s.slug,
          s.location.city,
          s.location.area,
          s.location.state,
          ...s.curricula,
          s.shortDescription,
          s.overview,
        ]
          .join(' ')
          .toLowerCase();

        return tokens.every((token) => target.includes(token));
      })
      .slice(0, 6);
  }, [allSchools, value]);

  // Handle outside click to close suggestions
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const handleSelectSchool = (schoolName: string) => {
    onChange(schoolName);
    setIsOpen(false);
    inputRef.current?.focus();
  };

  const handleClear = () => {
    onChange('');
    setIsOpen(false);
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <div ref={containerRef} className={`position-relative w-100 ${className}`}>
      {/* Search Input Box */}
      <div className="input-group input-group-lg shadow-sm rounded-3 overflow-hidden border">
        <span className="input-group-text bg-white border-0 text-secondary pe-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            viewBox="0 0 16 16"
            aria-hidden="true"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </span>
        <input
          ref={inputRef}
          type="text"
          className="form-control border-0 px-2 py-3 fs-6"
          placeholder="学校名・キーワードで検索（例: ISKL, Garden, Epsom, スバン, IB ...）"
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => {
            if (value.trim()) setIsOpen(true);
          }}
          onKeyDown={handleKeyDown}
          aria-label="学校名・キーワード検索"
          aria-expanded={isOpen && suggestions.length > 0}
          autoComplete="off"
        />
        {value && (
          <button
            type="button"
            className="btn bg-white border-0 text-secondary px-3"
            onClick={handleClear}
            title="入力をクリア"
            aria-label="検索キーワードをクリア"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
            </svg>
          </button>
        )}
      </div>

      {/* Autocomplete Suggestions Dropdown */}
      {isOpen && suggestions.length > 0 && (
        <div
          className="position-absolute start-0 end-0 mt-1 bg-white border rounded-3 shadow-lg overflow-hidden z-3"
          style={{ maxHeight: '380px', overflowY: 'auto' }}
        >
          <div className="px-3 py-2 bg-light border-bottom d-flex align-items-center justify-content-between small text-secondary">
            <span className="fw-semibold">候補の学校 ({suggestions.length}件)</span>
            <span className="small text-muted">Escキーで閉じる</span>
          </div>

          <div className="list-group list-group-flush">
            {suggestions.map((school) => (
              <div
                key={school.id}
                className="list-group-item list-group-item-action d-flex align-items-center justify-content-between p-3 border-bottom-0"
                style={{ cursor: 'pointer' }}
                onClick={() => handleSelectSchool(school.name)}
              >
                <div className="d-flex align-items-center gap-3 text-truncate me-2">
                  <SchoolLogo
                    name={school.name}
                    logoUrl={school.logoUrl}
                    size={38}
                    className="border"
                  />
                  <div className="text-truncate">
                    <div className="fw-bold text-dark text-truncate fs-6">
                      {school.name}
                    </div>
                    <div className="d-flex align-items-center gap-2 small text-secondary">
                      <span>{school.location.area || school.location.city}</span>
                      <span>・</span>
                      <span className="badge bg-light text-dark border">
                        {school.curricula.join(', ')}
                      </span>
                      <span className="d-none d-sm-inline text-muted small">
                        {school.currentFees.tuitionDisplay}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-1 flex-shrink-0">
                  <span className="btn btn-outline-secondary btn-sm rounded-pill px-2 py-1 small d-none d-md-inline-block">
                    選択
                  </span>
                  <Link
                    href={`/school/malaysia/${school.slug}`}
                    className="btn btn-sm btn-light border rounded-circle p-2 text-primary shadow-xs"
                    title={`${school.name}の詳細ページを直接開く`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"
                      />
                      <path
                        fillRule="evenodd"
                        d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
