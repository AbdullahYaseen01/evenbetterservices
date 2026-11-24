import { FaqList } from "@/components/faq-list";
import { ButtonLink, Container, Eyebrow } from "@/components/brand";
import { ServiceIcon } from "@/components/icons";
import { ScreenSlider } from "@/components/screen-slider";
import { accents, groups, type Service } from "@/data/services";

export function ServiceView({ service }: { service: Service }) {
  const group = groups[service.group];

  return (
    <article className="service-night dark-ui">
      <header className="border-b border-white/10">
        <Container className="grid gap-10 py-16 lg:grid-cols-[1.3fr_0.7fr] lg:py-24">
          <div>
            <Eyebrow warm>{group.title}</Eyebrow>
            <p className="mt-4 font-display text-2xl text-ember italic">{service.number}</p>
            <h1 className="display mt-2 text-[clamp(2.8rem,6vw,5.2rem)] text-cream">{service.name}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-cream/75">{service.introduction}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={`/contact?service=${service.slug}`} variant="ember">Discuss this service</ButtonLink>
              <ButtonLink href="/services" variant="dark">
                All services
              </ButtonLink>
            </div>
          </div>
          <aside className="rounded-[28px] border border-white/10 bg-white/6 p-6 shadow-[0_24px_50px_-32px_rgba(0,0,0,0.65)] lg:self-end">
            <span
              className="flex h-14 w-14 items-center justify-center rounded-2xl"
              style={{ background: accents[service.accent], color: service.accent === "emerald" || service.accent === "forest" ? "#F7F8F2" : "#172521" }}
            >
              <ServiceIcon slug={service.slug} className="h-7 w-7" />
            </span>
            {service.price ? (
              <p className="mt-5 flex items-end gap-2">
                <span className="font-display text-5xl leading-none text-ember italic">{service.price.amount}</span>
                <span className="pb-1 text-xs font-semibold tracking-wide text-cream/70 uppercase">{service.price.label}</span>
              </p>
            ) : null}
            <p className={`${service.price ? "mt-4" : "mt-5"} text-sm leading-6 text-cream/70`}>
              The capabilities on this page describe work a project can include. Scope is confirmed before anything is built.
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {service.cardPoints.map((point) => (
                <li key={point} className="rounded-full border border-white/10 bg-white/8 px-3 py-1 text-xs font-semibold text-cream">
                  {point}
                </li>
              ))}
            </ul>
          </aside>
        </Container>
      </header>

      {service.slug === "android-ios-applications" ? (
        <ScreenSlider
          group="mobile"
          id="mobile-screens"
          eyebrow="Android & iOS"
          title="The apps,"
          italic="on the phone."
          lede="Shopping and rental screens, shown as phone layouts."
          tone="dark"
        />
      ) : null}

      <Container className="grid gap-16 border-b border-white/10 py-16 lg:grid-cols-[1fr_1fr]">
        <section>
          <h2 className="display text-4xl text-cream">Problems it can address</h2>
          <ul className="mt-6 space-y-3">
            {service.problems.map((problem) => (
              <li key={problem} className="rounded-[20px] border border-white/10 bg-white/6 px-4 py-4 text-cream/80">
                {problem}
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="display text-4xl text-cream">Typical capabilities</h2>
          <ol className="mt-6 space-y-3">
            {service.capabilities.map((capability, index) => (
              <li key={capability} className="grid grid-cols-[auto_1fr] gap-3">
                <span className="font-display text-xl text-ember italic">{String(index + 1).padStart(2, "0")}</span>
                <span className="text-cream/80">{capability}</span>
              </li>
            ))}
          </ol>
        </section>
      </Container>

      <section className="border-b border-white/10 py-16">
        <Container>
          <h2 className="display text-4xl text-cream">Example use cases</h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {service.useCases.map((useCase) => (
              <article key={useCase.title} className="rounded-[24px] border border-white/10 bg-white/6 p-5">
                <h3 className="text-xl font-semibold text-cream">{useCase.title}</h3>
                <p className="mt-3 text-sm leading-6 text-cream/70">{useCase.detail}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-white/10 py-16">
        <Container>
          <h2 className="display text-4xl text-cream">Delivery approach</h2>
          <ol className="mt-8 grid gap-4 md:grid-cols-2">
            {service.delivery.map((step, index) => (
              <li key={step.title} className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                <span className="font-display text-3xl text-ember italic">0{index + 1}</span>
                <h3 className="mt-3 text-xl font-semibold text-cream">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-cream/70">{step.detail}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-16">
        <Container className="max-w-3xl">
          <h2 className="display text-4xl text-cream">Questions about this service</h2>
          <div className="mt-6">
            <FaqList contained={false} heading={false} items={service.faqs} tone="dark" />
          </div>
        </Container>
      </section>

      <section className="border-t border-white/10">
        <Container className="flex flex-col items-start gap-6 py-16 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="display text-4xl text-cream sm:text-5xl">
              Talk through <span className="text-ember italic">{service.name}.</span>
            </h2>
            <p className="mt-3 max-w-xl text-cream/75">Tell us what you want to build, improve, or automate.</p>
          </div>
          <ButtonLink href={`/contact?service=${service.slug}`} variant="ember">Discuss this service</ButtonLink>
        </Container>
      </section>
    </article>
  );
}
