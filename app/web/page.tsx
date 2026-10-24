import type { Metadata } from 'next';
import Link from 'next/link';
import WebServiceHeader from '@/components/web/WebServiceHeader';
import WebServiceFooter from '@/components/web/WebServiceFooter';
import WebServiceContactForm from '@/components/web/WebServiceContactForm';

export const metadata: Metadata = {
  title: '放置WordPress・ノーコードからの静的化乗り換え・Web制作 | H2works',
  description: '放置されたWordPressの脆弱性や、毎月払い続けるノーコードツールの固定費にお困りの方へ。既存サイトの静的化は初期5万円から。月額0円（都度見積もり）または月額500円で簡単な修正対応。攻撃する場所のない静的HTMLで安心運用を実現します。',
  alternates: {
    canonical: '/web',
  },
  openGraph: {
    title: '放置WordPress・ノーコードからの静的化乗り換え・Web制作 | H2works',
    description: '放置されたWordPressの脆弱性やノーコードツールの月額費用を解消。「攻撃する場所のない静的HTML」で初期5万円、維持費0円〜500円/月で安心運用。',
    type: 'website',
    url: 'https://www.h2works.xyz/web',
  },
};

export default function WebServicePage() {
  return (
    <div className="web-service-lp">
      <WebServiceHeader />

      <main>
        {/* ============================================================ */}
        {/* HERO SECTION                                                 */}
        {/* ============================================================ */}
        <section className="hero-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-lg-8" data-aos="fade-up">
                <div className="hero-badge">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-shield-lock" viewBox="0 0 16 16">
                    <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"/>
                    <path d="M9.5 6.5a1.5 1.5 0 0 1-1.5 1.5v-1a.5.5 0 0 0-1 0v1A1.5 1.5 0 0 1 5.5 6.5a1.5 1.5 0 0 1 3 0z"/>
                  </svg>
                  <span>WordPress / ノーコードツール 乗り換え・刷新</span>
                </div>

                <h1 className="hero-title">
                  放置したWordPress・毎月高いノーコードツールから、
                  <span className="text-highlight">「攻撃する場所がない・壊れない・安い」Webサイトへ</span>
                </h1>

                <p className="hero-lead">
                  昔作ったWordPressの脆弱性が怖い…、ノーコードツール（WixやJimdo等）の有料プラン代をなんとなく払い続けている…。
                  H2worksでは、既存サイトを「ただの静的HTML」へ変換してサーバーレス配信。
                  ハッカーが狙う裏口（管理画面やデータベース）をネット上から完全に無くすため、<strong>放置しても絶対に改ざんされず、一瞬でパッと開き、初期5万円・維持費0円〜</strong>で運用できます。
                </p>

                <div className="hero-cta-group">
                  <a
                    href="#contact"
                    className="btn btn-primary px-4 py-3 fw-bold shadow-sm d-inline-flex align-items-center"
                    style={{ backgroundColor: '#2563eb', borderColor: '#2563eb' }}
                  >
                    <span>無料相談・サイト診断を依頼する</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right ms-2" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>
                  </a>
                  <a
                    href="#pricing"
                    className="btn btn-outline-dark px-4 py-3 fw-semibold d-inline-flex align-items-center"
                  >
                    <span>料金プランを見る（初期5万円〜）</span>
                  </a>
                </div>

                <div className="hero-features">
                  <div className="feature-pill">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-shield-check" viewBox="0 0 16 16">
                      <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"/>
                      <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                    </svg>
                    <span>攻撃対象が存在しない（改ざん・乗っ取りゼロ）</span>
                  </div>
                  <div className="feature-pill">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-coin" viewBox="0 0 16 16">
                      <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.612 1.707l.398.098v2.04c-.602-.073-1.003-.393-1.074-.89H5.5zm1.5-3.328c0-.528.388-.846 1-.926v1.942l-.292-.073c-.456-.112-.708-.415-.708-.943zm1.6 4.316V8.528l.383.098c.504.122.756.419.756.914 0 .54-.427.876-1.139.923z"/>
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    </svg>
                    <span>初期5万円・月額維持費0円〜で大幅削減</span>
                  </div>
                  <div className="feature-pill">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lightning-charge" viewBox="0 0 16 16">
                      <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/>
                    </svg>
                    <span>ただのHTMLだから一瞬でパッと開く</span>
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-4 mt-4 mt-lg-0" data-aos="fade-left">
                <div className="card border shadow-sm p-4 bg-white rounded-3">
                  <div className="d-flex align-items-center mb-3">
                    <span className="badge bg-danger text-white px-2 py-1 small me-2">Warning</span>
                    <span className="small text-secondary fw-semibold">WordPress放置の危険度</span>
                  </div>
                  <p className="small text-secondary mb-3 lh-base">
                    世界中のハッカーは、更新されていない古いWordPressの「ログイン画面」や「古いプラグイン」を自動巡回で攻撃しています。乗っ取られて詐欺サイトへリダイレクトされる前に、安全な静的サイトへの移行をおすすめします。
                  </p>
                  <div className="p-3 bg-light rounded small border">
                    <div className="fw-semibold text-dark mb-1">現在のサイト、安全ですか？</div>
                    <div className="text-secondary mb-2">「うちのサイトは大丈夫？」という無料診断だけでもお気軽にどうぞ。</div>
                    <a href="#contact" className="btn btn-sm btn-dark w-100 fw-semibold">
                      サイトの無料診断を依頼する
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* PROBLEM SECTION                                              */}
        {/* ============================================================ */}
        <section className="section-padding problem-section" id="problem">
          <div className="container">
            <div className="section-header" data-aos="fade-up">
              <span className="section-eyebrow">Current Pain Points</span>
              <h2 className="section-title">こんな「モヤモヤ」を抱えていませんか？</h2>
              <p className="section-subtitle">
                昔作ったまま放置されているサイトや、何となく契約している有料ノーコードツールには、多くのムダと危険が潜んでいます。
              </p>
            </div>

            <div className="row g-3">
              <div className="col-12 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100">
                <div className="problem-card">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-circle problem-icon" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                  </svg>
                  <p className="problem-text">
                    何年も前に作ったWordPressを放置しており、アップデートすると画面が真っ白に壊れそうで怖い
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="150">
                <div className="problem-card">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-circle problem-icon" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                  </svg>
                  <p className="problem-text">
                    脆弱性やハッキング対策が必要と聞くが、専門知識がないため何をすればいいか分からない
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="200">
                <div className="problem-card">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-circle problem-icon" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                  </svg>
                  <p className="problem-text">
                    WixやJimdoの有料プラン代（月2,000〜4,000円 / 年数万円）をなんとなく払い続けている
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="250">
                <div className="problem-card">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-circle problem-icon" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                  </svg>
                  <p className="problem-text">
                    WixやJimdoで作ったサイトの表示がモッサリ重く、スマホで開くのに時間がかかる
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="300">
                <div className="problem-card">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-circle problem-icon" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                  </svg>
                  <p className="problem-text">
                    制作会社に相談したら「月々のWordPress保守費用として1万〜3万円」と言われ高すぎる
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="350">
                <div className="problem-card">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-circle problem-icon" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                  </svg>
                  <p className="problem-text">
                    休業日や営業時間をたまに変える程度なのに、なぜこんなに維持費がかかるのか納得がいかない
                  </p>
                </div>
              </div>
            </div>

            <div className="solution-banner" data-aos="fade-up">
              <h3 className="solution-title">
                その悩み、「静的HTML生成 ＋ サーバーレス配信」ですべて解決します。
              </h3>
              <p className="solution-desc">
                ハッカーが侵入する「裏口」をネット上に置かない最新の仕組みへ乗り換えることで、
                セキュリティ対策がそもそも不要になり、毎月のサーバー代・有料ツール代も激減します。
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* HOW IT WORKS / SECURITY MECHANISM                            */}
        {/* ============================================================ */}
        <section className="section-padding mechanism-section" id="security">
          <div className="container">
            <div className="section-header" data-aos="fade-up">
              <span className="section-eyebrow">Zero Vulnerability</span>
              <h2 className="section-title">なぜ「静的HTML」なら絶対に攻撃されないのか？</h2>
              <p className="section-subtitle">
                「セキュリティ対策を頑張る」のではなく、「攻撃できる場所そのものを無くす」という根本的な解決策です。
              </p>
            </div>

            <div className="row g-4">
              <div className="col-12 col-md-6" data-aos="fade-up" data-aos-delay="100">
                <div className="mechanism-box danger-side">
                  <span className="mechanism-badge">従来のWordPress（放置状態）</span>
                  <h3 className="mechanism-title">常にハッカーから狙われる仕組み</h3>
                  <ul className="mechanism-list">
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ea580c" className="bi bi-exclamation-triangle" viewBox="0 0 16 16">
                        <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/>
                        <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"/>
                      </svg>
                      <span><strong>ネット上にログイン画面とデータベースが常に露出</strong>しており、不正アクセスの標的にされやすい。</span>
                    </li>
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ea580c" className="bi bi-exclamation-triangle" viewBox="0 0 16 16">
                        <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/>
                        <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"/>
                      </svg>
                      <span>更新をサボると<strong>古いプラグインの脆弱性からサイトを改ざん</strong>され、スパムメールの送信台に悪用される。</span>
                    </li>
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ea580c" className="bi bi-exclamation-triangle" viewBox="0 0 16 16">
                        <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/>
                        <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"/>
                      </svg>
                      <span>訪問者がアクセスするたびにサーバー内で重い処理が走り、<strong>表示が遅くサーバーダウンしやすい</strong>。</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-12 col-md-6" data-aos="fade-up" data-aos-delay="200">
                <div className="mechanism-box safe-side">
                  <span className="mechanism-badge">H2worksの静的Web（最新Next.js）</span>
                  <h3 className="mechanism-title">攻撃する場所そのものがない仕組み</h3>
                  <ul className="mechanism-list">
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#16a34a" className="bi bi-shield-check" viewBox="0 0 16 16">
                        <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"/>
                        <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                      </svg>
                      <span>ネット上には<strong>「完成したただのHTMLファイル」</strong>を配るだけ。裏口（ログイン画面やDB）が物理的に存在しません。</span>
                    </li>
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#16a34a" className="bi bi-shield-check" viewBox="0 0 16 16">
                        <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"/>
                        <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                      </svg>
                      <span>侵入できる隙がないため、<strong>放置しても改ざん・乗っ取りのリスクはゼロ</strong>。面倒なセキュリティ更新も不要です。</span>
                    </li>
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#16a34a" className="bi bi-shield-check" viewBox="0 0 16 16">
                        <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"/>
                        <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                      </svg>
                      <span>サーバー側で計算しないため、<strong>スマホでも一瞬でパッと開く驚異的な軽さ</strong>を実現します。</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* COMPARISON TABLE SECTION                                     */}
        {/* ============================================================ */}
        <section className="section-padding comparison-section" id="comparison">
          <div className="container">
            <div className="section-header" data-aos="fade-up">
              <span className="section-eyebrow">Comparison</span>
              <h2 className="section-title">WordPress・Wix/Jimdo との徹底比較</h2>
              <p className="section-subtitle">
                「安全性」「月々の固定費」「表示スピード」の違いを一目でご確認ください。
              </p>
            </div>

            <div className="comparison-table-wrapper" data-aos="fade-up">
              <table className="table align-middle">
                <thead>
                  <tr>
                    <th style={{ width: '22%' }}>比較項目</th>
                    <th style={{ width: '26%' }}>従来のWordPress（放置）</th>
                    <th style={{ width: '26%' }}>Wix / Jimdo（有料版）</th>
                    <th className="highlight-col" style={{ width: '26%' }}>H2worksの静的Web</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="fw-bold">セキュリティ・改ざんリスク</td>
                    <td className="text-danger fw-semibold">極めて危険<br /><span className="small text-secondary fw-normal">古いプラグイン等から侵入されやすい</span></td>
                    <td>普通<br /><span className="small text-secondary">運営元任せだが乗っ取りリスクは低め</span></td>
                    <td className="highlight-col text-primary fw-bold">攻撃場所がないため安全<br /><span className="small text-secondary fw-normal">ログイン画面やDBがネット上に存在しない</span></td>
                  </tr>
                  <tr>
                    <td className="fw-bold">毎月の固定費（維持費）</td>
                    <td>レンタルサーバー代<br /><span className="small text-secondary">月1,000円〜2,000円 ＋ 保守費用</span></td>
                    <td className="text-danger fw-semibold">月額サブスクが高い<br /><span className="small text-secondary">月2,000〜4,000円（年間2〜5万円）</span></td>
                    <td className="highlight-col text-primary fw-bold">月額0円 または 月500円<br /><span className="small text-secondary fw-normal">サーバーレス配信のため固定費が激減</span></td>
                  </tr>
                  <tr>
                    <td className="fw-bold">スマホでの表示スピード</td>
                    <td>普通〜重い<br /><span className="small text-secondary">プラグイン多数でモッサリしがち</span></td>
                    <td className="text-danger fw-semibold">重くなりやすい<br /><span className="small text-secondary">ノーコード特有の余分な読込で遅い</span></td>
                    <td className="highlight-col text-primary fw-bold">一瞬でパッと開く<br /><span className="small text-secondary fw-normal">ただのHTMLだから最高クラスの速さ</span></td>
                  </tr>
                  <tr>
                    <td className="fw-bold">壊れるリスク・メンテ手間</td>
                    <td className="text-danger fw-semibold">更新で壊れる恐怖<br /><span className="small text-secondary">アップデートで画面が崩れるリスク</span></td>
                    <td>仕様変更に左右される<br /><span className="small text-secondary">勝手な値上げやUI変更への対応</span></td>
                    <td className="highlight-col text-primary fw-bold">壊れる概念がない<br /><span className="small text-secondary fw-normal">完全放置でOK。アップデート作業不要</span></td>
                  </tr>
                  <tr>
                    <td className="fw-bold">デザイン・機能の自由度</td>
                    <td>高いが崩れやすい</td>
                    <td>制限が多い（枠から外せない）</td>
                    <td className="highlight-col text-primary fw-bold">自由自在（エンジニア直設計）</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* FEATURES SECTION                                             */}
        {/* ============================================================ */}
        <section className="section-padding features-section" id="features">
          <div className="container">
            <div className="section-header" data-aos="fade-up">
              <span className="section-eyebrow">H2works Advantage</span>
              <h2 className="section-title">H2worksが選ばれる4つの強み</h2>
              <p className="section-subtitle">
                「安全・速い・安い」をすべて同時に成立させられる理由があります。
              </p>
            </div>

            <div className="row g-4">
              <div className="col-12 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="100">
                <div className="feature-box">
                  <div className="feature-icon-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-shield-check" viewBox="0 0 16 16">
                      <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"/>
                      <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                    </svg>
                  </div>
                  <div className="feature-number">Point 01</div>
                  <h3 className="feature-title">攻撃する場所がない究極の安全性</h3>
                  <p className="feature-desc">
                    WordPressのように侵入できる裏口（管理画面やDB）がネット上に存在しません。ハッカーから狙われる余地がないため、放置していても改ざんや乗っ取りのリスクはゼロです。
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="200">
                <div className="feature-box">
                  <div className="feature-icon-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-wallet2" viewBox="0 0 16 16">
                      <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z"/>
                      <path d="M16 8H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h7V8z"/>
                    </svg>
                  </div>
                  <div className="feature-number">Point 02</div>
                  <h3 className="feature-title">毎月の固定費・維持費を激減</h3>
                  <p className="feature-desc">
                    世界最先端のサーバーレス配信（Cloudflare等）を利用するため、サーバー代は実質0円。WixやJimdoに払い続けていた毎月のサブスク代を今すぐ浮かせられます。
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="300">
                <div className="feature-box">
                  <div className="feature-icon-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-lightning-charge" viewBox="0 0 16 16">
                      <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/>
                    </svg>
                  </div>
                  <div className="feature-number">Point 03</div>
                  <h3 className="feature-title">ただのHTMLだから一瞬でパッと開く</h3>
                  <p className="feature-desc">
                    WordPressやノーコードのようにアクセス時にサーバー側で重い計算を行いません。完成済みのHTMLを即座に返すだけなので、スマホでも待たされずに瞬時に画面が表示されます。
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="400">
                <div className="feature-box">
                  <div className="feature-icon-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-repeat" viewBox="0 0 16 16">
                      <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
                      <path fillRule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
                    </svg>
                  </div>
                  <div className="feature-number">Point 04</div>
                  <h3 className="feature-title">既存サイトの文章・画像そのまま移行OK</h3>
                  <p className="feature-desc">
                    「今のWordPressやWixの文章・写真をそのまま活かして静的化したい」「独自ドメインもそのまま引き継ぎたい」というご要望も丸投げOK。エンジニアが安全に移管します。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* WORKS / EVIDENCE SECTION                                     */}
        {/* ============================================================ */}
        <section className="section-padding works-section" id="works">
          <div className="container">
            <div className="section-header" data-aos="fade-up">
              <span className="section-eyebrow">Proven Experience</span>
              <h2 className="section-title">自社開発プロダクトの実績・エビデンス</h2>
              <p className="section-subtitle">
                理論だけでなく、自らサービスを開発し、日夜運用・改善している現役エンジニアだからこそ作れる品質があります。
              </p>
            </div>

            <div className="row g-4">
              <div className="col-12 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100">
                <div className="work-card">
                  <div className="work-header">
                    <span className="work-tag">自社Webポータル</span>
                    <span className="work-tech">Next.js / サーバーレス</span>
                  </div>
                  <div className="work-body">
                    <h3 className="work-title">
                      <Link href="/school/malaysia">International School Finder</Link>
                    </h3>
                    <p className="work-desc">
                      マレーシアのインター校検索・比較ポータル。膨大な学校原本データを管理しながら、ミリ秒単位の超高速絞り込みを実現。
                    </p>
                    <ul className="work-points">
                      <li>0msの超高速クライアントサイド絞り込み</li>
                      <li>URL死活監視・原本PDF自動収集の自動化</li>
                      <li>スマホ完全最適化・高い操作性</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="200">
                <div className="work-card">
                  <div className="work-header">
                    <span className="work-tag">情報メディア</span>
                    <span className="work-tech">SEO / コンテンツ設計</span>
                  </div>
                  <div className="work-body">
                    <h3 className="work-title">
                      <a href="https://casinoasobi.com/" target="_blank" rel="noopener noreferrer">casinoasobi</a>
                    </h3>
                    <p className="work-desc">
                      海外実店舗カジノ情報メディア。大量の記事コンテンツを整理し、スマホでの閲覧性と検索上位化を両立。
                    </p>
                    <ul className="work-points">
                      <li>検索上位を獲得するSEO内部構造</li>
                      <li>読みやすく離脱を防ぐタイポグラフィ</li>
                      <li>軽快なページ遷移と低データ通信量</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="300">
                <div className="work-card">
                  <div className="work-header">
                    <span className="work-tag">UIコンポーネント集</span>
                    <span className="work-tech">モダンCSS / テンプレート</span>
                  </div>
                  <div className="work-body">
                    <h3 className="work-title">
                      <a href="https://template-library.h2works.xyz/" target="_blank" rel="noopener noreferrer">Template Library</a>
                    </h3>
                    <p className="work-desc">
                      Web制作のスピードと再現性を高めるためのUIライブラリ。高品質なデザインパターンを体系的に蓄積。
                    </p>
                    <ul className="work-points">
                      <li>短納期でも高い完成度を維持する制作基盤</li>
                      <li>アクセシビリティを考慮したモダン設計</li>
                      <li>デバイスを選ばない堅牢なレスポンシブ</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* PRICING PLANS SECTION                                        */}
        {/* ============================================================ */}
        <section className="section-padding pricing-section" id="pricing">
          <div className="container">
            <div className="section-header" data-aos="fade-up">
              <span className="section-eyebrow">Clear Pricing</span>
              <h2 className="section-title">明朗会計な料金プラン（初期費用と運用費）</h2>
              <p className="section-subtitle">
                初期費用と月々のランニングコストを完全に分離し、不要な費用が一切発生しない透明な料金体系をとっています。
              </p>
            </div>

            {/* -------------------------------------------------------- */}
            {/* 1. 初期費用 (INITIAL COST)                                */}
            {/* -------------------------------------------------------- */}
            <div className="mb-5" data-aos="fade-up">
              <div className="pricing-category-title">
                <span className="badge-category badge-initial">Initial Cost</span>
                <span>初期費用（制作・お引越し費用）</span>
              </div>

              <div className="row g-4 align-items-stretch">
                {/* 基本プラン: 既存サイトの静的化 */}
                <div className="col-12 col-lg-6">
                  <div className="main-initial-card">
                    <div className="plan-badge">基本プラン</div>
                    <div className="plan-name">既存サイトの静的化</div>
                    <div className="plan-summary">
                      現在のWordPressやWix、Jimdoなどの既存デザインをベースに、同じ内容・構成で安全な静的HTMLへお引越しします。
                    </div>
                    <div className="plan-price-wrapper">
                      <div className="plan-price">
                        ¥50,000<span className="tax-note">（税抜 / 買い切り）</span>
                      </div>
                      <div className="plan-period">納期目安: 約1〜2週間</div>
                    </div>
                    <ul className="plan-features">
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-lg" viewBox="0 0 16 16">
                          <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                        </svg>
                        <span>既存デザインをベースに同じ内容・構成で静的HTMLへ移行</span>
                      </li>
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-lg" viewBox="0 0 16 16">
                          <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                        </svg>
                        <span>攻撃対象（裏口）をなくし、改ざん・乗っ取りリスクをゼロに</span>
                      </li>
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-lg" viewBox="0 0 16 16">
                          <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                        </svg>
                        <span>お問い合わせ方法は<strong>「メールアドレスを公開する形」</strong>（mailtoリンクやアドレス記載）</span>
                      </li>
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-lg" viewBox="0 0 16 16">
                          <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                        </svg>
                        <span>既存の独自ドメイン引き継ぎ・DNS設定サポート込み</span>
                      </li>
                    </ul>
                    <div className="plan-disclaimer">
                      ※まったく同じデザインを100%保証するものではありません（崩れやすい古いコードや過剰なアニメーションを整理し、最新ブラウザやスマホに最適化して再現します）。
                    </div>
                    <a href="#contact" className="btn btn-primary w-100 py-3 fw-bold" style={{ backgroundColor: '#2563eb', borderColor: '#2563eb' }}>
                      この基本プランで相談する（5万円）
                    </a>
                  </div>
                </div>

                {/* オプション群 */}
                <div className="col-12 col-lg-6">
                  <div className="d-flex flex-column gap-3 h-100 justify-content-between">
                    {/* オプション1: オリジナルデザイン */}
                    <div className="option-card">
                      <div className="option-header">
                        <span className="option-tag">オプション</span>
                        <div className="option-price">＋¥100,000<span className="small text-muted fw-normal">（税抜）</span></div>
                      </div>
                      <div className="option-title">オリジナルデザイン刷新</div>
                      <div className="option-desc">
                        「古いサイトの見た目も一新して、今風の洗練されたコーポレートデザインにしたい」という方向け。型にはまらない完全オリジナルのモダンなデザインを設計・実装します。
                      </div>
                      <div className="option-note">
                        スマホ・タブレットでの見やすさやタイポグラフィ、信頼感を高めるレイアウトに全面刷新します。
                      </div>
                    </div>

                    {/* オプション2: 問い合わせフォーム設定 */}
                    <div className="option-card">
                      <div className="option-header">
                        <span className="option-tag">オプション</span>
                        <div className="option-price">＋¥50,000<span className="small text-muted fw-normal">（税抜）</span></div>
                      </div>
                      <div className="option-title">Web問い合わせフォーム設定</div>
                      <div className="option-desc">
                        メールアドレス公開ではなく、Webサイト上のフォームから直接送信できるように設定します。APIで安全に受け取り、ご指定のメールアドレスへ即座に自動転送する形式です。
                      </div>
                      <div className="option-note text-primary fw-semibold">
                        ※安全なAPI経由での転送・スパム防止インフラ費用として、別途 <strong>＋500円 / 月（税抜）</strong> がかかります。
                      </div>
                    </div>

                    {/* オプション3: お知らせ・News定期更新（ヘッドレスCMS） */}
                    <div className="option-card">
                      <div className="option-header">
                        <span className="option-tag">オプション</span>
                        <div className="option-price">＋¥200,000〜<span className="small text-muted fw-normal">（税抜）</span></div>
                      </div>
                      <div className="option-title">お知らせ・News定期更新（ヘッドレスCMS連携）</div>
                      <div className="option-desc">
                        お知らせやNewsなどの定期更新記事をご自身で手軽に投稿できる仕組みを構築します。完全静的配信（フルSSG）を前提とし、安全な専用管理画面（microCMS等）からPC・スマホで直感的に記事を公開できます。
                      </div>
                      <div className="option-note">
                        ※フルSSG環境で安全・高速に動作させるため、記事検索機能（デプロイ時の静的JSONインデックス生成とブラウザ即時検索）やカテゴリ絞り込み機能の有無によって金額が変動します（要お見積り）。
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* -------------------------------------------------------- */}
            {/* 2. ランニングコスト (RUNNING COST)                        */}
            {/* -------------------------------------------------------- */}
            <div className="pt-4" data-aos="fade-up">
              <div className="pricing-category-title">
                <span className="badge-category badge-running">Running Cost</span>
                <span>ランニングコスト（月々の維持・運用費）</span>
              </div>

              <div className="row g-4 align-items-stretch">
                {/* 運用プランA: 月額0円 */}
                <div className="col-12 col-md-6">
                  <div className="running-card">
                    <span className="running-badge badge-zero">プランA</span>
                    <div className="running-title">完全無料・月額0円プラン</div>
                    <div className="running-price-wrap">
                      <div className="running-price">
                        ¥0<span className="tax-note"> / 月</span>
                      </div>
                    </div>
                    <p className="running-desc">
                      「基本は放置でOK。固定費を一切かけたくない」という事業者様向け。
                      サーバーレス配信のため毎月のサーバー代はかかりません。サイトの文言や画像修正が必要になった場合のみ、<strong>都度お見積もり（数千円〜の単発対応）</strong>にて承ります。
                    </p>
                  </div>
                </div>

                {/* 運用プランB: 月額500円 */}
                <div className="col-12 col-md-6">
                  <div className="running-card highlight-running">
                    <span className="running-badge badge-support">プランB（おすすめ）</span>
                    <div className="running-title">安心ライト保守プラン</div>
                    <div className="running-price-wrap">
                      <div className="running-price text-success">
                        ¥500<span className="tax-note text-dark"> / 月（税抜）</span>
                      </div>
                    </div>
                    <p className="running-desc">
                      「たまに文章や写真を直したいけれど、都度見積もりを取るのは面倒」という事業者様向け。
                      既存固定ページの<strong>営業時間の変更、定休日の変更、写真の差し替え、料金表の数字変更などの軽微な修正にいつでも迅速に対応</strong>いたします。
                      <span className="d-block mt-2 small text-muted">※定期的・頻繁なお知らせやブログ記事の新規投稿・更新は対象外となります（お知らせの定期更新には「ヘッドレスCMS連携オプション」をご利用ください）。</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 補足・備考 */}
            <div className="pricing-notes" data-aos="fade-up">
              <div className="fw-bold text-dark mb-1">【料金および運用に関する注意事項】</div>
              <div>• 既存サイトのページ数が10ページを超える大規模サイトの場合は、事前診断の上で追加のお見積りをご案内する場合がございます。</div>
              <div>• 「Web問い合わせフォーム」をご利用の場合は、上記の運用プラン（月額0円または月額500円）に加えて、API転送費用として月額500円（税抜）が発生します。</div>
              <div>• 「お知らせ・News定期更新オプション（20万円〜）」は完全静的配信（フルSSG）を前提としており、キーワード検索やカテゴリ絞り込み機能の有無（デプロイ時の静的JSONインデックス自動生成とクライアント検索の設計・実装）により金額が変動します。</div>
              <div>• ドメイン更新料（お名前.com等へ年額1,500円〜3,000円程度実費）はご契約者様側での実費負担となります。</div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* FLOW SECTION                                                 */}
        {/* ============================================================ */}
        <section className="section-padding flow-section" id="flow">
          <div className="container">
            <div className="section-header" data-aos="fade-up">
              <span className="section-eyebrow">Work Flow</span>
              <h2 className="section-title">乗り換え・制作の流れ（5つのステップ）</h2>
              <p className="section-subtitle">
                現在のサイトのURLをお送りいただくだけでOK。専門知識がなくてもスムーズに進められます。
              </p>
            </div>

            <div className="row g-3">
              <div className="col-12 col-md-6 col-lg" data-aos="fade-up" data-aos-delay="100">
                <div className="flow-step-card">
                  <div className="step-header">
                    <span className="step-num">STEP 1</span>
                    <span className="step-time">初回相談</span>
                  </div>
                  <h3 className="step-title">無料サイト診断</h3>
                  <p className="step-desc">
                    現在のWebサイトのURLを拝見し、WordPressの状況や移管の可否、削減できる固定費の目安を無料でお伝えします。
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg" data-aos="fade-up" data-aos-delay="200">
                <div className="flow-step-card">
                  <div className="step-header">
                    <span className="step-num">STEP 2</span>
                    <span className="step-time">約2〜3日</span>
                  </div>
                  <h3 className="step-title">お見積り・ご提案</h3>
                  <p className="step-desc">
                    既存コンテンツの引き継ぎ方法、オプションの要否（デザイン刷新やフォーム設置、お知らせCMS）、明細を明記したお見積書をご提示します。
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg" data-aos="fade-up" data-aos-delay="300">
                <div className="flow-step-card">
                  <div className="step-header">
                    <span className="step-num">STEP 3</span>
                    <span className="step-time">約1〜2週間</span>
                  </div>
                  <h3 className="step-title">静的化・テスト構築</h3>
                  <p className="step-desc">
                    最新のNext.jsを用いて静的HTMLサイトを構築します。テスト用URLにて、実際の軽さやスマホ表示をご確認いただけます。
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg" data-aos="fade-up" data-aos-delay="400">
                <div className="flow-step-card">
                  <div className="step-header">
                    <span className="step-num">STEP 4</span>
                    <span className="step-time">約数日</span>
                  </div>
                  <h3 className="step-title">最終チェック・調整</h3>
                  <p className="step-desc">
                    文章やリンク、メール連絡先の動作をお客様と一緒に確認し、必要に応じて微調整を行います。
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg" data-aos="fade-up" data-aos-delay="500">
                <div className="flow-step-card">
                  <div className="step-header">
                    <span className="step-num">STEP 5</span>
                    <span className="step-time">納品後も安心</span>
                  </div>
                  <h3 className="step-title">サーバー切り替え・完了</h3>
                  <p className="step-desc">
                    既存ドメインの向き先を安全なサーバーレス配信へ切り替えて完了。古いサーバーやWixを解約できるようになります。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* FAQ SECTION                                                  */}
        {/* ============================================================ */}
        <section className="section-padding faq-section" id="faq">
          <div className="container">
            <div className="section-header" data-aos="fade-up">
              <span className="section-eyebrow">FAQ</span>
              <h2 className="section-title">よくあるご質問</h2>
              <p className="section-subtitle">
                WordPressやWixからの乗り換え前によくいただく疑問にお答えします。
              </p>
            </div>

            <div className="row justify-content-center">
              <div className="col-12 col-lg-10">
                <div className="faq-card" data-aos="fade-up" data-aos-delay="100">
                  <div className="faq-question">
                    <span className="q-badge">Q</span>
                    <span>基本プラン（5万円）の「メールアドレスを公開する形」とはどういう意味ですか？</span>
                  </div>
                  <p className="faq-answer">
                    Webサイト上の入力フォーム（名前・メアド・本文の入力欄）を置かず、「お問い合わせはこちら：info@example.com」のようにリンクやアドレスを記載して、お客様のお使いのメールソフトが直接立ち上がる形式です。Webフォームを設置したい場合は、オプション（＋5万円、月額500円）でAPI転送フォームを追加できます。
                  </p>
                </div>

                <div className="faq-card" data-aos="fade-up" data-aos-delay="150">
                  <div className="faq-question">
                    <span className="q-badge">Q</span>
                    <span>「まったく同じデザインを保証するものではない」とはどういうことですか？</span>
                  </div>
                  <p className="faq-answer">
                    何年も前のWordPressやWixには、スマホで崩れやすい古いコードや過剰なアニメーションが含まれていることが多いため、それらを整理して最新のブラウザやスマートフォンで綺麗に表示されるように最適化して移行します。文章や画像、全体の構成はそのまま引き継ぎますのでご安心ください。見た目を完全に刷新したい場合は「オリジナルデザイン（＋10万円）」がおすすめです。
                  </p>
                </div>

                <div className="faq-card" data-aos="fade-up" data-aos-delay="200">
                  <div className="faq-question">
                    <span className="q-badge">Q</span>
                    <span>月額0円プランの場合、本当に維持費は一切かからないのですか？</span>
                  </div>
                  <p className="faq-answer">
                    はい、弊社への月額お支払いは0円です。Cloudflare Pagesなどの最新のサーバーレスインフラを利用するため、一般的な規模の企業・店舗サイトであればサーバー代も実質無料です。文言や写真の変更が必要になった時だけ、都度お見積もり（数千円〜）で修正を承ります。定期的に直したい場合は月額500円の保守プランがお得です。
                  </p>
                </div>

                <div className="faq-card" data-aos="fade-up" data-aos-delay="250">
                  <div className="faq-question">
                    <span className="q-badge">Q</span>
                    <span>WixやJimdo、WordPressで使っている独自ドメインはそのまま引き継げますか？</span>
                  </div>
                  <p className="faq-answer">
                    はい、全く同じドメイン（例: example.com）をそのまま引き継ぐことができます。お名前.comなどのドメイン管理画面の設定を切り替えるだけなので、名刺やパンフレットのURLを変更する必要はありません。切り替え設定も丁寧にサポートします。
                  </p>
                </div>

                <div className="faq-card" data-aos="fade-up" data-aos-delay="300">
                  <div className="faq-question">
                    <span className="q-badge">Q</span>
                    <span>月額500円プランではどのような修正を依頼できますか？</span>
                  </div>
                  <p className="faq-answer">
                    「営業時間の変更」「定休日の変更」「写真の差し替え」「料金表の数字変更」など、既存固定ページの簡単な文言や画像の修正にいつでも対応いたします。大幅なページ追加やシステム改修、定期的・頻繁なお知らせやブログ記事の新規投稿代行などは対象外となります。
                  </p>
                </div>

                <div className="faq-card" data-aos="fade-up" data-aos-delay="350">
                  <div className="faq-question">
                    <span className="q-badge">Q</span>
                    <span>お知らせやNewsを自分で定期更新したい場合はどうすればいいですか？</span>
                  </div>
                  <p className="faq-answer">
                    オプションの「お知らせ・News定期更新（ヘッドレスCMS連携：＋20万円〜）」をご利用いただくことで、安全な専用管理画面からいつでもスマホやPCで手軽にお知らせ記事を投稿・更新できるようになります。
                    当サービスでは完全静的配信（フルSSG）を前提としており、記事内のキーワード検索やカテゴリ絞り込み機能の有無（デプロイ時に静的JSONインデックスを生成してブラウザ側で即時検索する仕組み）によってお見積りが変動します。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* CONTACT SECTION                                              */}
        {/* ============================================================ */}
        <section className="section-padding contact-section" id="contact">
          <div className="container">
            <div className="section-header" data-aos="fade-up">
              <span className="section-eyebrow">Contact &amp; Free Diagnosis</span>
              <h2 className="section-title">現状サイトの無料診断・お見積り</h2>
              <p className="section-subtitle">
                「うちのWordPressを5万円で静的化できる？」「Wixから乗り換えたらいくら安くなる？」など、URLを添えてお気軽にご相談ください。通常24時間以内にエンジニアが直接ご返信します。
              </p>
            </div>

            <div className="contact-container" data-aos="fade-up">
              <div className="contact-card">
                <WebServiceContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <WebServiceFooter />
    </div>
  );
}
