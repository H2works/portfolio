'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function WebServiceHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="lp-header py-3">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <Link href="/" className="brand-link d-flex align-items-center">
            <span>H2works</span>
            <span className="badge bg-light text-secondary border ms-2 small fw-normal" style={{ fontSize: '0.75rem' }}>
              Web Studio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="d-none d-lg-flex align-items-center gap-1">
            <a href="#problem" className="nav-link">お悩み</a>
            <a href="#security" className="nav-link">なぜ安全？</a>
            <a href="#comparison" className="nav-link">他社比較</a>
            <a href="#features" className="nav-link">特徴・強み</a>
            <a href="#pricing" className="nav-link">料金プラン</a>
            <a href="#faq" className="nav-link">FAQ</a>
            <Link href="/web/blog" className="nav-link">ブログ</Link>
          </nav>

          <div className="d-none d-lg-block">
            <a href="#contact" className="btn-header-cta d-inline-flex align-items-center">
              <span>無料相談・サイト診断</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-chevron-right ms-1" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
              </svg>
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <button
            type="button"
            className="btn btn-outline-secondary d-lg-none py-1 px-2"
            onClick={toggleMenu}
            aria-label="メニューを開く"
            aria-expanded={isOpen}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="d-lg-none pt-3 pb-2 border-top mt-3">
            <div className="d-flex flex-column gap-2">
              <a href="#problem" className="nav-link py-2" onClick={closeMenu}>お悩み</a>
              <a href="#security" className="nav-link py-2" onClick={closeMenu}>なぜ安全なのか？</a>
              <a href="#comparison" className="nav-link py-2" onClick={closeMenu}>WordPress・Wixとの比較</a>
              <a href="#features" className="nav-link py-2" onClick={closeMenu}>特徴・強み</a>
              <a href="#pricing" className="nav-link py-2" onClick={closeMenu}>料金プラン</a>
              <a href="#faq" className="nav-link py-2" onClick={closeMenu}>FAQ</a>
              <Link href="/web/blog" className="nav-link py-2" onClick={closeMenu}>技術ブログ</Link>
              <div className="pt-2">
                <a href="#contact" className="btn btn-primary w-100 py-2 fw-semibold" onClick={closeMenu} style={{ backgroundColor: '#2563eb', borderColor: '#2563eb' }}>
                  無料相談・サイト診断
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
