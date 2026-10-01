import type { CSSProperties } from "react";

/**
 * 3D bubbly clay sphere (brief §2.1, §2.5). The surface is CSS: a
 * radial highlight and an inset shade over the tint, so it costs no
 * image. Some carry the hand-drawn smiley: two oval eyes and a curved
 * smile line. All spheres are decorative and aria-hidden; the bob
 * (±8px, 6–9s, staggered) is a transform-only animation.
 */
export type Tint = 1 | 2 | 3 | 4 | 5 | 6;

const TINTS: Record<Tint, { c: string; dark: string }> = {
  1: { c: "#EE9E47", dark: "#C97A2B" },
  2: { c: "#F6B97A", dark: "#DB9450" },
  3: { c: "#FAD3A8", dark: "#E4AE74" },
  4: { c: "#FFE7C7", dark: "#EBC59A" },
  5: { c: "#F08A6C", dark: "#CE6447" },
  6: { c: "#FFFFFF", dark: "#E5DED3" },
};

export function Sphere({
  size = 80,
  tint = 2,
  smiley = false,
  bob = true,
  duration = 7,
  delay = 0,
  className = "",
  style,
}: {
  size?: number;
  tint?: Tint;
  smiley?: boolean;
  bob?: boolean;
  duration?: number;
  delay?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const t = TINTS[tint];
  return (
    <div
      aria-hidden="true"
      className={`sphere ${bob ? "sphere-bob" : ""} ${className}`}
      style={{ width: size, height: size, "--c": t.c, "--c-dark": t.dark, "--bob-dur": `${duration}s`, "--bob-delay": `${delay}s`, ...style } as CSSProperties}
    >
      {smiley && (
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden="true">
          <ellipse cx="37" cy="44" rx="4.5" ry="7" fill="#0C0C0B" />
          <ellipse cx="63" cy="44" rx="4.5" ry="7" fill="#0C0C0B" />
          <path d="M35 60 Q50 74 65 60" stroke="#0C0C0B" strokeWidth="4" fill="none" strokeLinecap="round" />
        </svg>
      )}
    </div>
  );
}

type Placed = { size: number; tint: Tint; smiley?: boolean; x: string; y: string; duration?: number; delay?: number; z?: number };

/** A group of spheres placed inside a relative parent (percent/px offsets). */
export function SphereGroup({ items, className = "" }: { items: Placed[]; className?: string }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 ${className}`}>
      {items.map((s, i) => (
        <Sphere key={i} size={s.size} tint={s.tint} smiley={s.smiley} duration={s.duration ?? 6 + (i % 4)} delay={s.delay ?? i * 0.7} className="absolute" style={{ left: s.x, top: s.y, zIndex: s.z }} />
      ))}
    </div>
  );
}

/** The hero cluster: left and right edges, cropped by the frame. */
export const heroClusterLeft: Placed[] = [
  { size: 150, tint: 2, x: "-60px", y: "58%", duration: 8 },
  { size: 92, tint: 4, smiley: true, x: "70px", y: "70%", duration: 6.5, delay: 1.2 },
  { size: 58, tint: 5, x: "20px", y: "44%", duration: 7.5, delay: 0.4 },
  { size: 40, tint: 6, x: "130px", y: "58%", duration: 9, delay: 2 },
];
export const heroClusterRight: Placed[] = [
  { size: 170, tint: 1, x: "calc(100% - 110px)", y: "52%", duration: 8.5, delay: 0.3 },
  { size: 80, tint: 3, smiley: true, x: "calc(100% - 190px)", y: "76%", duration: 6, delay: 1.5 },
  { size: 48, tint: 6, x: "calc(100% - 60px)", y: "38%", duration: 7, delay: 2.4 },
  { size: 34, tint: 5, x: "calc(100% - 230px)", y: "48%", duration: 9, delay: 0.9 },
];
/** The pile in the "Built to fill calendars" band. */
export const spherePile: Placed[] = [
  { size: 190, tint: 1, x: "40%", y: "30%", duration: 8 },
  { size: 120, tint: 3, smiley: true, x: "12%", y: "52%", duration: 6.5, delay: 1 },
  { size: 96, tint: 5, x: "68%", y: "8%", duration: 7.5, delay: 0.5 },
  { size: 70, tint: 6, smiley: true, x: "76%", y: "66%", duration: 9, delay: 1.8 },
  { size: 56, tint: 4, x: "30%", y: "4%", duration: 7, delay: 2.2 },
  { size: 44, tint: 2, x: "2%", y: "22%", duration: 6, delay: 0.2 },
  { size: 36, tint: 6, x: "58%", y: "78%", duration: 8.5, delay: 2.9 },
];
