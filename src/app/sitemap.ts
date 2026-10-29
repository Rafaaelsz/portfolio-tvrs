import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  // Uma página só: o EN troca no cliente, na mesma URL.
  return [{ url: `${siteUrl}/`, changeFrequency: "monthly", priority: 1 }];
}
