"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { ButtonLink, Mark, Wordmark } from "@/components/brand";
import { ServiceIcon } from "@/components/icons";
import { groupOrder, servicesInGroup } from "@/data/services";

const menuTitles: Record<string, string> = {
  ai: "AI and automation",
  software: "Software and products",
  systems: "Connected systems",
  design: "Design and frontend",
};

const links = [
  { href: "/", label: "Home" },
  { href: "/solutions", label: "Solutions" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function isCurrent(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>("ai");
  const headerRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const servicesButtonRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();
  const megaId = useId();
  const servicesActive = pathname.startsWith("/services");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const node = menuRef.current;
    const focusable = () =>
      Array.from(
        node?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ) ?? [],
      );

    const frame = window.requestAnimationFrame(() => focusable()[0]?.focus());

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        setMobileOpen(false);
        menuButtonRef.current?.focus();
        return;
      }
      if (event.key !== "Tab" || !node) return;
      const items = focusable();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKey);
    return () => {
      window.cancelAnimationFrame(frame);
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!servicesOpen) return;
    const close = () => setServicesOpen(false);
    window.addEventListener("scroll", close, { passive: true });
    return () => window.removeEventListener("scroll", close);
  }, [servicesOpen]);

  useEffect(() => {
    if (!servicesOpen) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setServicesOpen(false);
        servicesButtonRef.current?.focus();
      }
    }
    function onPointer(event: MouseEvent) {
      if (!headerRef.current?.contains(event.target as Node)) setServicesOpen(false);
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onPointer);
    };
  }, [servicesOpen]);

  return (
    <header
      ref={headerRef}
      onMouseLeave={() => setServicesOpen(false)}
      className={`sticky top-0 z-50 transition-colors ${
        scrolled || servicesOpen || mobileOpen
          ? "header-wash border-b border-ink/10 shadow-[0_14px_30px_-24px_rgba(18,60,53,0.7)]"
          : "header-wash border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1180px] items-center gap-3 px-5 sm:h-[76px] sm:px-8">
        <Link href="/" onClick={() => setMobileOpen(false)} className="flex min-w-0 items-center gap-2.5 rounded-full" aria-label="EvenBetterServices home">
          <Mark />
          <Wordmark />
        </Link>

        <nav className="ml-auto hidden items-center gap-1 lg:flex" aria-label="Primary">
          <Link
            href="/"
            aria-current={pathname === "/" ? "page" : undefined}
            className={navClass(pathname === "/")}
            onMouseEnter={() => setServicesOpen(false)}
            onClick={() => setServicesOpen(false)}
          >
            Home
          </Link>
          <div className="relative" onMouseEnter={() => setServicesOpen(true)}>
            <button
              ref={servicesButtonRef}
              type="button"
              className={navClass(servicesActive || servicesOpen)}
              aria-expanded={servicesOpen}
              aria-controls={megaId}
              onClick={(event) => {
                if (event.detail === 0) {
                  setServicesOpen((open) => !open);
                  return;
                }
                setServicesOpen(true);
              }}
            >
              Services
              <Chevron open={servicesOpen} />
            </button>
          </div>
          {links.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isCurrent(pathname, link.href) ? "page" : undefined}
              className={navClass(isCurrent(pathname, link.href))}
              onMouseEnter={() => setServicesOpen(false)}
              onClick={() => setServicesOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <ButtonLink href="/contact" className="ml-3" onClick={() => setServicesOpen(false)}>
            Let’s Talk
          </ButtonLink>
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:hidden">
          <ButtonLink href="/contact" className="px-4" onClick={() => setMobileOpen(false)}>
            Let’s Talk
          </ButtonLink>
          <button
            ref={menuButtonRef}
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-white"
            aria-expanded={mobileOpen}
            aria-controls={menuId}
            onClick={() => setMobileOpen((open) => !open)}
          >
            <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
            <span className="flex w-4 flex-col gap-1.5" aria-hidden="true">
              <span className={`h-px bg-forest transition ${mobileOpen ? "translate-y-[3.5px] rotate-45" : ""}`} />
              <span className={`h-px bg-forest transition ${mobileOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {servicesOpen ? (
        <div
          id={megaId}
          className="menu-in header-wash absolute inset-x-0 top-full hidden border-t border-ink/10 shadow-[0_30px_40px_-34px_rgba(18,60,53,0.8)] lg:block"
        >
          <div className="mx-auto grid max-w-[1180px] grid-cols-4 gap-8 px-8 py-8">
            {groupOrder.map((groupId) => {
              const items = servicesInGroup(groupId);
              return (
                <div key={groupId}>
                  <p className="text-[0.72rem] font-semibold tracking-[0.14em] text-emerald uppercase">
                    {menuTitles[groupId]}
                  </p>
                  <ul className="mt-4 space-y-1">
                    {items.map((service) => (
                      <li key={service.slug}>
                        <Link
                          href={`/services/${service.slug}`}
                          className="flex items-center gap-3 rounded-2xl px-2 py-2 hover:bg-white"
                          onClick={() => setServicesOpen(false)}
                        >
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-ivory-deep text-forest">
                            <ServiceIcon slug={service.slug} className="h-5 w-5" />
                          </span>
                          <span className="text-sm font-medium text-forest">{service.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
          <div className="border-t border-ink/10">
            <div className="mx-auto flex max-w-[1180px] items-center justify-between px-8 py-4">
              <p className="text-sm text-ink/70">Eleven services, grouped by the kind of work they do.</p>
              <Link href="/services" className="text-sm font-semibold text-forest underline decoration-lime decoration-2 underline-offset-4" onClick={() => setServicesOpen(false)}>
                View all services
              </Link>
            </div>
          </div>
        </div>
      ) : null}

      <div
        id={menuId}
        ref={menuRef}
        hidden={!mobileOpen}
        className="dark-ui wash-lavender fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto lg:hidden"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        <nav className="space-y-2 px-5 py-5" aria-label="Mobile">
          <Link href="/" onClick={() => setMobileOpen(false)} className="block rounded-2xl px-3 py-3 text-lg font-medium text-forest" aria-current={pathname === "/" ? "page" : undefined}>
            Home
          </Link>
          <div className="rounded-[20px] border border-ink/10 bg-white">
            {groupOrder.map((groupId) => {
              const expanded = openGroup === groupId;
              const panelId = `${menuId}-${groupId}`;
              return (
                <div key={groupId} className="border-b border-ink/8 last:border-b-0">
                  <button
                    type="button"
                    className="flex min-h-12 w-full items-center justify-between px-4 text-left font-medium text-forest"
                    aria-expanded={expanded}
                    aria-controls={panelId}
                    onClick={() => setOpenGroup(expanded ? null : groupId)}
                  >
                    {menuTitles[groupId]}
                    <Chevron open={expanded} />
                  </button>
                  {expanded ? (
                    <ul id={panelId} className="space-y-1 px-3 pb-3">
                      {servicesInGroup(groupId).map((service) => (
                        <li key={service.slug}>
                          <Link href={`/services/${service.slug}`} onClick={() => setMobileOpen(false)} className="flex min-h-11 items-center gap-3 rounded-xl px-2 text-sm font-medium text-ink">
                            <ServiceIcon slug={service.slug} className="h-5 w-5 text-emerald" />
                            {service.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              );
            })}
          </div>
          {links.slice(1).map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="block rounded-2xl px-3 py-3 text-lg font-medium text-forest" aria-current={isCurrent(pathname, link.href) ? "page" : undefined}>
              {link.label}
            </Link>
          ))}
          <Link href="/services" onClick={() => setMobileOpen(false)} className="block rounded-2xl px-3 py-3 text-lg font-medium text-forest">
            All services
          </Link>
          <ButtonLink href="/contact" className="mt-3 w-full" onClick={() => setMobileOpen(false)}>
            Let’s Talk
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
}

function navClass(active: boolean) {
  return `inline-flex min-h-11 items-center gap-1 rounded-full px-3 text-sm font-medium transition-colors ${
    active ? "bg-white text-forest" : "text-ink/80 hover:bg-white/70 hover:text-forest"
  }`;
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 16 16" className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden="true">
      <path d="M4 6.5 8 10l4-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
