import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const paths = ["", "/services", "/solutions", "/about", "/contact", ...services.map((service) => `/services/${service.slug}`)];

  return paths.map((path) => ({
    url: `${base}${path}`,
  }));
}
