import { EducationCategory } from '@/types/education';

export const EDUCATION_CATEGORIES: EducationCategory[] = [
  {
    slug: 'malaysia',
    name: 'マレーシア留学・教育',
    shortName: 'マレーシア',
    description: 'マレーシアのインターナショナルスクール事情、母子留学、ビザ要件、現地生活や学費についての総合情報。',
    metaTitle: 'マレーシア留学・教育ガイド | H2works Education',
    metaDescription: 'マレーシアのインターナショナルスクール選び、母子留学のリアルな手続き、生活費など、現地在住・調査に基づく教育情報をお届けします。',
  },
  {
    slug: 'international-school',
    name: 'インターナショナルスクール',
    shortName: 'インター校',
    description: 'イギリス式・IB・アメリカ式カリキュラムの違い、英語サポート（EAL）、編入・併用ガイド。',
    metaTitle: 'インターナショナルスクール徹底解説 | H2works Education',
    metaDescription: '国際カリキュラムの特徴、英語力に応じた学校選び、日本との教育制度の違いをわかりやすく解説。',
  },
  {
    slug: 'correspondence-high-school',
    name: '通信制高校・オンライン学習',
    shortName: '通信制高校',
    description: '海外在住者の日本高校卒業資格取得、インター校とのダブルスクール、柔軟な進路選択。',
    metaTitle: '海外在住×通信制高校ガイド | H2works Education',
    metaDescription: '海外にいながら日本の高校卒業資格を取得できる通信制高校の選び方、インター校との両立モデルを解説。',
  },
  {
    slug: 'qualifications',
    name: '資格・語学・スキル',
    shortName: '資格・語学',
    description: 'IELTS / TOEFL、ケンブリッジ英検、高校卒業資格、ITスキルなど将来の進路を広げる資格情報。',
    metaTitle: '教育・進路のための資格・語学情報 | H2works Education',
    metaDescription: '海外留学・進学に有利な英語検定や資格、通信制高校で取得可能なスキルアップ情報を整理。',
  },
  {
    slug: 'university',
    name: '大学進学・キャリア',
    shortName: '大学進学',
    description: 'インター校・海外在住からの日本国内大学受験（総合型選抜・帰国生枠）や海外大学進学。',
    metaTitle: '大学進学・進路パスウェイ | H2works Education',
    metaDescription: '海外インター校や通信制高校からの国内外大学進学ルート、帰国生入試、総合型選抜対策のポイント。',
  },
];

export function getEducationCategoryBySlug(slug: string): EducationCategory | undefined {
  return EDUCATION_CATEGORIES.find((cat) => cat.slug === slug);
}

export function getAllEducationCategories(): EducationCategory[] {
  return EDUCATION_CATEGORIES;
}
