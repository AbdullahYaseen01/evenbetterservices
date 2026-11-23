"use client";

import { useEffect, useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { Container, Eyebrow } from "@/components/brand";
import { usePrefersReducedMotion } from "@/lib/motion";

const scenarios = [
  { id: "enquiries", label: "Customer enquiries", kind: "Interactive demo" },
  { id: "booking", label: "Appointment booking", kind: "Example workflow" },
  { id: "automation", label: "Business automation", kind: "Example workflow" },
  { id: "operations", label: "Connected operations", kind: "Interactive demo" },
] as const;

type ScenarioId = (typeof scenarios)[number]["id"];

const prompts = [
  {
    id: "hours",
    question: "What are your opening hours?",
    answer: "Monday to Friday, 9:00 to 17:30. Saturday visits can be arranged with the team.",
  },
  {
    id: "visit",
    question: "Do you offer on-site visits?",
    answer: "Yes. I can collect a preferred day and leave it for a person to confirm.",
  },
  {
    id: "change",
    question: "Can I change a booking?",
    answer: "Share the name on the booking and a new day. I will show the open sample times.",
  },
] as const;

const purposes = ["Intro call", "Workflow review", "Product scoping"];
const days = ["Tue 12", "Wed 13", "Thu 14", "Fri 15"];
const times = ["09:30", "11:00", "14:00", "16:30"];

const stages = [
  "Enquiry received",
  "Details checked",
  "CRM record prepared",
  "Team note created",
];

const devices = [
  {
    id: "sensor",
    name: "Packing-room sensor",
    place: "Sample site A",
    status: "Reporting",
    reading: "22°C",
    note: "A sample temperature for a storage check.",
  },
  {
    id: "door",
    name: "Workshop door",
    place: "Sample site B",
    status: "Closed",
    reading: "Closed",
    note: "A sample state, not a live sensor.",
  },
  {
    id: "camera",
    name: "Inspection camera",
    place: "Sample line 2",
    status: "Idle",
    reading: "No image",
    note: "The check is illustrative. There is no live video.",
  },
];

export function SolutionsLab() {
  const [active, setActive] = useState<ScenarioId>("enquiries");
  const baseId = useId();
  const current = scenarios.find((scenario) => scenario.id === active) ?? scenarios[0];

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const index = scenarios.findIndex((scenario) => scenario.id === active);
    const next = (offset: number) => scenarios[(index + offset + scenarios.length) % scenarios.length].id;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      setActive(next(1));
    }
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      setActive(next(-1));
    }
    if (event.key === "Home") {
      event.preventDefault();
      setActive(scenarios[0].id);
    }
    if (event.key === "End") {
      event.preventDefault();
      setActive(scenarios[scenarios.length - 1].id);
    }
  }

  return (
    <section id="solutions" className="scroll-mt-28 bg-ivory-deep py-20 sm:py-28">
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>Solutions</Eyebrow>
          <h2 className="display mt-4 text-[clamp(2.6rem,5vw,4.7rem)] text-forest">
            See what better <span className="italic text-emerald">could look like.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/75">
            Try a few example workflows with sample data stored in this page. Nothing here places a call, sends a WhatsApp message, or updates an external system.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-[240px_1fr]">
          <div role="tablist" aria-label="Example workflows" aria-orientation="vertical" className="grid grid-cols-2 gap-2 lg:grid-cols-1" onKeyDown={onKeyDown}>
            {scenarios.map((scenario) => {
              const selected = scenario.id === active;
              return (
                <button
                  key={scenario.id}
                  id={`${baseId}-${scenario.id}-tab`}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls={`${baseId}-${scenario.id}-panel`}
                  tabIndex={selected ? 0 : -1}
                  className={`min-h-16 rounded-[20px] border px-4 py-3 text-left transition-colors ${
                    selected ? "border-forest bg-forest text-ivory" : "border-ink/10 bg-white text-forest hover:border-forest/30"
                  }`}
                  onClick={() => setActive(scenario.id)}
                >
                  <span className="block text-sm font-semibold">{scenario.label}</span>
                  <span className={`mt-1 block text-xs ${selected ? "text-lime" : "text-ink/55"}`}>{scenario.kind}</span>
                </button>
              );
            })}
          </div>

          <div
            key={active}
            role="tabpanel"
            id={`${baseId}-${active}-panel`}
            aria-labelledby={`${baseId}-${active}-tab`}
            tabIndex={0}
            className="rise panel p-4 sm:p-6"
          >
            <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
              <p className="text-sm font-semibold text-forest">{current.label}</p>
              <p className="rounded-full bg-lime px-3 py-1 text-xs font-semibold text-forest">{current.kind}</p>
            </div>
            {active === "enquiries" ? <EnquiryDemo /> : null}
            {active === "booking" ? <BookingDemo /> : null}
            {active === "automation" ? <AutomationDemo /> : null}
            {active === "operations" ? <OperationsDemo /> : null}
          </div>
        </div>
      </Container>
    </section>
  );
}

function EnquiryDemo() {
  const [thread, setThread] = useState<{ from: "customer" | "assistant"; text: string }[]>([]);
  const [typing, setTyping] = useState(false);
  const reduce = usePrefersReducedMotion();

  function ask(prompt: (typeof prompts)[number]) {
    setThread((current) => [...current, { from: "customer", text: prompt.question }]);
    if (reduce) {
      setThread((current) => [...current, { from: "assistant", text: prompt.answer }]);
      return;
    }
    setTyping(true);
    window.setTimeout(() => {
      setThread((current) => [...current, { from: "assistant", text: prompt.answer }]);
      setTyping(false);
    }, 700);
  }

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {prompts.map((prompt) => (
          <button
            key={prompt.id}
            type="button"
            className="min-h-11 rounded-full border border-ink/10 bg-ivory px-4 text-sm font-medium text-forest hover:border-forest/30"
            onClick={() => ask(prompt)}
          >
            {prompt.question}
          </button>
        ))}
        <button type="button" className="min-h-11 rounded-full px-4 text-sm font-medium text-emerald" onClick={() => setThread([])}>
          Clear sample
        </button>
      </div>
      <div className="mt-4 min-h-48 rounded-[20px] bg-ivory-deep p-4" aria-live="polite">
        {thread.length === 0 ? (
          <p className="text-sm text-ink/60">Choose a sample message to see a prepared reply.</p>
        ) : (
          <div className="space-y-2">
            {thread.map((message, index) => (
              <p
                key={`${message.text}-${index}`}
                className={`max-w-[92%] rounded-2xl px-3 py-2 text-sm leading-6 ${
                  message.from === "customer" ? "bg-white text-ink" : "ml-auto bg-forest text-ivory"
                }`}
              >
                {message.text}
              </p>
            ))}
            {typing ? (
              <p className="ml-auto flex w-fit gap-1 rounded-2xl bg-forest px-3 py-3" aria-label="Preparing a sample reply">
                <span className="typing-dot h-1.5 w-1.5 rounded-full bg-lime" />
                <span className="typing-dot h-1.5 w-1.5 rounded-full bg-lime [animation-delay:0.15s]" />
                <span className="typing-dot h-1.5 w-1.5 rounded-full bg-lime [animation-delay:0.3s]" />
              </p>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
}

function BookingDemo() {
  const [purpose, setPurpose] = useState(purposes[0]);
  const [day, setDay] = useState(days[2]);
  const [time, setTime] = useState<string | null>(null);

  return (
    <div>
      <fieldset>
        <legend className="text-sm font-semibold text-forest">Sample purpose</legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {purposes.map((item) => (
            <Choice key={item} pressed={purpose === item} onClick={() => setPurpose(item)}>
              {item}
            </Choice>
          ))}
        </div>
      </fieldset>
      <fieldset className="mt-4">
        <legend className="text-sm font-semibold text-forest">Sample week</legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {days.map((item) => (
            <Choice key={item} pressed={day === item} onClick={() => setDay(item)}>
              {item}
            </Choice>
          ))}
        </div>
      </fieldset>
      <fieldset className="mt-4">
        <legend className="text-sm font-semibold text-forest">Open times</legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {times.map((item) => (
            <Choice key={item} pressed={time === item} onClick={() => setTime(item)}>
              {item}
            </Choice>
          ))}
        </div>
      </fieldset>
      <div className="mt-5 rounded-[20px] bg-lavender/50 p-4" aria-live="polite">
        {time ? (
          <>
            <p className="font-semibold text-forest">Example booking</p>
            <p className="mt-1 text-sm leading-6 text-ink/80">
              {purpose} on {day} at {time}. This stays in your browser. No calendar invitation is sent.
            </p>
          </>
        ) : (
          <p className="text-sm text-ink/70">Choose a time to see the example summary.</p>
        )}
      </div>
    </div>
  );
}

function AutomationDemo() {
  const [step, setStep] = useState(-1);
  const [playing, setPlaying] = useState(false);
  const reduce = usePrefersReducedMotion();

  const timer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) window.clearInterval(timer.current);
    };
  }, []);

  function play() {
    if (playing) return;
    if (timer.current) window.clearInterval(timer.current);
    setStep(0);
    if (reduce) return;
    setPlaying(true);
    let current = 0;
    timer.current = window.setInterval(() => {
      current += 1;
      if (current >= stages.length) {
        if (timer.current) window.clearInterval(timer.current);
        timer.current = null;
        setPlaying(false);
        return;
      }
      setStep(current);
    }, 900);
  }

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <button type="button" className="min-h-11 rounded-full bg-forest px-4 text-sm font-semibold text-lime" onClick={play}>
          {step < 0 ? "Play example" : "Replay example"}
        </button>
        {reduce ? (
          <button
            type="button"
            className="min-h-11 rounded-full border border-ink/10 px-4 text-sm font-medium"
            onClick={() => setStep((value) => Math.min(value + 1, stages.length - 1))}
          >
            Show next step
          </button>
        ) : null}
      </div>
      <ol className="mt-5 space-y-3">
        {stages.map((stage, index) => {
          const reached = index <= step;
          return (
            <li key={stage} className="grid grid-cols-[auto_1fr] gap-3">
              <span className={`mt-0.5 flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold ${reached ? "bg-emerald text-ivory" : "bg-ivory-deep text-ink/50"}`}>
                {index + 1}
              </span>
              <span>
                <span className="block font-medium text-forest">{stage}</span>
                {reached ? <span className="mt-1 block text-sm text-ink/70">{stageCopy[index]}</span> : null}
              </span>
            </li>
          );
        })}
      </ol>
      {step >= 2 ? (
        <div className="mt-5 rounded-[20px] border border-ink/10 bg-ivory p-4">
          <p className="text-xs font-semibold tracking-[0.14em] text-emerald uppercase">Sample CRM record</p>
          <dl className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
            <div><dt className="text-ink/50">Contact</dt><dd>Sample contact</dd></div>
            <div><dt className="text-ink/50">Need</dt><dd>Appointment change</dd></div>
            <div><dt className="text-ink/50">Status</dt><dd>Ready for a person to review</dd></div>
            <div><dt className="text-ink/50">Sent</dt><dd>No external system was updated</dd></div>
          </dl>
        </div>
      ) : null}
    </div>
  );
}

const stageCopy = [
  "A website form arrives with a request to change an appointment.",
  "The example checks for a name, a preferred day, and a contact method.",
  "A sample record is filled with those details.",
  "A short internal note is prepared. Nothing leaves this page.",
];

function OperationsDemo() {
  const [selected, setSelected] = useState(devices[0].id);
  const device = devices.find((item) => item.id === selected) ?? devices[0];

  return (
    <div className="grid gap-4 md:grid-cols-[1fr_0.8fr]">
      <ul className="space-y-2">
        {devices.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              aria-pressed={item.id === selected}
              className={`flex min-h-16 w-full items-center justify-between rounded-[18px] border px-4 text-left ${
                item.id === selected ? "border-forest bg-forest text-ivory" : "border-ink/10 bg-ivory"
              }`}
              onClick={() => setSelected(item.id)}
            >
              <span>
                <span className="block font-medium">{item.name}</span>
                <span className={`block text-xs ${item.id === selected ? "text-ivory/70" : "text-ink/55"}`}>{item.place}</span>
              </span>
              <span className={`rounded-full px-2 py-1 text-xs font-semibold ${item.id === selected ? "bg-lime text-forest" : "bg-white text-forest"}`}>
                {item.status}
              </span>
            </button>
          </li>
        ))}
      </ul>
      <div className="rounded-[20px] bg-sky/50 p-4" aria-live="polite">
        <p className="text-xs font-semibold tracking-[0.14em] text-forest uppercase">Illustrative reading</p>
        <p className="display mt-3 text-5xl text-forest">{device.reading}</p>
        <p className="mt-3 text-sm leading-6 text-ink/80">{device.note}</p>
      </div>
    </div>
  );
}

function Choice({
  pressed,
  onClick,
  children,
}: {
  pressed: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onClick}
      className={`min-h-11 rounded-full px-4 text-sm font-medium ${pressed ? "bg-forest text-lime" : "bg-ivory text-forest"}`}
    >
      {children}
    </button>
  );
}
