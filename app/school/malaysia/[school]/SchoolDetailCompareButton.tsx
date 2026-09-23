'use client';

import { useState, useEffect } from 'react';
import { getComparedSchoolSlugs, toggleCompareSchool } from '@/components/school/CompareBar';

interface Props {
  slug: string;
}

export default function SchoolDetailCompareButton({ slug }: Props) {
  const [isCompared, setIsCompared] = useState(false);

  useEffect(() => {
    const check = () => {
      const list = getComparedSchoolSlugs();
      setIsCompared(list.includes(slug));
    };
    check();
    window.addEventListener('h2works_compare_change', check);
    return () => {
      window.removeEventListener('h2works_compare_change', check);
    };
  }, [slug]);

  const handleToggle = () => {
    toggleCompareSchool(slug);
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      className={`btn btn-sm rounded-pill px-3 fw-medium ${
        isCompared ? 'btn-dark' : 'btn-outline-dark'
      }`}
    >
      {isCompared ? '✓ 比較リストに追加中' : '＋ 比較リストに追加'}
    </button>
  );
}
