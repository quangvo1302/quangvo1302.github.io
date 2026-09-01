import Link from "next/link";
import { Reveal } from "@/components/animation";
import { taxonomyConfigs } from "@/data/labels";
import {
  getPostsByTaxonomy,
  getTermsForTaxonomy
} from "@/data/posts";
import type { PostTaxonomy } from "@/data/types";
import { dateTimeAttribute, formatVietnameseDate } from "@/lib/date";
import { pageMetadata } from "@/lib/metadata";
import { PostCard } from "./PostCard";
import { TaxonomyNav } from "./TaxonomyNav";

export function taxonomyOverviewMetadata(taxonomy: PostTaxonomy) {
  const config = taxonomyConfigs[taxonomy];
  return pageMetadata({
    title: `${config.overviewTitle} — Võ Nhật Quang`,
    description: config.overviewDescription,
    path: config.path
  });
}

export function taxonomyTermMetadata(taxonomy: PostTaxonomy, term: string) {
  const config = taxonomyConfigs[taxonomy];
  const termData = getTermsForTaxonomy(taxonomy).find((item) => item.term === term);
  if (!termData) return {};

  return pageMetadata({
    title: `${termData.label} — ${config.overviewTitle} — Võ Nhật Quang`,
    description: `${config.termMetaPrefix} · ${termData.posts.length} bài viết.`,
    path: `${config.path}${term}/`
  });
}

export function TaxonomyOverviewPage({ taxonomy }: { taxonomy: PostTaxonomy }) {
  const config = taxonomyConfigs[taxonomy];
  const terms = getTermsForTaxonomy(taxonomy);

  return (
    <div className="wrap">
      <nav className="breadcrumb" aria-label="Đường dẫn">
        <Link href="/posts/">Bài viết</Link>
        <span className="sep">/</span>
        <span className="current">{config.label}</span>
      </nav>

      <header className="taxonomy-header">
        <p className="eyebrow">{config.overviewEyebrow}</p>
        <h1>{config.overviewHeading}</h1>
        <p className="taxonomy-desc">{config.overviewDescription}</p>
      </header>

      <TaxonomyNav active={taxonomy} />

      <Reveal className="term-grid">
        {terms.map((term) => (
          <div className="term-card" key={term.term}>
            <div className="term-card-header">
              <h2 className="term-card-title">
                <Link href={`${config.path}${term.term}/`}>{term.label}</Link>
              </h2>
              <span className="term-count-badge">{term.posts.length} bài viết</span>
            </div>
            <p className="term-card-subtitle">{config.cardSubtitle}</p>
            <ul className="term-card-posts">
              {term.posts.map((post) => (
                <li key={post.slug}>
                  <Link href={`/posts/${post.slug}/`}>{post.title}</Link>
                  <time className="term-post-date" dateTime={dateTimeAttribute(post.publishDate)}>
                    {formatVietnameseDate(post.publishDate)}
                  </time>
                </li>
              ))}
            </ul>
            <div className="term-card-footer">
              <Link className="term-card-action" href={`${config.path}${term.term}/`}>
                Xem bài viết: {term.label} →
              </Link>
            </div>
          </div>
        ))}
      </Reveal>
    </div>
  );
}

export function TaxonomyTermPage({
  taxonomy,
  term
}: {
  taxonomy: PostTaxonomy;
  term: string;
}) {
  const config = taxonomyConfigs[taxonomy];
  const termData = getTermsForTaxonomy(taxonomy).find((item) => item.term === term);

  if (!termData) {
    return null;
  }

  const posts = getPostsByTaxonomy(taxonomy, term);

  return (
    <div className="wrap">
      <nav className="breadcrumb" aria-label="Đường dẫn">
        <Link href="/posts/">Bài viết</Link>
        <span className="sep">/</span>
        <Link href={config.path}>{config.label}</Link>
        <span className="sep">/</span>
        <span className="current">{termData.label}</span>
      </nav>

      <header className="term-header">
        <p className="eyebrow">{config.termEyebrow}</p>
        <h1>{termData.label}</h1>
        <p className="term-header-meta">
          {taxonomy === "industries"
            ? `${config.termMetaPrefix} ${termData.label}`
            : config.termMetaPrefix}{" "}
          · <span className="metric">{posts.length} bài viết</span>
        </p>
      </header>

      <Reveal className="post-cards-list">
        {posts.map((post) => (
          <PostCard post={post} key={post.slug} />
        ))}
      </Reveal>

      <p className="back-link-wrapper">
        <Link className="back-link" href={config.path}>
          {config.backLabel}
        </Link>
      </p>
    </div>
  );
}
