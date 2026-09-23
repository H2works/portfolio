---
title: "Markdown記法とスタイリングの表示サンプル集"
date: "2026-09-20"
description: "見出し、コードブロック、テーブル、引用、リストなど、このブログで利用可能なMarkdown記法とスタイリングの確認用サンプルです。"
tags: ["Markdown", "Design", "CSS", "Tips"]
---

このブログでは、GitHub Flavored Markdown（GFM）に対応しており、さまざまな表記法を使って読みやすい技術記事を作成できます。

以下に代表的なスタイルの表示例をまとめました。

## 見出しスタイル (H2)

### 見出しレベル 3 (H3)

#### 見出しレベル 4 (H4)

段落のテキストは適切な行間（`line-height: 1.85`）とフォントサイズで読みやすく調整されています。日本語の長文でも目が疲れにくいタイポグラフィを採用しています。

## インライン装飾

- **太字テキスト（Bold）**
- *斜体テキスト（Italic）*
- ~~打ち消し線（Strikethrough）~~
- インラインコード: `const message = "Hello World";` や `npm run build`
- リンク: [H2works ポートフォリオ](/)

## 引用（Blockquote）

> これは引用文です。有益なTipsや注釈、重要なポイントを強調したいときに活用できます。
>
> 複数段落の引用もきれいに装飾されます。

## リスト

### 順序なしリスト
- フロントエンド技術
  - Next.js (App Router)
  - TypeScript
  - React
- スタイリング
  - Sass / SCSS
  - Bootstrap 5

### 順序付きリスト
1. `posts/` フォルダに `.md` ファイルを作成
2. Frontmatter（タイトル、日付、概要、タグ）を記述
3. 本文をMarkdown形式で執筆
4. Gitにコミット＆プッシュして自動公開

### タスクリスト (GFM)
- [x] ブログ機能の実装
- [x] シンタックスハイライトの対応
- [x] レスポンシブテーブルの表示
- [ ] RSSフィード生成の追加

## テーブル表示 (GFM)

横幅が狭いスマートフォン画面でも崩れないよう、自動で横スクロール対応になります。

| 機能名 | ステータス | 備考 |
| :--- | :---: | :--- |
| **Markdownパース** | 対応済 | remark + remark-html |
| **GFMサポート** | 対応済 | remark-gfm |
| **コード強調** | 対応済 | highlight.js |
| **Static Export** | 対応済 | Cloudflare Pages対応 |

## ソースコードのハイライト

言語名を指定することで、自動的にシンタックスハイライトが適用されます。

```typescript
interface BlogPost {
  slug: string;
  title: string;
  date: string;
  tags?: string[];
  contentHtml: string;
}

export function formatPostDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
```

```bash
# ローカル開発サーバーの起動
npm run dev

# 静的エクスポートビルド
npm run build
```

このように、技術的な記事を快適に書くことができます！
