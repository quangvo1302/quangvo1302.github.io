export type FilterAxis = "vendor" | "industry" | "pillar";

/** Map each filter axis to its URL query parameter name. */
export const FILTER_QUERY_KEYS: Record<FilterAxis, string> = {
  vendor: "vendor",
  industry: "industry",
  pillar: "pillar",
};

const VENDOR_DISPLAY_TO_SLUG: Record<string, string> = {
  "siemens": "siemens",
  "schneider electric": "schneider",
  "osisoft pi": "osisoft-pi",
  "ignition": "ignition",
  "wonderware": "wonderware",
  "etap": "etap",
  "aveva": "aveva",
  "rockwell automation": "rockwell",
  "mitsubishi electric": "mitsubishi",
};

/** Canonical taxonomy slugs for valid vendor filters, already used in post.vendors. */
export const VENDOR_TAXONOMY_SLUGS: readonly string[] = [
  "etap",
  "ignition",
  "wonderware",
  "siemens",
  "schneider",
  "osisoft-pi",
  "aveva",
  "rockwell",
  "mitsubishi",
] as const;

/**
 * Normalize a free-form vendor display string to a taxonomy slug.
 * Returns null when the string is not a recognized OT/industrial platform vendor.
 */
export function mapVendorToTaxonomySlug(value: string): string | null {
  const key = value.trim().toLowerCase();
  return VENDOR_DISPLAY_TO_SLUG[key] ?? null;
}

/** A normalized filterable item usable by both CaseStudy and Post collections. */
export type FilterableItem = {
  vendorSlugs: readonly string[];
  industries: readonly string[];
  pillars: readonly string[];
};

/**
 * Convert an array of mixed vendor display strings into deduplicated taxonomy slugs,
 * dropping any values that do not map to a known vendor.
 */
export function getCaseStudyVendorSlugs(vendors: readonly string[]): string[] {
  return [
    ...new Set(
      vendors
        .map(mapVendorToTaxonomySlug)
        .filter((slug): slug is string => slug !== null),
    ),
  ];
}

/** Selected filter values grouped by axis. Empty arrays mean that axis is not filtered. */
export type SelectedFilters = {
  vendor: readonly string[];
  industry: readonly string[];
  pillar: readonly string[];
};

/** Read selected filter values from native URLSearchParams. */
export function parseFiltersFromSearchParams(searchParams: URLSearchParams): SelectedFilters {
  return {
    vendor: searchParams.getAll(FILTER_QUERY_KEYS.vendor),
    industry: searchParams.getAll(FILTER_QUERY_KEYS.industry),
    pillar: searchParams.getAll(FILTER_QUERY_KEYS.pillar),
  };
}

/**
 * Return true when an item matches all selected axes.
 * Within each axis, matching is OR; across axes, matching is AND.
 * An axis with no selected values does not filter.
 */
export function matchesFilters(item: FilterableItem, selected: SelectedFilters): boolean {
  const axisMatches = (selectedValues: readonly string[], itemValues: readonly string[]): boolean =>
    selectedValues.length === 0 || selectedValues.some((value) => itemValues.includes(value));

  return (
    axisMatches(selected.vendor, item.vendorSlugs) &&
    axisMatches(selected.industry, item.industries) &&
    axisMatches(selected.pillar, item.pillars)
  );
}

/** Build a URL string from a pathname and selected filters. Returns pathname only when no filters are selected. */
export function buildFilterUrl(pathname: string, selected: SelectedFilters): string {
  const params = new URLSearchParams();

  const append = (axis: FilterAxis, values: readonly string[]): void => {
    for (const value of values) {
      params.append(FILTER_QUERY_KEYS[axis], value);
    }
  };

  append("vendor", selected.vendor);
  append("industry", selected.industry);
  append("pillar", selected.pillar);

  const query = params.toString();
  return query ? `${pathname}?${query}` : pathname;
}

/** Toggle a filter value in a readonly array: add if absent, remove if present. */
export function toggleFilterValue(current: readonly string[], value: string): string[] {
  return current.includes(value) ? current.filter((item) => item !== value) : [...current, value];
}
