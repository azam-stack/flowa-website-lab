import type { ReactNode } from "react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Btn } from "./Btn";
import { SectionHeading, Section } from "./SectionHeading";
import { SparkleGrid } from "./SparkleGrid";
import { Sphere, SphereGroup } from "./Sphere";

type Placed = Parameters<typeof SphereGroup>[0]["items"];

/**
 * Statement band (brief §4.4, §4.7): an 80px weight-300 headline on the
 * left with the black CTA on the right, one orange sphere half-cropped
 * above it, then a full-width grid band with a stippled illustration on
 * the left and floating spheres on the right, and an optional caption.
 */
export function StatementBand({ headline, cta, ctaHref = "/demo", illustration, spheres, caption, trackLabel }: { headline: string; cta: string; ctaHref?: string; illustration: ReactNode; spheres: Placed; caption?: string; trackLabel: string }) {
  return (
    <Section>
      <Container>
        <div className="relative overflow-hidden pt-10">
          <Sphere size={88} tint={1} className="absolute left-[46%] -top-11" duration={7.5} />
          <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="text-statement max-w-[12ch] text-ink md:max-w-[20ch]">{headline}</h2>
            <Btn href={ctaHref} size="lg" trackLabel={trackLabel} className="self-start md:self-end">
              {cta}
            </Btn>
          </Reveal>
        </div>
        <Reveal delay={80} className="relative mt-10 min-h-[280px] overflow-hidden rounded-frame border border-ink md:mt-14 md:min-h-[400px]">
          <SparkleGrid />
          <div className="absolute bottom-0 left-4 w-[62%] max-w-[300px] md:left-12 md:max-w-[460px]">{illustration}</div>
          <div className="absolute inset-y-0 right-0 w-[48%]">
            <SphereGroup items={spheres} />
          </div>
        </Reveal>
        {caption && <p className="mt-5 text-small text-muted md:mt-6">{caption}</p>}
      </Container>
    </Section>
  );
}

/** Final CTA band (brief §4.12): centred H2, eyebrow and the black button. */
export function FinalCta({ eyebrow, h2, cta, ctaHref = "/demo", trackLabel }: { eyebrow?: string; h2: string; cta: string; ctaHref?: string; trackLabel: string }) {
  return (
    <Section>
      <Container>
        <SectionHeading eyebrow={eyebrow} title={h2}>
          <div className="mt-8">
            <Btn href={ctaHref} size="lg" trackLabel={trackLabel}>
              {cta}
            </Btn>
          </div>
        </SectionHeading>
      </Container>
    </Section>
  );
}
