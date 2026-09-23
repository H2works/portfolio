import { School } from '@/types/school';

interface SchoolStructuredDataProps {
  school: School;
}

export function SchoolStructuredData({ school }: SchoolStructuredDataProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: school.officialName,
    alternateName: school.name,
    description: school.shortDescription,
    url: school.websiteUrl,
    address: {
      '@type': 'PostalAddress',
      streetAddress: school.location.address,
      addressLocality: school.location.city,
      addressRegion: school.location.state,
      addressCountry: school.location.country,
    },
    makesOffer: {
      '@type': 'Offer',
      priceCurrency: school.currentFees.items[0]?.currency || 'MYR',
      price: school.currentFees.tuitionMinAnnual,
      description: school.currentFees.tuitionDisplay,
    },
    educationalCredentialAwarded: school.curricula.join(', '),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

interface BreadcrumbStructuredDataProps {
  items: { name: string; url: string }[];
}

export function BreadcrumbStructuredData({ items }: BreadcrumbStructuredDataProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
