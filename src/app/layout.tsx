import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { services } from "@/data/services";
import { brand, getSiteUrl } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  variable: "--font-fraunces",
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "EvenBetterServices — Smarter systems. Better experiences.",
    template: "%s — EvenBetterServices",
  },
  description: brand.description,
  applicationName: brand.name,
  openGraph: {
    type: "website",
    siteName: brand.name,
    title: "EvenBetterServices — Smarter systems. Better experiences.",
    description: brand.description,
    locale: "en",
  },
  twitter: {
    card: "summary_large_image",
    title: "EvenBetterServices — Smarter systems. Better experiences.",
    description: brand.description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: brand.name,
    slogan: brand.line,
    description: brand.description,
    url: siteUrl,
    areaServed: ["United Kingdom", "United States", "Europe"],
    knowsAbout: services.map((service) => service.name),
  };

  return (
    <html lang="en" className={`${fraunces.variable} ${outfit.variable} h-full scroll-smooth antialiased`}>
      <body className="min-h-full overflow-x-clip bg-ivory font-sans text-ink">
        <a className="skip-link" href="#content">
          Skip to content
        </a>
        <Header />
        <main id="content">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
