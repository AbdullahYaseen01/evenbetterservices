import { Container, Eyebrow } from "@/components/brand";
import { reasons } from "@/data/content";

export function WhyStudio() {
  return (
    <section id="why" className="wash-sky scroll-mt-28 py-20 sm:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Eyebrow>Why EvenBetterServices</Eyebrow>
            <h2 className="display mt-4 text-[clamp(2.5rem,4.5vw,4.2rem)] text-forest">
              Practical reasons to <span className="italic">start a conversation.</span>
            </h2>
          </div>
          <ol className="border-t border-ink/10">
            {reasons.map((reason, index) => (
              <li key={reason.number} className="grid gap-3 border-b border-ink/10 py-6 sm:grid-cols-[5rem_1fr] sm:gap-6">
                <span className={`font-display text-3xl italic ${index === 0 ? "text-emerald" : "text-forest/50"}`}>
                  {reason.number}
                </span>
                <div className={index === 0 ? "rounded-[20px] bg-lime px-4 py-4" : ""}>
                  <h3 className="text-xl font-semibold text-forest">{reason.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink/75">{reason.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
