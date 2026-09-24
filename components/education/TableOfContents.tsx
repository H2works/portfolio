import { TocItem } from '@/types/education';

export default function TableOfContents({ toc }: { toc: TocItem[] }) {
  if (!toc || toc.length === 0) {
    return null;
  }

  return (
    <div className="education-toc">
      <div className="toc-header">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-list-nested text-primary"
          viewBox="0 0 16 16"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M4.5 11.5A.5.5 0 0 1 5 11h10a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm-2-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm-2-4A.5.5 0 0 1 1 3h10a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5z"
          />
        </svg>
        <span>目次</span>
      </div>
      <ul className="toc-list">
        {toc.map((item) => (
          <li
            key={item.id}
            className={item.level === 3 ? 'toc-h3' : 'toc-h2'}
          >
            <a href={`#${item.id}`}>{item.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
