import type { ReactNode } from "react";
import { Chip } from "./Chip";
import { Check, Mail, Message, Calendar, Target, Search } from "./Icons";

/**
 * Dark product mock-ups: near-black panels with white UI cards (brief
 * §2.1, §4.6, §5). Built in HTML/CSS, not images. Every name and company
 * is fictional and every panel is illustrative.
 */
export function DarkMock({ title, children, className = "" }: { title?: string; children: ReactNode; className?: string }) {
  return (
    <div className={`mock-dark relative flex min-w-0 flex-col gap-4 overflow-hidden p-5 md:p-6 ${className}`} aria-hidden="true">
      {title && (
        <div className="flex items-center justify-between gap-3">
          <p className="text-[15px] font-medium text-white md:text-[16px]">{title}</p>
          <span className="flex items-center gap-1.5 text-[12px] text-white/60">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            live
          </span>
        </div>
      )}
      {children}
    </div>
  );
}

/** A white UI card inside a dark mock. */
export function MockCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`min-w-0 rounded-card bg-white p-4 text-ink shadow-float ${className}`}>{children}</div>;
}

export function Avatar({ initials, tone = "panel", className = "" }: { initials: string; tone?: "panel" | "ink"; className?: string }) {
  return <span className={`inline-grid h-9 w-9 flex-none place-items-center rounded-full text-[12px] font-semibold ${tone === "ink" ? "bg-ink text-white" : "bg-panel text-ink"} ${className}`}>{initials}</span>;
}

/** Row 1: 1,240 companies scanned, a highlighted prospect with its reasons. */
export function ScanMock({ className = "" }: { className?: string }) {
  return (
    <DarkMock title="1,240 companies scanned" className={className}>
      <div className="h-1.5 w-full overflow-hidden rounded-pill bg-white/15">
        <div className="h-full w-[72%] rounded-pill bg-brand" />
      </div>
      <MockCard>
        <div className="flex items-center gap-3">
          <Avatar initials="OH" />
          <div className="min-w-0">
            <p className="truncate text-[14px] font-semibold">Oliver Hart</p>
            <p className="truncate text-[12px] text-muted">Head of Sales | Brightline Software</p>
          </div>
          <span className="ml-auto rounded-pill bg-ink px-2.5 py-1 text-[11px] font-medium text-white">ICP 92</span>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          <Chip>Why now: hiring two SDRs</Chip>
          <Chip>Open with: new UK office</Chip>
        </div>
      </MockCard>
      <div className="grid grid-cols-2 gap-3">
        {[
          ["PN", "Priya Nair", "CRO | Northgate IT Services"],
          ["TW", "Tom Whitfield", "Founder | Kestrel Creative"],
        ].map(([i, n, t]) => (
          <div key={n} className="flex items-center gap-2.5 rounded-card border border-white/10 bg-white/[0.06] p-3">
            <Avatar initials={i} tone="ink" className="border border-white/20" />
            <div className="min-w-0">
              <p className="truncate text-[13px] font-medium text-white">{n}</p>
              <p className="truncate text-[11px] text-white/60">{t}</p>
            </div>
          </div>
        ))}
      </div>
    </DarkMock>
  );
}

/** Row 2: 4 new meetings booked, a week calendar, a qualified-lead insight. */
export function CalendarMock({ className = "" }: { className?: string }) {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const blocks: Record<string, { top: number; label: string; tone: "brand" | "white" }[]> = {
    Mon: [{ top: 34, label: "Intro call", tone: "white" }],
    Tue: [{ top: 8, label: "Meeting", tone: "brand" }],
    Wed: [{ top: 46, label: "Meeting", tone: "brand" }],
    Thu: [
      { top: 20, label: "Meeting", tone: "brand" },
      { top: 62, label: "Follow-up", tone: "white" },
    ],
    Fri: [{ top: 30, label: "Meeting", tone: "brand" }],
  };
  return (
    <DarkMock title="4 new meetings booked" className={className}>
      <MockCard className="p-3">
        <div className="grid grid-cols-5 gap-1.5">
          {days.map((d) => (
            <div key={d} className="relative h-[108px] rounded-[8px] bg-soft">
              <p className="px-1.5 pt-1 text-[10px] font-medium text-muted">{d}</p>
              {blocks[d].map((b) => (
                <span key={b.label + b.top} className={`absolute left-1 right-1 rounded-[6px] px-1.5 py-1 text-[10px] font-medium leading-none ${b.tone === "brand" ? "bg-brand text-ink" : "border border-line bg-white text-ink-2"}`} style={{ top: 18 + b.top }}>
                  {b.label}
                </span>
              ))}
            </div>
          ))}
        </div>
      </MockCard>
      <MockCard className="flex items-center gap-3">
        <span className="grid h-8 w-8 flex-none place-items-center rounded-full bg-brand text-ink">
          <Check size={16} />
        </span>
        <div>
          <p className="text-[14px] font-semibold">Lead qualified for a first meeting</p>
          <p className="text-[12px] text-muted">Head of Sales · decision-maker · ICP match</p>
        </div>
      </MockCard>
    </DarkMock>
  );
}

/** Row 3: 3 new signals detected, Buying signal chips and a reply-rate trend. */
export function SignalsMock({ className = "" }: { className?: string }) {
  const rows = ["Posted two SDR roles this week", "Appointed a new Head of Sales", "Registered a UK entity"];
  return (
    <DarkMock title="3 new signals detected" className={className}>
      <div className="flex flex-col gap-2">
        {rows.map((r) => (
          <div key={r} className="flex items-center justify-between gap-3 rounded-card border border-white/10 bg-white/[0.06] px-3 py-2.5">
            <p className="min-w-0 truncate text-[13px] text-white">{r}</p>
            <Chip>Buying signal</Chip>
          </div>
        ))}
      </div>
      <MockCard>
        <div className="flex items-baseline justify-between">
          <p className="text-[13px] font-medium text-muted">Reply rate, last 6 weeks</p>
          <p className="text-[13px] font-semibold text-ink">rising</p>
        </div>
        <svg viewBox="0 0 320 90" className="mt-2 h-20 w-full" aria-hidden="true">
          <path d="M8 70 L60 62 L112 66 L164 48 L216 42 L268 28 L312 18" fill="none" stroke="#EE9E47" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 70 L60 62 L112 66 L164 48 L216 42 L268 28 L312 18 L312 88 L8 88 Z" fill="#EE9E47" opacity="0.12" />
          {[8, 60, 112, 164, 216, 268, 312].map((x, i) => (
            <circle key={x} cx={x} cy={[70, 62, 66, 48, 42, 28, 18][i]} r="3.5" fill="#0C0C0B" />
          ))}
        </svg>
      </MockCard>
    </DarkMock>
  );
}

/** Mini mock-ups for the four How Frank works steps. */
export function StepMock({ kind, className = "" }: { kind: "target" | "reach" | "qualify" | "book"; className?: string }) {
  if (kind === "target")
    return (
      <DarkMock className={className}>
        <MockCard>
          <div className="flex items-center gap-2 text-[13px] font-semibold">
            <Target size={16} /> Ideal customer
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            <Chip>UK B2B SaaS</Chip>
            <Chip>50–200 people</Chip>
            <Chip>Head of Sales</Chip>
            <Chip tone="line">Qualified = role + interest + fit</Chip>
          </div>
        </MockCard>
      </DarkMock>
    );
  if (kind === "reach")
    return (
      <DarkMock className={className}>
        <div className="flex flex-col gap-2">
          {[
            ["Email", "Opens with the new office", Mail],
            ["LinkedIn", "Connection note, one to one", Message],
            ["Email", "A short follow-up, three days later", Mail],
          ].map(([ch, t, I], i) => {
            const Icon = I as typeof Mail;
            return (
              <div key={i} className="flex items-center gap-3 rounded-card bg-white p-3 text-ink shadow-float">
                <span className="grid h-8 w-8 flex-none place-items-center rounded-full bg-panel">
                  <Icon size={16} />
                </span>
                <div className="min-w-0">
                  <p className="text-[12px] font-semibold">{ch as string}</p>
                  <p className="truncate text-[12px] text-muted">{t as string}</p>
                </div>
              </div>
            );
          })}
        </div>
      </DarkMock>
    );
  if (kind === "qualify")
    return (
      <DarkMock className={className}>
        <MockCard>
          <p className="text-[12px] text-muted">Reply from Priya Nair, CRO</p>
          <p className="mt-1 text-[13px]">"Timing is good, we are rebuilding outbound this quarter. Happy to talk next week."</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Chip>
              <Check size={13} /> Genuine interest
            </Chip>
            <Chip>
              <Check size={13} /> Decision-maker
            </Chip>
            <Chip>
              <Check size={13} /> ICP match
            </Chip>
          </div>
        </MockCard>
      </DarkMock>
    );
  return (
    <DarkMock className={className}>
      <MockCard className="flex items-center gap-3">
        <span className="grid h-10 w-10 flex-none place-items-center rounded-[8px] bg-brand text-ink">
          <Calendar size={18} />
        </span>
        <div>
          <p className="text-[13px] font-semibold">Tue 10:00 · First meeting</p>
          <p className="text-[12px] text-muted">Priya Nair, Northgate IT Services</p>
        </div>
      </MockCard>
      <MockCard>
        <p className="text-[12px] font-semibold">Before you join</p>
        <ul className="mt-1.5 flex flex-col gap-1 text-[12px] text-muted">
          <li>Why now: rebuilding outbound this quarter</li>
          <li>Open with: the new Manchester office</li>
          <li>Agreed criteria: met</li>
        </ul>
      </MockCard>
    </DarkMock>
  );
}

/** A buying signal as a dark card with orange chips (the /signals examples). */
export function SignalExampleCard({ n, signal, meaning, signalLabel, meaningLabel }: { n: string; signal: string; meaning: string; signalLabel: string; meaningLabel: string }) {
  return (
    <div className="mock-dark flex flex-col gap-4 p-6 md:p-7">
      <div className="flex items-center justify-between">
        <Chip>
          <Search size={13} /> {signalLabel}
        </Chip>
        <span className="text-[13px] text-white/50">{n}</span>
      </div>
      <p className="text-[18px] font-medium leading-snug text-white md:text-[20px]">{signal}</p>
      <div className="rounded-card bg-white p-4 text-ink">
        <p className="text-[12px] font-semibold text-muted">{meaningLabel}</p>
        <p className="mt-1 text-[15px] leading-relaxed">{meaning}</p>
      </div>
    </div>
  );
}

/** The two mini cards beside Frank in the hero: a signal and a qualified meeting. */
export function HeroSignalMini({ tag, body, time }: { tag: string; body: string; time: string }) {
  return (
    <div className="rounded-card bg-white p-3.5 shadow-float" aria-hidden="true">
      <div className="flex items-center justify-between">
        <Chip>{tag}</Chip>
        <span className="text-[12px] text-muted">{time}</span>
      </div>
      <div className="mt-3 flex items-center gap-2.5">
        <span className="grid h-8 w-8 flex-none place-items-center rounded-full bg-ink text-white">
          <Search size={15} />
        </span>
        <p className="text-[14px] font-semibold text-ink">{body}</p>
      </div>
      <p className="mt-1 pl-[42px] text-[12px] text-muted">Brightline Software · 120 people</p>
    </div>
  );
}

export function HeroMeetingMini({ tag, body, time }: { tag: string; body: string; time: string }) {
  return (
    <div className="rounded-card bg-white p-3.5 shadow-float" aria-hidden="true">
      <div className="flex items-center justify-between">
        <Chip>{tag}</Chip>
        <span className="text-[12px] text-muted">{time}</span>
      </div>
      <div className="mt-3 flex items-center gap-2.5">
        <span className="grid h-8 w-8 flex-none place-items-center rounded-full bg-brand text-ink">
          <Calendar size={15} />
        </span>
        <p className="text-[14px] font-semibold text-ink">{body}</p>
      </div>
      <p className="mt-1 pl-[42px] text-[12px] text-muted">Northgate IT Services · in your calendar</p>
    </div>
  );
}
