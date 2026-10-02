import type { SVGProps } from 'react';

const GOLD = '#D4AF37';
type P = SVGProps<SVGSVGElement>;

export const HomeIcon = (p: P) => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill={GOLD} {...p}>
    <path d="M12 2.8 1.8 11.6a.9.9 0 0 0 .6 1.6H4V21h6v-6h4v6h6v-7.8h1.6a.9.9 0 0 0 .6-1.6L12 2.8z" />
  </svg>
);

export const UserIcon = (p: P) => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill={GOLD} {...p}>
    <path d="M12 2.5a4.3 4.3 0 0 1 4.3 4.3c0 2.6-1.8 5-4.3 5s-4.3-2.4-4.3-5A4.3 4.3 0 0 1 12 2.5z" />
    <path d="M3.5 21.5c.4-4.2 3.8-6.8 8.5-6.8s8.1 2.6 8.5 6.8z" />
    <path d="M12 12.5 10.8 14.8 12 17.8 13.2 14.8z" fill="#fff" />
  </svg>
);

export const HandshakeIcon = (p: P) => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill={GOLD} {...p}>
    <path d="M1 8.5 5 7l3.5 2.5L5 14l-4-1.5zM23 8.5 19 7l-3.5 1.5-2.5 1-3 1.2c-.9.4-1.1 1.5-.4 2.1.5.5 1.3.5 1.9.1l1.8-1.2 4.3 4.1a1.2 1.2 0 0 0 1.7-1.7l-.4-.4 1.1.9a1.2 1.2 0 0 0 1.6-1.8l-.5-.4.8.7a1.2 1.2 0 0 0 1.6-1.8L19 11l4-1.5z" />
    <path d="M10 17l2 2a1.3 1.3 0 0 0 1.8-1.8L12 15.5zM7.5 15.5 10 18a1.3 1.3 0 0 1-1.8 1.8l-2.4-2.3z" />
  </svg>
);

export const CoinsIcon = (p: P) => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill={GOLD} {...p}>
    <circle cx="8.5" cy="7" r="4.5" />
    <path d="M13 12.5c3.5 0 8 1.2 8 3.5v1c0 2.3-4.5 3.5-8 3.5s-8-1.2-8-3.5v-1c0-2.3 4.5-3.5 8-3.5z" />
    <ellipse cx="13" cy="16" rx="5" ry="1.8" fill="#fff" opacity=".5" />
  </svg>
);

export const SearchIcon = (p: P) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2.2" strokeLinecap="round" {...p}>
    <circle cx="10.5" cy="10.5" r="7" />
    <path d="m16 16 5 5" />
  </svg>
);

export const Chevron = ({ dir, size = 24 }: { dir: 'left' | 'right'; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
    <path d={dir === 'left' ? 'm15 5-7 7 7 7' : 'm9 5 7 7-7 7'} />
  </svg>
);

export const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#111">
    <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.3.2 2.5.57 3.6a1 1 0 0 1-.25 1z" />
  </svg>
);

export const ArrowUpRight = ({ color = '#111', size = 10 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 10 10" fill="none" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 8 8 2M3 2h5v5" />
  </svg>
);

export const ArrowDownRight = ({ color = '#111', size = 10 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 10 10" fill="none" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 2 8 8M8 3v5H3" />
  </svg>
);

export const CaretDown = () => (
  <svg width="10" height="6" viewBox="0 0 10 6" fill="#111">
    <path d="M0 0h10L5 6z" />
  </svg>
);

export const Logo = () => (
  <svg width="30" height="34" viewBox="0 0 30 34" fill="none" stroke={GOLD} strokeWidth="1.6" strokeLinecap="round">
    <path d="M15 2v30M9 8v24M21 8v24M4 15v17M26 15v17M1 21v11M29 21v11" />
    <path d="M3 17c3-9 7-12 12-12s9 3 12 12" />
  </svg>
);
