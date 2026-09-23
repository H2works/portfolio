---
title: "Next.js App RouterとMarkdownで作る静的ブログ"
date: "2026-09-23"
description: "Next.js App Routerとremark/gray-matterを活用し、Markdownファイルから爆速に動作する静的ブログを構築する方法を解説します。"
tags: ["Next.js", "TypeScript", "Markdown", "SSG"]
---

ポートフォリオサイトに技術ブログや日々の開発メモを手軽に書ける仕組みとして、**Markdownベースのブログ機能**を実装しました。

CMSを導入せずにリポジトリ内のMarkdownファイルを管理することで、Gitのバージョン管理の恩恵を受けながら、軽量かつ高速なブログを運用することができます。

## なぜMarkdownブログなのか？

静的サイトジェネレーター（SSG）とMarkdownの組み合わせには、以下のような多くのメリットがあります。

1. **Gitで一元管理できる**
   - 記事の変更履歴がコミットログに残り、レビューや差分確認が容易
   - オフラインでも記事を執筆可能
2. **高速な配信と低コスト**
   - ビルド時にHTMLを事前生成（Static Export）するため、サーバーレス・エッジ（Cloudflare Pagesなど）で高速レスポンス
3. **ベンダーロックインがない**
   - プレーンなMarkdown形式なので、将来別のフレームワークに移行する際もコンテンツをそのまま流用可能

## 実装構成

このブログ機能は以下の技術スタックで構成されています。

| ライブラリ | 用途 |
| :--- | :--- |
| **gray-matter** | MarkdownファイルのFrontmatter（メタデータ）の抽出 |
| **remark / remark-html** | Markdown文字列からHTMLへの変換 |
| **remark-gfm** | テーブルや取り消し線、タスクリストなどのGitHub Flavored Markdown対応 |
| **highlight.js** | コードブロックのシンタックスハイライト |

## コード例

例えば、記事データを取得するヘルパー関数は以下のようにTypeScriptで実装しています。

```typescript
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title,
        date: data.date,
        description: data.description,
        tags: data.tags ?? [],
      };
    });
}
```

## 今後の展望

- カテゴリ別・タグ別フィルタリング機能
- 検索機能の強化
- 目次（Table of Contents）の自動生成

ぜひ新しい記事を `posts/` ディレクトリに追加して、情報発信を活用してみてください！
