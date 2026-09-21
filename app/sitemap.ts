import { MetadataRoute } from "next";

const PROJECT_SLUGS = [
  "campus-it-tracker",
  "metaalgorithm-lab",
  "cafena",
  "novatech",
  "gp",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://abdulghani.dev";
  const locales = ["en", "ar"];
  const now = new Date();

  const routes: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    // Home
    routes.push({
      url: `${baseUrl}/${locale}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    });

    // Projects catalog
    routes.push({
      url: `${baseUrl}/${locale}/projects`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    });

    // Showcase
    routes.push({
      url: `${baseUrl}/${locale}/showcase`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    });

    // Credentials archive
    routes.push({
      url: `${baseUrl}/${locale}/credentials`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    });

    // Project Case Studies and Demos
    for (const slug of PROJECT_SLUGS) {
      routes.push({
        url: `${baseUrl}/${locale}/projects/${slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.85,
      });

      routes.push({
        url: `${baseUrl}/${locale}/projects/${slug}/demo`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }
  }

  return routes;
}
