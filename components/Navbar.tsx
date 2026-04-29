'use client';

import Link from 'next/link';

interface NavbarProps {
  darkMode?: boolean;
}

export default function Navbar({ darkMode }: NavbarProps) {
  return (
    <nav id="navScroll" className={`navbar navbar-expand-lg ${darkMode ? 'navbar-light' : 'navbar-dark'} d-flex px-3`} tabIndex={0}>
      <Link href="/" className={`navbar-brand d-flex align-items-center flex-grow-1 link-opacity-50-hover ${darkMode ? 'link-light' : 'link-dark'}`}>
        <div className="fw-bold fs-4">H2works</div>
      </Link>
      <div className="col-auto ps-2 ms-2" id="navbarSupportedContent">
        <ul className="nav ms-auto mb-2 mb-lg-0 ms-2 list-inline list-unstyled">
          <li className="nav-item">
            <a className={`nav-link pe-3 ${darkMode ? 'link-light' : 'link-dark'} link-opacity-50-hover`} href="https://x.com/h2works_xyz" aria-label="Link to my X Profil Page" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M12.6 0h2.454l-5.36 6.142L16 15.2h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .8h5.063l3.495 4.633L12.6 0zm-.86 13.728h1.357L4.063 1.29H2.604l9.136 12.438z"/>
              </svg>
            </a>
          </li>
          <li className="nav-item">
            <a className={`nav-link ${darkMode ? 'link-light' : 'link-dark'} link-opacity-50-hover`} href="https://github.com/H2works/" aria-label="Link to my GitHub Profil Page" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
