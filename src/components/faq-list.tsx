"use client";

import { useId, useState } from "react";
import { Container, Eyebrow } from "@/components/brand";
import { faqs as defaultFaqs } from "@/data/content";

type FaqItem = { question: string; answer: string };

export function FaqList({
  contained = true,
  heading = true,
  items,
  tone = "light",
}: {
  contained?: boolean;
  heading?: boolean;
  items?: readonly FaqItem[];
  tone?: "light" | "dark";
}) {
  const [open, setOpen] = useState<number>(0);
  const baseId = useId();
  const list = items ?? defaultFaqs;
  const body = (
    <div>
      {heading ? (
        <>
          <Eyebrow>Questions</Eyebrow>
          <h2 className="display mt-4 max-w-2xl text-[clamp(2.4rem,4.5vw,4rem)] text-forest">
            Useful answers, <span className="italic">before you write.</span>
          </h2>
        </>
      ) : null}
      <div className={`${heading ? "mt-8" : ""} divide-y border-y ${tone === "dark" ? "divide-white/12 border-white/12" : "divide-ink/10 border-ink/10"}`}>
        {list.map((faq, index) => {
          const expanded = open === index;
          const panelId = `${baseId}-panel-${index}`;
          const buttonId = `${baseId}-button-${index}`;
          return (
            <div key={faq.question}>
              <h3>
                <button
                  id={buttonId}
                  type="button"
                  className={`flex min-h-16 w-full items-center justify-between gap-4 py-4 text-left text-lg font-semibold ${tone === "dark" ? "text-cream" : "text-forest"}`}
                  aria-expanded={expanded}
                  aria-controls={panelId}
                  onClick={() => setOpen(expanded ? -1 : index)}
                >
                  {faq.question}
                  <span aria-hidden="true" className={`font-display text-2xl italic ${tone === "dark" ? "text-ember" : "text-emerald"}`}>
                    {expanded ? "–" : "+"}
                  </span>
                </button>
              </h3>
              <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!expanded}>
                <p className={`max-w-3xl pb-5 text-base leading-7 ${tone === "dark" ? "text-cream/75" : "text-ink/75"}`}>{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  if (!contained) return <section id="faq" className="scroll-mt-28">{body}</section>;

  return (
    <section id="faq" className="wash-peach scroll-mt-28 py-20 sm:py-24">
      <Container>{body}</Container>
    </section>
  );
}
