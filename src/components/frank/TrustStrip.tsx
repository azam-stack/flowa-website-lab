import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { home } from "@/content/frank/home";
import { Sphere } from "./Sphere";
import { ShieldIcon } from "./Stipple";

/** Trust strip above the footer (brief §4.14): the H3 and line on the left, a shield with a smiley sphere on the right. No badges: [CONFIRM]. */
export function TrustStrip() {
  const t = home.trust;
  return (
    <section className="pb-section-m lg:pb-section" aria-label={t.h3}>
      <Container>
        <Reveal className="framed grid items-center gap-8 px-6 py-8 md:grid-cols-[1fr_auto] md:px-12 md:py-10">
          <div>
            <h3 className="text-h3 text-ink">{t.h3}</h3>
            <p className="mt-2 max-w-lead text-body text-ink-2">{t.body}</p>
          </div>
          <div className="relative mx-auto h-36 w-40 md:mx-0" aria-hidden="true">
            <ShieldIcon className="h-36 w-auto" />
            <Sphere size={64} tint={3} smiley className="absolute -right-2 bottom-2" duration={6} />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
