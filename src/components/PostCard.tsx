import Link from "next/link";
import { getTermLabel } from "@/data/labels";
import type { Post } from "@/data/types";
import { dateTimeAttribute, formatVietnameseDate } from "@/lib/date";

export function PostCard({ post }: { post: Post }) {
  return (
    <article className="post-card">
      <div className="post-card-meta">
        <Link className="post-card-series" href={`/posts/series/${post.series}/`}>
          <span className="series-tag-label">Chuyên đề:</span> {post.seriesTitle}
        </Link>
        <time className="post-card-date" dateTime={dateTimeAttribute(post.publishDate)}>
          {formatVietnameseDate(post.publishDate)}
        </time>
      </div>

      <h2 className="post-card-title">
        <Link href={`/posts/${post.slug}/`}>{post.title}</Link>
      </h2>

      <p className="post-card-summary">{post.summary}</p>

      <div className="post-card-footer">
        <div className="post-card-chips">
          {post.vendors.map((vendor) => (
            <Link
              className="chip-item chip--vendor"
              href={`/posts/vendors/${vendor}/`}
              title={`Nhà cung cấp: ${getTermLabel(vendor)}`}
              key={vendor}
            >
              <span className="chip-label">Hãng:</span> {getTermLabel(vendor)}
            </Link>
          ))}
          {post.industries.map((industry) => (
            <Link
              className="chip-item chip--industry"
              href={`/posts/industries/${industry}/`}
              title={`Ngành: ${getTermLabel(industry)}`}
              key={industry}
            >
              <span className="chip-label">Ngành:</span> {getTermLabel(industry)}
            </Link>
          ))}
        </div>
        <Link
          className="post-card-cta"
          href={`/posts/${post.slug}/`}
          aria-label={`Đọc bài viết: ${post.title}`}
        >
          Đọc bài <span className="cta-arrow">→</span>
        </Link>
      </div>
    </article>
  );
}
