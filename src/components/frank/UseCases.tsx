import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { home } from "@/content/frank/home";
import { Chip } from "./Chip";
import { FrankAvatar } from "./FrankAvatar";
import { ArrowRight, Calendar, Check, Mail } from "./Icons";
import { SectionHeading, Section } from "./SectionHeading";
import { Avatar } from "./Mocks";
import { FlowaO } from "./Sphere";

type Key = (typeof home.useCases.items)[number]["key"];

/** The illustration panel on each use-case card: a mini UI collage with Frank's avatar. */
function Art({ k }: { k: Key }) {
  const frank = <FrankAvatar decorative round className="absolute bottom-3 left-3 h-12 w-12 border-2 border-white" />;
  const mini = "rounded-[12px] bg-white p-3 shadow-float text-ink";
  if (k === "signal")
    return (
      <>
        <div className={`${mini} absolute left-4 top-4 w-[66%]`}>
          <Chip>New signal</Chip>
          <div className="mt-2 flex items-center gap-2">
            <Avatar name="Oliver Hart" size={30} status="live" />
            <div className="min-w-0">
              <p className="truncate text-[13px] font-semibold">Hiring 2 SDRs</p>
              <p className="truncate text-[11px] text-muted">Brightline Software · 4h ago</p>
            </div>
          </div>
        </div>
        {frank}
      </>
    );
  if (k === "email")
    return (
      <>
        <div className={`${mini} absolute left-4 right-14 top-4`}>
          {[
            ["Day 1", "Opens with the new office"],
            ["Day 4", "One question, three lines"],
            ["Day 7", "Last note, then stop"],
          ].map(([d, t]) => (
            <div key={d} className="flex items-center gap-2 py-1 text-[12px]">
              <Mail size={14} className="text-muted" />
              <span className="w-10 font-medium text-muted">{d}</span>
              <span className="truncate text-ink-2">{t}</span>
            </div>
          ))}
        </div>
        <div className="absolute bottom-4 right-4">
          <Chip>
            <Check size={13} /> Deliverability healthy
          </Chip>
        </div>
        {frank}
      </>
    );
  if (k === "linkedin")
    return (
      <>
        <div className={`${mini} absolute left-4 right-6 top-5`}>
          <div className="flex items-center gap-2">
            <Avatar name="Priya Nair" size={28} />
            <p className="text-[12px] font-semibold">Connection note · Priya Nair</p>
          </div>
          <p className="mt-2 text-[12px] leading-relaxed text-ink-2">Hi Priya, saw Northgate just appointed a new sales lead. Happy to connect, no pitch.</p>
        </div>
        <div className="absolute bottom-4 right-4">
          <Chip>
            <Check size={13} /> Approved by a person
          </Chip>
        </div>
        {frank}
      </>
    );
  if (k === "accounts")
    return (
      <>
        <div className={`${mini} absolute left-4 right-10 top-4`}>
          <p className="text-[11px] font-semibold text-muted">Your target accounts</p>
          {[
            ["Brightline Software", true],
            ["Northgate IT Services", true],
            ["Kestrel Creative", false],
          ].map(([n, done]) => (
            <div key={n as string} className="flex items-center justify-between py-1 text-[12px]">
              <span className="text-ink-2">{n as string}</span>
              {done ? (
                <span className="grid h-5 w-5 place-items-center rounded-full bg-brand text-ink">
                  <Check size={11} />
                </span>
              ) : (
                <span className="h-5 w-5 rounded-full border border-line" />
              )}
            </div>
          ))}
        </div>
        <div className="absolute bottom-4 right-4">
          <Chip>Door opened: 2 of 3</Chip>
        </div>
        {frank}
      </>
    );
  if (k === "noshow")
    return (
      <>
        <div className="absolute left-4 right-4 top-5 flex items-center gap-2">
          <div className={`${mini} flex-1`}>
            <p className="text-[11px] text-muted">Missed</p>
            <p className="text-[12px] font-semibold">Thu 14:00</p>
          </div>
          <ArrowRight size={18} className="flex-none text-ink" />
          <div className={`${mini} flex-1 border border-brand`}>
            <p className="text-[11px] text-muted">Rebooked</p>
            <p className="text-[12px] font-semibold">Tue 10:00</p>
          </div>
        </div>
        <div className="absolute bottom-4 right-4">
          <Chip>Not counted as delivered</Chip>
        </div>
        {frank}
      </>
    );
  return (
    <>
      <div className={`${mini} absolute left-4 right-6 top-4`}>
        {[
          ["Reply received", "synced to CRM"],
          ["Meeting booked", "synced to CRM"],
        ].map(([a, b]) => (
          <div key={a} className="flex items-center justify-between py-1 text-[12px]">
            <span className="flex items-center gap-1.5 text-ink-2">
              <Calendar size={13} className="text-muted" /> {a}
            </span>
            <span className="flex items-center gap-1 font-medium text-ink">
              <Check size={12} /> {b}
            </span>
          </div>
        ))}
        <div className="mt-2 flex items-end gap-1" aria-hidden="true">
          {[30, 48, 40, 64, 56, 80, 72].map((h, i) => (
            <span key={i} className="w-full rounded-[3px] bg-brand" style={{ height: h / 3 }} />
          ))}
        </div>
      </div>
      {frank}
    </>
  );
}

const TINT = { signal: 1, email: 2, linkedin: 5, accounts: 3, noshow: 1, crm: 2 } as const;

/** Use cases (brief §4.5): six cards, 3×2, each with a soft grey illustration panel, a Flowa "o" and coloured UI cards on top, an H3 and two lines of body. */
export function UseCases() {
  const u = home.useCases;
  return (
    <Section tone="white" id="use-cases">
      <Container>
        <SectionHeading eyebrow={u.eyebrow} title={u.h2} sub={u.sub} />
        <Reveal stagger as="ul" className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {u.items.map((item) => (
            <li key={item.key} className="flex min-w-0 flex-col">
              <div className="relative aspect-[4/3] overflow-hidden rounded-card border border-line bg-soft transition-transform duration-300 ease-out hover:-translate-y-1" aria-hidden="true">
                <FlowaO tint={TINT[item.key]} className="absolute -right-8 -top-10 h-40 w-40 rotate-12 opacity-80" />
                <Art k={item.key} />
              </div>
              <h3 className="mt-5 text-h3 text-ink">{item.title}</h3>
              <p className="mt-2 text-body text-ink-2">{item.body}</p>
            </li>
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
