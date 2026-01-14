import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "H2works | ポートフォリオ",
  description: "AIを活用したWebサイト制作のポートフォリオ。サンプルサイトやUIデザインの事例を紹介しています。",
  generator: 'v0.dev',
  keywords: ['ポートフォリオ', 'Web制作', 'UIデザイン', 'H2works', 'AI'],
  authors: [{ name: '尚志 長谷部', url: 'https://www.h2works.xyz' }],
  openGraph: {
    title: "H2works | ポートフォリオ",
    description: "AIを活用したWebサイト制作のポートフォリオ。サンプルサイトやUIデザインの事例を紹介しています。",
    url: "https://www.h2works.xyz",
    siteName: "H2works",
    images: [
      {
        url: "https://www.h2works.xyz/og-image.png",
        width: 1200,
        height: 630,
        alt: "H2works ポートフォリオ",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "H2works | ポートフォリオ",
    description: "AIを活用したWebサイト制作のポートフォリオ。サンプルサイトやUIデザインの事例を紹介しています。",
    images: ["https://www.h2works.xyz/og-image.png"],
    site: "@h2works_xyz",
    creator: "@h2works_xyz",
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
