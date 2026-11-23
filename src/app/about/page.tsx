import type { Metadata } from "next";
import { ButtonLink, Container, Eyebrow } from "@/components/brand";
import { ProcessPath } from "@/components/process-path";

export const metadata: Metadata = {
  title: "About",
  description:
    "EvenBetterServices is an AI, automation, and software studio focused on useful systems, thoughtful interfaces, and clear collaboration.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="stage-wash">
        <Container className="py-16 lg:py-24">
          <Eyebrow>About</Eyebrow>
          <h1 className="display mt-4 max-w-4xl text-[clamp(3rem,6vw,5.4rem)] text-forest">
            Useful AI. Thoughtful software. <span className="italic text-emerald">Clear collaboration.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/80">
            EvenBetterServices helps businesses automate repetitive work, improve customer communication, build digital products, and connect the systems those products depend on.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="display text-4xl text-forest sm:text-5xl">Who the work is for</h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-ink/80">
            <p>
              We work with founders, startups, SMEs, growing businesses, and product teams. That includes teams in the UK, the USA, Europe, and other markets. A project can start wherever you are. What matters is the problem and the people who will use the result.
            </p>
            <p>
              AI is useful here when it removes a real task: answering a common question, routing a request, or moving information to the next step. Software is useful when it gives that work a clear place to happen. We would rather explain the outcome in plain language than lead with a list of tools.
            </p>
            <p>
              Collaboration stays practical. Scope is confirmed before building, work is shared at milestones you can review, and decisions stay visible. If something should wait, we say so.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-peach/40 py-16">
        <Container className="grid gap-4 md:grid-cols-3">
          {[
            ["Start from the workflow", "The first question is what people do today, and where that work slows down."],
            ["Keep the interface in the plan", "A system people avoid is not an improvement, however capable it is."],
            ["Leave the work understandable", "Handover notes and a clear scope are part of how a project finishes."],
          ].map(([title, detail]) => (
            <article key={title} className="rounded-[24px] bg-ivory p-6">
              <h2 className="text-2xl font-semibold text-forest">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-ink/75">{detail}</p>
            </article>
          ))}
        </Container>
      </section>

      <ProcessPath />

      <section className="forest-wash dark-ui">
        <Container className="flex flex-col items-start gap-6 py-16 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="display max-w-xl text-4xl text-ivory sm:text-5xl">
            Tell us what you want to <span className="text-lime italic">make better.</span>
          </h2>
          <ButtonLink href="/contact">Discuss Your Project</ButtonLink>
        </Container>
      </section>
    </>
  );
}
