/**
 * The faint grid behind the hero and the illustration bands: thin white
 * lines in ~80px squares with a small 4-point sparkle at every
 * intersection (brief §2.1). Pure CSS background, no image request.
 * `fade` softens the top edge so the grid does not cut into a headline.
 */
export function SparkleGrid({ className = "", fade = false }: { className?: string; fade?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={`sparkle-grid pointer-events-none absolute inset-0 ${className}`}
      style={fade ? { WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, #000 35%)", maskImage: "linear-gradient(to bottom, transparent 0%, #000 35%)" } : undefined}
    />
  );
}
