import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import '@/styles/globals.scss';
import AOSInit from '@/components/AOSInit';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.h2works.xyz'),
  title: 'H2works | Portfolio',
  description: 'H2works のポートフォリオサイト。Next.js / TypeScript / microCMS / Cloudflare Pages / Tailwind CSS / React / SEO・パフォーマンス最適化を中心に、Web制作・開発を行っています。',
  applicationName: 'H2works',
  authors: [{ name: 'H2works' }],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    siteName: 'H2works',
    title: 'H2works | Portfolio',
    description: 'H2works のポートフォリオサイト。Next.js / TypeScript / microCMS / Cloudflare Pages / Tailwind CSS / React / SEO・パフォーマンス最適化を中心に、Web制作・開発を行っています。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://www.h2works.xyz',
  },
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'H2works',
  alternateName: ['www.h2works.xyz', 'h2works.xyz'],
  url: 'https://www.h2works.xyz',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="h-100">
      <body className="position-relative h-100 w-100" data-bs-spy="scroll" data-bs-target="#navScroll">
        <Script
          src="https://www.googletagmanager.com/gtm.js?id=GTM-WWC3KVXC"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <AOSInit />
        {children}
      </body>
    </html>
  );
}
