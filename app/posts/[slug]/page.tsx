import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/animation";
import { getTermLabel } from "@/data/labels";
import {
  getPost,
  getPostsBySeries,
  getPostTerms,
  posts
} from "@/data/posts";
import type { PostTaxonomy } from "@/data/types";
import { ArticleSchema } from "@/components/Schema";
import { SectionContent } from "@/components/SectionContent";
import { dateTimeAttribute, formatVietnameseDate } from "@/lib/date";
import { pageMetadata } from "@/lib/metadata";

export const dynamicParams = false;

type PostPageProps = {
  params: Promise<{ slug: string }>;
};

const taxonomyChips: readonly {
  taxonomy: PostTaxonomy;
  className: string;
  label: string;
  path: string;
}[] = [
  { taxonomy: "vendors", className: "chip--vendor", label: "Hãng:", path: "/posts/vendors/" },
  { taxonomy: "industries", className: "chip--industry", label: "Ngành:", path: "/posts/industries/" },
  { taxonomy: "pillars", className: "chip--pillar", label: "Trụ cột:", path: "/posts/pillars/" }
];

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return pageMetadata({
    title: post.seoTitle,
    description: post.description,
    path: `/posts/${post.slug}/`,
    openGraphType: "article"
  });
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  const seriesPosts = getPostsBySeries(post.series);
  const relatedSeriesPosts = seriesPosts.filter((seriesPost) => seriesPost.slug !== post.slug);

  return (
    <article className="wrap post-single">
      <ArticleSchema
        title={post.title}
        description={post.description}
        path={`/posts/${post.slug}/`}
        type="BlogPosting"
        datePublished={post.publishDate}
      />
      <nav className="breadcrumb" aria-label="Đường dẫn">
        <Link href="/posts/">Bài viết</Link>
        <span className="sep">/</span>
        <Link href={`/posts/series/${post.series}/`}>{post.seriesTitle}</Link>
        <span className="sep">/</span>
        <span className="current">{post.title}</span>
      </nav>

      <header className="post-header">
        <div className="post-header-meta">
          <time className="post-publish-date" dateTime={dateTimeAttribute(post.publishDate)}>
            {formatVietnameseDate(post.publishDate)}
          </time>
          <span className="post-header-badge">
            Chuyên đề: <Link href={`/posts/series/${post.series}/`}>{post.seriesTitle}</Link>
          </span>
        </div>
        <h1 className="post-single-title">{post.title}</h1>
        <p className="post-single-lead">{post.summary}</p>
      </header>

      <div className="post-series-nav">
        <div className="series-nav-header">
          <span className="series-eyebrow">CHUỖI BÀI PHÂN TÍCH</span>
          <h2 className="series-title">
            Chuyên đề: <Link href={`/posts/series/${post.series}/`}>{post.seriesTitle}</Link>
          </h2>
          <span className="series-count">({seriesPosts.length} bài viết)</span>
        </div>
        <ol className="series-index">
          {seriesPosts.map((seriesPost, index) => (
            <li
              className={`series-item${seriesPost.slug === post.slug ? " is-current" : ""}`}
              key={seriesPost.slug}
            >
              <span className="series-item-idx">{String(index + 1).padStart(2, "0")}</span>
              <div className="series-item-main">
                {seriesPost.slug === post.slug ? (
                  <span className="current-item">
                    {seriesPost.title} <span className="current-pill">Đang đọc</span>
                  </span>
                ) : (
                  <Link href={`/posts/${seriesPost.slug}/`}>{seriesPost.title}</Link>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="post-content">
        <SectionContent sections={post.sections} />
        <p>
          <em>({post.sourceNote})</em>
        </p>
        <p>
          <strong>Góc nhìn người tích hợp đa nền tảng:</strong> {post.integratorView}
        </p>
      </div>

      <section className="post-taxonomies" aria-label="Phân loại bài viết">
        <h3 className="post-taxonomies-title">Phân loại & Từ khóa</h3>
        <div className="taxonomy-chip-group">
          {taxonomyChips.map((chipGroup) =>
            getPostTerms(post, chipGroup.taxonomy).map((term) => (
              <Link
                className={`chip-item ${chipGroup.className}`}
                href={`${chipGroup.path}${term}/`}
                key={`${chipGroup.taxonomy}-${term}`}
              >
                <span className="chip-label">{chipGroup.label}</span> {getTermLabel(term)}
              </Link>
            ))
          )}
        </div>
      </section>

      <Reveal as="nav" className="post-wayfinding" ariaLabel="Điều hướng liên quan">
        {relatedSeriesPosts.length > 0 ? (
          <div className="wayfinding-card wayfinding--series">
            <h4>Cùng chuyên đề: {post.seriesTitle}</h4>
            <ul className="wayfinding-list">
              {relatedSeriesPosts.map((seriesPost) => (
                <li key={seriesPost.slug}>
                  <Link href={`/posts/${seriesPost.slug}/`}>→ {seriesPost.title}</Link>
                </li>
              ))}
            </ul>
            <p className="wayfinding-link">
              <Link href={`/posts/series/${post.series}/`}>
                Xem toàn bộ chuỗi bài chuyên đề →
              </Link>
            </p>
          </div>
        ) : null}

        <div className="wayfinding-card wayfinding--projects">
          <h4>Dự án kỹ thuật thực tế</h4>
          <p>
            Các bài viết trên blog phân tích bài toán kỹ thuật từ các hệ thống lớn trên
            thế giới. Xem các dự án thực tế Võ Nhật Quang đã trực tiếp triển khai:
          </p>
          <p>
            <Link className="action-link" href="/projects/">
              Xem 9 dự án kỹ thuật tại Việt Nam →
            </Link>
          </p>
        </div>
      </Reveal>

      <div className="post-back-bar">
        <Link className="back-link" href="/posts/">
          ← Quay lại tất cả bài viết
        </Link>
      </div>
    </article>
  );
}
