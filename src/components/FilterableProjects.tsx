"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { Reveal } from "@/components/animation";
import { ProjectCard } from "@/components/ProjectCard";
import { FilterBar } from "@/components/FilterBar";
import {
  buildFilterUrl,
  getCaseStudyVendorSlugs,
  matchesFilters,
  parseFiltersFromSearchParams,
  toggleFilterValue,
  VENDOR_TAXONOMY_SLUGS,
  type FilterAxis,
  type SelectedFilters,
} from "@/lib/combinedFilters";
import { getTermLabel, projectCategorySections } from "@/data/labels";
import type { CaseStudy } from "@/data/types";

function updateSelectedFilters(
  selected: SelectedFilters,
  axis: FilterAxis,
  values: readonly string[],
): SelectedFilters {
  if (axis === "vendor") {
    return { ...selected, vendor: values };
  }

  if (axis === "industry") {
    return { ...selected, industry: values };
  }

  return { ...selected, pillar: values };
}

export function FilterableProjects({ projects }: { projects: readonly CaseStudy[] }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const selected = parseFiltersFromSearchParams(
    new URLSearchParams(searchParams.toString()),
  );

  const filteredProjects = projects.filter(project =>
    matchesFilters(
      {
        vendorSlugs: getCaseStudyVendorSlugs(project.vendors),
        industries: project.industries,
        pillars: project.pillars,
      },
      selected,
    ),
  );

  const usedVendorSlugs = new Set(
    projects.flatMap(project => getCaseStudyVendorSlugs(project.vendors)),
  );

  const vendorOptions = VENDOR_TAXONOMY_SLUGS.filter(slug =>
    usedVendorSlugs.has(slug),
  ).map(slug => ({ slug, label: getTermLabel(slug) }));

  const industryOptions = Array.from(
    new Set(projects.flatMap(project => project.industries)),
  )
    .map(slug => ({ slug, label: getTermLabel(slug) }))
    .sort((a, b) => a.label.localeCompare(b.label, "vi"));

  const pillarOptions = Array.from(
    new Set(projects.flatMap(project => project.pillars)),
  )
    .map(slug => ({ slug, label: getTermLabel(slug) }))
    .sort((a, b) => a.label.localeCompare(b.label, "vi"));

  const groups = [
    { axis: "vendor" as const, label: "Nhà cung cấp", options: vendorOptions },
    { axis: "industry" as const, label: "Ngành công nghiệp", options: industryOptions },
    { axis: "pillar" as const, label: "Trụ cột nội dung", options: pillarOptions },
  ].filter(group => group.options.length > 0);

  function handleToggle(axis: FilterAxis, slug: string) {
    const nextSelected = updateSelectedFilters(
      selected,
      axis,
      toggleFilterValue(selected[axis], slug),
    );

    router.replace(buildFilterUrl(pathname, nextSelected), { scroll: false });
  }

  function handleClear() {
    router.replace(pathname, { scroll: false });
  }

  return (
    <>
      <FilterBar
        groups={groups}
        selected={selected}
        onToggle={handleToggle}
        onClear={handleClear}
        resultCount={filteredProjects.length}
      />

      {filteredProjects.length === 0 ? (
        <div className="filter-empty-state" aria-live="polite">
          Không có dự án nào khớp bộ lọc đã chọn.{" "}
          <button type="button" className="filter-clear" onClick={handleClear}>
            Xoá bộ lọc
          </button>
        </div>
      ) : (
        projectCategorySections.map((section, index) => {
          const sectionProjects = filteredProjects.filter(
            project => project.category === section.key,
          );

          if (sectionProjects.length === 0) {
            return null;
          }

          return (
            <Reveal as="section" delay={index * 0.08} key={section.key}>
              <h2>{section.label}</h2>
              <div className="cards">
                {sectionProjects.map(project => (
                  <ProjectCard project={project} key={project.slug} />
                ))}
              </div>
            </Reveal>
          );
        })
      )}
    </>
  );
}

