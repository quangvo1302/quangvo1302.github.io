"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { Reveal } from "@/components/animation";
import { PostCard } from "@/components/PostCard";
import { FilterBar } from "@/components/FilterBar";
import {
  buildFilterUrl,
  matchesFilters,
  parseFiltersFromSearchParams,
  toggleFilterValue,
  VENDOR_TAXONOMY_SLUGS,
  type FilterAxis,
  type SelectedFilters,
} from "@/lib/combinedFilters";
import { getTermLabel } from "@/data/labels";
import type { Post } from "@/data/types";

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

export function FilterablePosts({ posts }: { posts: Post[] }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const selected = parseFiltersFromSearchParams(
    new URLSearchParams(searchParams.toString()),
  );

  const filteredPosts = posts.filter(post =>
    matchesFilters(
      {
        vendorSlugs: [...post.vendors],
        industries: post.industries,
        pillars: post.pillars,
      },
      selected,
    ),
  );

  const usedVendorSlugs = new Set(posts.flatMap(post => post.vendors));

  const vendorOptions = VENDOR_TAXONOMY_SLUGS.filter(slug =>
    usedVendorSlugs.has(slug),
  ).map(slug => ({ slug, label: getTermLabel(slug) }));

  const industryOptions = Array.from(
    new Set(posts.flatMap(post => post.industries)),
  )
    .map(slug => ({ slug, label: getTermLabel(slug) }))
    .sort((a, b) => a.label.localeCompare(b.label, "vi"));

  const pillarOptions = Array.from(
    new Set(posts.flatMap(post => post.pillars)),
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
        resultCount={filteredPosts.length}
      />

      {filteredPosts.length === 0 ? (
        <div className="filter-empty-state">
          Không có bài viết nào khớp bộ lọc đã chọn.{" "}
          <button type="button" className="filter-clear" onClick={handleClear}>
            Xoá bộ lọc
          </button>
        </div>
      ) : (
        <Reveal className="post-cards-list">
          {filteredPosts.map(post => (
            <PostCard post={post} key={post.slug} />
          ))}
        </Reveal>
      )}
    </>
  );
}

