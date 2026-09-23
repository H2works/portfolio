# H2works Portfolio & International School Finder 開発・運用ガイドライン (GEMINI.md)

当リポジトリは、H2worksのポートフォリオサイト（`h2works.xyz`）およびマレーシアのインターナショナルスクール検索・比較サービス **「International School Finder」** の Next.js (SSG) プロジェクトです。

---

## 1. プロジェクト構造と設計原則

1. **Next.js Static Export (`output: 'export'`)**:
   - Cloudflare Pages でホスティングされているため、サーバーサイド専用モジュール（Node.js `fs` 等）はビルド時（SSG）のみ利用し、ブラウザコンポーネント（`'use client'`）にインポートしないこと。
   - `useSearchParams()` を使用するクライアントコンポーネントは、ビルドエラーを防ぐため必ず親側で `<Suspense>` でラップすること。
2. **デザイン分離原則**:
   - `/web/`: H2worksコーポレートブランドレイアウト（50:50 ヒーロー）
   - `/school/`: 検索性・データ密度を重視したポータル・Webアプリ型レイアウト（専用ヘッダー・フッター・サイドバー）
3. **データストレージ**:
   - 学校データは `data/schools/{slug}.json` で管理（0msの超高速クライアントサイド絞り込み）。
4. **UI/UXデザイン原則（AI感の完全排除）**:
   - 見出しやバッジ、アイコンに**絵文字（📊, 🏫, 💰, 🎯, 🚌, 🍱 等）を使用することは厳禁**。素人感・AIプロトタイプ感を排除し、信頼性の高い教育データベース・メディアとしての品位を担保すること。
   - アイコンが必要な場合は、洗練された単色インラインSVG（Bootstrap Icons等）またはクリーンなテキストバッジ、アクセントボーダー（`border-left: 3px solid #2563eb`）を採用すること。

---

## 2. 学校データの追加・更新・検証手順（運用ランブック）

開発指示書 第17条・第18条（「AIの推測情報をそのまま公開しない」「情報の正確性を最優先」）を徹底するため、以下の手順を必ず遵守してください。

### ① 学校データの新規登録・承認（Human-in-the-Loop）
```bash
# 1. 草案データの生成（data/drafts/{slug}.json が生成される）
npm run school:extract draft --name "学校名" --slug "school-slug" --url "https://公式サイト"

# 2. 人間による目視確認・修正
#    data/drafts/{slug}.json の学費・カリキュラム・言語サポート・住所等を確認

# 3. 承認・本番反映（data/schools/{slug}.json へ移動）
npm run school:extract approve --slug "school-slug"
```

### ② 公式学費表（URL & PDF）の厳格な検証
- **定型URLの推測付与は禁止**: `/admissions/fees` などの定型パスを推測で付けず、必ず公式サイトのナビゲーションやサイト内リンクから「実際に存在する学費案内URL（HTTP 200）」を特定して `sources` に登録すること。
- **URL死活監視の実行**:
  ```bash
  npm run school:verify-urls
  ```
  全校の公式サイトおよび学費案内ページのHTTPステータスを一括検証します。
- **公式PDFの自動ダウンロード・アーカイブ保存**:
  ```bash
  npm run school:download-pdfs
  ```
  公式PDF（Fee Schedule PDF）を公開している学校について、PDF原本をダウンロードして `data/pdf_archives/{slug}_fee_schedule.pdf` にエビデンス（証拠）としてローカル保存します（`.gitignore` 済み）。
  ※PDFを公開せずWeb上のHTML表やシミュレーターで学費を公開している学校は、そのページURLを `sourceType: "official"` として記録します。

### ③ スクールバス代・給食代の表記ルール（案A）
AIが適当な一律相場を公式学費と混同させないため、以下を区別して記載すること：
- **公式ゾーン料金がある学校**: `公式ゾーン料金: 約RM 4,200 – RM 7,500 / 年（距離・エリアにより変動）`
- **外部運行会社への委託・個別見積もりの学校**: `ルート・距離に応じて別見積（相場目安: 約RM 4,000 – RM 7,500 / 年）`
- **給食**: `カフェテリア都度払い（1食 約RM 15〜22目安 / プリペイド利用 / お弁当持参可）` または幼小部等の `授業料に含む`
- **注釈**: 詳細ページおよび比較表に「※バス代・給食代は利用状況や居住地により異なる付帯費用です」という免責事項を必ず併記。

### ④ 学校ロゴの自動取得と表示
```bash
npm run school:logos
```
- 各学校の公式サイトから高解像度アイコン（`apple-touch-icon` や `favicon`）を自動探索し、`public/img/schools/logos/{slug}.png` に保存の上、JSONの `logoUrl` を更新します。
- コンポーネント `components/school/SchoolLogo.tsx` がロゴ画像を表示し、画像未取得や読み込みエラー時には学校イニシャル（例: "ISKL", "GIS"）によるクリーンなバッジフォールバックが自動適用されます。

---

## 3. 主要CLIコマンド一覧

| コマンド | 説明 |
| :--- | :--- |
| `npm run dev` | 開発サーバー起動（`localhost:3000`） |
| `npm run build` | Next.js SSG ビルド検証（静的HTML全件出力） |
| `npm run school:extract` | 学校データの草案作成・承認CLI |
| `npm run school:logos` | 全校の公式ロゴ画像を自動取得・保存 |
| `npm run school:verify-urls` | 全校の公式Webサイト & 学費ページURLの死活監視 |
| `npm run school:download-pdfs` | 各校の公式学費PDFをローカルアーカイブに一括ダウンロード |

---

## 4. ビルド・デプロイ前の必須チェック

コードやデータを変更した後は、必ず以下を実行してエラーゼロを確認すること：
```bash
npm run build
```
全ページ（`/school`, `/school/malaysia`, `/school/compare`, `/school/malaysia/[school]`, `/web/blog`, `/web/blog/[slug]` 等）が正常に出力されることを確認してからコミット・デプロイしてください。
