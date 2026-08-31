import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  openGraphType?: "website" | "article";
};

export function pageMetadata({
  title,
  description,
  path,
  openGraphType = "website"
}: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path
    },
    openGraph: {
      type: openGraphType,
      locale: "vi_VN",
      siteName: siteConfig.name,
      title,
      description,
      url: path
    }
  };
}
