import type { Metadata } from 'next';
import Link from 'next/link';
import SchoolLayout from '@/components/school/SchoolLayout';
import SchoolCard from '@/components/school/SchoolCard';
import { getAllSchools } from '@/lib/schools';

export const metadata: Metadata = {
  title: 'マレーシア インターナショナルスクール検索・比較 | H2works School Finder',
  description: 'マレーシア（クランバレー・KL・セランゴール）のインターナショナルスクールを、学費、カリキュラム（英国式・IB・アメリカ式等）、対象年齢、スクールバス、日本語サポートなどの条件から横断検索・比較できる保護者向けデータベース。',
  openGraph: {
    title: 'International School Finder Malaysia | H2works',
    description: 'マレーシアのインターナショナルスクールを条件検索・詳細比較できる保護者向けデータベース。',
    type: 'website',
  },
};

export default function SchoolPortalTop() {
  const allSchools = getAllSchools();
  // Take first 4 as featured/recent schools
  const featuredSchools = allSchools.slice(0, 4);

  return (
    <SchoolLayout>
      {/* Hero Launcher */}
      <section className="school-hero-section">
        <div className="container-xl px-3">
          <div className="row justify-content-center text-center">
            <div className="col-12 col-lg-9 col-xl-8">
              <span className="badge bg-primary-subtle text-primary fw-bold mb-3 px-3 py-2 rounded-pill">
                Malaysia / Klang Valley Edition
              </span>
              <h1 className="hero-title mb-3">
                お子さまに最適なインター校を、<br className="d-none d-sm-inline" />
                正確なデータで比較・発見。
              </h1>
              <p className="hero-lead mb-4">
                カリキュラム（英国・IB・米国・カナダ）、学年別学費、スクールバス運行エリア、日本語サポート有無など、保護者が本当に知りたい条件で比較できるデータベースです。
              </p>

              {/* Quick Search CTAs */}
              <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
                <Link
                  href="/school/malaysia"
                  className="btn btn-dark btn-lg rounded-pill px-4 fw-bold shadow-sm"
                >
                  マレーシアの学校を探す（全{allSchools.length}校）
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-right ms-2"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </Link>
                <Link
                  href="/school/compare"
                  className="btn btn-outline-secondary btn-lg rounded-pill px-4 fw-medium"
                >
                  学校を比較する
                </Link>
              </div>

              {/* Fast Tags */}
              <div className="d-flex flex-wrap justify-content-center align-items-center gap-2 small text-secondary">
                <span className="fw-semibold text-dark">人気の条件:</span>
                <Link
                  href="/school/malaysia?curriculum=Cambridge"
                  className="badge bg-light text-secondary border text-decoration-none py-2 px-3 rounded-pill"
                >
                  Cambridge (ケンブリッジ)
                </Link>
                <Link
                  href="/school/malaysia?curriculum=IB"
                  className="badge bg-light text-secondary border text-decoration-none py-2 px-3 rounded-pill"
                >
                  IB (国際バカロレア)
                </Link>
                <Link
                  href="/school/malaysia?state=Kuala+Lumpur"
                  className="badge bg-light text-secondary border text-decoration-none py-2 px-3 rounded-pill"
                >
                  クアラルンプール市内
                </Link>
                <Link
                  href="/school/malaysia?state=Selangor"
                  className="badge bg-light text-secondary border text-decoration-none py-2 px-3 rounded-pill"
                >
                  セランゴール州
                </Link>
                <Link
                  href="/school/malaysia?maxBudget=40000"
                  className="badge bg-light text-secondary border text-decoration-none py-2 px-3 rounded-pill"
                >
                  年間RM40,000以下
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights Grid */}
      <section className="py-5 bg-white border-bottom">
        <div className="container-xl px-3">
          <div className="text-center mb-5">
            <h2 className="h4 fw-bold text-dark mb-2">School Finder が選ばれる4つの理由</h2>
            <p className="text-secondary small mb-0">
              AIによる大量自動生成記事ではなく、一次情報源に基づいた信頼できるデータ設計です。
            </p>
          </div>

          <div className="row g-4">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="p-3 border rounded-3 h-100 bg-light-subtle">
                <div className="d-inline-flex align-items-center justify-content-center bg-white border rounded-2 p-2 mb-3 text-primary shadow-xs" style={{ width: '40px', height: '40px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0zM7 9a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0z"/>
                    <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/>
                    <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"/>
                  </svg>
                </div>
                <h3 className="h6 fw-bold text-dark mb-2">公式確認済みの学費</h3>
                <p className="text-secondary small mb-0">
                  公式サイト・公開PDFに基づき、年度別の学年別授業料や一時費用（出願料・登録料・デポジット）を精緻に記録。
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="p-3 border rounded-3 h-100 bg-light-subtle">
                <div className="d-inline-flex align-items-center justify-content-center bg-white border rounded-2 p-2 mb-3 text-primary shadow-xs" style={{ width: '40px', height: '40px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
                  </svg>
                </div>
                <h3 className="h6 fw-bold text-dark mb-2">公平な条件一致検索</h3>
                <p className="text-secondary small mb-0">
                  「おすすめ順」などの広告ランキングは排除。保護者が設定した年齢・地域・予算・カリキュラムに純粋に一致する学校だけを表示。
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="p-3 border rounded-3 h-100 bg-light-subtle">
                <div className="d-inline-flex align-items-center justify-content-center bg-white border rounded-2 p-2 mb-3 text-primary shadow-xs" style={{ width: '40px', height: '40px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm8.5 0v12H14a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm-1 0H2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h5.5z"/>
                  </svg>
                </div>
                <h3 className="h6 fw-bold text-dark mb-2">最大4校の横並び比較</h3>
                <p className="text-secondary small mb-0">
                  気になる学校をワンクリックでピックアップ。学費、バス送迎、日本語対応、設備などの違いをひと目で比較可能。
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="p-3 border rounded-3 h-100 bg-light-subtle">
                <div className="d-inline-flex align-items-center justify-content-center bg-white border rounded-2 p-2 mb-3 text-primary shadow-xs" style={{ width: '40px', height: '40px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.54 4.88-3.75 3.75a.75.75 0 0 1-1.06 0L4.22 8.02a.75.75 0 0 1 1.06-1.06l1.04 1.04 3.22-3.22a.75.75 0 0 1 1.06 1.06z"/>
                  </svg>
                </div>
                <h3 className="h6 fw-bold text-dark mb-2">情報源と確認日の明記</h3>
                <p className="text-secondary small mb-0">
                  各学校ページに公式一次ソースURLと最終確認年月（Last verified）を明記し、透明性を徹底しています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured / Popular Schools */}
      <section className="py-5">
        <div className="container-xl px-3">
          <div className="d-flex flex-wrap align-items-center justify-content-between mb-4">
            <div>
              <h2 className="h4 fw-bold text-dark mb-1">注目のインターナショナルスクール</h2>
              <p className="text-secondary small mb-0">
                クランバレー（KL・セランゴール）の主要校ピックアップ
              </p>
            </div>
            <Link
              href="/school/malaysia"
              className="btn btn-outline-dark btn-sm rounded-pill px-3 mt-2 mt-sm-0"
            >
              すべての学校を見る（{allSchools.length}校） →
            </Link>
          </div>

          <div className="row g-3">
            {featuredSchools.map((school) => (
              <div key={school.id} className="col-12">
                <SchoolCard school={school} />
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <Link
              href="/school/malaysia"
              className="btn btn-dark btn-lg rounded-pill px-5 fw-bold"
            >
              条件を指定して学校を検索する
            </Link>
          </div>
        </div>
      </section>
    </SchoolLayout>
  );
}
