# H2works International School Finder
## 開発指示書 v2

---

# 1. プロジェクト概要

既存の `h2works.xyz` に、インターナショナルスクール検索・比較サービスを新規追加する。

サービス名は仮に、

**International School Finder**

とする。

目的は、海外で子どもの学校を探している保護者が、

- 地域
- 子どもの年齢
- 学年
- カリキュラム
- 学費
- 学校設備
- スクールバス
- 日本語サポート

などの条件から学校を検索し、複数校を比較できるサービスを提供すること。

最初の対象地域は **Malaysia / Klang Valley**。

将来的には、

- Thailand
- Singapore
- Indonesia
- Philippines
- その他の国

へ拡張できる設計にする。

---

# 2. 既存サイトとの関係

現在の `h2works.xyz` は、Web制作・H2worksのブランドサイトとして使用している。

現在のサイトは、

- 画面の右側に大きなHero画像
- 左側を中心としたコンテンツ
- 比較的小さいHeader
- 比較的小さいFooter
- 大きな余白
- ミニマルなブランドサイト型UI

となっている。

このデザインは既存のH2worksサイトには適している。

しかし、International School Finderは**データベース・検索サービス**なので、既存サイトのレイアウトをそのまま流用しない。

---

# 3. デザイン方針

## 最重要

**H2worksの「雰囲気」は継承するが、レイアウト・UI構成はSchoolサービス専用に新規設計する。**

既存サイトの50:50 Heroレイアウトを流用しない。

Schoolサービスでは、情報量と検索性を優先する。

---

# 4. 継承するもの

既存H2worksサイトから以下の要素を参考にする。

- ロゴ
- フォント
- タイポグラフィ
- ミニマルな雰囲気
- 余白の使い方
- ボタンの雰囲気
- リンクのデザイン
- ブランドとしての統一感
- 全体的な落ち着いた印象

ただし、既存サイトのレイアウトそのものはコピーしない。

---

# 5. School専用UI

SchoolサービスはWebアプリケーションに近いUIとする。

基本構造：

```text
┌───────────────────────────────────┐
│ Logo / International School Finder│
│                       Navigation  │
├───────────────────────────────────┤
│                                   │
│     International School Finder   │
│     Find the right school         │
│                                   │
│     [Search / Filter]             │
│                                   │
├──────────────┬────────────────────┤
│              │                    │
│ Filters      │ School Results     │
│              │                    │
│ Location     │ School A           │
│ Age          │ School B           │
│ Curriculum   │ School C           │
│ Budget       │ School D           │
│              │                    │
└──────────────┴────────────────────┘
```

Desktopでは、

**左：Filter**

**右：Search Results**

を基本構成とする。

ただし画面サイズに応じて柔軟に変更する。

---

# 6. Mobile UI

スマートフォンを最重要デバイスの一つとして設計する。

Desktopの2カラムをそのまま縮小しない。

Mobileでは、

```text
Header

International School Finder

[Filter]

4 schools found

School Card
School Card
School Card
```

のようにする。

Filterは、

- Drawer
- Modal
- Accordion

など、使いやすいUIを採用する。

---

# 7. URL構造

既存のブログを整理する。

現在：

```text
h2works.xyz/blog/
```

変更後：

```text
h2works.xyz/web/blog/
```

新規：

```text
h2works.xyz/school/
```

基本構造：

```text
h2works.xyz/
├── web/
│   └── blog/
│
└── school/
    ├── malaysia/
    │   ├── index
    │   ├── kuala-lumpur/
    │   ├── selangor/
    │   └── [school]/
    │
    └── compare/
```

将来的に、

```text
/school/thailand/
/school/singapore/
/school/indonesia/
```

を追加できるようにする。

---

# 8. Schoolトップページ

URL：

```text
/school/
```

役割は通常のブランドサイトのLanding Pageではなく、

**学校検索サービスへの入口**

とする。

構成例：

```text
Header

International School Finder

Find international schools by:
Location / Age / Budget / Curriculum

[Start searching]

Popular locations

Malaysia
Kuala Lumpur
Selangor
Petaling Jaya

Browse by curriculum

IB
Cambridge
British
American

School search
```

Hero画像を大きく配置する必要はない。

---

# 9. 学校一覧

例：

```text
/school/malaysia/
/school/malaysia/kuala-lumpur/
/school/malaysia/selangor/
```

一覧ページでは、

```text
[Filters]

24 schools found

┌─────────────────────────────┐
│ School Name                 │
│ Kuala Lumpur                │
│ Cambridge                   │
│ Age: 3–18                   │
│ Tuition: RM xx,xxx/year     │
│                             │
│ [View School] [Compare]    │
└─────────────────────────────┘
```

のようなCard形式を基本とする。

---

# 10. 検索・フィルター

Phase 1で以下を実装。

## Location

- Country
- State
- City
- Area

## Child age

- 3
- 4
- 5
- 6
- 7
- 8
- etc.

年齢から対象学年を検索できる設計も検討する。

## Grade

例：

- Nursery
- Kindergarten
- Reception
- Year 1
- Year 2
- Primary
- Secondary

## Curriculum

複数選択可能。

- IB
- Cambridge
- British
- American
- Australian
- IPC
- Other

## Budget

例：

- RM20,000以下
- RM30,000以下
- RM40,000以下
- RM50,000以下
- RM60,000以下
- RM80,000以下

## Other

- School Bus
- Japanese Support
- After School Care
- Boarding

---

# 11. 検索結果

検索結果には、

- School Name
- Location
- Curriculum
- Age Range
- Tuition
- School Bus
- Japanese Support

などを表示する。

結果件数も表示。

例：

```text
4 schools match your criteria.
```

「おすすめ順」などのランキング形式にはしない。

基本的には、

- 条件一致度
- 距離
- 学費
- 名前

など、ユーザーが明示的に指定した並び替えだけを提供する。

---

# 12. 比較機能

学校を複数選択して比較できるようにする。

例：

```text
Compare schools

School A
School B
School C
```

比較項目：

- Location
- Curriculum
- Age Range
- Tuition
- Application Fee
- Registration Fee
- Deposit
- Bus
- Lunch
- Japanese Support
- After School Care
- Facilities

Desktopでは比較表。

Mobileでは横スクロールまたは縦型比較UI。

---

# 13. 学校詳細ページ

例：

```text
/school/malaysia/kuala-lumpur/example-school/
```

構成：

1. School overview
2. Location
3. Age / Grade
4. Curriculum
5. Tuition fees
6. Other fees
7. Admissions
8. Languages
9. Facilities
10. School bus
11. After School Care
12. FAQ
13. Official website
14. Information sources
15. Last verified

学校詳細ページでは、情報の読みやすさを優先する。

---

# 14. 学校データ

学校データは将来CMSへ移行できるようにする。

基本：

```text
School
 ├── basic
 ├── location
 ├── age_range
 ├── curriculum
 ├── languages
 ├── facilities
 ├── admissions
 ├── transport
 └── sources
```

---

# 15. Feeデータ

学費はSchoolデータと分離する。

```text
Fee
 ├── school_id
 ├── academic_year
 ├── fee_type
 ├── amount
 ├── currency
 ├── applicable_grade
 └── source_id
```

fee_type：

- tuition
- application_fee
- registration_fee
- enrollment_fee
- deposit
- bus
- lunch
- uniform
- books
- other

2026/2027と2027/2028を上書きしない。

年度ごとに保持する。

---

# 16. Sourceデータ

情報源を管理する。

```text
Source
 ├── url
 ├── title
 ├── source_type
 ├── checked_at
 └── academic_year
```

source_type：

- official
- official_pdf
- government
- directory
- other

重要情報は可能な限り学校公式サイトを一次情報源とする。

---

# 17. 情報の正確性

このサービスでは情報の正確性を重視する。

特に、

- 学費
- 入学条件
- 年齢
- Curriculum
- Intake
- School Bus
- Contact information

は変更される可能性がある。

そのため、

```text
Last verified:
September 2026
```

などを表示できるようにする。

---

# 18. AIによるデータ収集

Google Gemini / AIを使って学校公式サイトから情報を整理することを想定する。

ただし、

**AIが推測した情報をそのまま公開しない。**

基本フロー：

```text
Official school website
        ↓
AI research
        ↓
Structured data
        ↓
Human verification
        ↓
Database
        ↓
Public
```

確認できない情報は、

```text
Unknown
```

またはnullとする。

---

# 19. 最初の学校データ

Phase 1では10校程度を登録して動作確認する。

最初から数百校登録しない。

テスト条件：

```text
Age: 6
Location: Klang Valley
Budget: RM40,000/year
Curriculum: Cambridge
```

この条件で検索・比較が正常に動作することを確認する。

---

# 20. 費用計算

将来的に、

### First Year

```text
Tuition
+ Application
+ Registration
+ Deposit
+ Bus
+ Lunch
+ Uniform
+ Books
```

### Following Years

```text
Tuition
+ Bus
+ Lunch
+ Uniform
+ Books
```

などを計算できるようにする。

ただし、学校によって費用体系が異なるため、情報が確認できないものを推測して合計しない。

「公式確認済み」と「推定」を明確に区別する。

---

# 21. SEO

学校ごとに検索エンジンから直接アクセスできる構造にする。

例：

```text
/school/malaysia/kuala-lumpur/example-school/
```

想定検索：

- Malaysia international school
- Kuala Lumpur international school
- Malaysia international school fees
- KL international school fees
- international school Malaysia Year 1
- Malaysia international school Cambridge
- Malaysia international school IB

学校詳細ページには適切な、

- title
- description
- canonical
- Open Graph
- Breadcrumb
- sitemap

を設定する。

---

# 22. Structured Data

可能な範囲でSchema.orgを利用。

候補：

- EducationalOrganization
- School
- PostalAddress
- BreadcrumbList
- FAQPage

ただし、実際のページ内容と一致しないStructured Dataは生成しない。

---

# 23. 技術方針

既存H2worksの技術方針を維持。

- Next.js
- App Router
- TypeScript
- Static Generation / SSG
- Cloudflare Pages

を基本とする。

可能な限りサーバーコストを増やさない。

学校数が増えても対応できるようにする。

---

# 24. 既存Blogの移動

現在：

```text
/blog/
```

を、

```text
/web/blog/
```

へ移動する。

既存記事の内容・画像・metadata・SEO情報を可能な限り維持する。

旧URLへのアクセスについては、可能な限り適切なredirectを設定する。

既存サイトの他の部分に影響を与えない。

---

# 25. Web / Schoolのデザイン分離

以下を明確に分ける。

### `/web/`

H2worksのWeb制作・ブランドサイト。

既存の、

- 大きなHero
- ブランド重視
- 余白の大きいレイアウト

を維持する。

### `/school/`

International School Finder。

- 検索
- フィルター
- 比較
- データカード
- テーブル
- 情報量

を優先する。

ただし、フォント・ロゴ・タイポグラフィなどでH2worksとしての統一感を保つ。

---

# 26. Header

Schoolでは既存の小さなHeaderをそのまま流用しない。

検索サービスとして必要なNavigationを設計する。

例：

```text
H2works
International School Finder

Schools
Compare
Countries
Guides

[Search]
```

MobileではNavigationをコンパクトにする。

---

# 27. Footer

Schoolでは情報量に応じて適切なFooterを新規設計する。

例：

```text
International School Finder

Schools
Malaysia
Kuala Lumpur
Selangor

Resources
School Guide
Fees Guide
Admissions

About
About H2works
Contact

Disclaimer
Privacy
```

既存H2worksの小さなFooterをそのままコピーしない。

---

# 28. デザイン上の禁止事項

以下はSchoolサイトでは避ける。

- 画面右半分をHero画像で占有
- 左半分だけにコンテンツを配置
- 過剰な余白による情報密度の低下
- 小さすぎる文字
- 情報を画像だけで表現
- 検索しにくいUI
- 巨大なLanding Page中心の構成

Schoolでは、

**情報量が多くても整理されていて見やすいこと**

を最優先する。

---

# 29. Phase 1の完成条件

以下が動作する状態を最初の完成とする。

### `/school/`

School Finderトップ

### `/school/malaysia/`

Malaysiaの学校一覧

### `/school/malaysia/[school]/`

学校詳細

### `/school/compare/`

比較

### Search / Filter

- Location
- Age
- Curriculum
- Budget
- Other

### Data

10校程度

### SEO

基本metadata / sitemap / canonical / Breadcrumb

### Responsive

Desktop / Tablet / Mobile

---

# 30. Phase 1で作らないもの

まだ以下は作らない。

- 会員登録
- ログイン
- レビュー投稿
- 掲示板
- 決済
- 学校向け管理画面
- 複雑なRecommendation AI
- 学校ランキング
- 大量の自動生成記事
- 広告システム

まず検索・比較サービスとして成立させる。

---

# 31. 今後の拡張

Phase 2以降で、

- 地図検索
- 学費計算
- School shortlist
- Compare
- Admission deadline
- School visit information
- Parent guide
- Education system guide
- Malaysia以外の国
- AIによる条件検索
- 学校情報の自動更新チェック

などを検討する。

---

# 32. 最重要コンセプト

このプロジェクトは、

**「AIで学校紹介記事を大量生成するSEOサイト」ではない。**

目標は、

**「海外で子どもの学校を探す保護者が、実際に使えるInternational School Database / Finderを作ること」**

である。

既存H2worksサイトの雰囲気を残しながらも、Schoolサービスについては既存レイアウトに制約されず、検索・比較サービスとして最適なUIを設計すること。

まず10校で完成させ、実際に検索・比較して使いやすいことを確認してから学校数を増やす。