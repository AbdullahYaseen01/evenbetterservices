import { Container, Eyebrow } from "@/components/brand";
import { processSteps } from "@/data/content";

export function ProcessPath() {
  return (
    <section id="process" className="scroll-mt-28 py-20 sm:py-28">
      <Container>
        <Eyebrow>Delivery</Eyebrow>
        <h2 className="display mt-4 max-w-3xl text-[clamp(2.6rem,5vw,4.6rem)] text-forest">
          From the problem to a <span className="italic text-emerald">reviewable release.</span>
        </h2>
        <ol className="mt-12 grid gap-4 md:grid-cols-4">
          {processSteps.map((step, index) => (
            <li key={step.number} className="relative rounded-[24px] border border-ink/10 bg-white p-5">
              {index < processSteps.length - 1 ? (
                <span className="absolute top-9 -right-3 hidden h-px w-6 bg-emerald md:block" aria-hidden="true" />
              ) : null}
              <span className="font-display text-4xl text-emerald italic">{step.number}</span>
              <h3 className="mt-4 text-xl font-semibold text-forest">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink/75">{step.detail}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
