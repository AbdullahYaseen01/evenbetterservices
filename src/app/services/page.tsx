import type { Metadata } from "next";
import { ButtonLink, Container, Eyebrow } from "@/components/brand";
import { ServicesAtlas } from "@/components/services-atlas";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI agents, business automation, custom software, connected systems, and interface design from EvenBetterServices.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="stage-wash border-b border-ink/10">
        <Container className="py-16 lg:py-24">
          <Eyebrow>Services</Eyebrow>
          <h1 className="display mt-4 max-w-4xl text-[clamp(3rem,6vw,5.4rem)] text-forest">
            Find the work that matches <span className="italic text-emerald">the job.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/80">
            Eleven services, grouped so you can start from customer communication, a product, a connected system, or the interface itself. If you are between them, the enquiry form can start with “Help me choose.”
          </p>
          <ButtonLink href="/contact?service=help" className="mt-8">
            Help me choose
          </ButtonLink>
        </Container>
      </section>
      <ServicesAtlas intro={false} />
    </>
  );
}
