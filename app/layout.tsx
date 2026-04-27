import type { Metadata, Viewport } from 'next';
import '@/styles/globals.scss';
import AOSInit from '@/components/AOSInit';

export const metadata: Metadata = {
  title: 'H2works | Portfolio',
  description: 'H2works のポートフォリオサイト。Next.js / TypeScript / microCMS / Cloudflare Pages / Tailwind CSS / React / SEO・パフォーマンス最適化を中心に、Web制作・開発を行っています。',
  authors: [{ name: 'H2works' }],
  icons: {
    icon: [
      { url: '/img/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/img/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/img/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'H2works | Portfolio',
    description: 'H2works のポートフォリオサイト。Next.js / TypeScript / microCMS / Cloudflare Pages / Tailwind CSS / React / SEO・パフォーマンス最適化を中心に、Web制作・開発を行っています。',
    type: 'website',
    locale: 'ja_JP',
  },
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
        <AOSInit />
        {children}
      </body>
    </html>
  );
}
