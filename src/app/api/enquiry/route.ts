import { budgetOptions, timelineOptions } from "@/data/content";
import { enquiryServices } from "@/data/services";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return Response.json({ ok: false, error: "The enquiry could not be read." }, { status: 400 });
  }

  if (!json || typeof json !== "object") {
    return Response.json({ ok: false, error: "The enquiry could not be read." }, { status: 400 });
  }

  const body = json as Record<string, unknown>;
  const payload = {
    name: clip(body.name, 120),
    email: clip(body.email, 200),
    company: clip(body.company, 160),
    service: clip(body.service, 80),
    description: clip(body.description, 4000),
    budget: clip(body.budget, 80),
    timeline: clip(body.timeline, 80),
    fax: clip(body.fax, 200),
  };

  if (payload.fax) {
    return Response.json({ ok: false, error: "The enquiry could not be sent." }, { status: 400 });
  }

  const serviceKnown = enquiryServices.some((item) => item.value === payload.service);
  const budgetKnown = payload.budget === "" || budgetOptions.includes(payload.budget as (typeof budgetOptions)[number]);
  const timelineKnown = payload.timeline === "" || timelineOptions.includes(payload.timeline as (typeof timelineOptions)[number]);

  if (payload.name.length < 2 || !emailPattern.test(payload.email) || payload.description.length < 12 || !serviceKnown || !budgetKnown || !timelineKnown) {
    return Response.json({ ok: false, error: "Check the form and try again." }, { status: 400 });
  }

  const webhook = process.env.ENQUIRY_WEBHOOK_URL;
  const resendKey = process.env.RESEND_API_KEY;
  const to = process.env.ENQUIRY_TO_EMAIL;
  const from = process.env.ENQUIRY_FROM_EMAIL;

  if (!webhook && !(resendKey && to && from)) {
    return Response.json(
      {
        ok: false,
        error:
          "Enquiry delivery is not connected yet, so this message was not sent. Please try again once delivery is set up.",
      },
      { status: 503 },
    );
  }

  const enquiry = {
    name: payload.name,
    email: payload.email,
    company: payload.company,
    service: enquiryServices.find((item) => item.value === payload.service)?.label ?? payload.service,
    description: payload.description,
    budget: payload.budget,
    timeline: payload.timeline,
  };

  try {
    if (webhook) {
      const response = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(enquiry),
      });
      if (!response.ok) {
        return Response.json(
          { ok: false, error: "The enquiry could not be delivered. Nothing was marked as sent." },
          { status: 502 },
        );
      }
    } else if (resendKey && to && from) {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to: [to],
          reply_to: enquiry.email,
          subject: `Project enquiry from ${enquiry.name}`,
          text: [
            `Name: ${enquiry.name}`,
            `Email: ${enquiry.email}`,
            `Company: ${enquiry.company || "—"}`,
            `Service: ${enquiry.service}`,
            `Budget: ${enquiry.budget || "—"}`,
            `Timeline: ${enquiry.timeline || "—"}`,
            "",
            enquiry.description,
          ].join("\n"),
        }),
      });
      if (!response.ok) {
        return Response.json(
          { ok: false, error: "The enquiry could not be delivered. Nothing was marked as sent." },
          { status: 502 },
        );
      }
    }
  } catch {
    return Response.json(
      { ok: false, error: "The enquiry could not be delivered. Nothing was marked as sent." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}

function clip(value: unknown, max: number) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}
