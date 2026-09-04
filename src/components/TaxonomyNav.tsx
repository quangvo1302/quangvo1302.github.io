import Link from "next/link";
import { taxonomyConfigs, taxonomyOrder } from "@/data/labels";
import type { PostTaxonomy } from "@/data/types";

export function TaxonomyNav({
  active
}: {
  active: PostTaxonomy | "all";
}) {
  return (
    <nav className="taxonomy-nav" aria-label="Bộ lọc phân loại">
      <Link
        href="/posts/"
        className={`taxonomy-nav-item${active === "all" ? " is-active" : ""}`}
        prefetch={false}
      >
        Tất cả bài viết
      </Link>
      {taxonomyOrder.map((taxonomy) => (
        <Link
          key={taxonomy}
          href={taxonomyConfigs[taxonomy].path}
          className={`taxonomy-nav-item${active === taxonomy ? " is-active" : ""}`}
          prefetch={false}
        >
          {taxonomyConfigs[taxonomy].navLabel}
        </Link>
      ))}
    </nav>
  );
}
