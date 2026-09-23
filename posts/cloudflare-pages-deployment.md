---
title: "Cloudflare Pagesへの静的サイト自動デプロイと運用ポイント"
date: "2026-09-22"
description: "Next.jsのStatic Export機能を使ってCloudflare Pagesへホスティングする際の設定手順と、CI/CD・キャッシュ運用のコツをまとめました。"
tags: ["Cloudflare", "Next.js", "CI/CD", "WebDev"]
---

ポートフォリオサイトやブログを高速かつ安全に配信するためのホスティング環境として、**Cloudflare Pages**を採用しています。

グローバルなエッジネットワークを活用することで、世界中どこからでも低レイテンシでコンテンツを配信できるのが大きな強みです。

## Next.js Static Export の設定

Next.jsで静的エクスポートを行うには、`next.config.js` に `output: 'export'` を設定します。

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true, // 静的ホスティングでNext.js Image最適化サーバーを使わない設定
  },
};

export default nextConfig;
```

## デプロイ設定のポイント

Cloudflare Pagesのダッシュボードで設定するビルド構成は次の通りです。

- **ビルドコマンド**: `npm run build`
- **出力ディレクトリ**: `out` (Next.js 13.3以降の `output: 'export'` のデフォルト)
- **環境変数**: `NODE_VERSION: 18` 以上

> **注意点**: `output: 'export'` を利用する場合、動的ルート（`[slug]`など）には必ず `generateStaticParams()` を定義して、ビルド時に静的HTMLファイルを事前レンダリングしておく必要があります。

## メリットまとめ

- **爆速配信**: エッジキャッシュによる高速レスポンス
- **無料枠の充実**: 個人開発やポートフォリオには十分すぎる転送量・ビルド回数
- **GitHub連携**: `main` ブランチへのプッシュで自動デプロイ、プルリクエストごとのプレビューURL発行
