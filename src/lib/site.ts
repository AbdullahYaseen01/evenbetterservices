export function getSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return explicit.replace(/\/$/, "");

  const production = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (production) return `https://${production}`;

  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) return `https://${vercel}`;

  return "http://localhost:3000";
}

export const brand = {
  name: "EvenBetterServices",
  line: "Smarter systems. Better experiences.",
  eyebrow: "AI • Automation • Software Development",
  description:
    "EvenBetterServices creates AI agents, business automation, and custom software that help you serve customers, simplify operations, and bring new products to life.",
} as const;
