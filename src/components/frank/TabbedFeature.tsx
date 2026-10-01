import { useEffect, useId, useState } from "react";
import { Container } from "@/components/Container";
import { home } from "@/content/frank/home";
import { useInView, useReducedMotion } from "@/hooks/useInView";
import { Chip } from "./Chip";
import { FrankAvatar } from "./FrankAvatar";
import { Check, Mail, Message, Search } from "./Icons";
import { Avatar, MockCard } from "./Mocks";
import { SectionHeading, Section } from "./SectionHeading";
import { Sphere } from "./Sphere";

const INTERVAL_MS = 5000;
const m = home.tabbed.mock;

/** The four mock-ups, one per tab. Fictional people and companies only. */
function MainCard({ tab }: { tab: string }) {
  if (tab === "companies")
    return (
      <MockCard className="overflow-hidden p-0">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-5 py-4">
          <p className="min-w-0 text-[17px] text-ink">
            <strong className="font-semibold">{m.countBold}</strong>
            {m.countRest}
          </p>
          <span className="flex items-center gap-2 text-[13px] text-muted">
            <span className="relative inline-block h-5 w-9 rounded-pill bg-ink">
              <span className="absolute right-0.5 top-0.5 h-4 w-4 rounded-full bg-white" />
            </span>
            {m.toggle}
          </span>
        </div>
        <ul className="divide-y divide-line">
          {m.prospects.map((p) => (
            <li key={p.name} className="flex items-center gap-3 px-5 py-3">
              <Avatar initials={p.name.split(" ").map((w) => w[0]).join("")} />
              <div className="min-w-0 flex-1">
                <p className="truncate text-[14px] font-semibold text-ink">{p.name}</p>
                <p className="truncate text-[12px] text-muted">
                  {p.title} | {p.company}
                </p>
              </div>
              <span className="flex-none text-[12px] text-muted">{p.size}</span>
            </li>
          ))}
        </ul>
      </MockCard>
    );
  if (tab === "person")
    return (
      <MockCard>
        <div className="flex items-center gap-3">
          <Avatar initials="OH" />
          <div>
            <p className="text-[15px] font-semibold text-ink">Oliver Hart</p>
            <p className="text-[12px] text-muted">Head of Sales | Brightline Software</p>
          </div>
        </div>
        <ul className="mt-4 flex flex-col gap-2">
          {["Role confirmed on two sources", "Owns the decision, not just the post", "Email address verified before sending", "Not on any opt-out list"].map((t) => (
            <li key={t} className="flex items-center gap-2.5 rounded-[10px] bg-soft px-3 py-2.5 text-[13px] text-ink-2">
              <span className="grid h-5 w-5 flex-none place-items-center rounded-full bg-brand text-ink">
                <Check size={12} />
              </span>
              {t}
            </li>
          ))}
        </ul>
      </MockCard>
    );
  if (tab === "channel")
    return (
      <MockCard>
        <p className="text-[13px] font-semibold text-muted">One sequence, two channels</p>
        <ol className="mt-3 flex flex-col gap-2.5">
          {[
            ["Day 1", "Email", "Opens with the new office", Mail],
            ["Day 2", "LinkedIn", "Connection note, one to one", Message],
            ["Day 4", "Email", "Short follow-up with one question", Mail],
            ["Day 7", "LinkedIn", "Message, adapted to the reply", Message],
          ].map(([d, ch, t, I]) => {
            const Icon = I as typeof Mail;
            return (
              <li key={d as string} className="flex items-center gap-3">
                <span className="w-12 text-[12px] font-medium text-muted">{d as string}</span>
                <span className="grid h-8 w-8 flex-none place-items-center rounded-full bg-panel text-ink">
                  <Icon size={15} />
                </span>
                <div className="min-w-0">
                  <p className="text-[13px] font-semibold text-ink">{ch as string}</p>
                  <p className="truncate text-[12px] text-muted">{t as string}</p>
                </div>
              </li>
            );
          })}
        </ol>
        <div className="mt-3 flex flex-wrap gap-2">
          <Chip>Replied on LinkedIn: email paused</Chip>
        </div>
      </MockCard>
    );
  return (
    <MockCard>
      <p className="text-[12px] text-muted">To: Oliver Hart · Brightline Software</p>
      <p className="mt-3 text-[14px] leading-relaxed text-ink-2">
        <mark className="rounded-[6px] bg-panel px-1 py-0.5 text-ink">Hi Oliver, saw Brightline posted two SDR roles this week and opened a Manchester office.</mark> Until those hires are productive, there is a gap in pipeline. We fill exactly that gap for UK software teams. Worth 20 minutes?
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        <Chip>Real fact, first line</Chip>
        <Chip tone="line">Written for one person</Chip>
      </div>
    </MockCard>
  );
}

function PromptCard() {
  return (
    <MockCard className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <FrankAvatar decorative round className="h-10 w-10 flex-none" />
        <p className="text-[14px] text-ink-2">
          {m.promptLead}
          <strong className="font-semibold text-ink">{m.promptBold}</strong>
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <span className="flex h-10 min-w-[160px] flex-1 items-center truncate rounded-control border border-line px-3 text-[13px] text-muted">{m.promptPlaceholder}</span>
        <span className="btn btn-primary h-10 flex-none px-4 text-[14px]">
          <Search size={15} /> {m.search}
        </span>
      </div>
    </MockCard>
  );
}

/**
 * The "precision" tabbed feature card (brief §4.3): a dark wavy
 * mock-up panel on top, four tab columns below. The active title is
 * serif ink, the rest muted; a click or the 5-second auto-advance swaps
 * the mock-up and a thin orange progress line runs under the active tab.
 * On mobile the tabs become a horizontal row of pills.
 */
export function TabbedFeature() {
  const t = home.tabbed;
  const [active, setActive] = useState(0);
  const [round, setRound] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();
  const { ref, active: onScreen } = useInView<HTMLDivElement>({ threshold: 0.3 });
  const baseId = useId();

  const running = onScreen && !paused && !reduced;
  useEffect(() => {
    if (!running) return;
    const timer = window.setTimeout(() => {
      setActive((a) => (a + 1) % t.tabs.length);
      setRound((r) => r + 1);
    }, INTERVAL_MS);
    return () => window.clearTimeout(timer);
  }, [running, active, round, t.tabs.length]);

  const select = (i: number) => {
    setActive(i);
    setRound((r) => r + 1);
  };

  const tab = t.tabs[active];
  return (
    <Section>
      <Container>
        <div className="relative">
          <SectionHeading eyebrow={t.eyebrow} title={t.h2} sub={t.sub} />
          <Sphere size={76} tint={3} smiley className="absolute right-[6%] top-0 hidden lg:block xl:right-[14%]" duration={6.5} />
        </div>
        <div ref={ref} className="framed mt-12 overflow-hidden md:mt-16" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
          <div className="wavy-dark relative p-5 md:p-10">
            <div key={`${active}-${round}`} className="fade-in grid min-w-0 gap-5 md:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] md:items-end" id={`${baseId}-panel-${active}`} role="tabpanel" aria-labelledby={`${baseId}-tab-${active}`}>
              <div className="min-w-0">
                <MainCard tab={tab.key} />
              </div>
              <div className="flex min-w-0 flex-col gap-4">
                <div className="flex flex-wrap gap-2 md:justify-end">
                  {m.sources.map((s) => (
                    <Chip key={s} tone="light">
                      {s}
                    </Chip>
                  ))}
                </div>
                <PromptCard />
              </div>
            </div>
          </div>

          {/* desktop: four columns */}
          <div role="tablist" aria-label={t.h2} className="hidden border-t border-ink md:grid md:grid-cols-4 md:divide-x md:divide-ink">
            {t.tabs.map((tb, i) => {
              const isActive = i === active;
              return (
                <button
                  key={tb.key}
                  id={`${baseId}-tab-${i}`}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`${baseId}-panel-${i}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => select(i)}
                  onKeyDown={(e) => {
                    if (e.key === "ArrowRight") select((i + 1) % t.tabs.length);
                    if (e.key === "ArrowLeft") select((i - 1 + t.tabs.length) % t.tabs.length);
                  }}
                  className="relative p-6 text-left transition-colors hover:bg-soft lg:p-7"
                >
                  <span className={`serif block text-[24px] leading-tight transition-colors lg:text-[26px] ${isActive ? "text-ink" : "text-muted"}`}>{tb.title}</span>
                  <span className={`mt-2 block text-[15px] font-semibold ${isActive ? "text-ink" : "text-muted"}`}>{tb.feature}</span>
                  <span className={`mt-1.5 block text-[14px] leading-relaxed ${isActive ? "text-ink-2" : "text-muted"}`}>{tb.body}</span>
                  <span className="absolute inset-x-0 bottom-0 h-[3px] bg-line">{isActive && <span key={round} className={`block h-full w-full bg-brand ${running ? "tab-progress" : ""}`} />}</span>
                </button>
              );
            })}
          </div>

          {/* mobile: pills + the active description */}
          <div className="border-t border-ink md:hidden">
            <div role="tablist" aria-label={t.h2} className="no-scrollbar flex gap-2 overflow-x-auto px-4 pt-4">
              {t.tabs.map((tb, i) => (
                <button key={tb.key} role="tab" aria-selected={i === active} onClick={() => select(i)} className={`flex-none rounded-pill border px-4 py-2 text-[14px] font-medium transition-colors ${i === active ? "border-ink bg-ink text-white" : "border-line bg-white text-ink-2"}`}>
                  {tb.title}
                </button>
              ))}
            </div>
            <div key={`m-${active}`} className="fade-in px-4 pb-5 pt-4">
              <p className="serif text-[22px] text-ink">{tab.title}</p>
              <p className="mt-1 text-[15px] font-semibold text-ink">{tab.feature}</p>
              <p className="mt-1 text-[14px] text-ink-2">{tab.body}</p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
