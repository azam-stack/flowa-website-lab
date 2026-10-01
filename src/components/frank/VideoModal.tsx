import { useEffect, useRef } from "react";
import { home } from "@/content/frank/home";
import { Close } from "./Icons";

/**
 * "See Frank in action": a modal with a 60–90s video placeholder. The
 * video itself is [CONFIRM video] (brief §4.1, §10.2), so the placeholder
 * is shown as written rather than an invented clip.
 */
export function VideoModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[80] grid place-items-center p-4" role="dialog" aria-modal="true" aria-label={home.hero.video}>
      <button type="button" aria-label={home.hero.videoClose} onClick={onClose} className="absolute inset-0 cursor-default bg-ink/70" tabIndex={-1} />
      <div className="rise-in relative w-full max-w-3xl overflow-hidden rounded-frame border border-ink bg-ink shadow-float">
        <button ref={closeRef} type="button" onClick={onClose} aria-label={home.hero.videoClose} className="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-full bg-white text-ink">
          <Close size={20} />
        </button>
        <div className="grid aspect-video place-items-center p-8 text-center">
          <p className="max-w-md text-[16px] text-white/80">{home.hero.videoPlaceholder}</p>
        </div>
      </div>
    </div>
  );
}
