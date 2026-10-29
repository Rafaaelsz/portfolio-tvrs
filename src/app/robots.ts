import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

// /admin fica fora do Disallow de propósito: o buscador precisa ler o noindex da página.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
