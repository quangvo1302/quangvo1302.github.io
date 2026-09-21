import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";

const baseUrl = siteConfig.baseUrl;

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const buildTime = new Date();

  const staticEntries: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: buildTime },
    { url: `${baseUrl}/about/`, lastModified: buildTime },
    { url: `${baseUrl}/contact/`, lastModified: buildTime },
    { url: `${baseUrl}/projects/`, lastModified: buildTime }
  ];

  const projectEntries: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}/`,
    lastModified: new Date(project.publishedDate)
  }));

  return [...staticEntries, ...projectEntries];
}
