import type { Metadata } from "next";
import { ButtonLink, Container, Eyebrow } from "@/components/brand";
import { ScreenSlider } from "@/components/screen-slider";
import { SolutionsLab } from "@/components/solutions-lab";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Interactive demos and example workflows for customer enquiries, booking, automation, and connected operations.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsPage() {
  return (
    <>
      <section className="stage-wash border-b border-ink/10">
        <Container className="py-16 lg:py-24">
          <Eyebrow>Solutions</Eyebrow>
          <h1 className="display mt-4 max-w-4xl text-[clamp(3rem,6vw,5.4rem)] text-forest">
            Practical examples, <span className="italic text-emerald">kept honest.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/80">
            Explore sample journeys for enquiries, booking, automation, and connected operations. Then move through the mobile and website screens.
          </p>
          <ButtonLink href="/contact" className="mt-8">
            Discuss Your Project
          </ButtonLink>
        </Container>
      </section>
      <SolutionsLab />
      <ScreenSlider id="solution-screens" />
    </>
  );
}
