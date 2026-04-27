'use client';

import Link from 'next/link';

interface FooterProps {
  darkMode?: boolean;
}

export default function Footer({ darkMode }: FooterProps) {
  return (
    <div className="row d-flex justify-content-between small">
      <div className="col-12 col-md-auto d-flex justify-content-center">
        <ul className={`nav ${darkMode ? 'bg-black' : 'bg-light'} rounded px-3`}>
          <li className="nav-item">
            <Link href="/" className={`nav-link ${darkMode ? 'link-light' : 'link-dark'} px-0`} aria-label="ホーム">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-fill" viewBox="0 0 16 16">
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z"/>
                <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z"/>
              </svg>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/aboutme" className={`nav-link ${darkMode ? 'link-light' : 'link-dark'}`}>About</Link>
          </li>
          <li className="nav-item">
            <Link href="/imprint" className={`nav-link ${darkMode ? 'link-light' : 'link-dark'}`}>利用規約</Link>
          </li>
          <li className="nav-item">
            <Link href="/contact" className={`nav-link ${darkMode ? 'link-light' : 'link-dark'}`}>お問い合わせ</Link>
          </li>
        </ul>
      </div>
      <div className="col-12 col-md text-center text-md-end py-2">
        © H2works
      </div>
    </div>
  );
}
