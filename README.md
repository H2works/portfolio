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
```

```bash
wrangler pages dev --proxy 3000 -- npm run dev
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

- `app/`: Next.js App Router (各ページ。`/blog`, `/blog/[slug]` など)
- `components/`: React コンポーネント
- `posts/`: ブログ用マークダウン記事ファイル
- `lib/`: ユーティリティ・データ取得関数（Markdownパース等）
- `styles/`: SCSS スタイルシート
- `public/`: 画像、フォントなどの静的アセット

## ブログ記事の作成方法

`posts/` ディレクトリ配下に `.md` ファイルを作成することで、自動的に `/blog`（一覧）および `/blog/[slug]`（詳細）に表示されます。

```markdown
---
title: "記事のタイトル"
date: "2026-09-23"
description: "記事の概要や抜粋文（省略可能）"
tags: ["Next.js", "TypeScript"]
---

ここにマークダウン形式で記事本文を記述します。
コードブロックのシンタックスハイライト、GFMテーブル、リスト、引用記法等に対応しています。
```
