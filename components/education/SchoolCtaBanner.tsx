import Link from 'next/link';

interface SchoolCtaBannerProps {
  title?: string;
  description?: string;
  className?: string;
}

export default function SchoolCtaBanner({
  title = 'マレーシアのインターナショナルスクールを探すなら',
  description = '学費・カリキュラム（イギリス式・IB・アメリカ式等）・地域・英語サポート（EAL）から、20校以上の公式データを一括検索・条件比較できます。',
  className = '',
}: SchoolCtaBannerProps) {
  return (
    <div className={`school-cta-card ${className}`}>
      <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
        <div style={{ maxWidth: '680px' }}>
          <div className="cta-badge">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
              aria-hidden="true"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
            </svg>
            <span>公式データ比較ツール</span>
          </div>
          <h3 className="cta-title">{title}</h3>
          <p className="cta-description m-0">{description}</p>
        </div>
        <div className="d-flex flex-wrap gap-2">
          <Link
            href="/school/malaysia"
            className="btn btn-primary px-3 py-2 fw-semibold d-inline-flex align-items-center"
          >
            <span>学校一覧・検索</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              fill="currentColor"
              className="bi bi-arrow-right ms-2"
              viewBox="0 0 16 16"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </Link>
          <Link
            href="/school/compare"
            className="btn btn-outline-secondary px-3 py-2 fw-semibold"
          >
            比較表を見る
          </Link>
        </div>
      </div>
    </div>
  );
}
