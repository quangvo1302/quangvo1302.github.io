import type { ProjectCategory } from "./types";

export const projectCategorySections: readonly {
  key: ProjectCategory;
  label: string;
}[] = [
  { key: "ci", label: "Điều khiển & Đo lường" },
  { key: "si", label: "Tích hợp hệ thống" },
  { key: "personal", label: "Dự án cá nhân" }
];
