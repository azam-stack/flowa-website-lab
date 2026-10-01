import { useId } from "react";

/**
 * Frank, FLOWA's AI outbound agent (brief §2.5): a friendly man of about
 * 35, tousled dark-brown hair, a short neat beard, warm brown eyes and an
 * easy half-smile, in a cream knit crewneck over a white collared shirt
 * with a small round orange pin. Shown chest-up.
 *
 * This is an original vector stand-in so the whole site can be built and
 * reviewed now. The brief asks for a 3D animated-film-style render in
 * four poses; when that is produced, swap the SVG for the exported
 * WebP/PNG files here and nothing else changes. Four poses are drawn:
 * (a) portrait, (b) waving, (c) at a laptop, three-quarter, (d) thumbs-up.
 *
 * `bg="apricot"` is the flat apricot square whose bottom third dissolves
 * into orange stipple; `bg="none"` is the transparent version.
 */
export type FrankPose = "portrait" | "wave" | "laptop" | "thumbs";

export const FRANK_ALT = "Frank, FLOWA's AI outbound agent";

export function FrankAvatar({ pose = "portrait", bg = "apricot", className = "", decorative = false, round = false }: { pose?: FrankPose; bg?: "apricot" | "none"; className?: string; decorative?: boolean; round?: boolean }) {
  const id = useId().replace(/:/g, "");
  const turn = pose === "laptop" ? -7 : 0;
  const a11y = decorative ? { "aria-hidden": true as const } : { role: "img", "aria-label": FRANK_ALT };
  return (
    <div className={`${bg === "apricot" ? "stipple-bottom" : "relative"} ${round ? "rounded-full" : ""} overflow-hidden ${className}`}>
      <svg viewBox="0 0 240 240" className="relative z-[1] block h-full w-full" {...a11y} focusable="false">
        <defs>
          <radialGradient id={`${id}-skin`} cx="42%" cy="34%" r="72%">
            <stop offset="0" stopColor="#F3CBA7" />
            <stop offset="1" stopColor="#D79C72" />
          </radialGradient>
          <radialGradient id={`${id}-knit`} cx="40%" cy="18%" r="85%">
            <stop offset="0" stopColor="#FBF5E8" />
            <stop offset="1" stopColor="#DFCFB2" />
          </radialGradient>
          <linearGradient id={`${id}-hair`} x1="0" y1="0" x2="0.3" y2="1">
            <stop offset="0" stopColor="#5A4030" />
            <stop offset="1" stopColor="#2E1F15" />
          </linearGradient>
          <radialGradient id={`${id}-shade`} cx="50%" cy="20%" r="80%">
            <stop offset="0.55" stopColor="#000" stopOpacity="0" />
            <stop offset="1" stopColor="#000" stopOpacity="0.18" />
          </radialGradient>
          <pattern id={`${id}-rib`} width="6" height="6" patternUnits="userSpaceOnUse">
            <path d="M0 0 L0 6" stroke="#CDB998" strokeWidth="1" opacity="0.5" />
          </pattern>
        </defs>

        {/* laptop lid (pose c), seen from behind, in front of the chest */}
        {pose === "laptop" && (
          <g>
            <rect x="52" y="186" width="136" height="70" rx="10" fill="#1A1B1F" />
            <rect x="60" y="192" width="120" height="58" rx="6" fill="#0C0C0B" />
            <circle cx="120" cy="214" r="5" fill="#EE9E47" />
          </g>
        )}

        {/* shoulders and knit crewneck */}
        <path d="M24 244 C26 198 60 170 100 164 L120 176 L140 164 C180 170 214 198 216 244 Z" fill={`url(#${id}-knit)`} />
        <path d="M24 244 C26 198 60 170 100 164 L120 176 L140 164 C180 170 214 198 216 244 Z" fill={`url(#${id}-rib)`} />
        <path d="M24 244 C26 198 60 170 100 164 L120 176 L140 164 C180 170 214 198 216 244 Z" fill={`url(#${id}-shade)`} />
        {/* crewneck ribbing */}
        <path d="M98 165 C104 184 136 184 142 165" fill="none" stroke="#CDB998" strokeWidth="3" />
        {/* white collared shirt */}
        <path d="M96 160 L120 190 L144 160 L136 153 L120 171 L104 153 Z" fill="#FFFFFF" />
        <path d="M104 153 L120 171 L136 153" fill="none" stroke="#E5E1D8" strokeWidth="1.5" />
        {/* neck */}
        <path d="M103 140 H137 V166 C137 176 103 176 103 166 Z" fill="#D79C72" />
        {/* orange pin */}
        <circle cx="150" cy="202" r="6.5" fill="#EE9E47" stroke="#0C0C0B" strokeWidth="1.5" />
        <circle cx="148" cy="200" r="2" fill="#fff" opacity="0.7" />

        <g transform={`translate(${turn} 0)`}>
          {/* ears */}
          <ellipse cx="77" cy="108" rx="8.5" ry="11.5" fill="#E2AB80" />
          <ellipse cx="163" cy="108" rx="8.5" ry="11.5" fill="#E2AB80" />
          {/* head */}
          <path d="M120 42 C152 42 168 68 168 102 C168 138 148 160 120 160 C92 160 72 138 72 102 C72 68 88 42 120 42 Z" fill={`url(#${id}-skin)`} />
          {/* short neat beard: the lower jaw */}
          <path d="M78 114 C82 142 100 158 120 158 C140 158 158 142 162 114 C156 132 142 142 120 142 C98 142 84 132 78 114 Z" fill="#3A2A20" opacity="0.86" />
          {/* moustache */}
          <path d="M107 123 Q120 118 133 123 Q127 121 120 122 Q113 121 107 123 Z" fill="#3A2A20" opacity="0.8" />
          {/* mouth: an easy half-smile */}
          <path d="M107 129 Q120 139 134 127.5" stroke="#9C5340" strokeWidth="2.6" fill="none" strokeLinecap="round" />
          <path d="M110 130 Q120 135 131 128.5" stroke="#F3CBA7" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.8" />
          {/* nose */}
          <path d="M121 98 Q128 113 119 116" stroke="#C98B62" strokeWidth="2" fill="none" strokeLinecap="round" />
          {/* cheeks */}
          <ellipse cx="96" cy="116" rx="7" ry="3.5" fill="#E89A7A" opacity="0.32" />
          <ellipse cx="144" cy="116" rx="7" ry="3.5" fill="#E89A7A" opacity="0.32" />
          {/* eyes: warm brown */}
          <ellipse cx="103" cy="98" rx="7.5" ry="5.6" fill="#fff" />
          <ellipse cx="137" cy="98" rx={pose === "laptop" ? 6.5 : 7.5} ry="5.6" fill="#fff" />
          <circle cx={pose === "laptop" ? 102 : 104} cy={pose === "laptop" ? 100 : 99} r="3.8" fill="#6B3F1E" />
          <circle cx={pose === "laptop" ? 136 : 138} cy={pose === "laptop" ? 100 : 99} r="3.8" fill="#6B3F1E" />
          <circle cx={pose === "laptop" ? 102.6 : 104.6} cy={pose === "laptop" ? 99.6 : 98.6} r="1.6" fill="#0C0C0B" />
          <circle cx={pose === "laptop" ? 136.6 : 138.6} cy={pose === "laptop" ? 99.6 : 98.6} r="1.6" fill="#0C0C0B" />
          <circle cx="106" cy="96.8" r="1.1" fill="#fff" />
          <circle cx="140" cy="96.8" r="1.1" fill="#fff" />
          {/* upper lids */}
          <path d="M95.5 96 Q103 90.5 110.5 96" stroke="#B9825C" strokeWidth="1.4" fill="none" />
          <path d="M129.5 96 Q137 90.5 144.5 96" stroke="#B9825C" strokeWidth="1.4" fill="none" />
          {/* brows */}
          <path d="M93 86 Q103 79.5 114 85" stroke="#3A2A20" strokeWidth="3.2" fill="none" strokeLinecap="round" />
          <path d="M126 85 Q137 79.5 147 86" stroke="#3A2A20" strokeWidth="3.2" fill="none" strokeLinecap="round" />
          {/* tousled hair */}
          <path d="M72 102 C66 70 84 36 120 34 C156 36 174 70 168 102 C162 84 152 70 141 72 C134 62 124 60 116 66 C104 58 92 66 90 78 C82 80 76 90 72 102 Z" fill={`url(#${id}-hair)`} />
          <path d="M94 46 C98 34 108 30 116 36 C110 38 104 44 100 52 Z" fill="#5A4030" />
          <path d="M132 38 C140 30 152 34 156 44 C150 40 142 40 136 46 Z" fill="#5A4030" />
          <path d="M112 36 C118 28 128 28 134 34 C128 34 120 36 116 42 Z" fill="#6A4C38" />
          <path d="M84 60 C86 52 92 48 98 50 C92 54 88 60 86 68 Z" fill="#6A4C38" />
          {/* sideburns */}
          <path d="M74 100 C73 108 75 118 80 124 C78 114 78 106 80 100 Z" fill="#3A2A20" />
          <path d="M166 100 C167 108 165 118 160 124 C162 114 162 106 160 100 Z" fill="#3A2A20" />
        </g>

        {/* (b) waving hand, viewer's right */}
        {pose === "wave" && (
          <g>
            <path d="M176 244 C170 212 178 180 196 150" stroke={`url(#${id}-knit)`} strokeWidth="36" fill="none" strokeLinecap="round" />
            <path d="M176 244 C170 212 178 180 196 150" stroke="#CDB998" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.5" />
            <rect x="178" y="114" width="40" height="46" rx="16" fill="#F3CBA7" />
            <rect x="178" y="84" width="9" height="40" rx="4.5" fill="#F3CBA7" />
            <rect x="189" y="76" width="9" height="46" rx="4.5" fill="#F3CBA7" />
            <rect x="200" y="78" width="9" height="44" rx="4.5" fill="#F3CBA7" />
            <rect x="211" y="88" width="8.5" height="36" rx="4.25" fill="#F3CBA7" />
            <path d="M178 136 C166 128 166 116 176 112" fill="#F3CBA7" />
            <path d="M184 112 v18 M195 108 v22 M206 110 v20" stroke="#D79C72" strokeWidth="1.3" fill="none" strokeLinecap="round" />
          </g>
        )}

        {/* (d) thumbs-up, in front of the chest */}
        {pose === "thumbs" && (
          <g>
            <path d="M190 244 C186 222 184 206 176 196" stroke={`url(#${id}-knit)`} strokeWidth="34" fill="none" strokeLinecap="round" />
            <rect x="150" y="186" width="44" height="40" rx="12" fill="#F3CBA7" />
            <path d="M156 186 C150 172 160 150 170 152 C178 154 176 166 174 178 L194 178 C198 178 200 182 198 186 Z" fill="#F3CBA7" />
            <path d="M154 200 h38 M154 212 h38" stroke="#D79C72" strokeWidth="1.3" fill="none" strokeLinecap="round" />
            <circle cx="150" cy="202" r="6.5" fill="#EE9E47" stroke="#0C0C0B" strokeWidth="1.5" opacity="0" />
          </g>
        )}
      </svg>
    </div>
  );
}
