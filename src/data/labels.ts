import type { PostTaxonomy, ProjectCategory } from "./types";

export const projectCategorySections: readonly {
  key: ProjectCategory;
  label: string;
}[] = [
  { key: "ci", label: "Điều khiển & Đo lường" },
  { key: "si", label: "Tích hợp hệ thống" },
  { key: "personal", label: "Dự án cá nhân" }
];

export const termLabels: Readonly<Record<string, string>> = {
  "oil-gas": "Dầu khí",
  power: "Điện lực",
  manufacturing: "Sản xuất",
  petrochemical: "Hoá dầu",
  mining: "Khai khoáng",
  infrastructure: "Hạ tầng",
  "tich-hop-da-nen-tang": "Tích hợp đa nền tảng",
  "ranh-gioi-he-thong": "Ranh giới hệ thống",
  etap: "ETAP",
  ignition: "Ignition",
  wonderware: "Wonderware",
  siemens: "Siemens",
  schneider: "Schneider Electric",
  "osisoft-pi": "OSIsoft PI",
  aveva: "AVEVA",
  rockwell: "Rockwell Automation",
  mitsubishi: "Mitsubishi Electric"
};

export const taxonomyOrder: readonly PostTaxonomy[] = [
  "series",
  "vendors",
  "industries",
  "pillars"
];

export const taxonomyConfigs: Readonly<
  Record<
    PostTaxonomy,
    {
      path: string;
      label: string;
      overviewTitle: string;
      overviewHeading: string;
      overviewDescription: string;
      overviewEyebrow: string;
      cardSubtitle: string;
      termEyebrow: string;
      termMetaPrefix: string;
      backLabel: string;
      navLabel: string;
    }
  >
> = {
  series: {
    path: "/posts/series/",
    label: "Chuyên đề",
    overviewTitle: "Chuyên đề",
    overviewHeading: "Chuyên đề",
    overviewDescription:
      "Các chuỗi bài phân tích chuyên sâu đa góc nhìn về một chủ đề tích hợp kỹ thuật cụ thể.",
    overviewEyebrow: "DANH MỤC BÀI VIẾT",
    cardSubtitle: "Chuỗi bài phân tích kỹ thuật",
    termEyebrow: "CHUYÊN ĐỀ",
    termMetaPrefix: "Chuỗi bài phân tích chuyên sâu",
    backLabel: "← Quay lại danh sách chuyên đề",
    navLabel: "Chuyên đề"
  },
  vendors: {
    path: "/posts/vendors/",
    label: "Nhà cung cấp",
    overviewTitle: "Nhà cung cấp & Nền tảng",
    overviewHeading: "Nhà cung cấp & Nền tảng",
    overviewDescription:
      "Phân loại bài viết theo các hãng công nghệ điều khiển, SCADA, DCS và phần mềm kỹ thuật.",
    overviewEyebrow: "DANH MỤC BÀI VIẾT",
    cardSubtitle: "Nền tảng / Hệ sinh thái công nghệ",
    termEyebrow: "NHÀ CUNG CẤP & NỀN TẢNG",
    termMetaPrefix: "Các bài phân tích case study liên quan đến nền tảng này",
    backLabel: "← Quay lại danh sách nhà cung cấp",
    navLabel: "Nhà cung cấp"
  },
  industries: {
    path: "/posts/industries/",
    label: "Ngành",
    overviewTitle: "Ngành công nghiệp",
    overviewHeading: "Ngành công nghiệp",
    overviewDescription:
      "Case study và bài phân tích kỹ thuật theo từng lĩnh vực ứng dụng công nghiệp.",
    overviewEyebrow: "DANH MỤC BÀI VIẾT",
    cardSubtitle: "Lĩnh vực công nghiệp",
    termEyebrow: "NGÀNH CÔNG NGHIỆP",
    termMetaPrefix: "Case study phân tích trong lĩnh vực",
    backLabel: "← Quay lại danh sách ngành",
    navLabel: "Ngành"
  },
  pillars: {
    path: "/posts/pillars/",
    label: "Trụ cột nội dung",
    overviewTitle: "Trụ cột nội dung",
    overviewHeading: "Trụ cột nội dung",
    overviewDescription:
      "Các nguyên lý và trục phương pháp luận kỹ thuật cốt lõi trong tích hợp hệ thống.",
    overviewEyebrow: "DANH MỤC BÀI VIẾT",
    cardSubtitle: "Trục phương pháp luận kỹ thuật",
    termEyebrow: "TRỤ CỘT NỘI DUNG",
    termMetaPrefix: "Các bài viết thuộc trục phương pháp luận này",
    backLabel: "← Quay lại danh sách trụ cột",
    navLabel: "Trụ cột"
  }
};

export function getTermLabel(term: string): string {
  return termLabels[term] ?? term;
}
