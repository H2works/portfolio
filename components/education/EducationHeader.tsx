'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { EDUCATION_CATEGORIES } from '@/lib/educationCategories';

export default function EducationHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/education' && pathname === '/education') return true;
    if (path !== '/education' && pathname?.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="education-header">
      <div className="container-xl px-3 py-3">
        <div className="d-flex align-items-center justify-content-between">
          {/* Brand */}
          <Link href="/education" className="education-brand d-flex align-items-center">
            <span className="fw-bold">H2works</span>
            <span className="brand-sub">Education</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="d-none d-xl-flex align-items-center gap-1">
            <Link
              href="/education"
              className={`nav-link ${pathname === '/education' ? 'active' : ''}`}
            >
              トップ
            </Link>
            {EDUCATION_CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/education/${cat.slug}`}
                className={`nav-link ${isActive(`/education/${cat.slug}`) ? 'active' : ''}`}
              >
                {cat.shortName}
              </Link>
            ))}
            <div className="vr mx-2 text-secondary" style={{ height: '20px' }}></div>
            <Link
              href="/school"
              className="btn btn-sm btn-outline-primary d-inline-flex align-items-center"
              title="マレーシアインター校 検索・比較サービスへ"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                className="bi bi-search me-1"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
              </svg>
              学校検索・比較 ↗
            </Link>
          </nav>

          {/* Tablet/Desktop secondary */}
          <div className="d-none d-md-flex d-xl-none align-items-center gap-2">
            <Link
              href="/school"
              className="btn btn-sm btn-outline-primary"
            >
              学校検索 ↗
            </Link>
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="メニュー開閉"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
              </svg>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="d-md-none">
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="メニュー開閉"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile / Tablet Dropdown */}
        {isMenuOpen && (
          <div className="pt-3 pb-2 border-top mt-3">
            <div className="d-flex flex-column gap-1">
              <Link
                href="/education"
                className={`nav-link ${pathname === '/education' ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                トップ
              </Link>
              {EDUCATION_CATEGORIES.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/education/${cat.slug}`}
                  className={`nav-link ${isActive(`/education/${cat.slug}`) ? 'active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {cat.name}
                </Link>
              ))}
              <div className="pt-2 border-top mt-2 d-flex flex-column gap-2">
                <Link
                  href="/school"
                  className="btn btn-sm btn-primary w-100 text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  マレーシア インター校検索・比較 ↗
                </Link>
                <div className="d-flex justify-content-between small text-muted px-2 pt-1">
                  <Link href="/web/blog" onClick={() => setIsMenuOpen(false)} className="text-muted text-decoration-none">
                    Web制作ブログ ↗
                  </Link>
                  <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-muted text-decoration-none">
                    ポートフォリオ ↗
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
