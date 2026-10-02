const TONES = [
  { bg: '#C9B79C', skin: '#8D5A3B', hair: '#2B1B12' },
  { bg: '#B9C4CE', skin: '#E8B796', hair: '#6B5B4B' },
  { bg: '#C7B8D1', skin: '#C58C69', hair: '#1E1A1A' },
  { bg: '#9FB0C0', skin: '#EFC7A6', hair: '#3A2C25' },
  { bg: '#A7C3C0', skin: '#E3A98A', hair: '#7A4A2A' },
];

export function Avatar({ size, tone = 0 }: { size: number; tone?: number }) {
  const t = TONES[tone % TONES.length];
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" style={{ borderRadius: '50%', display: 'block', flexShrink: 0 }}>
      <rect width="40" height="40" fill={t.bg} />
      <path d="M5 40c1-9 7-13 15-13s14 4 15 13z" fill="#fff" />
      <ellipse cx="20" cy="17" rx="7" ry="8.5" fill={t.skin} />
      <path d="M12.5 15c0-6 3.5-8.5 7.5-8.5s7.5 2.5 7.5 8.5c-2-3-4-4-7.5-4s-5.5 1-7.5 4z" fill={t.hair} />
    </svg>
  );
}

export function AvatarStack({ count, size }: { count: string; size: number }) {
  const overlap = -Math.round(size * 0.3);
  return (
    <div className="avatar-stack">
      {[0, 3].map((tone, i) => (
        <span key={tone} className="avatar-stack__item" style={{ marginLeft: i ? overlap : 0, width: size, height: size }}>
          <Avatar size={size - 4} tone={tone} />
        </span>
      ))}
      <span className="avatar-stack__count" style={{ marginLeft: overlap, width: size, height: size, fontSize: Math.round(size * 0.36) }}>
        {count}
      </span>
    </div>
  );
}
