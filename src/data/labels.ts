import type { ProjectCategory } from "./types";

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
  etap: "ETAP",
  ignition: "Ignition",
  wonderware: "Wonderware",
  siemens: "Siemens",
  schneider: "Schneider Electric",
  "osisoft-pi": "OSIsoft PI",
  aveva: "AVEVA",
  rockwell: "Rockwell Automation",
  mitsubishi: "Mitsubishi Electric",
  "ban-tu-dong-hoa": "Tự động hoá quy trình sản xuất",
  "hop-nhat-du-lieu-van-hanh": "Tích hợp dữ liệu vận hành",
  "nang-cap-hien-dai-hoa": "Nâng cấp hệ điều khiển",
  "giam-sat-tap-trung": "Giám sát vận hành tập trung"
};

export function getTermLabel(term: string): string {
  return termLabels[term] ?? term;
}
