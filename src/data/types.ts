export type ProjectCategory = "ci" | "si" | "personal";

export type ContentFigure = {
  /** Hình được chèn ngay sau đoạn văn có chỉ số này (tính từ 0). */
  afterParagraph: number;
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export type ContentSection = {
  heading: string;
  paragraphs: readonly string[];
  figures?: readonly ContentFigure[];
};

export type EducationGroup = {
  label: string;
  items: readonly { title: string; detail: string }[];
};
export type EducationSection = {
  heading: string;
  groups: readonly EducationGroup[];
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
  industries: readonly string[];
  pillars: readonly string[];
  stack: readonly string[];
  diagram: string;
  outcomeBasis: "qualitative" | "target";
  summary: string;
  publishedDate: string;
  sections: readonly ContentSection[];
};

export type StaticPage = {
  title: string;
  seoTitle: string;
  description: string;
  path: string;
};
