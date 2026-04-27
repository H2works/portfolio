# H2works Portfolio

H2works のポートフォリオサイト（静的サイト）です。Eleventy(11ty) + Bootstrap + Gulp でビルドし、**Cloudflare Pages** でホスティングします。

## 技術スタック

- Next.js / TypeScript（制作・開発で使用可能）
- React
- Tailwind CSS
- microCMS（Headless CMS）
- Cloudflare Pages
- SEO / パフォーマンス最適化

## Side Projects

- `https://template-library.h2works.xyz/`
- `https://domain-tools.h2works.xyz/`
- `https://news-archive.h2works.xyz/`

## 必要要件

- Node.js 18+（推奨: 20）

## 開発

ローカルで確認:

```bash
npm install
npm run watch
```

簡易ビルド:

```bash
npm run build-dev
```

## 本番ビルド（Cloudflare Pages）

Cloudflare Pages の設定は以下にします。

- **Build command**: `npm run build`
- **Build output directory**: `public`

```bash
npm run build
```

## ディレクトリ

- `src/`: ソース（Nunjucks テンプレート等）
- `dev/`: 開発用ビルド出力
- `public/`: 本番ビルド出力（Cloudflare Pages にデプロイ）
