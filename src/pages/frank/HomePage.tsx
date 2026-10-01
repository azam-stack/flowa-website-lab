import { Container } from "@/components/Container";
import { ContactBand } from "@/components/frank/ContactBand";
import { FaqList } from "@/components/frank/FaqList";
import { Hero } from "@/components/frank/Hero";
import { Marquee } from "@/components/frank/Marquee";
import { MeetFrank } from "@/components/frank/MeetFrank";
import { Proof, StatsStrip } from "@/components/frank/Proof";
import { SectionHeading, Section } from "@/components/frank/SectionHeading";
import { FinalCta, StatementBand } from "@/components/frank/StatementBand";
import { spherePile } from "@/components/frank/Sphere";
import { CalendarsVignette } from "@/components/frank/Vignettes";
import { TeamBand } from "@/components/frank/TeamBand";
import { TabbedFeature } from "@/components/frank/TabbedFeature";
import { Testimonials } from "@/components/frank/Testimonials";
import { TrustStrip } from "@/components/frank/TrustStrip";
import { UseCases } from "@/components/frank/UseCases";
import { WhoFrankHelps } from "@/components/frank/WhoFrankHelps";
import { home } from "@/content/frank/home";
import { faqJsonLd, useSeo } from "@/lib/seo";

/** The homepage, sections 4.1 to 4.14 in the brief's exact order. */
export function HomePage() {
  useSeo({ title: home.seo.title, description: home.seo.description, path: "/", jsonLd: [faqJsonLd(home.faq.items)] });
  return (
    <>
      {/* 4.1 */}
      <Hero />
      {/* 4.2 */}
      <Marquee className="mt-6 md:mt-10" />
      {/* Our own numbers, straight under the logos */}
      <StatsStrip className="mt-10 md:mt-14" />
      {/* 4.3 */}
      <TabbedFeature />
      {/* 4.5 */}
      <UseCases />
      {/* 4.6 */}
      <MeetFrank />
      {/* The humans: Ahmed and Anton approve and run the conversations */}
      <TeamBand />
      {/* 4.7 */}
      <StatementBand headline={home.calendars.headline} cta={home.calendars.cta} trackLabel="band_calendars_book_demo" illustration={<CalendarsVignette />} spheres={spherePile} />
      {/* 4.8 */}
      <WhoFrankHelps />
      {/* 4.9 */}
      {/* The founder quote (the numbers moved up under the logos) */}
      <Proof withHeading={false} withStats={false} />
      {/* 4.10 */}
      <ContactBand />
      {/* 4.11, hidden until approved quotes exist */}
      <Testimonials />
      {/* 4.12 */}
      <FinalCta eyebrow={home.finalCta.eyebrow} h2={home.finalCta.h2} cta={home.finalCta.cta} trackLabel="final_book_demo" />
      {/* 4.13 */}
      <Section tone="white" id="faq">
        <Container>
          <SectionHeading title={home.faq.h2} />
          <FaqList items={home.faq.items} className="mx-auto mt-10 max-w-3xl md:mt-14" />
        </Container>
      </Section>
      {/* 4.14 */}
      <div className="bg-surface">
        <TrustStrip />
      </div>
    </>
  );
}
