import Link from 'next/link';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="breadcrumb" className="mb-3">
      <ol className="breadcrumb small m-0 p-0 text-muted">
        <li className="breadcrumb-item">
          <Link href="/education" className="text-decoration-none text-muted">
            Education
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          if (isLast || !item.href) {
            return (
              <li
                key={index}
                className="breadcrumb-item active text-truncate"
                style={{ maxWidth: '280px' }}
                aria-current="page"
              >
                {item.label}
              </li>
            );
          }
          return (
            <li key={index} className="breadcrumb-item">
              <Link href={item.href} className="text-decoration-none text-muted">
                {item.label}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
