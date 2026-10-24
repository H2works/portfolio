export function MigrationIllustration() {
  return (
    <div className="migration-visual" aria-hidden="true">
      <svg viewBox="0 0 560 430" role="presentation">
        <defs>
          <linearGradient id="migrationGlow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#46d6c5" />
            <stop offset="1" stopColor="#7ca8ff" />
          </linearGradient>
          <pattern id="migrationGrid" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="#dbeafe" opacity=".48" />
          </pattern>
        </defs>
        <rect width="560" height="430" rx="28" fill="#101d36" />
        <rect width="560" height="430" rx="28" fill="url(#migrationGrid)" />
        <circle cx="460" cy="72" r="105" fill="#1a3860" opacity=".65" />
        <path d="M28 94h504" stroke="#34435b" />
        <circle cx="43" cy="67" r="5" fill="#f18776" />
        <circle cx="61" cy="67" r="5" fill="#e8bd68" />
        <circle cx="79" cy="67" r="5" fill="#65c8a8" />
        <text x="105" y="72" fill="#b8c6d9" fontSize="12" fontFamily="sans-serif">SITE TRANSFORMATION</text>
        <rect x="34" y="125" width="174" height="220" rx="14" fill="#1b2942" stroke="#53627a" />
        <text x="52" y="154" fill="#dbe4f1" fontSize="13" fontWeight="700" fontFamily="sans-serif">OLD SITE</text>
        <rect x="52" y="171" width="138" height="34" rx="6" fill="#283852" />
        <rect x="61" y="181" width="61" height="5" rx="2.5" fill="#8291a8" />
        <rect x="61" y="191" width="103" height="4" rx="2" fill="#52627a" />
        <rect x="52" y="216" width="63" height="68" rx="6" fill="#30425e" />
        <rect x="123" y="216" width="67" height="30" rx="6" fill="#30425e" />
        <rect x="123" y="254" width="67" height="30" rx="6" fill="#30425e" />
        <rect x="52" y="295" width="138" height="31" rx="6" fill="#283852" />
        <circle cx="187" cy="141" r="12" fill="#ed836f" />
        <path d="M182 136l10 10m0-10l-10 10" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
        <path d="M220 232h76m-14-14 14 14-14 14" fill="none" stroke="url(#migrationGlow)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="320" y="125" width="206" height="220" rx="14" fill="#f8fbff" />
        <path d="M320 139a14 14 0 0 1 14-14h178a14 14 0 0 1 14 14v28H320z" fill="#e9f1fb" />
        <circle cx="338" cy="145" r="4" fill="#7c91aa" />
        <rect x="352" y="141" width="113" height="8" rx="4" fill="#c8d7e9" />
        <rect x="340" y="188" width="165" height="12" rx="6" fill="#1b2b46" />
        <rect x="340" y="209" width="122" height="7" rx="3.5" fill="#9aabc0" />
        <rect x="340" y="222" width="147" height="7" rx="3.5" fill="#c5d1df" />
        <rect x="340" y="246" width="78" height="30" rx="8" fill="#2467d9" />
        <rect x="340" y="294" width="165" height="1" fill="#d8e1ec" />
        <path d="M351 313h10l5-8 7 16 6-11 5 3h10" fill="none" stroke="#13a88f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <text x="401" y="318" fill="#16806f" fontSize="10" fontWeight="700" fontFamily="sans-serif">FAST / STATIC / SECURE</text>
        <rect x="177" y="365" width="206" height="40" rx="20" fill="#172c49" stroke="#3a5977" />
        <circle cx="199" cy="385" r="6" fill="#4bd1b6" />
        <text x="214" y="389" fill="#d7e6f5" fontSize="12" fontWeight="600" fontFamily="sans-serif">管理の負担を、軽やかに。</text>
      </svg>
    </div>
  );
}

