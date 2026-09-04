import type { MetadataRoute } from "next";
import { taxonomyConfigs, taxonomyOrder } from "@/data/labels";
import { getPostsNewestFirst, getTermsForTaxonomy } from "@/data/posts";
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
    { url: `${baseUrl}/projects/`, lastModified: buildTime },
    { url: `${baseUrl}/posts/`, lastModified: buildTime },
    ...taxonomyOrder.map((taxonomy) => ({
      url: `${baseUrl}${taxonomyConfigs[taxonomy].path}`,
      lastModified: buildTime
    }))
  ];

  const projectEntries: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}/`,
    lastModified: new Date(project.publishedDate)
  }));

  const postEntries: MetadataRoute.Sitemap = getPostsNewestFirst().map((post) => ({
    url: `${baseUrl}/posts/${post.slug}/`,
    lastModified: new Date(post.publishDate)
  }));

  const taxonomyTermEntries: MetadataRoute.Sitemap = taxonomyOrder.flatMap((taxonomy) =>
    getTermsForTaxonomy(taxonomy).map((term) => ({
      url: `${baseUrl}${taxonomyConfigs[taxonomy].path}${term.term}/`,
      lastModified: buildTime
    }))
  );

  return [...staticEntries, ...projectEntries, ...postEntries, ...taxonomyTermEntries];
}
