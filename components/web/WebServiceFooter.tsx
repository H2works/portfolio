import Link from 'next/link';

export default function WebServiceFooter() {
  return (
    <footer className="lp-footer">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-12 col-md-6 text-center text-md-start">
            <div className="d-flex align-items-center justify-content-center justify-content-md-start mb-2">
              <span className="fs-5 fw-bold text-white">H2works</span>
              <span className="text-secondary ms-2 small">Web Studio</span>
            </div>
            <p className="text-secondary mb-0" style={{ fontSize: '0.9375rem' }}>
              中小企業・個人事業主のためのWebサイト制作・高速化・保守サポート
            </p>
          </div>

          <div className="col-12 col-md-6 text-center text-md-end">
            <div className="d-flex flex-wrap justify-content-center justify-content-md-end gap-3" style={{ fontSize: '0.9375rem' }}>
              <Link href="/">ホーム</Link>
              <Link href="/web/blog">技術ブログ</Link>
              <Link href="/aboutme">運営者情報</Link>
              <Link href="/imprint">利用規約・プライバシー</Link>
              <Link href="/legal">特定商取引法</Link>
              <Link href="/contact">お問い合わせ</Link>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-3 text-center text-secondary" style={{ fontSize: '0.875rem' }}>
          © {new Date().getFullYear()} H2works. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
