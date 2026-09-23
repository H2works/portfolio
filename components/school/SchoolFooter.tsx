import Link from 'next/link';

export default function SchoolFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="school-footer">
      <div className="container-xl px-3">
        <div className="row g-4 mb-4">
          {/* Brand Info */}
          <div className="col-12 col-md-4">
            <div className="d-flex align-items-center mb-2">
              <span className="fw-bold fs-5 text-dark">H2works</span>
              <span className="text-secondary ms-2 small">International School Finder</span>
            </div>
            <p className="text-secondary small mb-3">
              マレーシア（クランバレー・KL・セランゴール）のインターナショナルスクールを、学費・カリキュラム・対象年齢・設備など保護者目線の条件から比較・検索できるデータベースです。
            </p>
            <div className="d-flex gap-2">
              <Link href="/" className="btn btn-sm btn-outline-dark rounded-pill">
                H2works Portfolio
              </Link>
              <Link href="/web/blog" className="btn btn-sm btn-outline-secondary rounded-pill">
                Tech Blog
              </Link>
            </div>
          </div>

          {/* Quick Links: Locations */}
          <div className="col-6 col-md-2">
            <h6 className="footer-heading">対象地域</h6>
            <ul className="list-unstyled mb-0">
              <li>
                <Link href="/school/malaysia" className="footer-link">
                  マレーシア全校
                </Link>
              </li>
              <li>
                <Link href="/school/malaysia?state=Kuala+Lumpur" className="footer-link">
                  クアラルンプール (KL)
                </Link>
              </li>
              <li>
                <Link href="/school/malaysia?state=Selangor" className="footer-link">
                  セランゴール州
                </Link>
              </li>
              <li>
                <Link href="/school/malaysia?area=Mont+Kiara" className="footer-link">
                  モントキアラ
                </Link>
              </li>
              <li>
                <Link href="/school/malaysia?area=Subang" className="footer-link">
                  スバン / サンウェイ
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links: Curricula */}
          <div className="col-6 col-md-3">
            <h6 className="footer-heading">カリキュラム別</h6>
            <ul className="list-unstyled mb-0">
              <li>
                <Link href="/school/malaysia?curriculum=British" className="footer-link">
                  イギリス式 (British / Cambridge)
                </Link>
              </li>
              <li>
                <Link href="/school/malaysia?curriculum=IB" className="footer-link">
                  国際バカロレア (IB)
                </Link>
              </li>
              <li>
                <Link href="/school/malaysia?curriculum=American" className="footer-link">
                  アメリカ式 (American)
                </Link>
              </li>
              <li>
                <Link href="/school/malaysia?curriculum=Canadian" className="footer-link">
                  カナダ式 (Canadian / OSSD)
                </Link>
              </li>
              <li>
                <Link href="/school/malaysia?curriculum=Australian" className="footer-link">
                  オーストラリア式 (Australian / HSC)
                </Link>
              </li>
            </ul>
          </div>

          {/* Services & Contact */}
          <div className="col-12 col-md-3">
            <h6 className="footer-heading">サービス</h6>
            <ul className="list-unstyled mb-3">
              <li>
                <Link href="/school/malaysia" className="footer-link">
                  学校を探す
                </Link>
              </li>
              <li>
                <Link href="/school/compare" className="footer-link">
                  学校を比較する
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
          <strong>【情報に関する免責事項】</strong><br />
          当サイトに掲載されている学費、入学条件、カリキュラム等の情報は各校公式サイトおよび公開資料に基づいて調査・確認しておりますが、各学校の方針改定により予告なく変更される場合があります。正確な最新情報については、必ず各学校の公式サイトまたはアドミッション窓口へ直接お問い合わせください。
        </div>

        {/* Copyright */}
        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center pt-3 border-top text-secondary small">
          <div>&copy; {currentYear} H2works. All rights reserved.</div>
          <div className="mt-2 mt-sm-0">
            <span className="me-3">Malaysia International School Database</span>
            <Link href="/" className="text-secondary text-decoration-none hover-dark">
              h2works.xyz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
