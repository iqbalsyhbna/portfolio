// src/app/sitemap.ts
import type { MetadataRoute } from "next";
import { portfolioData } from "@/data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = portfolioData.seo.url;
  const now = new Date();

  const blogRoutes = portfolioData.blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    { url: base, lastModified: now, changeFrequency: "monthly", priority: 1 },
    ...blogRoutes,
  ];
}
