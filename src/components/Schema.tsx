import { absoluteUrl, siteConfig } from "@/data/site";

export function PersonSchema({ pagePath = "/about/" }: { pagePath?: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      "@id": siteConfig.personId,
      name: siteConfig.name,
      alternateName: siteConfig.alternateName,
      jobTitle: siteConfig.jobTitle,
      worksFor: {
        "@type": "Organization",
        name: siteConfig.worksFor.name,
        url: siteConfig.worksFor.url
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.address.addressLocality,
        addressCountry: siteConfig.address.addressCountry
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: siteConfig.alumniOf
      },
      knowsAbout: siteConfig.knowsAbout,
      email: `mailto:${siteConfig.email}`,
      url: absoluteUrl(pagePath),
      sameAs: [siteConfig.linkedin, siteConfig.github]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ArticleSchema({
  title,
  description,
  path,
  type = "Article",
  datePublished
}: {
  title: string;
  description: string;
  path: string;
  type?: "Article" | "BlogPosting";
  datePublished?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": type,
    headline: title,
    description,
    ...(datePublished ? { datePublished } : {}),
    author: {
      "@type": "Person",
      "@id": siteConfig.personId,
      name: siteConfig.name
    },
    publisher: {
      "@id": siteConfig.personId
    },
    mainEntityOfPage: absoluteUrl(path),
    inLanguage: "vi"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
