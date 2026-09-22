import { projectCategorySections } from "@/data/labels";
import type { ProjectCategory } from "@/data/types";

export function ProjectCategoryNav({
  activeCategories
}: {
  activeCategories: ReadonlySet<ProjectCategory>;
}) {
  const visibleSections = projectCategorySections.filter((section) =>
    activeCategories.has(section.key)
  );

  if (visibleSections.length < 2) {
    return null;
  }

  return (
    <nav className="taxonomy-nav" aria-label="Nhảy nhanh tới nhóm dự án">
      {visibleSections.map((section) => (
        <a className="taxonomy-nav-item" href={`#${section.key}`} key={section.key}>
          {section.label}
        </a>
      ))}
    </nav>
  );
}
