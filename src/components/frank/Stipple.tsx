import { useId, type ReactNode } from "react";

/**
 * Stippled / dithered illustrations (brief §2.1, §2.5): flat black
 * objects whose lower part dissolves into dotted grain in the brand
 * orange. Drawn as SVG here, all original subjects. The effect is two
 * copies of the same shapes, one in ink masked to the top, one filled
 * with a dot pattern masked to the bottom, so the handover reads as
 * grain. Every illustration is decorative and aria-hidden.
 */
export function Stippled({ viewBox, className = "", children, from = 0.42, to = 0.74 }: { viewBox: string; className?: string; children: ReactNode; from?: number; to?: number }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg viewBox={viewBox} className={className} aria-hidden="true" focusable="false">
      <defs>
        <pattern id={`${id}-dots`} width="3.2" height="3.2" patternUnits="userSpaceOnUse">
          <circle cx="1.6" cy="1.6" r="0.85" fill="#EE9E47" />
        </pattern>
        <pattern id={`${id}-dots2`} width="6.4" height="6.4" patternUnits="userSpaceOnUse">
          <circle cx="1.6" cy="1.6" r="0.95" fill="#EE9E47" />
          <circle cx="4.8" cy="4.8" r="0.95" fill="#EE9E47" />
        </pattern>
        <linearGradient id={`${id}-top`} x1="0" y1="0" x2="0" y2="1">
          <stop offset={from} stopColor="#fff" />
          <stop offset={to} stopColor="#000" />
        </linearGradient>
        <linearGradient id={`${id}-bottom`} x1="0" y1="0" x2="0" y2="1">
          <stop offset={from - 0.04} stopColor="#000" />
          <stop offset={to - 0.02} stopColor="#fff" />
        </linearGradient>
        <linearGradient id={`${id}-mid`} x1="0" y1="0" x2="0" y2="1">
          <stop offset={from - 0.02} stopColor="#000" />
          <stop offset={(from + to) / 2} stopColor="#fff" />
          <stop offset={to + 0.08} stopColor="#000" />
        </linearGradient>
        <mask id={`${id}-m1`}>
          <rect x="-50%" y="-50%" width="200%" height="200%" fill={`url(#${id}-top)`} />
        </mask>
        <mask id={`${id}-m2`}>
          <rect x="-50%" y="-50%" width="200%" height="200%" fill={`url(#${id}-bottom)`} />
        </mask>
        <mask id={`${id}-m3`}>
          <rect x="-50%" y="-50%" width="200%" height="200%" fill={`url(#${id}-mid)`} />
        </mask>
      </defs>
      <g mask={`url(#${id}-m1)`} fill="#0C0C0B" stroke="#0C0C0B">
        {children}
      </g>
      <g mask={`url(#${id}-m2)`} fill={`url(#${id}-dots)`} stroke={`url(#${id}-dots)`}>
        {children}
      </g>
      <g mask={`url(#${id}-m3)`} fill={`url(#${id}-dots2)`} stroke={`url(#${id}-dots2)`} opacity="0.9">
        {children}
      </g>
    </svg>
  );
}

/** An open envelope with a paper plane leaving it. */
export function EnvelopePlane({ className = "" }: { className?: string }) {
  return (
    <Stippled viewBox="0 0 260 200" className={className} from={0.5} to={0.82}>
      {/* back flap, open */}
      <path d="M46 96 L132 34 L218 96 L132 128 Z" />
      {/* a sheet poking out */}
      <rect x="86" y="70" width="92" height="70" rx="4" fill="#FFF6EC" stroke="none" />
      <rect x="86" y="70" width="92" height="70" rx="4" fill="none" strokeWidth="4" />
      {/* front of the envelope */}
      <path d="M46 96 L132 150 L218 96 L218 182 L46 182 Z" />
      <path d="M46 182 L116 138 M218 182 L148 138" stroke="#FFF6EC" strokeWidth="3" fill="none" />
      {/* paper plane */}
      <path d="M160 58 L246 18 L212 86 L190 66 Z" />
      <path d="M190 66 L212 86 L196 92 Z" />
      <path d="M160 58 L196 62 L246 18 Z" fill="#FFF6EC" stroke="none" opacity="0.35" />
      {/* motion lines */}
      <path d="M130 44 h18 M118 56 h22 M126 68 h12" strokeWidth="4" fill="none" strokeLinecap="round" />
    </Stippled>
  );
}

/** Stacked calendar pages, the front one with a tick. */
export function CalendarStack({ className = "" }: { className?: string }) {
  return (
    <Stippled viewBox="0 0 260 200" className={className} from={0.5} to={0.84}>
      {/* back pages */}
      <rect x="86" y="22" width="130" height="118" rx="12" />
      <rect x="86" y="22" width="130" height="118" rx="12" fill="#FFF6EC" stroke="none" transform="translate(-14 14)" />
      <rect x="72" y="36" width="130" height="118" rx="12" />
      <rect x="72" y="36" width="130" height="118" rx="12" fill="#FFF6EC" stroke="none" transform="translate(-14 14)" />
      {/* front page */}
      <rect x="58" y="50" width="130" height="118" rx="12" />
      <rect x="58" y="50" width="130" height="28" rx="12" fill="#FFF6EC" stroke="none" opacity="0.35" />
      {/* rings */}
      <rect x="82" y="40" width="10" height="24" rx="5" fill="#FFF6EC" stroke="none" />
      <rect x="154" y="40" width="10" height="24" rx="5" fill="#FFF6EC" stroke="none" />
      {/* tick */}
      <path d="M96 118 L116 138 L154 96" stroke="#FFF6EC" strokeWidth="12" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </Stippled>
  );
}

/** A magnifying glass over a small bar chart. */
export function MagnifierChart({ className = "" }: { className?: string }) {
  return (
    <Stippled viewBox="0 0 260 200" className={className} from={0.5} to={0.84}>
      <rect x="44" y="118" width="26" height="60" rx="5" />
      <rect x="82" y="92" width="26" height="86" rx="5" />
      <rect x="120" y="106" width="26" height="72" rx="5" />
      <rect x="158" y="66" width="26" height="112" rx="5" />
      <path d="M36 184 h160" strokeWidth="5" fill="none" strokeLinecap="round" />
      {/* magnifier */}
      <circle cx="170" cy="76" r="44" fill="#FFF6EC" stroke="none" opacity="0.55" />
      <circle cx="170" cy="76" r="44" fill="none" strokeWidth="12" />
      <path d="M202 108 L240 146" strokeWidth="18" fill="none" strokeLinecap="round" />
      <path d="M148 54 q10 -12 24 -10" stroke="#FFF6EC" strokeWidth="5" fill="none" strokeLinecap="round" />
    </Stippled>
  );
}

/** A rising trend line with an arrowhead (Founders and CEOs). */
export function TrendIcon({ className = "" }: { className?: string }) {
  return (
    <Stippled viewBox="0 0 200 160" className={className} from={0.5} to={0.86}>
      <path d="M24 128 L68 92 L104 110 L172 44" fill="none" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M132 40 L176 40 L176 84 Z" />
      <path d="M16 146 h168" strokeWidth="6" fill="none" strokeLinecap="round" />
    </Stippled>
  );
}

/** A single calendar page with a tick (Sales teams). */
export function CalendarTick({ className = "" }: { className?: string }) {
  return (
    <Stippled viewBox="0 0 200 160" className={className} from={0.5} to={0.86}>
      <rect x="36" y="26" width="128" height="118" rx="14" />
      <rect x="36" y="26" width="128" height="30" rx="14" fill="#FFF6EC" stroke="none" opacity="0.35" />
      <rect x="62" y="14" width="12" height="26" rx="6" fill="#FFF6EC" stroke="none" />
      <rect x="126" y="14" width="12" height="26" rx="6" fill="#FFF6EC" stroke="none" />
      <path d="M72 96 L92 116 L130 74" stroke="#FFF6EC" strokeWidth="12" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </Stippled>
  );
}

/** A dashboard panel: three tiles and a trend (Revenue leaders). */
export function DashboardIcon({ className = "" }: { className?: string }) {
  return (
    <Stippled viewBox="0 0 200 160" className={className} from={0.5} to={0.86}>
      <rect x="22" y="22" width="156" height="118" rx="14" />
      <rect x="36" y="36" width="40" height="30" rx="6" fill="#FFF6EC" stroke="none" />
      <rect x="80" y="36" width="40" height="30" rx="6" fill="#FFF6EC" stroke="none" />
      <rect x="124" y="36" width="40" height="30" rx="6" fill="#FFF6EC" stroke="none" />
      <path d="M38 118 L70 100 L98 108 L160 80" stroke="#FFF6EC" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </Stippled>
  );
}

/** A shield (the trust strip). The smiley sphere is composed beside it by the section. */
export function ShieldIcon({ className = "" }: { className?: string }) {
  return (
    <Stippled viewBox="0 0 200 200" className={className} from={0.5} to={0.86}>
      <path d="M100 18 L164 42 V92 C164 136 136 168 100 184 C64 168 36 136 36 92 V42 Z" />
      <path d="M100 38 L148 56 V92 C148 126 128 150 100 164 C72 150 52 126 52 92 V56 Z" fill="#FFF6EC" stroke="none" opacity="0.28" />
      <path d="M74 100 L92 118 L128 80" stroke="#FFF6EC" strokeWidth="12" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </Stippled>
  );
}
