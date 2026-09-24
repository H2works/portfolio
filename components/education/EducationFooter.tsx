import Link from 'next/link';
import { EDUCATION_CATEGORIES } from '@/lib/educationCategories';

export default function EducationFooter() {
  return (
    <footer className="education-footer">
      <div className="container-xl px-3">
        <div className="row g-4 mb-4">
          {/* Brand Col */}
          <div className="col-12 col-lg-4">
            <Link href="/education" className="text-decoration-none">
              <span className="fw-bold fs-5 text-dark">H2works</span>
              <span className="ms-2 badge bg-primary-subtle text-primary fw-semibold">Education Media</span>
            </Link>
            <p className="text-muted small mt-2 mb-3 lh-base">
              海外教育、マレーシアのインターナショナルスクール、通信制高校の活用法や大学進学など、多様化する進路選択のための実践的な情報をお届けします。
            </p>
            <div className="d-flex align-items-center gap-3">
              <a
                href="https://x.com/h2works_xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary"
                aria-label="X (Twitter)"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                  <path d="M12.6 0h2.454l-5.36 6.142L16 15.2h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .8h5.063l3.495 4.633L12.6 0zm-.86 13.728h1.357L4.063 1.29H2.604l9.136 12.438z"/>
                </svg>
              </a>
              <a
                href="https://github.com/H2works/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary"
                aria-label="GitHub"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Categories Col */}
          <div className="col-6 col-lg-4">
            <h4 className="footer-heading">テーマ別カテゴリー</h4>
            <ul className="list-unstyled m-0">
              {EDUCATION_CATEGORIES.map((cat) => (
                <li key={cat.slug}>
                  <Link href={`/education/${cat.slug}`} className="footer-link">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Related Portals Col */}
          <div className="col-6 col-lg-4">
            <h4 className="footer-heading">関連サービス・リンク</h4>
            <ul className="list-unstyled m-0">
              <li>
                <Link href="/school" className="footer-link fw-semibold text-primary">
                  マレーシア インター校検索・比較 ↗
                </Link>
              </li>
              <li>
                <Link href="/school/compare" className="footer-link">
                  学校比較テーブル
                </Link>
              </li>
              <li>
                <Link href="/web/blog" className="footer-link">
                  Web制作・技術ブログ
                </Link>
              </li>
              <li>
                <Link href="/" className="footer-link">
                  H2works ポートフォリオ Top
                </Link>
              </li>
              <li>
                <Link href="/contact" className="footer-link">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="disclaimer-box mb-4">
          <strong>免責事項：</strong>
          当メディアに掲載されているビザ要件、教育制度、各学校の募集要項や学費・カリキュラム等は記事執筆時点の調査情報です。制度の改定や学校の方針変更が行われる場合があるため、最新の正確な情報は必ず各国政府関係機関や各教育機関の公式発表をご確認ください。
        </div>

        {/* Copyright */}
        <div className="border-top pt-3 text-center text-muted small">
          &copy; {new Date().getFullYear()} H2works. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
