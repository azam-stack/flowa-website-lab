import { Container } from "@/components/Container";
import { ContactBand } from "@/components/frank/ContactBand";
import { FrankCard } from "@/components/frank/FrankCard";
import { HowStrip } from "@/components/frank/HowStrip";
import { MeetFrankRows } from "@/components/frank/MeetFrank";
import { ProofBlock } from "@/components/frank/Proof";
import { PageHero } from "@/components/frank/PageHero";
import { Section } from "@/components/frank/SectionHeading";
import { Sphere } from "@/components/frank/Sphere";
import { frankPage as t } from "@/content/frank/pages";
import { breadcrumbJsonLd, useSeo } from "@/lib/seo";

/** /frank: the product page. Large portrait hero, the three Meet Frank rows, the four-step strip, proof stats, contact band. */
export function FrankPage() {
  useSeo({ title: t.seo.title, description: t.seo.description, path: "/frank", jsonLd: [breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Frank", path: "/frank" }])] });
  return (
    <>
      <PageHero
        light={t.h1Light}
        bold={t.h1Bold}
        sub={t.sub}
        aside={
          <div className="relative">
            <Sphere size={70} tint={3} smiley className="absolute -left-10 top-6 hidden lg:block" />
            <Sphere size={44} tint={5} className="absolute -right-6 bottom-10 hidden lg:block" delay={1.5} />
            <FrankCard className="w-full" />
          </div>
        }
      />
      <Section>
        <Container>
          <MeetFrankRows />
        </Container>
      </Section>
      <HowStrip eyebrow={t.stripEyebrow} h2={t.stripH2} />
      <Section tone="white">
        <Container>
          <ProofBlock />
        </Container>
      </Section>
      <ContactBand idPrefix="frank" />
    </>
  );
}
