"use client";

const bars = [0.4, 0.7, 1, 0.55, 0.85, 0.35, 0.95, 0.6, 0.8, 0.45, 0.75, 0.5];

export function HeroScene() {
  return (
    <figure className="rise d4 relative">
      <figcaption className="sr-only">
        Illustrative product interfaces: a voice agent with a waveform, a customer conversation, a workflow from enquiry to CRM, and a mobile booking preview. These are examples, not live activity.
      </figcaption>
      <div className="rounded-[28px] border border-ink/10 bg-white/80 p-3 shadow-[0_30px_60px_-36px_rgba(18,60,53,0.55)] sm:p-4">
        <div className="grid gap-3 md:grid-cols-[1.35fr_0.8fr]">
          <div className="rounded-[22px] border border-ink/10 bg-ivory p-4">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-semibold text-forest">Voice agent</p>
              <span className="rounded-full bg-lime px-2.5 py-1 text-[0.68rem] font-semibold tracking-wide text-forest uppercase">
                Example
              </span>
            </div>
            <div className="mt-4 flex h-12 items-end gap-[3px] text-emerald" aria-hidden="true">
              {bars.map((scale, index) => (
                <span
                  key={index}
                  className="wave-bar"
                  style={{
                    height: `${18 + scale * 28}px`,
                    animationDelay: `${index * 0.08}s`,
                  }}
                />
              ))}
            </div>
            <div className="mt-4 space-y-2 text-sm leading-5">
              <p className="rounded-2xl rounded-tl-md bg-white px-3 py-2 text-ink/80">
                Can I move my visit to Thursday?
              </p>
              <p className="rounded-2xl rounded-tr-md bg-forest px-3 py-2 text-ivory">
                Thursday at 10:30 and 14:00 are open. Which should I hold for a person to confirm?
              </p>
            </div>
          </div>

          <div className="rounded-[22px] bg-forest p-3 text-ivory">
            <div className="rounded-[18px] bg-forest-deep p-3">
              <div className="mx-auto mb-3 h-1.5 w-10 rounded-full bg-ivory/30" />
              <p className="text-xs font-semibold tracking-[0.14em] text-lime uppercase">Booking preview</p>
              <p className="mt-2 font-display text-2xl leading-none">Thu 14</p>
              <ul className="mt-3 space-y-2 text-sm">
                {["09:30", "10:30", "14:00"].map((time, index) => (
                  <li
                    key={time}
                    className={`rounded-xl px-3 py-2 ${index === 1 ? "bg-lime text-forest" : "bg-white/8 text-ivory"}`}
                  >
                    {time}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-3 rounded-[22px] border border-ink/10 bg-white p-4">
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm font-semibold text-forest">Enquiry to CRM</p>
            <p className="text-xs text-ink/55">Example workflow</p>
          </div>
          <div className="relative mt-4">
            <div className="absolute top-3 right-4 left-4 h-px bg-ink/10" />
            <div className="flow-line absolute top-3 left-4 h-px w-[calc(100%-2rem)] bg-emerald" />
            <ol className="relative grid grid-cols-4 gap-2">
              {["Enquiry", "Review", "Record", "Note"].map((step, index) => (
                <li
                  key={step}
                  className="flow-step rounded-full px-1 py-1 text-center text-[0.7rem] font-semibold sm:text-xs"
                  style={{ animationDelay: `${index * 1.2}s` }}
                >
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-3 grid gap-3 sm:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[22px] border border-ink/10 bg-[#f3f7f2] p-4">
            <p className="text-xs font-semibold tracking-[0.14em] text-emerald uppercase">
              WhatsApp-style conversation
            </p>
            <div className="mt-3 space-y-2 text-sm">
              <p className="max-w-[90%] rounded-2xl rounded-tl-md bg-white px-3 py-2">
                Is the Thursday slot still open?
              </p>
              <p className="ml-auto max-w-[90%] rounded-2xl rounded-tr-md bg-emerald px-3 py-2 text-ivory">
                Yes. I can note 10:30 for the team to confirm.
              </p>
            </div>
          </div>
          <div className="flex items-end rounded-[22px] bg-lavender/70 p-4">
            <div>
              <p className="text-xs font-semibold tracking-[0.14em] text-forest uppercase">Product</p>
              <p className="mt-2 font-display text-[1.7rem] leading-none text-forest">A calmer queue.</p>
              <p className="mt-2 text-sm leading-5 text-ink/75">Sample interface, not a live inbox.</p>
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
}
