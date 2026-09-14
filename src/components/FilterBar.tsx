"use client";

import type { FilterAxis, SelectedFilters } from "@/lib/combinedFilters";

type FilterGroup = {
  axis: FilterAxis;
  label: string;
  options: { slug: string; label: string }[];
};

export function FilterBar({
  groups,
  selected,
  onToggle,
  onClear,
  resultCount,
}: {
  groups: FilterGroup[];
  selected: SelectedFilters;
  onToggle: (axis: FilterAxis, slug: string) => void;
  onClear: () => void;
  resultCount: number;
}) {
  const hasActiveFilter =
    selected.vendor.length > 0 ||
    selected.industry.length > 0 ||
    selected.pillar.length > 0;

  return (
    <div className="filter-bar">
      {groups.map(group => (
        <fieldset className="filter-group" key={group.axis}>
          <legend>{group.label}</legend>
          {group.options.map(option => {
            const isSelected = selected[group.axis].includes(option.slug);
            const className = isSelected
              ? "filter-option is-active"
              : "filter-option";

            return (
              <button
                type="button"
                className={className}
                aria-pressed={isSelected}
                key={option.slug}
                onClick={() => onToggle(group.axis, option.slug)}
              >
                {option.label}
              </button>
            );
          })}
        </fieldset>
      ))}

      <div className="filter-summary" aria-live="polite">
        {resultCount} kết quả
      </div>

      {hasActiveFilter && (
        <button type="button" className="filter-clear" onClick={onClear}>
          Xoá bộ lọc
        </button>
      )}
    </div>
  );
}

