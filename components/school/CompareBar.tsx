'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const STORAGE_KEY = 'h2works_compare_schools';

// Helper to get compared school IDs
export function getComparedSchoolSlugs(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

// Helper to toggle a school slug in comparison
export function toggleCompareSchool(slug: string): string[] {
  if (typeof window === 'undefined') return [];
  const current = getComparedSchoolSlugs();
  let updated: string[];
  if (current.includes(slug)) {
    updated = current.filter((s) => s !== slug);
  } else {
    if (current.length >= 4) {
      alert('一度に比較できる学校は最大4校までです。');
      return current;
    }
    updated = [...current, slug];
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  window.dispatchEvent(new Event('h2works_compare_change'));
  return updated;
}

// Helper to clear comparison
export function clearComparedSchools() {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new Event('h2works_compare_change'));
}

export default function CompareBar() {
  const pathname = usePathname();
  const [selectedSlugs, setSelectedSlugs] = useState<string[]>([]);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const sync = () => {
      setSelectedSlugs(getComparedSchoolSlugs());
      setIsDismissed(false);
    };
    sync();
    window.addEventListener('h2works_compare_change', sync);
    window.addEventListener('storage', sync);
    return () => {
      window.removeEventListener('h2works_compare_change', sync);
      window.removeEventListener('storage', sync);
    };
  }, []);

  // 比較ページ自身では表示しない
  if (pathname === '/school/compare') return null;

  // 選択校が0校、または「比較表を見る」クリック後は非表示
  if (selectedSlugs.length === 0 || isDismissed) return null;

  return (
    <div className="compare-floating-bar" role="status" aria-live="polite">
      <div className="d-flex align-items-center gap-2">
        <span className="compare-count-badge">{selectedSlugs.length}校</span>
        <span className="small fw-semibold d-none d-sm-inline">選択中</span>
      </div>

      <div className="d-flex align-items-center gap-2">
        <Link
          href={`/school/compare?schools=${selectedSlugs.join(',')}`}
          className="btn btn-primary btn-sm rounded-pill px-3 fw-bold shadow-sm"
          onClick={() => setIsDismissed(true)}
        >
          比較表を見る
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            fill="currentColor"
            className="bi bi-arrow-right ms-1"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
            />
          </svg>
        </Link>
        <button
          type="button"
          onClick={clearComparedSchools}
          className="btn btn-outline-light btn-sm rounded-pill px-2 small border-0 opacity-75 hover-opacity-100"
          title="選択を解除"
        >
          ✕ 解除
        </button>
      </div>
    </div>
  );
}
