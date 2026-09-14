import { VENDOR_TAXONOMY_SLUGS, getCaseStudyVendorSlugs } from "./combinedFilters";
import { getTermLabel } from "@/data/labels";
import type { CaseStudy } from "@/data/types";
import { projects } from "@/data/projects";

export type CapabilityGroup = {
  key: "platforms" | "industries" | "pillars" | "managementScope" | "certifications";
  label: string;
  items: readonly string[];
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

  const certifications = [
    "SITRAIN của Siemens về SIMATIC WinCC V8",
    "Đào tạo thực hành nền tảng ETAP Real-Time tại Hoa Kỳ"
  ];

  return [
    { key: "platforms", label: "Nền tảng đã triển khai", items: platforms },
    { key: "industries", label: "Ngành đã phục vụ", items: industries },
    { key: "pillars", label: "Trục chuyên môn", items: pillars },
    { key: "managementScope", label: "Phạm vi quản lý", items: managementScope },
    { key: "certifications", label: "Chứng chỉ, đào tạo", items: certifications },
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