export type ProjectCategory = "ci" | "si" | "personal";

export type ContentSection = {
  heading: string;
  paragraphs: readonly string[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  descriptor: string;
  category: ProjectCategory;
  order: number;
  role: string;
  period: string;
  scale: string;
  industry: string;
  vendors: readonly string[];
  stack: readonly string[];
  diagram: string;
  outcomeBasis: "qualitative" | "target";
  summary: string;
  publishedDate: string;
  sections: readonly ContentSection[];
};

export type PostTaxonomy = "series" | "vendors" | "industries" | "pillars";

export type Post = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  publishDate: string;
  series: string;
  seriesTitle: string;
  vendors: readonly string[];
  industries: readonly string[];
  pillars: readonly string[];
  summary: string;
  sections: readonly ContentSection[];
  sourceNote: string;
  integratorView: string;
};

export type StaticPage = {
  title: string;
  seoTitle: string;
  description: string;
  path: string;
};
