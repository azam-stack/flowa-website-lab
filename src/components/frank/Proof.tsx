import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { home } from "@/content/frank/home";
import { CountUp } from "./CountUp";
import { Section } from "./SectionHeading";

/**
 * Proof (brief §4.9): the H2 with its bold word, a framed quote card with
 * big apricot quotation marks overlapping its bottom edge, and the stat
 * stack with thin ink rules. The quote is the founder's own until a
 * client quote is approved. Stats count up once in view. Reused on
 * /frank and /cases.
 */
export function ProofBlock({ withHeading = true }: { withHeading?: boolean }) {
  const p = home.proof;
  return (
    <>
      {withHeading && (
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-h2 font-light text-ink">
            {p.h2Light}
            <strong className="font-semibold">{p.h2Bold}</strong>
            {p.h2Rest}
          </h2>
        </Reveal>
      )}
      <div className={`grid gap-10 md:grid-cols-2 md:gap-12 lg:gap-16 ${withHeading ? "mt-12 md:mt-16" : ""}`}>
        <Reveal className="self-start">
          <figure className="framed relative shadow-float px-7 pb-16 pt-8 md:px-10 md:pb-20 md:pt-10">
            <blockquote className="text-[22px] font-light leading-snug text-ink md:text-[26px]">“{p.quote}”</blockquote>
            <figcaption className="mt-6 text-[15px] text-ink-2">
              <span className="font-semibold text-ink">{p.quoteName}</span>, {p.quoteRole}
            </figcaption>
            {/* the big apricot marks straddle the card's bottom edge */}
            <span aria-hidden="true" className="serif pointer-events-none absolute -bottom-[0.62em] right-8 select-none text-[150px] leading-none text-brand md:-bottom-[0.6em] md:text-[190px]">
              ”
            </span>
          </figure>
        </Reveal>
        <Reveal delay={80}>
          <ul className="divide-y divide-ink border-y border-ink">
            {p.stats.map((s) => (
              <li key={s.label} className="flex items-baseline gap-5 py-5 md:py-6">
                <CountUp value={s.value} className="text-stat w-[200px] flex-none text-ink md:w-[230px]" />
                <span className="text-body text-ink-2">{s.label}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-small text-muted">{p.footnote}</p>
        </Reveal>
      </div>
    </>
  );
}

export function Proof() {
  return (
    <Section id="proof">
      <Container>
        <ProofBlock />
      </Container>
    </Section>
  );
}
