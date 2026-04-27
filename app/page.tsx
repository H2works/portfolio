import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '@/components/MainLayout';

export default function Home() {
  const darkMode = false;
  const colorModifier = 'black';

  return (
    <MainLayout bgimg="bck8" darkMode={darkMode} colorModifier={colorModifier}>
      <div className={`${darkMode ? 'bg-black' : 'bg-light'} rounded p-5 overflow-x-hidden`} data-aos="fade-left">
        <div className="on-hover d-inline">
          <Image
            src="/img/webp/person_3_sm.webp"
            width={80}
            height={80}
            className="rounded-circle mb-4 shadow-sm mt-2 mt-xxl-4 hoh img-fluid"
            alt="A image of Jane Doe"
          />
          <Image
            src="/img/webp/person_4_md.webp"
            width={80}
            height={80}
            className="rounded-circle mb-4 shadow-sm mt-2 mt-xxl-4 soh"
            alt="Another image of Jane Doe"
          />
        </div>
        <h1 className={`fw-lighter ${darkMode ? 'text-white' : 'text-black'}`}>
          Next.js / TypeScript / microCMS を中心に、SEO とパフォーマンスにも強い Web 開発を行っています。
        </h1>
        <p className="lead py-4">
          企画〜実装〜運用まで、必要な形に合わせて設計・実装します。小さな改善から継続運用の仕組みづくりまでご相談ください。
        </p>
        <div className="row d-flex align-items-center mb-2 mb-xxl-4 text-center text-sm-start mx-0">
          <Link
            href="/contact"
            className={`btn btn-${colorModifier} btn-xl shadow col-12 col-sm-auto`}
            data-aos="fade-left"
            data-aos-delay="200"
          >
            お問い合わせ
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right ms-2" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>
          </Link>
          <Link
            href="/aboutme"
            className={`ms-0 ms-sm-3 mt-3 mt-sm-0 col-12 col-sm-auto p-0 ${darkMode ? 'link-light' : 'link-dark'}`}
            aria-label="About H2works"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            More about me
          </Link>
        </div>
      </div>
      <div className="py-vh-3 overflow-x-hidden">
        <h2 className="h6 mb-4 px-4" data-aos="fade-left" data-aos-delay="200">Side Projects:</h2>
        <div className="d-flex align-items-center p-4" data-aos="fade-left" data-aos-delay="200">
          <div className="me-4">
            <Image src="/img/webp/bck1_xs.webp" width={80} height={80} className="rounded-circle shadow-sm" alt="An image of my sitesproject website" />
          </div>
          <div className="flex-grow-1">
            <h3 className="h5">
              <a href="https://template-library.h2works.xyz/" className={`${darkMode ? 'link-light' : 'link-dark'} link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-100-hover link-underline-dark`} target="_blank" rel="noopener noreferrer">
                Template Library
              </a>
            </h3>
            <p>テンプレートを整理・閲覧できるライブラリ。制作のスピードと再現性を上げるための実験場です。</p>
          </div>
        </div>
        <div className="d-flex align-items-center my-2 p-4" data-aos="fade-left" data-aos-delay="200">
          <div className="me-4">
            <Image src="/img/webp/sample4_xs.webp" width={80} height={80} className="rounded-circle shadow-sm" alt="Another image of another sitesproject website" />
          </div>
          <div className="flex-grow-1">
            <h3 className="h5">
              <a href="https://domain-tools.h2works.xyz/" className={`${darkMode ? 'link-light' : 'link-dark'} link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-100-hover link-underline-dark`} target="_blank" rel="noopener noreferrer">
                Domain Tools
              </a>
            </h3>
            <p>ドメイン周りのちょっとした調査・確認を素早く行うためのツール集です。</p>
          </div>
        </div>
        <div className="d-flex align-items-center p-4" data-aos="fade-left" data-aos-delay="400">
          <div className="me-4">
            <Image src="/img/webp/sample6_xs.webp" width={80} height={80} className="rounded-circle shadow-sm" alt="Another image of another sitesproject website" />
          </div>
          <div className="flex-grow-1">
            <h3 className="h5">
              <a href="https://news-archive.h2works.xyz/" className={`${darkMode ? 'link-light' : 'link-dark'} link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-100-hover link-underline-dark`} target="_blank" rel="noopener noreferrer">
                News Archive
              </a>
            </h3>
            <p>ニュースや話題をアーカイブして後から参照しやすくするための個人プロジェクトです。</p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
