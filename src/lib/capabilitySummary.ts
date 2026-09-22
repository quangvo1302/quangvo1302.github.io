import { VENDOR_TAXONOMY_SLUGS, getCaseStudyVendorSlugs } from "./combinedFilters";
import { getTermLabel } from "@/data/labels";
import type { CaseStudy } from "@/data/types";
import { projects } from "@/data/projects";

export type CapabilityGroup = {
  key: "platforms" | "industries" | "pillars" | "managementScope" | "softSkills" | "certifications" | "projects";
  label: string;
  items: readonly string[];
  cta?: { text: string; href: string };
};

/** Derives platforms, industries, pillars from real project data; managementScope and certifications are static text. */
export function getCapabilitySummary(
  projectItems: readonly CaseStudy[] = projects
): CapabilityGroup[] {
  const vendorTaxonomy = new Set<string>(VENDOR_TAXONOMY_SLUGS);
  const vendorSlugs = new Set<string>();

  for (const project of projectItems) {
    const mappedVendors = getCaseStudyVendorSlugs(project.vendors);
    for (const vendorSlug of mappedVendors) {
      if (vendorTaxonomy.has(vendorSlug)) {
        vendorSlugs.add(vendorSlug);
      }
    }
  }

  const platforms = Array.from(vendorSlugs)
    .map((slug) => getTermLabel(slug))
    .sort((a, b) => a.localeCompare(b, "vi"));

  const industryValues: string[] = [];
  const pillarValues: string[] = [];

  for (const project of projectItems) {
    for (const industry of project.industries) {
      industryValues.push(industry);
    }
    for (const pillar of project.pillars) {
      pillarValues.push(pillar);
    }
  }

  const industries = collectUniqueLabels(industryValues);
  const pillars = collectUniqueLabels(pillarValues);

  const managementScope = [
    "Tám năm trong tự động hoá công nghiệp, năm năm rưỡi ở vai trò dẫn dắt kỹ thuật",
    "Từ đầu năm 2025 quản lý bốn đội chuyên môn với gần hai mươi người"
  ];

  const softSkills = [
    "Quản trị đội kỹ thuật đa chuyên môn (C&I, Chuyển đổi số, ETAP Automation, ETAP Service)",
    "Giải quyết sự cố hiện trường dưới áp lực thời gian chạy thử",
    "Thẩm định rủi ro và hiệu quả đầu tư trước khi khách hàng duyệt chi",
    "Giao tiếp đa bên: kinh doanh, khách hàng, kỹ sư",
    "Kèm cặp và phát triển kỹ sư mới"
  ];

  const certifications = [
    "SITRAIN của Siemens về SIMATIC WinCC V8",
    "Đào tạo thực hành nền tảng ETAP Real-Time tại Hoa Kỳ"
  ];

  const projectsSummary = [
    "Triển khai 9 dự án tích hợp hệ thống và tự động hoá trong sản xuất, năng lượng, xử lý nước thải",
    "Trực tiếp phụ trách từ khảo sát kỹ thuật, thiết kế kiến trúc đến chạy thử hiện trường"
  ];

  return [
    { key: "platforms", label: "Nền tảng đã triển khai", items: platforms },
    { key: "industries", label: "Ngành đã phục vụ", items: industries },
    { key: "pillars", label: "Trục chuyên môn", items: pillars },
    { key: "managementScope", label: "Phạm vi quản lý", items: managementScope },
    { key: "softSkills", label: "Kỹ năng mềm", items: softSkills },
    { key: "certifications", label: "Chứng chỉ, đào tạo", items: certifications },
    {
      key: "projects",
      label: "Dự án thực tế",
      items: projectsSummary,
      cta: { text: "Xem các case study chi tiết →", href: "/projects/" }
    },
  ];
}

function collectUniqueLabels(values: readonly string[]): string[] {
  const labels = new Set<string>();
  for (const value of values) {
    const label = getTermLabel(value);
    if (label) {
      labels.add(label);
    }
  }
  return Array.from(labels).sort((a, b) => a.localeCompare(b, "vi"));
}
