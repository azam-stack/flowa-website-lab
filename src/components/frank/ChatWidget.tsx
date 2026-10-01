import { useEffect, useRef, useState, type FormEvent } from "react";
import { useLocation } from "react-router-dom";
import { SmartLink } from "@/components/SmartLink";
import { chat } from "@/content/frank/chrome";
import { track } from "@/lib/analytics";
import { FrankAvatar } from "./FrankAvatar";
import { Calendar, Close, Send } from "./Icons";

type Mode = "bubble" | "panel" | "avatar";

function isMobile() {
  return typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches;
}

/**
 * The floating "Ask Frank" widget, bottom-centre on every page (brief
 * §3.3). Collapsed: a dark translucent bubble with Frank's avatar, his
 * greeting and "Frank · now", and a white pill input bar under it with
 * "Book a meeting" and a round send button. Typing and sending opens a
 * small panel with three quick replies (no live AI in the draft). It
 * collapses to a small avatar after 30% scroll or on close. On mobile it
 * is a bottom-right avatar only until tapped.
 */
export function ChatWidget() {
  const [mode, setMode] = useState<Mode>(() => (isMobile() ? "avatar" : "bubble"));
  const [draft, setDraft] = useState("");
  const [asked, setAsked] = useState<string | null>(null);
  const { pathname } = useLocation();
  const panelRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLButtonElement>(null);

  // 30% scroll collapses the bubble to the avatar.
  useEffect(() => {
    if (mode !== "bubble") return;
    let raf = 0;
    const check = () => {
      raf = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      if (max > 0 && window.scrollY / max >= 0.3) setMode("avatar");
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(check);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [mode]);

  // A new page: the panel closes, the bubble shows again on desktop.
  useEffect(() => {
    setMode(isMobile() ? "avatar" : "bubble");
    setAsked(null);
    setDraft("");
  }, [pathname]);

  useEffect(() => {
    if (mode !== "panel") return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    panelRef.current?.querySelector<HTMLElement>("a, button")?.focus();
    return () => document.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);

  const open = (question?: string) => {
    track("chat_open", { via: question ? "message" : "avatar" });
    if (question) setAsked(question);
    setMode("panel");
  };
  const close = () => {
    track("chat_close");
    setMode("avatar");
    setTimeout(() => avatarRef.current?.focus(), 0);
  };
  const send = (e: FormEvent) => {
    e.preventDefault();
    open(draft.trim() || undefined);
    setDraft("");
  };

  const avatarButton = (
    <button ref={avatarRef} type="button" onClick={() => open()} aria-label={chat.open} className="rise-in grid h-14 w-14 place-items-center rounded-full border border-ink bg-white shadow-float">
      <FrankAvatar decorative round className="h-12 w-12" />
    </button>
  );

  if (mode === "avatar") {
    return <div className="fixed bottom-4 right-4 z-40 md:bottom-6 md:left-1/2 md:right-auto md:-translate-x-1/2">{avatarButton}</div>;
  }

  if (mode === "panel") {
    return (
      <div className="fixed inset-x-3 bottom-3 z-40 md:inset-x-auto md:bottom-6 md:left-1/2 md:w-[400px] md:-translate-x-1/2">
        <div ref={panelRef} role="dialog" aria-label="Chat with Frank" className="rise-in overflow-hidden rounded-card border border-line bg-white shadow-float">
          <div className="flex items-center gap-3 border-b border-line px-4 py-3">
            <FrankAvatar pose="wave" decorative round className="h-11 w-11 flex-none" />
            <div className="min-w-0">
              <p className="text-[15px] font-semibold text-ink">Frank</p>
              <p className="text-[12px] text-muted">AI outbound agent · {chat.meta.split("·")[1]?.trim() ?? "now"}</p>
            </div>
            <button type="button" onClick={close} aria-label={chat.close} className="ml-auto grid h-10 w-10 place-items-center rounded-full text-ink hover:bg-soft">
              <Close size={20} />
            </button>
          </div>
          <div className="flex flex-col gap-3 px-4 py-4">
            {asked && <p className="ml-auto max-w-[85%] rounded-[14px] rounded-br-[4px] bg-panel px-3.5 py-2.5 text-[14px] text-ink">{asked}</p>}
            <p className="max-w-[85%] rounded-[14px] rounded-bl-[4px] bg-soft px-3.5 py-2.5 text-[14px] text-ink-2">
              {chat.greeting} {chat.quickRepliesHeading}
            </p>
            <div className="flex flex-wrap gap-2 pl-1">
              {chat.quickReplies.map((q) => (
                <SmartLink key={q.href} href={q.href} onClick={() => track("chat_quick_reply", { label: q.label })} className="rounded-pill border border-ink px-3.5 py-2 text-[14px] font-medium text-ink transition-colors hover:bg-ink hover:text-white">
                  {q.label}
                </SmartLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // bubble (desktop only: mobile starts as the avatar)
  return (
    <div className="fixed bottom-6 left-1/2 z-40 hidden w-[400px] -translate-x-1/2 flex-col gap-2.5 md:flex">
      <div className="rise-in flex items-center gap-3 rounded-card px-4 py-3 text-white backdrop-blur-sm" style={{ background: "rgba(12,12,11,0.75)" }}>
        <FrankAvatar decorative round className="h-10 w-10 flex-none" />
        <div className="min-w-0">
          <p className="text-[14px] leading-snug">{chat.greeting}</p>
          <p className="mt-0.5 text-[12px] text-white/60">{chat.meta}</p>
        </div>
        <button type="button" onClick={close} aria-label={chat.close} className="ml-auto grid h-8 w-8 flex-none place-items-center rounded-full text-white/80 hover:bg-white/10 hover:text-white">
          <Close size={16} />
        </button>
      </div>
      <form onSubmit={send} className="rise-in flex items-center gap-1.5 rounded-pill border border-line bg-white py-1.5 pl-4 pr-1.5 shadow-float" style={{ animationDelay: "60ms" }}>
        <label htmlFor="ask-frank" className="sr-only">
          {chat.placeholder}
        </label>
        <input id="ask-frank" value={draft} onChange={(e) => setDraft(e.target.value)} onFocus={() => undefined} placeholder={chat.placeholder} autoComplete="off" className="h-9 min-w-0 flex-1 bg-transparent text-[14px] text-ink outline-none placeholder:text-muted" />
        <SmartLink href={chat.bookMeetingHref} onClick={() => track("cta_click", { label: "chat_book_meeting" })} className="flex h-9 flex-none items-center gap-1.5 rounded-pill border border-line px-3 text-[13px] font-medium text-ink transition-colors hover:bg-soft">
          <Calendar size={15} />
          {chat.bookMeeting}
        </SmartLink>
        <button type="submit" aria-label={chat.send} className="grid h-9 w-9 flex-none place-items-center rounded-full bg-ink text-white transition-colors hover:bg-black">
          <Send size={15} />
        </button>
      </form>
    </div>
  );
}
