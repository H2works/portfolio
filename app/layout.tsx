import type { Metadata, Viewport } from 'next';
import '@/styles/globals.scss';
import AOSInit from '@/components/AOSInit';

export const metadata: Metadata = {
  title: 'H2works | Portfolio',
  description: 'H2works のポートフォリオサイト。Next.js / TypeScript / microCMS / Cloudflare Pages / Tailwind CSS / React / SEO・パフォーマンス最適化を中心に、Web制作・開発を行っています。',
  authors: [{ name: 'H2works' }],
  icons: {
    icon: '/favicon.ico',
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
