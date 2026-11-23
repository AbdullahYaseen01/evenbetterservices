import Link from "next/link";
import type { ReactNode } from "react";
import { Container, Eyebrow } from "@/components/brand";
import { examples } from "@/data/content";

export function ExampleWork() {
  return (
    <section id="examples" className="scroll-mt-28 py-20 sm:py-28">
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>Example solutions</Eyebrow>
          <h2 className="display mt-4 text-[clamp(2.6rem,5vw,4.6rem)] text-forest">
            Interface concepts, <span className="italic text-emerald">clearly labeled.</span>
          </h2>
          <p className="mt-5 text-lg leading-8 text-ink/75">
            These are concepts and demos. They show the kind of product surface a project can take. They are not client work, and they do not report business results.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {examples.map((example) => (
            <article key={example.id} className="flex flex-col">
              {example.frame === "browser" ? <Browser exampleId={example.id} /> : <Phone />}
              <div className="mt-4 flex items-center gap-3">
                <span className="rounded-full bg-peach px-3 py-1 text-xs font-semibold text-forest">{example.label}</span>
                <h3 className="text-xl font-semibold text-forest">{example.title}</h3>
              </div>
              <p className="mt-2 text-sm leading-6 text-ink/75">{example.summary}</p>
              <Link href={example.related.href} className="mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-forest underline decoration-lime decoration-2 underline-offset-4">
                Related service: {example.related.label}
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Chrome({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-[24px] border border-ink/10 bg-white shadow-[0_24px_50px_-34px_rgba(18,60,53,0.6)]">
      <div className="flex items-center gap-2 border-b border-ink/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-peach" />
        <span className="h-2.5 w-2.5 rounded-full bg-lime" />
        <span className="h-2.5 w-2.5 rounded-full bg-sky" />
        <span className="ml-2 text-xs text-ink/50">Concept preview</span>
      </div>
      <div className="min-h-[250px] bg-ivory p-4">{children}</div>
    </div>
  );
}

function Browser({ exampleId }: { exampleId: string }) {
  if (exampleId === "crm") return <Chrome><CrmMock /></Chrome>;
  if (exampleId === "saas") return <Chrome><SaasMock /></Chrome>;
  return <Chrome><SupportMock /></Chrome>;
}

function SupportMock() {
  return (
    <div className="grid h-full gap-3 md:grid-cols-[0.7fr_1.1fr]" aria-hidden="true">
      <div className="space-y-2">
        {["Opening hours", "Booking change", "Order status"].map((item, index) => (
          <div key={item} className={`rounded-2xl px-3 py-3 text-sm ${index === 0 ? "bg-forest text-ivory" : "bg-white"}`}>
            {item}
          </div>
        ))}
      </div>
      <div className="rounded-2xl bg-white p-3">
        <p className="text-xs text-ink/45">Sample conversation</p>
        <p className="mt-3 rounded-2xl bg-ivory px-3 py-2 text-sm">Can I move Thursday?</p>
        <p className="mt-2 rounded-2xl bg-lavender/60 px-3 py-2 text-sm">10:30 is open for a person to confirm.</p>
      </div>
    </div>
  );
}

function CrmMock() {
  const columns = [
    ["New", "Appointment change"],
    ["Qualified", "Workshop visit"],
    ["Scheduled", "Follow-up call"],
  ];
  return (
    <div className="grid gap-2 sm:grid-cols-3" aria-hidden="true">
      {columns.map(([title, card]) => (
        <div key={title} className="rounded-2xl bg-white p-3">
          <p className="text-xs font-semibold tracking-wide text-emerald uppercase">{title}</p>
          <div className="mt-3 rounded-xl bg-ivory p-3 text-sm">{card}</div>
        </div>
      ))}
    </div>
  );
}

function SaasMock() {
  return (
    <div aria-hidden="true">
      <div className="flex items-center justify-between">
        <p className="font-semibold text-forest">Sample workspace</p>
        <span className="rounded-full bg-lime px-2 py-1 text-xs font-semibold">Active plan</span>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {["Onboarding", "Projects", "Account"].map((item) => (
          <div key={item} className="rounded-2xl bg-white p-3 text-sm">{item}</div>
        ))}
      </div>
      <div className="mt-3 h-16 rounded-2xl bg-sky/50" />
    </div>
  );
}

function Phone() {
  return (
    <div className="flex justify-center rounded-[24px] bg-peach/50 py-6">
      <div className="w-[230px] rounded-[32px] border border-ink/15 bg-forest p-2 shadow-[0_20px_40px_-28px_rgba(18,60,53,0.8)]" aria-hidden="true">
        <div className="rounded-[26px] bg-ivory p-4">
          <div className="mx-auto mb-4 h-1.5 w-12 rounded-full bg-ink/15" />
          <p className="text-xs font-semibold tracking-[0.14em] text-emerald uppercase">Book</p>
          <p className="mt-2 font-display text-3xl text-forest">Thursday</p>
          <div className="mt-4 space-y-2">
            {["09:30", "11:00", "14:00"].map((time, index) => (
              <div key={time} className={`rounded-xl px-3 py-2 text-sm ${index === 2 ? "bg-forest text-lime" : "bg-white"}`}>
                {time}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
