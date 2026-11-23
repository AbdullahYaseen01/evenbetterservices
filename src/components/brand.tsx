import Link from "next/link";
import type { ReactNode } from "react";

export function Mark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden="true">
      <rect width="32" height="32" rx="9" fill="#123C35" />
      <path
        d="M9 21.5c3.8-1 6.2-4.4 8.4-8.6"
        stroke="#D8F36A"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <circle cx="22.2" cy="10.6" r="3.1" fill="#C9BEF5" />
      <circle cx="11.2" cy="22.4" r="2.15" fill="#FFBEA7" />
    </svg>
  );
}

export function Wordmark({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const even = tone === "light" ? "text-ivory" : "text-forest";
  const better = tone === "light" ? "text-lime" : "text-emerald";
  const services = tone === "light" ? "text-sky" : "text-ink/70";

  return (
    <span className={`inline-flex items-baseline gap-[0.22em] ${even}`}>
      <span className="font-display text-[1.28rem] leading-none font-medium tracking-[-0.04em] sm:text-[1.45rem]">
        Even
      </span>
      <span
        className={`font-display text-[1.28rem] leading-none font-medium tracking-[-0.04em] italic sm:text-[1.45rem] ${better}`}
      >
        Better
      </span>
      <span
        className={`hidden font-sans text-[0.58rem] font-semibold tracking-[0.18em] uppercase min-[420px]:inline ${services}`}
      >
        Services
      </span>
    </span>
  );
}

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1180px] px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

const buttonStyles = {
  primary: "bg-lime text-forest hover:bg-[#e7f78d]",
  secondary:
    "border border-forest/15 bg-transparent text-forest hover:border-forest/40 hover:bg-white",
  dark: "border border-ivory/25 bg-transparent text-ivory hover:border-ivory/60 hover:bg-white/10",
  forest: "bg-forest text-lime hover:bg-forest-deep",
} as const;

export function ButtonLink({
  href,
  variant = "primary",
  children,
  className = "",
  onClick,
}: {
  href: string;
  variant?: keyof typeof buttonStyles;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`inline-flex min-h-11 items-center justify-center rounded-full px-5 text-[0.95rem] font-medium tracking-[-0.01em] transition-colors ${buttonStyles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

export function Eyebrow({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={`inline-flex items-center gap-2 text-[0.78rem] font-semibold tracking-[0.16em] uppercase ${light ? "text-lime" : "text-emerald"}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-lime" aria-hidden="true" />
      {children}
    </p>
  );
}
