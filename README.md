# H2works Portfolio

H2works のポートフォリオサイトです。**Next.js (App Router)** + **TypeScript** + **Bootstrap 5** で構築され、**Cloudflare Pages** でホスティングします。

## 技術スタック

- **Next.js** (App Router)
- **TypeScript**
- **Sass (SCSS)** + **Bootstrap 5**
- **React**
- **AOS** (Animate on Scroll)
- **Cloudflare Pages**
- SEO / パフォーマンス最適化

## Side Projects

- [Template Library](https://template-library.h2works.xyz/)
- [Domain Tools](https://domain-tools.h2works.xyz/)
- [News Archive](https://news-archive.h2works.xyz/)

## 必要要件

- Node.js 18.17.0 以上

## 開発

ローカルで開発サーバーを起動:

```bash
npm install
npm run dev
```

## ビルド

本番用ビルドの生成:

```bash
npm run build
```

## デプロイ（Cloudflare Pages）

Cloudflare Pages の設定:

- **Framework preset**: `Next.js`
- **Build command**: `npm run build`
- **Build output directory**: `.next` (または自動設定)

## ディレクトリ構造

- `app/`: Next.js App Router (各ページ)
- `components/`: React コンポーネント
- `styles/`: SCSS スタイルシート
- `public/`: 画像、フォントなどの静的アセット
