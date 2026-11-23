import Link from "next/link";
import { cacheLife } from "next/cache";
import { Container, Mark, Wordmark } from "@/components/brand";
import { brand } from "@/lib/site";
import { groupOrder, groups, servicesInGroup } from "@/data/services";

const navigate = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/solutions", label: "Solutions" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

async function copyrightYear() {
  "use cache";
  cacheLife("weeks");
  return new Date().getFullYear();
}

export async function Footer() {
  const year = await copyrightYear();

  return (
    <footer className="dark-ui forest-wash text-ivory">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_2fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5 rounded-full" aria-label="EvenBetterServices home">
              <Mark />
              <Wordmark tone="light" />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-6 text-ivory/75">
              {brand.name} is an AI, automation, and software studio. We help businesses simplify operations, serve customers, and launch digital products.
            </p>
            <p className="mt-4 font-display text-2xl text-lime italic">{brand.line}</p>
            <Link
              href="/contact"
              className="mt-6 inline-flex min-h-11 items-center rounded-full bg-lime px-4 text-sm font-semibold text-forest"
            >
              Send a project enquiry
            </Link>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {groupOrder.slice(0, 3).map((groupId) => (
              <div key={groupId}>
                <p className="text-[0.72rem] font-semibold tracking-[0.16em] text-lime uppercase">
                  {groups[groupId].title}
                </p>
                <ul className="mt-4 space-y-2">
                  {servicesInGroup(groupId).map((service) => (
                    <li key={service.slug}>
                      <Link href={`/services/${service.slug}`} className="text-sm text-ivory/80 hover:text-ivory">
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <p className="text-[0.72rem] font-semibold tracking-[0.16em] text-lime uppercase">{groups.design.title}</p>
              <ul className="mt-4 space-y-2">
                {servicesInGroup("design").map((service) => (
                  <li key={service.slug}>
                    <Link href={`/services/${service.slug}`} className="text-sm text-ivory/80 hover:text-ivory">
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-[0.72rem] font-semibold tracking-[0.16em] text-lime uppercase">Navigate</p>
              <ul className="mt-4 space-y-2">
                {navigate.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-ivory/80 hover:text-ivory">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-ivory/15 pt-6 text-sm text-ivory/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} EvenBetterServices</p>
          <p>Project conversations start from the enquiry form.</p>
        </div>
      </Container>
    </footer>
  );
}
