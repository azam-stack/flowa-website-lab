import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { home } from "@/content/frank/home";
import { FrankAvatar, type FrankPose } from "./FrankAvatar";
import { ShortForm } from "./ShortForm";

/**
 * Contact band (brief §4.10): full-width apricot, the H2 and sub on the
 * left, the form on a translucent white panel on the right. On /demo
 * and /contact the same band is the page, with Frank waving (pose b).
 */
export function ContactBand({ h2 = home.contact.h2, sub = home.contact.sub, pose, idPrefix = "contact", id = "contact", as: Heading = "h2" }: { h2?: string; sub?: string; pose?: FrankPose; idPrefix?: string; id?: string; as?: "h1" | "h2" }) {
  return (
    <section id={id} className="bg-panel py-section-m lg:py-section" aria-label={h2}>
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            {pose && <FrankAvatar pose={pose} className="mb-8 h-44 w-44 rounded-frame border border-ink" />}
            <Heading className="text-h2 text-ink">{h2}</Heading>
            <p className="mt-4 max-w-lead text-sub text-ink-2">{sub}</p>
          </Reveal>
          <Reveal delay={80} className="relative rounded-frame border border-white/70 bg-white/80 p-5 backdrop-blur-sm md:p-8">
            <ShortForm idPrefix={idPrefix} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
