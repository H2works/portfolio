import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '@/components/MainLayout';

export default function AboutMe() {
  return (
    <MainLayout bgimg="bck1" darkMode={false} colorModifier="black">
      <div className="row d-flex justify-content-center align-items-end pt-0 py-vh-3">
        <div className="col-6" data-aos="fade-left" data-aos-delay="0">
          <Image
            src="/img/profile4.png"
            width={400}
            height={400}
            className="rounded shadow-sm img-fluid"
            alt="H2works のプロフィール画像（仮）"
          />
        </div>

        <div className="col-4" data-aos="fade-left" data-aos-delay="100">
          <Image
            src="/img/profile5.png"
            width={300}
            height={300}
            className="rounded shadow-sm img-fluid"
            alt="H2works のプロフィール画像（仮）"
          />
        </div>

        <div className="col-4" data-aos="fade-left" data-aos-delay="200">
          <Image
            src="/img/webp/bck1.webp"
            width={300}
            height={300}
            className="rounded shadow-sm img-fluid mt-5"
            alt="背景画像"
          />
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-12 col-xl-10 col-xxl-8 mt-3" data-aos="fade-left" data-aos-delay="400">
          <h1>私について</h1>
          <p className="lead">
            マレーシアのIT企業で働くエンジニアです。日本から家族と一緒に移住し、子育てをしながら、個人でもWebサービスや情報ツールの開発・運営を行っています。Next.js / TypeScript を中心に、表示速度と保守性に優れたWebアプリ・サイトの設計・実装が得意です。
          </p>

          <h2>できること（技術スタック）</h2>
          <ul>
            <li>Next.js / TypeScript</li>
            <li>React</li>
            <li>Tailwind CSS</li>
            <li>microCMS・Kuroco（Headless CMS）</li>
            <li>Cloudflare Pages</li>
            <li>SEO / Performance Optimization</li>
          </ul>

          <h2>Side Projects</h2>
          <ul>
            <li><Link href="/school">International School Finder</Link></li>
            <li><Link href="/education">Education Media</Link></li>
            <li><a href="https://template-library.h2works.xyz/" target="_blank" rel="noopener noreferrer">Template Library</a></li>
            <li><a href="https://domain-tools.h2works.xyz/" target="_blank" rel="noopener noreferrer">Domain Tools</a></li>
            <li><a href="https://news-archive.h2works.xyz/" target="_blank" rel="noopener noreferrer">News Archive</a></li>
          </ul>

          <h2>最近興味のあること</h2>
          <ul>
            <li>マレーシアでの子育て・教育環境の模索（インター校、マルチリンガル教育、日本の教育とのバランス）</li>
            <li>日々の困りごとや「あったら便利」を素早く解決するスモールツールの開発</li>
            <li>東南アジアの生活・テクノロジー・教育トレンドの観察</li>
          </ul>
        </div>
      </div>
    </MainLayout>
  );
}
