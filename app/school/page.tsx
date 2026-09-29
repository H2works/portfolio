import type { Metadata } from 'next';
import Link from 'next/link';
import SchoolLayout from '@/components/school/SchoolLayout';
import SchoolCard from '@/components/school/SchoolCard';
import { getAllSchools } from '@/lib/schools';

export const metadata: Metadata = {
  title: 'アジア各国のインターナショナルスクール検索・比較ポータル | H2works School Finder',
  description: 'マレーシアをはじめとするアジア各国のインターナショナルスクールを、学費、カリキュラム（英国式・IB・アメリカ式等）、対象年齢、スクールバス、日本語サポートなどの条件から横断検索・比較できる保護者向け教育データベースポータル。',
  openGraph: {
    title: 'International School Finder | H2works',
    description: 'アジア各国のインターナショナルスクールを条件検索・詳細比較できる公式エビデンス型データベースポータル。',
    type: 'website',
  },
};

export default function SchoolPortalTop() {
  const allSchools = getAllSchools();
  const featuredSchools = allSchools.slice(0, 4);

  return (
    <SchoolLayout>
      {/* Portal Hero */}
      <section className="school-hero-section">
        <div className="container-xl px-3">
          <div className="row align-items-center g-4 g-xl-5">
            <div className="col-12 col-lg-8">
              <span className="hero-badge mb-3">
                Global Education Database Portal
              </span>
              <h1 className="hero-title mb-3">
                対象国・地域から選ぶ、<br className="d-none d-sm-inline" />
                信頼できるインターナショナルスクール検索。
              </h1>
              <p className="hero-lead mb-4">
                カリキュラム（英国・IB・米国・カナダ）、学年別学費、スクールバス運行、日本語サポートなど、保護者が本当に必要とする一次情報・原本データに基づいた教育データベースです。
              </p>

              {/* Direct Link to Malaysia Active Database */}
              <div className="d-flex flex-wrap gap-2 mb-4">
                <Link
                  href="/school/malaysia"
                  className="btn btn-light btn-lg rounded-pill px-4 fw-bold shadow-sm text-dark d-inline-flex align-items-center"
                >
                  マレーシア版を検索する（全{allSchools.length}校）
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
                  className="btn btn-outline-light btn-lg rounded-pill px-4 fw-medium"
                >
                  マレーシア校を比較する
                </Link>
              </div>

              {/* Popular Filters in Malaysia */}
              <div className="d-flex flex-wrap align-items-center gap-2 small">
                <span className="fw-semibold text-white-50">マレーシア版人気の条件:</span>
                <Link
                  href="/school/malaysia?curriculum=Cambridge"
                  className="hero-tag"
                >
                  Cambridge (ケンブリッジ)
                </Link>
                <Link
                  href="/school/malaysia?curriculum=IB"
                  className="hero-tag"
                >
                  IB (国際バカロレア)
                </Link>
                <Link
                  href="/school/malaysia?state=Kuala+Lumpur"
                  className="hero-tag"
                >
                  クアラルンプール市内
                </Link>
                <Link
                  href="/school/malaysia?state=Selangor"
                  className="hero-tag"
                >
                  セランゴール州
                </Link>
                <Link
                  href="/school/malaysia?maxBudget=40000"
                  className="hero-tag"
                >
                  年間RM40,000以下
                </Link>
              </div>
            </div>

            {/* Evidence badge desktop preview */}
            <div className="col-12 col-lg-4 d-none d-lg-block">
              <div className="p-4 rounded-4 bg-white bg-opacity-10 border border-white border-opacity-20 text-white backdrop-blur shadow-sm">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <span className="badge bg-primary px-2 py-1 small fw-semibold">
                    Data Integrity
                  </span>
                  <span className="text-white-50 small">公式エビデンス原則</span>
                </div>
                <h3 className="h6 fw-bold mb-3">信頼性を最優先した設計</h3>
                <ul className="list-unstyled small text-white-75 d-flex flex-column gap-2 mb-0">
                  <li className="d-flex align-items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#38bdf8" viewBox="0 0 16 16">
                      <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
                    </svg>
                    全校の公式原本PDFアーカイブ保存
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#38bdf8" viewBox="0 0 16 16">
                      <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
                    </svg>
                    全公式URLの死活定期監視
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#38bdf8" viewBox="0 0 16 16">
                      <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
                    </svg>
                    推測データ・広告順位の完全排除
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#38bdf8" viewBox="0 0 16 16">
                      <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
                    </svg>
                    ゾーン別バス代・給食費用の正確な区分
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Country Hub Selector */}
      <section className="py-5 bg-white border-bottom">
        <div className="container-xl px-3">
          <div className="d-flex flex-wrap align-items-end justify-content-between mb-4">
            <div>
              <span className="text-primary fw-semibold small text-uppercase tracking-wider">
                Country &amp; Region Hub
              </span>
              <h2 className="h4 fw-bold text-dark mb-1">対象国・地域を選択</h2>
              <p className="text-secondary small mb-0">
                お探しの国・地域を選択して、詳細な学校データベースにアクセスできます。
              </p>
            </div>
          </div>

          <div className="row g-4">
            {/* Malaysia (Active Edition) */}
            <div className="col-12 col-md-6 col-lg-6">
              <div className="card h-100 border-2 border-primary shadow-sm rounded-4 overflow-hidden position-relative">
                <div className="card-body p-4 d-flex flex-column justify-content-between">
                  <div>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <div className="d-flex align-items-center gap-2">
                        <span className="badge bg-primary px-3 py-2 rounded-pill small fw-bold">
                          公開中 / Active
                        </span>
                        <span className="badge bg-dark-subtle text-dark px-2 py-1 small fw-semibold">
                          MY
                        </span>
                      </div>
                      <span className="fw-bold text-primary fs-5">{allSchools.length} 校 掲載</span>
                    </div>

                    <h3 className="h5 fw-bold text-dark mb-2">
                      マレーシア（Malaysia）
                    </h3>
                    <p className="text-secondary small mb-3">
                      クアラルンプール（KL）、セランゴール、ペナン、ジョホール等の主要インターナショナルスクールを網羅。各校の学費表原本（PDF）や入学一時費用、スクールバス、英語補講（EAL）情報を完備。
                    </p>

                    <div className="bg-light rounded-3 p-3 mb-4 small">
                      <div className="row g-2 text-muted">
                        <div className="col-6">
                          <strong>主なカリキュラム:</strong><br />
                          英国式, Cambridge, IB, 米国式
                        </div>
                        <div className="col-6">
                          <strong>年間授業料の相場:</strong><br />
                          約RM 18,000 – RM 128,000
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <Link
                      href="/school/malaysia"
                      className="btn btn-primary btn-lg w-100 rounded-pill fw-bold d-flex align-items-center justify-content-center"
                    >
                      マレーシアの学校を検索する
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
                  </div>
                </div>
              </div>
            </div>

            {/* Thailand (Coming Soon) */}
            <div className="col-12 col-md-6 col-lg-6">
              <div className="card h-100 border border-secondary border-opacity-25 rounded-4 overflow-hidden bg-light-subtle">
                <div className="card-body p-4 d-flex flex-column justify-content-between opacity-75">
                  <div>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <div className="d-flex align-items-center gap-2">
                        <span className="badge bg-secondary text-white px-3 py-2 rounded-pill small fw-medium">
                          準備中 / Coming Soon
                        </span>
                        <span className="badge bg-dark-subtle text-dark px-2 py-1 small fw-semibold">
                          TH
                        </span>
                      </div>
                    </div>

                    <h3 className="h5 fw-bold text-dark mb-2">
                      タイ（Thailand / Bangkok）
                    </h3>
                    <p className="text-secondary small mb-3">
                      バンコクおよび近郊の英国式、アメリカ式、IB認定校データベースを順次整備予定です。東南アジアの教育ハブとして注目されるタイのインター校を横断検索可能にします。
                    </p>

                    <div className="bg-white rounded-3 p-3 mb-4 small border">
                      <div className="text-muted">
                        <strong>準備中の機能:</strong> バンコク日本人居住エリア別通学バス情報、年間学費比較、入学アセスメント条件
                      </div>
                    </div>
                  </div>

                  <div>
                    <button
                      type="button"
                      className="btn btn-outline-secondary btn-lg w-100 rounded-pill disabled"
                      disabled
                    >
                      準備中（近日公開）
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Singapore (Coming Soon) */}
            <div className="col-12 col-md-6 col-lg-6">
              <div className="card h-100 border border-secondary border-opacity-25 rounded-4 overflow-hidden bg-light-subtle">
                <div className="card-body p-4 d-flex flex-column justify-content-between opacity-75">
                  <div>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <div className="d-flex align-items-center gap-2">
                        <span className="badge bg-secondary text-white px-3 py-2 rounded-pill small fw-medium">
                          準備中 / Coming Soon
                        </span>
                        <span className="badge bg-dark-subtle text-dark px-2 py-1 small fw-semibold">
                          SG
                        </span>
                      </div>
                    </div>

                    <h3 className="h5 fw-bold text-dark mb-2">
                      シンガポール（Singapore）
                    </h3>
                    <p className="text-secondary small mb-3">
                      世界最高水準の教育水準を誇るシンガポールの国際校・IBワールドスクールをデータベース化予定。学費、待機リスト、バイリンガル教育対応を整理します。
                    </p>
                  </div>

                  <div>
                    <button
                      type="button"
                      className="btn btn-outline-secondary btn-md w-100 rounded-pill disabled"
                      disabled
                    >
                      準備中
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Japan (Coming Soon) */}
            <div className="col-12 col-md-6 col-lg-6">
              <div className="card h-100 border border-secondary border-opacity-25 rounded-4 overflow-hidden bg-light-subtle">
                <div className="card-body p-4 d-flex flex-column justify-content-between opacity-75">
                  <div>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <div className="d-flex align-items-center gap-2">
                        <span className="badge bg-secondary text-white px-3 py-2 rounded-pill small fw-medium">
                          準備中 / Coming Soon
                        </span>
                        <span className="badge bg-dark-subtle text-dark px-2 py-1 small fw-semibold">
                          JP
                        </span>
                      </div>
                    </div>

                    <h3 className="h5 fw-bold text-dark mb-2">
                      日本国内（Japan / Tokyo &amp; Kansai）
                    </h3>
                    <p className="text-secondary small mb-3">
                      首都圏および関西圏の老舗インターナショナルスクール、国際バカロレア（IB）認定一条校、国際系ボーディングスクールを順次追加予定です。
                    </p>
                  </div>

                  <div>
                    <button
                      type="button"
                      className="btn btn-outline-secondary btn-md w-100 rounded-pill disabled"
                      disabled
                    >
                      準備中
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights Grid */}
      <section className="py-5 bg-light-subtle border-bottom">
        <div className="container-xl px-3">
          <div className="text-center mb-5">
            <h2 className="h4 fw-bold text-dark mb-2">School Finder が選ばれる4つの理由</h2>
            <p className="text-secondary small mb-0">
              推測やAI自動生成記事を排除し、公式一次情報源に基づいて構築されています。
            </p>
          </div>

          <div className="row g-4">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="p-4 border rounded-3 h-100 bg-white shadow-xs">
                <div className="d-inline-flex align-items-center justify-content-center bg-light border rounded-2 p-2 mb-3 text-primary" style={{ width: '40px', height: '40px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0zM7 9a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0z"/>
                    <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/>
                    <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"/>
                  </svg>
                </div>
                <h3 className="h6 fw-bold text-dark mb-2">公式確認済みの学費</h3>
                <p className="text-secondary small mb-0">
                  公式サイト・公開PDF原本に基づき、学年別授業料や一時費用（出願料・登録料・デポジット）を精緻に記録。
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="p-4 border rounded-3 h-100 bg-white shadow-xs">
                <div className="d-inline-flex align-items-center justify-content-center bg-light border rounded-2 p-2 mb-3 text-primary" style={{ width: '40px', height: '40px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
                  </svg>
                </div>
                <h3 className="h6 fw-bold text-dark mb-2">公平な条件一致検索</h3>
                <p className="text-secondary small mb-0">
                  広告タイアップによる順位操作を排除。保護者が設定した年齢・地域・予算・カリキュラムに純粋に一致する学校を表示。
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="p-4 border rounded-3 h-100 bg-white shadow-xs">
                <div className="d-inline-flex align-items-center justify-content-center bg-light border rounded-2 p-2 mb-3 text-primary" style={{ width: '40px', height: '40px' }}>
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
              <div className="p-4 border rounded-3 h-100 bg-white shadow-xs">
                <div className="d-inline-flex align-items-center justify-content-center bg-light border rounded-2 p-2 mb-3 text-primary" style={{ width: '40px', height: '40px' }}>
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

      {/* Featured Schools in Malaysia */}
      <section className="py-5 bg-white">
        <div className="container-xl px-3">
          <div className="d-flex flex-wrap align-items-center justify-content-between mb-4">
            <div>
              <h2 className="h4 fw-bold text-dark mb-1">マレーシアの注目インターナショナルスクール</h2>
              <p className="text-secondary small mb-0">
                クランバレー（KL・セランゴール）の代表的な学校ピックアップ
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
              className="btn btn-primary btn-lg rounded-pill px-5 fw-bold"
            >
              マレーシアの学校を詳しく検索・絞り込む（全{allSchools.length}校）
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Continuity Banner */}
      <section className="py-5 bg-light-subtle border-top">
        <div className="container-xl px-3">
          <div className="school-brand-banner rounded-4 p-4 p-md-5 text-white position-relative overflow-hidden shadow-sm">
            <div className="row align-items-center position-relative z-1">
              <div className="col-12 col-lg-8 mb-3 mb-lg-0">
                <div className="brand-badge">
                  Developed by H2works
                </div>
                <h3 className="banner-title">
                  信頼性の高いデータ設計と、高速なWeb体験を。
                </h3>
                <p className="banner-lead">
                  当サイトは、Next.js (SSG) と構造化データ設計により、0msの快適な検索体験と公式エビデンス（原本PDF・死活監視）の両立を追求したWebプロジェクトです。
                </p>
              </div>
              <div className="col-12 col-lg-4 text-lg-end">
                <Link
                  href="/"
                  className="btn btn-light btn-md rounded-pill px-4 fw-bold shadow-sm"
                >
                  H2works トップへ戻る
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-arrow-right ms-2" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SchoolLayout>
  );
}
