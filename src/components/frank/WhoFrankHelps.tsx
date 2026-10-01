import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { home } from "@/content/frank/home";
import { SectionHeading, Section } from "./SectionHeading";
import { FoundersVignette, RevenueVignette, SalesVignette } from "./Vignettes";

const ICON = { trend: FoundersVignette, calendar: SalesVignette, magnifier: RevenueVignette } as const;

/** Who Frank helps (brief §4.8): three columns with a small UI vignette, an H3 and one line. */
export function WhoFrankHelps() {
  const w = home.who;
  return (
    <Section tone="white" id="who">
      <Container>
        <SectionHeading eyebrow={w.eyebrow} title={w.h2} sub={w.sub} />
        <Reveal stagger as="ul" className="mt-12 grid gap-10 md:mt-16 md:grid-cols-3 md:gap-8">
          {w.columns.map((c) => {
            const Icon = ICON[c.icon];
            return (
              <li key={c.key} className="flex flex-col items-center text-center md:items-start md:text-left">
                <Icon />
                <h3 className="mt-6 text-h3 text-ink">{c.title}</h3>
                <p className="mt-2 max-w-sm text-body text-ink-2">{c.body}</p>
              </li>
            );
          })}
        </Reveal>
      </Container>
    </Section>
  );
}
