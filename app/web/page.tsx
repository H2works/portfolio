import type { Metadata } from 'next';
import Link from 'next/link';
import WebServiceHeader from '@/components/web/WebServiceHeader';
import WebServiceFooter from '@/components/web/WebServiceFooter';
import WebServiceContactForm from '@/components/web/WebServiceContactForm';
import { MigrationIllustration } from '@/components/web/WebServiceVisuals';

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
              <div className="col-12 col-lg-7" data-aos="fade-up">
                <h1 className="hero-title">
                  放置したWordPress・毎月高いノーコードツールから、
                  <span className="text-highlight">「攻撃する場所がない・壊れない・安い」Webサイトへ</span>
                </h1>

                <p className="hero-lead">
                  管理画面やデータベースをネット上から完全排除。
                  改ざんリスクをゼロにし、初期5万円・月額0円から実現する企業の安心運用基盤です。
                </p>

                <div className="hero-cta-group">
                  <a
                    href="#contact"
                    className="btn btn-primary px-4 py-3 fw-bold d-inline-flex align-items-center"
                    style={{ backgroundColor: '#2563eb', borderColor: '#2563eb' }}
                  >
                    <span>無料相談・デモ作成を依頼する</span>
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

                <div className="hero-microcopy mt-3 text-secondary small d-flex align-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="bi bi-check-circle-fill text-primary me-2 flex-shrink-0" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                  </svg>
                  <span>ご契約前に表示速度やスマホ表示を確認できる「無料デモサイト作成」も受付中</span>
                </div>

                <div className="hero-guarantees">
                  <div className="guarantee-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-shield-check text-primary me-2 flex-shrink-0" viewBox="0 0 16 16">
                      <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"/>
                      <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                    </svg>
                    <span>改ざん・乗っ取りリスクゼロ</span>
                  </div>
                  <div className="guarantee-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-currency-yen text-primary me-2 flex-shrink-0" viewBox="0 0 16 16">
                      <path d="M8.75 11.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5z"/>
                      <path d="M4.5 2a.5.5 0 0 0-.416.777L7.21 7H4.5a.5.5 0 0 0 0 1h3.042l.004.004v1.996H4.5a.5.5 0 0 0 0 1h3.046v1a.5.5 0 0 0 1 0v-1h3.046a.5.5 0 0 0 0-1H8.546V8.004l.004-.004H11.5a.5.5 0 0 0 0-1H8.79l3.126-4.223A.5.5 0 0 0 11.5 2h-7zM8 6.554 5.438 3h5.124L8 6.554z"/>
                    </svg>
                    <span>月額維持費 0円〜500円</span>
                  </div>
                  <div className="guarantee-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-speedometer2 text-primary me-2 flex-shrink-0" viewBox="0 0 16 16">
                      <path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L10.02 7.15a.39.39 0 0 0 .527.575l1.706-1.417a.389.389 0 0 0 .02-.554z"/>
                      <path d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25-1.026-.33-1.666-.826-2.16-1.523-.497-.702-.755-1.57-.755-2.388 0-.276-.224-.5-.5-.5s-.5.224-.5.5c0 .818-.258 1.686-.755 2.388-.494.697-1.134 1.192-2.16 1.523-1.087.352-2.49-.003-2.932-1.25A7.962 7.962 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.204.579.629.928 1.053.977.447.052.925-.12 1.377-.439.467-.329.833-.82 1.173-1.399.42-.716.733-1.597.733-2.468a1.5 1.5 0 0 1 3 0c0 .871.313 1.752.733 2.468.34.58.706 1.07 1.173 1.4.452.318.93.489 1.377.438.424-.049.849-.398 1.053-.977A7 7 0 0 0 8 3z"/>
                    </svg>
                    <span>HTML直接配信で瞬時に表示</span>
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-5 mt-4 mt-lg-0" data-aos="fade-left">
                <MigrationIllustration />
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
              <h2 className="section-title">こんな「モヤモヤ」を抱えていませんか？</h2>
              <p className="section-subtitle">
                昔作ったまま放置されているサイトや、何となく契約している有料ノーコードツールには、多くのムダと危険が潜んでいます。
              </p>
            </div>

            <div className="row g-4">
              <div className="col-12 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100">
                <div className="problem-card">
                  <h3 className="problem-heading">更新で画面が壊れる恐怖</h3>
                  <p className="problem-text">
                    何年も前に作ったWordPressを放置しており、アップデートすると画面が真っ白に壊れそうで怖い
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="150">
                <div className="problem-card">
                  <h3 className="problem-heading">セキュリティ知識がない不安</h3>
                  <p className="problem-text">
                    脆弱性やハッキング対策が必要と聞くが、専門知識がないため何をすればいいか分からない
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="200">
                <div className="problem-card">
                  <h3 className="problem-heading">毎月払い続けるサブスク代</h3>
                  <p className="problem-text">
                    WixやJimdoの有料プラン代（月2,000〜4,000円 / 年数万円）をなんとなく払い続けている
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="250">
                <div className="problem-card">
                  <h3 className="problem-heading">スマホで開くとモッサリ重い</h3>
                  <p className="problem-text">
                    WixやJimdoで作ったサイトの表示がモッサリ重く、スマホで開くのに時間がかかる
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="300">
                <div className="problem-card">
                  <h3 className="problem-heading">保守費用が高すぎる見積もり</h3>
                  <p className="problem-text">
                    制作会社に相談したら「月々のWordPress保守費用として1万〜3万円」と言われ高すぎる
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="350">
                <div className="problem-card">
                  <h3 className="problem-heading">更新頻度とコストの不釣り合い</h3>
                  <p className="problem-text">
                    休業日や営業時間をたまに変える程度なのに、なぜこんなに維持費がかかるのか納得がいかない
                  </p>
                </div>
              </div>
            </div>

            <div className="solution-banner mt-5" data-aos="fade-up">
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
              <h2 className="section-title">なぜ「静的HTML」なら絶対に攻撃されないのか？<sup>※</sup></h2>
              <p className="section-subtitle">
                「セキュリティ対策を頑張る」のではなく、「攻撃できる場所そのものを無くす」という根本的な解決策です。
              </p>
            </div>

            <div className="row g-4">
              <div className="col-12 col-md-6" data-aos="fade-up" data-aos-delay="100">
                <div className="mechanism-box danger-side">
                  <div className="mechanism-badge">従来のWordPress（放置状態）</div>
                  <h3 className="mechanism-title">常にハッカーから狙われる仕組み</h3>
                  <ul className="mechanism-list">
                    <li>
                      <span className="bullet text-danger">•</span>
                      <span><strong>ネット上にログイン画面とデータベースが常に露出</strong>しており、不正アクセスの標的にされやすい。</span>
                    </li>
                    <li>
                      <span className="bullet text-danger">•</span>
                      <span>更新をサボると<strong>古いプラグインの脆弱性からサイトを改ざん</strong>され、スパムメールの送信台に悪用される。</span>
                    </li>
                    <li>
                      <span className="bullet text-danger">•</span>
                      <span>訪問者がアクセスするたびにサーバー内で重い処理が走り、<strong>表示が遅くサーバーダウンしやすい</strong>。</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-12 col-md-6" data-aos="fade-up" data-aos-delay="200">
                <div className="mechanism-box safe-side">
                  <div className="mechanism-badge">H2worksの静的Web（最新Next.js）</div>
                  <h3 className="mechanism-title">攻撃する場所そのものがない仕組み</h3>
                  <ul className="mechanism-list">
                    <li>
                      <span className="bullet text-success">•</span>
                      <span>ネット上には<strong>「完成したただのHTMLファイル」</strong>を配るだけ。裏口（ログイン画面やDB）が物理的に存在しません。</span>
                    </li>
                    <li>
                      <span className="bullet text-success">•</span>
                      <span>侵入できる隙がないため、<strong>放置しても改ざん・乗っ取りのリスクは実質ゼロ<sup>※</sup></strong>。面倒なセキュリティ更新も不要です。</span>
                    </li>
                    <li>
                      <span className="bullet text-success">•</span>
                      <span>サーバー側で計算しないため、<strong>スマホでも一瞬でパッと開く驚異的な軽さ</strong>を実現します。</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <p className="text-secondary mt-4 mb-0" style={{ fontSize: '0.8125rem', lineHeight: '1.6' }} data-aos="fade-up">
              ※Cloudflare等のグローバルCDNで静的配信します。レンタルサーバーを使用しないためFTP等の窓もありません。外部JavaScriptの読み込みもしません。攻撃の窓が極端に少ないという意味になります。
            </p>
          </div>
        </section>

        {/* ============================================================ */}
        {/* COMPARISON TABLE SECTION                                     */}
        {/* ============================================================ */}
        <section className="section-padding comparison-section" id="comparison">
          <div className="container">
            <div className="section-header" data-aos="fade-up">
              <h2 className="section-title">WordPress・ノーコードツールとの徹底比較</h2>
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
                    <td className="fw-semibold" style={{ color: '#c2410c' }}>極めて危険<br /><span className="text-secondary" style={{ fontSize: '0.875rem' }}>古いプラグイン等から侵入されやすい</span></td>
                    <td>普通<br /><span className="text-secondary" style={{ fontSize: '0.875rem' }}>運営元任せだが乗っ取りリスクは低め</span></td>
                    <td className="highlight-col text-primary fw-bold">攻撃場所がないため安全<br /><span className="text-secondary fw-normal" style={{ fontSize: '0.875rem' }}>ログイン画面やDBがネット上に存在しない</span></td>
                  </tr>
                  <tr>
                    <td className="fw-bold">毎月の固定費（維持費）</td>
                    <td>レンタルサーバー代<br /><span className="text-secondary" style={{ fontSize: '0.875rem' }}>月1,000円〜2,000円 ＋ 保守費用</span></td>
                    <td className="fw-semibold" style={{ color: '#c2410c' }}>月額サブスクが高い<br /><span className="text-secondary" style={{ fontSize: '0.875rem' }}>月2,000〜4,000円（年間2〜5万円）</span></td>
                    <td className="highlight-col text-primary fw-bold">月額0円 または 月500円<br /><span className="text-secondary fw-normal" style={{ fontSize: '0.875rem' }}>サーバーレス配信のため固定費が激減</span></td>
                  </tr>
                  <tr>
                    <td className="fw-bold">スマホでの表示スピード</td>
                    <td>普通〜重い<br /><span className="text-secondary" style={{ fontSize: '0.875rem' }}>プラグイン多数でモッサリしがち</span></td>
                    <td className="fw-semibold" style={{ color: '#c2410c' }}>重くなりやすい<br /><span className="text-secondary" style={{ fontSize: '0.875rem' }}>ノーコード特有の余分な読込で遅い</span></td>
                    <td className="highlight-col text-primary fw-bold">一瞬でパッと開く<br /><span className="text-secondary fw-normal" style={{ fontSize: '0.875rem' }}>ただのHTMLだから最高クラスの速さ</span></td>
                  </tr>
                  <tr>
                    <td className="fw-bold">壊れるリスク・メンテ手間</td>
                    <td className="fw-semibold" style={{ color: '#c2410c' }}>更新で壊れる恐怖<br /><span className="text-secondary" style={{ fontSize: '0.875rem' }}>アップデートで画面が崩れるリスク</span></td>
                    <td>仕様変更に左右される<br /><span className="text-secondary" style={{ fontSize: '0.875rem' }}>勝手な値上げやUI変更への対応</span></td>
                    <td className="highlight-col text-primary fw-bold">壊れる概念がない<br /><span className="text-secondary fw-normal" style={{ fontSize: '0.875rem' }}>完全放置でOK。アップデート作業不要</span></td>
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
              <h2 className="section-title">H2worksが選ばれる4つの強み</h2>
              <p className="section-subtitle">
                「安全・速い・安い」をすべて同時に成立させられる理由があります。
              </p>
            </div>

            <div className="row g-4">
              <div className="col-12 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="100">
                <div className="feature-card">
                  <h3 className="feature-title">攻撃する場所がない究極の安全性</h3>
                  <p className="feature-desc">
                    WordPressのように侵入できる裏口（管理画面やDB）がネット上に存在しません。ハッカーから狙われる余地がないため、放置していても改ざんや乗っ取りのリスクはゼロです。
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="200">
                <div className="feature-card">
                  <h3 className="feature-title">毎月の固定費・維持費を激減</h3>
                  <p className="feature-desc">
                    世界最先端のサーバーレス配信（Cloudflare等）を利用するため、サーバー代は実質0円。WixやJimdoに払い続けていた毎月のサブスク代を今すぐ浮かせられます。
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="300">
                <div className="feature-card">
                  <h3 className="feature-title">ただのHTMLだから一瞬でパッと開く</h3>
                  <p className="feature-desc">
                    WordPressやノーコードのようにアクセス時にサーバー側で重い計算を行いません。完成済みのHTMLを即座に返すだけなので、スマホでも待たされずに瞬時に画面が表示されます。
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="400">
                <div className="feature-card">
                  <h3 className="feature-title">既存サイトそのまま移行 ＆ 無料デモ作成</h3>
                  <p className="feature-desc">
                    「今の文章・写真を活かして移行できる？」「どれくらい速くなる？」とご不安な方へ。ご契約前に既存サイトの無料デモを作成し、実際の表示速度やデザインをご確認いただけます。
                  </p>
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
              <h2 className="section-title">明朗会計な料金プラン（初期費用と運用費）</h2>
              <p className="section-subtitle">
                初期費用と月々のランニングコストを完全に分離し、不要な費用が一切発生しない透明な料金体系をとっています。
              </p>
            </div>

            {/* 1. 初期費用 */}
            <div className="mb-5" data-aos="fade-up">
              <h3 className="fs-4 fw-bold mb-4 text-dark">初期費用（制作・お引越し費用）</h3>

              <div className="row g-4 align-items-stretch">
                <div className="col-12 col-lg-6">
                  <div className="main-initial-card">
                    <div className="plan-name">基本プラン：既存サイトの静的化</div>
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

                <div className="col-12 col-lg-6">
                  <div className="d-flex flex-column gap-3 h-100 justify-content-between">
                    <div className="option-card">
                      <div className="option-header">
                        <span className="option-tag">オプション</span>
                        <div className="option-price">＋¥100,000<span className="tax-note">（税抜）</span></div>
                      </div>
                      <div className="option-title">オリジナルデザイン刷新</div>
                      <div className="option-desc">
                        「古いサイトの見た目も一新して、今風の洗練されたコーポレートデザインにしたい」という方向け。型にはまらない完全オリジナルのモダンなデザインを設計・実装します。
                      </div>
                      <div className="option-note">
                        スマホ・タブレットでの見やすさやタイポグラフィ、信頼感を高めるレイアウトに全面刷新します。
                      </div>
                    </div>

                    <div className="option-card">
                      <div className="option-header">
                        <span className="option-tag">オプション</span>
                        <div className="option-price">＋¥50,000<span className="tax-note">（税抜）</span></div>
                      </div>
                      <div className="option-title">Web問い合わせフォーム設定</div>
                      <div className="option-desc">
                        メールアドレス公開ではなく、Webサイト上のフォームから直接送信できるように設定します。APIで安全に受け取り、ご指定のメールアドレスへ即座に自動転送する形式です。
                      </div>
                      <div className="option-note text-primary fw-semibold">
                        ※安全なAPI経由での転送・スパム防止インフラ費用として、別途 <strong>＋500円 / 月（税抜）</strong> がかかります。
                      </div>
                    </div>

                    <div className="option-card">
                      <div className="option-header">
                        <span className="option-tag">オプション</span>
                        <div className="option-price">＋¥200,000〜<span className="tax-note">（税抜）</span></div>
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

            {/* 2. ランニングコスト */}
            <div className="pt-4" data-aos="fade-up">
              <h3 className="fs-4 fw-bold mb-4 text-dark">ランニングコスト（月々の維持・運用費）</h3>

              <div className="row g-4 align-items-stretch">
                <div className="col-12 col-md-6">
                  <div className="running-card">
                    <div className="running-title">プランA：完全無料・月額0円プラン</div>
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

                <div className="col-12 col-md-6">
                  <div className="running-card highlight-running">
                    <div className="running-title">プランB：安心ライト保守プラン（おすすめ）</div>
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
              <h2 className="section-title">乗り換え・制作の流れ（5つのステップ）</h2>
              <p className="section-subtitle">
                現在のサイトのURLをお送りいただくだけでOK。専門知識がなくてもスムーズに進められます。
              </p>
            </div>

            <div className="row g-3">
              <div className="col-12 col-md-6 col-lg" data-aos="fade-up" data-aos-delay="100">
                <div className="flow-step-card">
                  <div className="step-header">
                    <span className="step-time">初回相談（完全無料）</span>
                  </div>
                  <h3 className="step-title">1. 無料サイト診断 & デモ作成</h3>
                  <p className="step-desc">
                    現在のWebサイトのURLをお知らせいただくだけでOK。移管可否や削減固定費の試算に加え、ご希望の方にはご契約前に表示速度を体感できる「無料デモサイト」を作成します。
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg" data-aos="fade-up" data-aos-delay="200">
                <div className="flow-step-card">
                  <div className="step-header">
                    <span className="step-time">約2〜3日</span>
                  </div>
                  <h3 className="step-title">2. お見積り・ご提案</h3>
                  <p className="step-desc">
                    既存コンテンツの引き継ぎ方法、オプションの要否（デザイン刷新やフォーム設置、お知らせCMS）、明細を明記したお見積書をご提示します。
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg" data-aos="fade-up" data-aos-delay="300">
                <div className="flow-step-card">
                  <div className="step-header">
                    <span className="step-time">約1〜2週間</span>
                  </div>
                  <h3 className="step-title">3. 静的化・テスト構築</h3>
                  <p className="step-desc">
                    最新のNext.jsを用いて静的HTMLサイトを構築します。テスト用URLにて、実際の軽さやスマホ表示をご確認いただけます。
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg" data-aos="fade-up" data-aos-delay="400">
                <div className="flow-step-card">
                  <div className="step-header">
                    <span className="step-time">約数日</span>
                  </div>
                  <h3 className="step-title">4. 最終チェック・調整</h3>
                  <p className="step-desc">
                    文章やリンク、メール連絡先の動作をお客様と一緒に確認し、必要に応じて微調整を行います。
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg" data-aos="fade-up" data-aos-delay="500">
                <div className="flow-step-card">
                  <div className="step-header">
                    <span className="step-time">納品後も安心</span>
                  </div>
                  <h3 className="step-title">5. サーバー切り替え・完了</h3>
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
              <h2 className="section-title">よくあるご質問</h2>
              <p className="section-subtitle">
                WordPressやWixからの乗り換え前によくいただく疑問にお答えします。
              </p>
            </div>

            <div className="row justify-content-center">
              <div className="col-12 col-lg-10">
                <div className="faq-card" data-aos="fade-up" data-aos-delay="100">
                  <div className="faq-question">
                    契約前に、実際の表示スピードやデザインを確認することはできますか？
                  </div>
                  <p className="faq-answer">
                    はい、可能です。現在のWebサイトのURLをお送りいただければ、静的化した無料デモサイトを作成してご案内いたします。実際の表示速度やスマートフォンでの見え方に十分ご納得いただいた上でご契約いただけますので、まずはお気軽にご相談ください。
                  </p>
                </div>

                <div className="faq-card" data-aos="fade-up" data-aos-delay="150">
                  <div className="faq-question">
                    基本プラン（5万円）の「メールアドレスを公開する形」とはどういう意味ですか？
                  </div>
                  <p className="faq-answer">
                    Webサイト上の入力フォーム（名前・メアド・本文の入力欄）を置かず、「お問い合わせはこちら：info@example.com」のようにリンクやアドレスを記載して、お客様のお使いのメールソフトが直接立ち上がる形式です。Webフォームを設置したい場合は、オプション（＋5万円、月額500円）でAPI転送フォームを追加できます。
                  </p>
                </div>

                <div className="faq-card" data-aos="fade-up" data-aos-delay="150">
                  <div className="faq-question">
                    「まったく同じデザインを保証するものではない」とはどういうことですか？
                  </div>
                  <p className="faq-answer">
                    何年も前のWordPressやWixには、スマホで崩れやすい古いコードや過剰なアニメーションが含まれていることが多いため、それらを整理して最新のブラウザやスマートフォンで綺麗に表示されるように最適化して移行します。文章や画像、全体の構成はそのまま引き継ぎますのでご安心ください。見た目を完全に刷新したい場合は「オリジナルデザイン（＋10万円）」がおすすめです。
                  </p>
                </div>

                <div className="faq-card" data-aos="fade-up" data-aos-delay="200">
                  <div className="faq-question">
                    月額0円プランの場合、本当に維持費は一切かからないのですか？
                  </div>
                  <p className="faq-answer">
                    はい、弊社への月額お支払いは0円です。Cloudflare Pagesなどの最新のサーバーレスインフラを利用するため、一般的な規模の企業・店舗サイトであればサーバー代も実質無料です。文言や写真の変更が必要になった時だけ、都度お見積もり（数千円〜）で修正を承ります。定期的に直したい場合は月額500円の保守プランがお得です。
                  </p>
                </div>

                <div className="faq-card" data-aos="fade-up" data-aos-delay="250">
                  <div className="faq-question">
                    WixやJimdo、WordPressで使っている独自ドメインはそのまま引き継げますか？
                  </div>
                  <p className="faq-answer">
                    はい、全く同じドメイン（例: example.com）をそのまま引き継ぐことができます。お名前.comなどのドメイン管理画面の設定を切り替えるだけなので、名刺やパンフレットのURLを変更する必要はありません。切り替え設定も丁寧にサポートします。
                  </p>
                </div>

                <div className="faq-card" data-aos="fade-up" data-aos-delay="300">
                  <div className="faq-question">
                    月額500円プランではどのような修正を依頼できますか？
                  </div>
                  <p className="faq-answer">
                    「営業時間の変更」「定休日の変更」「写真の差し替え」「料金表の数字変更」など、既存固定ページの簡単な文言や画像の修正にいつでも対応いたします。大幅なページ追加やシステム改修、定期的・頻繁なお知らせやブログ記事の新規投稿代行などは対象外となります。
                  </p>
                </div>

                <div className="faq-card" data-aos="fade-up" data-aos-delay="350">
                  <div className="faq-question">
                    お知らせやNewsを自分で定期更新したい場合はどうすればいいですか？
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
              <h2 className="section-title">現状サイトの無料診断・無料デモ作成のご相談</h2>
              <p className="section-subtitle">
                「うちのWordPressを静的化できる？」「実際の表示スピードを見てみたい」など、URLを添えてお気軽にご相談ください。無料デモ作成のご要望も含め、通常24時間以内にエンジニアが直接ご返信します。
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
