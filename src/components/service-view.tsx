import { FaqList } from "@/components/faq-list";
import { ButtonLink, Container, Eyebrow } from "@/components/brand";
import { ServiceIcon } from "@/components/icons";
import { accents, groups, type Service } from "@/data/services";

export function ServiceView({ service }: { service: Service }) {
  const group = groups[service.group];

  return (
    <article>
      <header className="stage-wash border-b border-ink/10">
        <Container className="grid gap-10 py-16 lg:grid-cols-[1.3fr_0.7fr] lg:py-24">
          <div>
            <Eyebrow>{group.title}</Eyebrow>
            <p className="mt-4 font-display text-2xl text-emerald italic">{service.number}</p>
            <h1 className="display mt-2 text-[clamp(2.8rem,6vw,5.2rem)] text-forest">{service.name}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/80">{service.introduction}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={`/contact?service=${service.slug}`}>Discuss this service</ButtonLink>
              <ButtonLink href="/services" variant="secondary">All services</ButtonLink>
            </div>
          </div>
          <aside className="rounded-[28px] border border-ink/10 bg-white p-6 lg:self-end">
            <span
              className="flex h-14 w-14 items-center justify-center rounded-2xl"
              style={{ background: accents[service.accent], color: service.accent === "emerald" || service.accent === "forest" ? "#F7F8F2" : "#172521" }}
            >
              <ServiceIcon slug={service.slug} className="h-7 w-7" />
            </span>
            <p className="mt-5 text-sm leading-6 text-ink/75">
              The capabilities on this page describe work a project can include. Scope is confirmed before anything is built.
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {service.cardPoints.map((point) => (
                <li key={point} className="rounded-full bg-ivory-deep px-3 py-1 text-xs font-semibold text-forest">
                  {point}
                </li>
              ))}
            </ul>
          </aside>
        </Container>
      </header>

      <Container className="grid gap-16 py-16 lg:grid-cols-[1fr_1fr]">
        <section>
          <h2 className="display text-4xl text-forest">Problems it can address</h2>
          <ul className="mt-6 space-y-3">
            {service.problems.map((problem) => (
              <li key={problem} className="rounded-[20px] border border-ink/10 bg-white px-4 py-4 text-ink/80">
                {problem}
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="display text-4xl text-forest">Typical capabilities</h2>
          <ol className="mt-6 space-y-3">
            {service.capabilities.map((capability, index) => (
              <li key={capability} className="grid grid-cols-[auto_1fr] gap-3">
                <span className="font-display text-xl text-emerald italic">{String(index + 1).padStart(2, "0")}</span>
                <span className="text-ink/80">{capability}</span>
              </li>
            ))}
          </ol>
        </section>
      </Container>

      <section className="bg-white py-16">
        <Container>
          <h2 className="display text-4xl text-forest">Example use cases</h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {service.useCases.map((useCase) => (
              <article key={useCase.title} className="rounded-[24px] bg-ivory p-5">
                <h3 className="text-xl font-semibold text-forest">{useCase.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/75">{useCase.detail}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <Container className="py-16">
        <h2 className="display text-4xl text-forest">Delivery approach</h2>
        <ol className="mt-8 grid gap-4 md:grid-cols-2">
          {service.delivery.map((step, index) => (
            <li key={step.title} className="rounded-[24px] border border-ink/10 p-5">
              <span className="font-display text-3xl text-emerald italic">0{index + 1}</span>
              <h3 className="mt-3 text-xl font-semibold text-forest">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink/75">{step.detail}</p>
            </li>
          ))}
        </ol>
      </Container>

      <section className="bg-ivory-deep py-16">
        <Container className="max-w-3xl">
          <h2 className="display text-4xl text-forest">Questions about this service</h2>
          <div className="mt-6">
            <FaqList contained={false} heading={false} items={service.faqs} />
          </div>
        </Container>
      </section>

      <section className="forest-wash dark-ui">
        <Container className="flex flex-col items-start gap-6 py-16 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="display text-4xl text-ivory sm:text-5xl">
              Talk through <span className="text-lime italic">{service.name}.</span>
            </h2>
            <p className="mt-3 max-w-xl text-ivory/75">Tell us what you want to build, improve, or automate.</p>
          </div>
          <ButtonLink href={`/contact?service=${service.slug}`}>Discuss this service</ButtonLink>
        </Container>
      </section>
    </article>
  );
}
