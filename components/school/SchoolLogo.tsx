'use client';

import { useState } from 'react';
import Image from 'next/image';

interface SchoolLogoProps {
  name: string;
  logoUrl?: string;
  size?: number; // width & height in px
  className?: string;
}

// Generate simple deterministic initials from school name (e.g. "Garden International School" -> "GIS")
function getInitials(name: string): string {
  // If common acronym exists in parentheses, extract it (e.g. "(ISKL)")
  const parenMatch = name.match(/\(([A-Z0-9]+)\)/i);
  if (parenMatch) return parenMatch[1].toUpperCase();

  const words = name
    .replace(/^(The)\s+/i, '')
    .split(/\s+/)
    .filter(Boolean);
  if (words.length === 1) return words[0].slice(0, 3).toUpperCase();
  return words
    .slice(0, 3)
    .map((w) => w[0])
    .join('')
    .toUpperCase();
}

export default function SchoolLogo({
  name,
  logoUrl,
  size = 56,
  className = '',
}: SchoolLogoProps) {
  const [hasError, setHasError] = useState(false);
  const initials = getInitials(name);

  const containerStyle: React.CSSProperties = {
    width: `${size}px`,
    height: `${size}px`,
    minWidth: `${size}px`,
    minHeight: `${size}px`,
  };

  if (!logoUrl || hasError) {
    return (
      <div
        className={`d-flex align-items-center justify-content-center bg-dark text-white rounded-3 fw-bold shadow-sm ${className}`}
        style={{
          ...containerStyle,
          fontSize: size >= 64 ? '1.1rem' : '0.85rem',
          letterSpacing: '0.05em',
        }}
        aria-label={`${name} logo placeholder`}
      >
        {initials}
      </div>
    );
  }

  return (
    <div
      className={`d-flex align-items-center justify-content-center bg-white border rounded-3 p-1 shadow-sm overflow-hidden ${className}`}
      style={containerStyle}
    >
      <Image
        src={logoUrl}
        alt={`${name} logo`}
        width={size - 8}
        height={size - 8}
        className="img-fluid"
        style={{ objectFit: 'contain', maxHeight: '100%', maxWidth: '100%' }}
        onError={() => setHasError(true)}
      />
    </div>
  );
}
