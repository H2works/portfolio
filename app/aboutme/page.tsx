import Image from 'next/image';
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
            Next.js / TypeScript を中心に、ヘッドレスCMSや Cloudflare Pages を使ったサイト・Webアプリの設計/実装/運用を行っています。SEO とパフォーマンス最適化も含めて、目的から逆算した改善が得意です。
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
            <li><a href="https://template-library.h2works.xyz/" target="_blank" rel="noopener noreferrer">Template Library</a></li>
            <li><a href="https://domain-tools.h2works.xyz/" target="_blank" rel="noopener noreferrer">Domain Tools</a></li>
            <li><a href="https://news-archive.h2works.xyz/" target="_blank" rel="noopener noreferrer">News Archive</a></li>
          </ul>

          <h2>方針</h2>
          <ul>
            <li>目的（CV/問い合わせ/採用/集客）に対して必要な情報設計を優先</li>
            <li>Core Web Vitals を意識した実装・改善</li>
            <li>運用しやすい更新フロー（CMS/コンポーネント化）</li>
          </ul>
        </div>
      </div>
    </MainLayout>
  );
}
