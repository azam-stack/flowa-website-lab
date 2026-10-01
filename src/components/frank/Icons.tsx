import type { SVGProps } from "react";

/**
 * The site's own small icon set: line icons on a 24px grid, drawn here
 * so nothing is pulled from an icon library (brief §0.2). All are
 * decorative: `aria-hidden` is set by default and a parent supplies the
 * accessible name.
 */
type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function base({ size = 20, className = "", ...rest }: IconProps) {
  return { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.75, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true, className, ...rest };
}

/** 4-point sparkle, filled. */
export function Sparkle({ size = 16, className = "", ...rest }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" className={className} {...rest}>
      <path d="M12 2 Q12 12 22 12 Q12 12 12 22 Q12 12 2 12 Q12 12 12 2 Z" fill="currentColor" />
    </svg>
  );
}

export function ArrowUpRight(p: IconProps) {
  return (
    <svg {...base(p)}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}
export function ArrowRight(p: IconProps) {
  return (
    <svg {...base(p)}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
export function ArrowLeft(p: IconProps) {
  return (
    <svg {...base(p)}>
      <path d="M19 12H5M11 6l-6 6 6 6" />
    </svg>
  );
}
export function ChevronDown(p: IconProps) {
  return (
    <svg {...base(p)}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
export function Play(p: IconProps) {
  return (
    <svg {...base(p)}>
      <path d="M8 5.5v13l11-6.5z" fill="currentColor" stroke="none" />
    </svg>
  );
}
export function Calendar(p: IconProps) {
  return (
    <svg {...base(p)}>
      <rect x="3.5" y="5" width="17" height="15" rx="2.5" />
      <path d="M3.5 10h17M8 3v4M16 3v4" />
    </svg>
  );
}
export function Send(p: IconProps) {
  return (
    <svg {...base(p)}>
      <path d="M21 3 10.5 13.5M21 3l-7 18-3.5-7.5L3 10z" />
    </svg>
  );
}
export function Check(p: IconProps) {
  return (
    <svg {...base({ strokeWidth: 2.25, ...p })}>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  );
}
export function Close(p: IconProps) {
  return (
    <svg {...base(p)}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}
export function PlusIcon(p: IconProps) {
  return (
    <svg {...base(p)}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}
export function Menu(p: IconProps) {
  return (
    <svg {...base(p)}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}
export function Mail(p: IconProps) {
  return (
    <svg {...base(p)}>
      <rect x="3" y="5.5" width="18" height="13" rx="2.5" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </svg>
  );
}
export function Message(p: IconProps) {
  return (
    <svg {...base(p)}>
      <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v8a2.5 2.5 0 0 1-2.5 2.5H10l-4.5 3.5V17H6.5A2.5 2.5 0 0 1 4 14.5z" />
      <path d="M8 9h8M8 12.5h5" />
    </svg>
  );
}
export function Steps(p: IconProps) {
  return (
    <svg {...base(p)}>
      <path d="M4 18h5v-5H4zM9.5 13h5V8h-5zM15 8h5V3h-5z" />
    </svg>
  );
}
export function Pulse(p: IconProps) {
  return (
    <svg {...base(p)}>
      <path d="M3 12h4l2.5-6 4 12 2.5-6H21" />
    </svg>
  );
}
export function Document(p: IconProps) {
  return (
    <svg {...base(p)}>
      <path d="M7 3h7l4 4v14H7z" />
      <path d="M14 3v4h4M10 12h5M10 16h5" />
    </svg>
  );
}
export function Question(p: IconProps) {
  return (
    <svg {...base(p)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.3-1 .9-1 1.7M12 17h.01" />
    </svg>
  );
}
export function People(p: IconProps) {
  return (
    <svg {...base(p)}>
      <circle cx="9" cy="8.5" r="3" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0M15.5 6a3 3 0 0 1 0 5.5M17 13.5a5 5 0 0 1 3.5 5" />
    </svg>
  );
}
export function Shield(p: IconProps) {
  return (
    <svg {...base(p)}>
      <path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6z" />
    </svg>
  );
}
export function Search(p: IconProps) {
  return (
    <svg {...base(p)}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m20 20-4-4" />
    </svg>
  );
}
export function Target(p: IconProps) {
  return (
    <svg {...base(p)}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
    </svg>
  );
}
export function Refresh(p: IconProps) {
  return (
    <svg {...base(p)}>
      <path d="M20 12a8 8 0 1 1-2.5-5.8M20 4v5h-5" />
    </svg>
  );
}

/** The smiley-ball icon in the announcement bar: a small sphere with the hand-drawn face. */
export function SmileyBall({ size = 22, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <circle cx="12" cy="12" r="11" fill="#FFE7C7" stroke="#0C0C0B" strokeWidth="1.25" />
      <circle cx="8.6" cy="9.4" r="2.6" fill="#fff" opacity="0.7" />
      <ellipse cx="9" cy="10.5" rx="1.1" ry="1.6" fill="#0C0C0B" />
      <ellipse cx="15" cy="10.5" rx="1.1" ry="1.6" fill="#0C0C0B" />
      <path d="M8.3 14.5q3.7 3.4 7.4 0" stroke="#0C0C0B" strokeWidth="1.4" fill="none" strokeLinecap="round" />
    </svg>
  );
}
