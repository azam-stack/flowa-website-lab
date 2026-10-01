import { Container } from "@/components/Container";
import { ContactBand } from "@/components/frank/ContactBand";
import { Marquee } from "@/components/frank/Marquee";
import { PageHero } from "@/components/frank/PageHero";
import { ProofBlock } from "@/components/frank/Proof";
import { SectionHeading, Section } from "@/components/frank/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { casesPage as t } from "@/content/frank/pages";
import { breadcrumbJsonLd, useSeo } from "@/lib/seo";

/** /cases: the honest structure. No case is published until a client has approved it; the list is empty and says so. */
export function CasesPage() {
  useSeo({ title: t.seo.title, description: t.seo.description, path: "/cases", jsonLd: [breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Cases", path: "/cases" }])] });
  return (
    <>
      <PageHero light={t.h1Light} bold={t.h1Bold} sub={t.sub} />
      <Marquee className="mt-6 md:mt-10" />
      <Section>
        <Container>
          <ProofBlock withHeading={false} />
        </Container>
      </Section>
      <Section tone="white">
        <Container>
          <SectionHeading eyebrow={t.structureEyebrow} title={t.structureH2} />
          <Reveal stagger as="ol" className="mt-12 grid gap-5 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
            {t.parts.map((p) => (
              <li key={p.n} className="framed p-6">
                <span className="text-[13px] font-semibold tracking-wide text-brand-deep">{p.n}</span>
                <h3 className="mt-3 text-h3 text-ink">{p.title}</h3>
                <p className="mt-2 text-body text-ink-2">{p.body}</p>
              </li>
            ))}
          </Reveal>
          <p className="mt-8 rounded-card border border-line bg-soft px-5 py-4 text-small text-muted">{t.emptyNote}</p>
        </Container>
      </Section>
      <ContactBand h2={t.contactH2} sub={t.contactSub} idPrefix="cases" />
    </>
  );
}
