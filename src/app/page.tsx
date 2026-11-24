import type { Metadata } from "next";
import { ButtonLink, Container, Eyebrow } from "@/components/brand";
import { EnquiryForm } from "@/components/enquiry-form";
import { ScreenSlider } from "@/components/screen-slider";
import { FaqList } from "@/components/faq-list";
import { ProcessPath } from "@/components/process-path";
import { ServicesAtlas } from "@/components/services-atlas";
import { SolutionsLab } from "@/components/solutions-lab";
import { WhyStudio } from "@/components/why-studio";
import { brand } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <section className="hero-photo">
        <Container className="grid items-start gap-10 py-12 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:py-16">
          <div>
            <p className="rise text-[0.78rem] font-semibold tracking-[0.16em] text-emerald uppercase">{brand.eyebrow}</p>
            <h1 className="display rise d1 mt-5 text-[clamp(3.15rem,6.2vw,5.7rem)] text-forest">
              <span className="block">Build smarter.</span>
              <span className="block text-emerald italic">Automate better.</span>
              <span className="block">Grow with confidence.</span>
            </h1>
            <p className="rise d2 mt-6 max-w-xl text-lg leading-8 text-ink/80">{brand.description}</p>
            <p className="rise d3 mt-6 flex items-end gap-3">
              <span className="font-display text-6xl leading-none text-forest italic">£99</span>
              <span className="pb-1 text-sm font-semibold tracking-wide text-forest uppercase">Android & iOS app</span>
            </p>
            <div className="rise d4 mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">Discuss Your Project</ButtonLink>
              <ButtonLink href="/#services" variant="secondary">
                Explore Our Services
              </ButtonLink>
            </div>
            <p className="rise d5 mt-5 text-sm text-ink/60">From your first idea to launch and ongoing improvement.</p>
          </div>
          <ScreenSlider embedded id="hero-work" eyebrow="Previous builds" />
        </Container>
      </section>

      <ServicesAtlas />
      <SolutionsLab />
      <ScreenSlider />
      <ProcessPath />

      <section id="about" className="wash-lavender scroll-mt-28 py-20 sm:py-28">
        <Container className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Eyebrow>About</Eyebrow>
            <h2 className="display mt-4 text-[clamp(2.6rem,5vw,4.5rem)] text-forest">
              Useful AI. Thoughtful software. <span className="italic">Clear collaboration.</span>
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-ink/80">
              EvenBetterServices helps founders, startups, SMEs, and product teams turn operational friction into software people can use. We explain the business outcome before the technical detail.
            </p>
            <ButtonLink href="/about" className="mt-8" variant="forest">
              About the studio
            </ButtonLink>
          </div>
          <div className="grid gap-3">
            {[
              ["Useful AI", "Agents and automation for questions, bookings, and the steps a team repeats."],
              ["Thoughtful software", "Products, portals, and systems designed around the work, not a feature list."],
              ["Clear collaboration", "Scope, milestones, and handover are agreed before they are assumed."],
            ].map(([title, detail]) => (
              <article key={title} className="rounded-[24px] bg-ivory p-5">
                <h3 className="text-xl font-semibold text-forest">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/75">{detail}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <WhyStudio />
      <FaqList />

      <section id="contact" className="forest-wash dark-ui scroll-mt-28">
        <Container className="grid gap-10 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:py-28">
          <div>
            <p className="text-[0.78rem] font-semibold tracking-[0.16em] text-lime uppercase">Contact</p>
            <h2 className="display mt-4 text-[clamp(2.8rem,5vw,4.8rem)] text-ivory">
              Let’s make your next idea <span className="text-lime italic">even better.</span>
            </h2>
            <p className="mt-5 max-w-md text-lg leading-8 text-ivory/80">
              Tell us what you want to build, improve, or automate.
            </p>
          </div>
          <EnquiryForm />
        </Container>
      </section>
    </>
  );
}
