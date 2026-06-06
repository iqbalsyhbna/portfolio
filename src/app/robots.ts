// src/app/robots.ts
import type { MetadataRoute } from "next";
import { portfolioData } from "@/data/portfolio";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${portfolioData.seo.url}/sitemap.xml`,
  };
}
