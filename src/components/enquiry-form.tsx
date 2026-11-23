"use client";

import { FormEvent, useId, useState } from "react";
import { useSearchParams } from "next/navigation";
import { budgetOptions, timelineOptions } from "@/data/content";
import { enquiryServices } from "@/data/services";

type Field = "name" | "email" | "service" | "description";
type Errors = Partial<Record<Field | "form", string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function EnquiryForm({ initialService = "" }: { initialService?: string }) {
  const validInitial = enquiryServices.some((item) => item.value === initialService) ? initialService : "";
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [message, setMessage] = useState("");
  const [sentName, setSentName] = useState("");
  const formErrorId = useId();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      company: String(data.get("company") ?? "").trim(),
      service: String(data.get("service") ?? ""),
      description: String(data.get("description") ?? "").trim(),
      budget: String(data.get("budget") ?? ""),
      timeline: String(data.get("timeline") ?? ""),
      fax: String(data.get("fax") ?? ""),
    };

    const next = validate(payload);
    setErrors(next);
    if (Object.keys(next).length > 0) {
      setStatus("error");
      setMessage("Check the highlighted fields and try again.");
      return;
    }

    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const body = (await response.json()) as { ok?: boolean; error?: string };
      if (!response.ok || !body.ok) {
        setStatus("error");
        setMessage(body.error || "The enquiry was not sent.");
        return;
      }
      setSentName(payload.name);
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("The enquiry could not be sent. Check your connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-[28px] bg-lime p-6 text-forest sm:p-8">
        <p className="text-xs font-semibold tracking-[0.16em] uppercase">Project enquiry</p>
        <h3 className="display mt-3 text-4xl">Enquiry sent.</h3>
        <p className="mt-3 leading-7">
          Thank you{sentName ? `, ${sentName}` : ""}. Your project enquiry was delivered. We will use these details to reply about the work.
        </p>
        <button
          type="button"
          className="mt-6 inline-flex min-h-11 items-center rounded-full bg-forest px-5 font-medium text-lime"
          onClick={() => setStatus("idle")}
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="relative rounded-[28px] bg-white p-5 text-ink shadow-[0_24px_50px_-36px_rgba(0,0,0,0.45)] sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-2xl font-semibold text-forest">Project enquiry</h3>
          <p className="mt-1 text-sm leading-6 text-ink/65">
            These details are used to reply to your enquiry. Do not include passwords or payment information.
          </p>
        </div>
      </div>

      {message ? (
        <p id={formErrorId} role="alert" className="mt-4 rounded-2xl bg-peach/50 px-4 py-3 text-sm text-forest">
          {message}
        </p>
      ) : null}

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" error={errors.name} autoComplete="name" required />
        <Field label="Work email" name="email" type="email" error={errors.email} autoComplete="email" required />
        <Field label="Company" name="company" autoComplete="organization" optional className="sm:col-span-2" />
        <label className="block sm:col-span-2">
          <span className="text-sm font-semibold text-forest">Service of interest</span>
          <select
            name="service"
            defaultValue={validInitial}
            required
            aria-invalid={errors.service ? true : undefined}
            aria-describedby={errors.service ? "service-error" : undefined}
            className={inputClass(Boolean(errors.service))}
          >
            <option value="">Select a service</option>
            {enquiryServices.map((service) => (
              <option key={service.value} value={service.value}>
                {service.label}
              </option>
            ))}
          </select>
          {errors.service ? <span id="service-error" className="mt-1 block text-sm text-[#8a2e24]">{errors.service}</span> : null}
        </label>
        <label className="block sm:col-span-2">
          <span className="text-sm font-semibold text-forest">Project description</span>
          <textarea
            name="description"
            required
            rows={5}
            aria-invalid={errors.description ? true : undefined}
            aria-describedby={errors.description ? "description-error" : undefined}
            className={`${inputClass(Boolean(errors.description))} min-h-32 resize-y`}
          />
          {errors.description ? (
            <span id="description-error" className="mt-1 block text-sm text-[#8a2e24]">{errors.description}</span>
          ) : null}
        </label>
        <label className="block">
          <span className="text-sm font-semibold text-forest">Budget range <span className="font-normal text-ink/50">(optional)</span></span>
          <select name="budget" defaultValue="" className={inputClass(false)}>
            <option value="">Select a range</option>
            {budgetOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          <span className="mt-1 block text-xs text-ink/55">An indication for planning. It is not a quote.</span>
        </label>
        <label className="block">
          <span className="text-sm font-semibold text-forest">Desired timeline <span className="font-normal text-ink/50">(optional)</span></span>
          <select name="timeline" defaultValue="" className={inputClass(false)}>
            <option value="">Select a timeline</option>
            {timelineOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="absolute top-0 left-0 -z-10 h-px w-px overflow-hidden opacity-0" aria-hidden="true">
        <label>
          Fax
          <input name="fax" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-forest px-5 font-semibold text-lime disabled:opacity-60 sm:w-auto"
        disabled={status === "submitting"}
        aria-describedby={message ? formErrorId : undefined}
      >
        {status === "submitting" ? "Sending…" : "Send Project Enquiry"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  error,
  type = "text",
  autoComplete,
  required = false,
  optional = false,
  className = "",
}: {
  label: string;
  name: string;
  error?: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
  optional?: boolean;
  className?: string;
}) {
  const errorId = `${name}-error`;
  return (
    <label className={`block ${className}`}>
      <span className="text-sm font-semibold text-forest">
        {label} {optional ? <span className="font-normal text-ink/50">(optional)</span> : null}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={inputClass(Boolean(error))}
      />
      {error ? <span id={errorId} className="mt-1 block text-sm text-[#8a2e24]">{error}</span> : null}
    </label>
  );
}

function inputClass(invalid: boolean) {
  return `mt-1.5 w-full rounded-2xl border bg-ivory px-3 py-3 text-base outline-none ${
    invalid ? "border-[#8a2e24]" : "border-ink/10"
  }`;
}

function validate(payload: { name: string; email: string; service: string; description: string; fax: string }) {
  const errors: Errors = {};
  if (payload.fax) errors.form = "The enquiry could not be sent.";
  if (payload.name.length < 2) errors.name = "Enter your name.";
  if (!emailPattern.test(payload.email)) errors.email = "Enter a work email address.";
  if (!enquiryServices.some((item) => item.value === payload.service)) errors.service = "Choose a service, or Help me choose.";
  if (payload.description.length < 12) errors.description = "Describe what you want to build, improve, or automate.";
  return errors;
}

export function EnquiryFormFromQuery() {
  const service = useSearchParams().get("service") ?? "";
  return <EnquiryForm initialService={service} key={service} />;
}
