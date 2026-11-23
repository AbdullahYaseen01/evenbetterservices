import type { Metadata } from "next";
import { Suspense } from "react";
import { Container, Eyebrow } from "@/components/brand";
import { EnquiryFormFromQuery } from "@/components/enquiry-form";
import { FaqList } from "@/components/faq-list";

export const metadata: Metadata = {
  title: "Contact",
  description: "Send a project enquiry to EvenBetterServices about AI, automation, or custom software.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="forest-wash dark-ui">
        <Container className="grid gap-10 py-16 lg:grid-cols-[0.85fr_1.15fr] lg:py-24">
          <div>
            <Eyebrow light>Contact</Eyebrow>
            <h1 className="display mt-4 text-[clamp(3rem,6vw,5.2rem)] text-ivory">
              Let’s make your next idea <span className="text-lime italic">even better.</span>
            </h1>
            <p className="mt-5 max-w-md text-lg leading-8 text-ivory/80">
              Tell us what you want to build, improve, or automate.
            </p>
          </div>
          <Suspense fallback={<div className="rounded-[28px] bg-white p-8 text-forest">Loading the enquiry form…</div>}>
            <EnquiryFormFromQuery />
          </Suspense>
        </Container>
      </section>
      <FaqList />
    </>
  );
}
