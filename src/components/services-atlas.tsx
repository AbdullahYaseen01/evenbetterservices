import Link from "next/link";
import { Container, Eyebrow } from "@/components/brand";
import { ServiceIcon } from "@/components/icons";
import { accents, groupOrder, groups, services, servicesInGroup } from "@/data/services";

export function ServicesAtlas({ intro = true }: { intro?: boolean }) {
  const ai = servicesInGroup("ai");
  const software = servicesInGroup("software");
  const systems = servicesInGroup("systems");
  const design = servicesInGroup("design")[0];

  return (
    <section id="services" className="wash-sky scroll-mt-28 py-20 sm:py-28">
      <Container>
        {intro ? (
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <Eyebrow>Services</Eyebrow>
            <h2 className="display mt-4 max-w-xl text-[clamp(2.6rem,5vw,4.6rem)] text-forest">
              Eleven ways to make the work <span className="italic text-emerald">easier.</span>
            </h2>
          </div>
          <p className="max-w-md text-lg leading-8 text-ink/75 lg:justify-self-end">
            Choose by the job you need done. Every service opens a page with the problems it can address, the work a project can include, and a way to enquire.
          </p>
        </div>
        ) : null}

        <div className={`${intro ? "mt-12" : ""} rounded-[28px] bg-forest p-4 text-ivory sm:p-6 lg:p-8`}>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[0.72rem] font-semibold tracking-[0.16em] text-lime uppercase">A — {groups.ai.title}</p>
              <p className="mt-2 max-w-xl text-sm leading-6 text-ivory/75">{groups.ai.lede}</p>
            </div>
          </div>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {ai.map((service) => (
              <ServiceTile key={service.slug} slug={service.slug} dark />
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-10 rounded-[28px] border border-ink/10 bg-white p-4 sm:p-6 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14 lg:p-8">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-[0.72rem] font-semibold tracking-[0.16em] text-emerald uppercase">B — {groups.software.title}</p>
            <h3 className="display mt-3 text-4xl text-forest sm:text-5xl">
              Products people can <span className="italic">sign in to.</span>
            </h3>
            <p className="mt-4 text-base leading-7 text-ink/75">{groups.software.lede}</p>
          </div>
          <ol className="divide-y divide-ink/10">
            {software.map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`} className="group grid gap-3 py-6 sm:grid-cols-[auto_1fr] sm:gap-5">
                  <span className="font-display text-3xl text-emerald italic">{service.number}</span>
                  <span>
                    <span className="flex items-center justify-between gap-3">
                      <span className="text-xl font-semibold text-forest">{service.name}</span>
                      <span className="h-8 w-8 rounded-full" style={{ background: accents[service.accent] }} aria-hidden="true" />
                    </span>
                    <span className="mt-2 block text-sm leading-6 text-ink/75">{service.summary}</span>
                    <span className="mt-3 flex flex-wrap gap-2">
                      {service.cardPoints.map((point) => (
                        <span key={point} className="rounded-full bg-ivory-deep px-3 py-1 text-xs font-medium text-forest">
                          {point}
                        </span>
                      ))}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-10">
          <p className="text-[0.72rem] font-semibold tracking-[0.16em] text-emerald uppercase">C — {groups.systems.title}</p>
          <p className="mt-2 max-w-2xl text-base leading-7 text-ink/75">{groups.systems.lede}</p>
          <div className="mt-5 grid gap-4 lg:grid-cols-2">
          {systems.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="rounded-[28px] p-6 sm:p-8"
              style={{ background: accents[service.accent] === accents.emerald ? "#ADD9F3" : "#C9BEF5" }}
            >
              <p className="font-display text-2xl text-forest italic">{service.number}</p>
              <span
                className="mt-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-forest text-lime"
              >
                <ServiceIcon slug={service.slug} className="h-6 w-6" />
              </span>
              <h3 className="display mt-5 text-4xl text-forest">{service.name}</h3>
              <p className="mt-3 max-w-md text-base leading-7 text-ink/80">{service.summary}</p>
              <span className="mt-6 inline-flex text-sm font-semibold text-forest underline decoration-forest/30 underline-offset-4">
                Service details
              </span>
            </Link>
          ))}
          </div>
        </div>

        <Link
          href={`/services/${design.slug}`}
          className="mt-4 grid items-center gap-8 rounded-[28px] bg-lime p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-10"
        >
          <div>
            <p className="text-[0.72rem] font-semibold tracking-[0.16em] text-forest uppercase">D — {groups.design.title}</p>
            <h3 className="display mt-3 text-4xl text-forest sm:text-5xl">{design.name}</h3>
            <p className="mt-4 max-w-xl text-base leading-7 text-ink/80">{design.summary}</p>
            <span className="mt-6 inline-flex min-h-11 items-center rounded-full bg-forest px-4 text-sm font-semibold text-lime">
              Explore design and frontend
            </span>
          </div>
          <DesignBoard />
        </Link>

        <p className="sr-only">
          {groupOrder.map((group) => groups[group].title).join(", ")}. {services.length} services in total.
        </p>
      </Container>
    </section>
  );
}

function ServiceTile({ slug, dark = false }: { slug: string; dark?: boolean }) {
  const service = services.find((item) => item.slug === slug);
  if (!service) return null;
  const ink = accentInk(service.accent);

  return (
    <Link href={`/services/${service.slug}`} className={`rounded-[22px] p-5 transition ${dark ? "bg-white/6 hover:bg-white/12" : "bg-white"}`}>
      <span
        className="flex h-11 w-11 items-center justify-center rounded-2xl"
        style={{ background: accents[service.accent], color: ink }}
      >
        <ServiceIcon slug={service.slug} className="h-6 w-6" />
      </span>
      <h3 className={`mt-4 text-xl font-semibold ${dark ? "text-ivory" : "text-forest"}`}>{service.name}</h3>
      <p className={`mt-2 text-sm leading-6 ${dark ? "text-ivory/75" : "text-ink/75"}`}>{service.summary}</p>
      <span className="mt-4 flex flex-wrap gap-2">
        {service.cardPoints.map((point) => (
          <span key={point} className={`rounded-full px-2.5 py-1 text-xs font-medium ${dark ? "bg-white/10 text-ivory" : "bg-ivory-deep text-forest"}`}>
            {point}
          </span>
        ))}
      </span>
    </Link>
  );
}

function DesignBoard() {
  return (
    <div className="rounded-[22px] border border-forest/10 bg-ivory p-4" aria-hidden="true">
      <div className="flex items-end justify-between">
        <p className="font-display text-3xl text-forest italic">Aa</p>
        <div className="flex gap-1.5">
          {["#123C35", "#087F5B", "#D8F36A", "#C9BEF5", "#FFBEA7", "#ADD9F3"].map((color) => (
            <span key={color} className="h-6 w-6 rounded-full border border-forest/10" style={{ background: color }} />
          ))}
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <div className="rounded-2xl bg-white p-3">
          <p className="text-xs text-ink/50">Button</p>
          <span className="mt-2 inline-flex rounded-full bg-forest px-3 py-1 text-xs font-semibold text-lime">Continue</span>
        </div>
        <div className="rounded-2xl bg-white p-3">
          <p className="text-xs text-ink/50">Field</p>
          <span className="mt-2 block rounded-xl border border-ink/10 px-2 py-1 text-xs text-ink/40">Work email</span>
        </div>
      </div>
    </div>
  );
}

function accentInk(accent: keyof typeof accents) {
  return accent === "forest" || accent === "emerald" ? "#F7F8F2" : "#172521";
}
