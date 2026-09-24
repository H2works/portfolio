'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function SchoolHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/school' && pathname === '/school') return true;
    if (path !== '/school' && pathname?.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="school-header">
      <div className="container-xl px-3 py-3">
        <div className="d-flex align-items-center justify-content-between">
          {/* Brand */}
          <Link href="/school" className="school-brand d-flex align-items-center">
            <span className="fw-bold">H2works</span>
            <span className="brand-sub d-none d-sm-inline">International School Finder</span>
            <span className="badge bg-dark-subtle text-dark ms-2 fw-semibold small">MY</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="d-none d-md-flex align-items-center gap-1">
            <Link
              href="/school"
              className={`nav-link ${isActive('/school') && pathname === '/school' ? 'active' : ''}`}
            >
              トップ
            </Link>
            <Link
              href="/school/malaysia"
              className={`nav-link ${isActive('/school/malaysia') ? 'active' : ''}`}
            >
              学校一覧・検索
            </Link>
            <Link
              href="/school/compare"
              className={`nav-link ${isActive('/school/compare') ? 'active' : ''}`}
            >
              比較
            </Link>
            <Link
              href="/education"
              className="nav-link"
              title="海外教育・進路メディアへ"
            >
              教育メディア
            </Link>
            <div className="vr mx-2 text-secondary" style={{ height: '20px' }}></div>
            <Link
              href="/"
              className="nav-link text-muted small"
              title="H2works ポートフォリオサイトへ"
            >
              H2works Top ↗
            </Link>
          </nav>

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

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="d-md-none pt-3 pb-2 border-top mt-3">
            <div className="d-flex flex-column gap-2">
              <Link
                href="/school"
                className={`nav-link ${pathname === '/school' ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                トップ
              </Link>
              <Link
                href="/school/malaysia"
                className={`nav-link ${isActive('/school/malaysia') ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                学校一覧・検索
              </Link>
              <Link
                href="/school/compare"
                className={`nav-link ${isActive('/school/compare') ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                比較表
              </Link>
              <Link
                href="/education"
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                教育メディア
              </Link>
              <Link
                href="/"
                className="nav-link text-muted small pt-2 border-top"
                onClick={() => setIsMenuOpen(false)}
              >
                H2works ポートフォリオへ ↗
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
