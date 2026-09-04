import Link from "next/link";
import { Reveal } from "@/components/animation";
import { PostCard } from "@/components/PostCard";
import { TaxonomyNav } from "@/components/TaxonomyNav";
import { postsIndexPage } from "@/data/pages";
import { getPostsNewestFirst } from "@/data/posts";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: postsIndexPage.seoTitle,
  description: postsIndexPage.description,
  path: postsIndexPage.path
});

export default function PostsPage() {
  const posts = getPostsNewestFirst();

  return (
    <div className="wrap">
      <header className="taxonomy-header">
        <p className="eyebrow">GHI CHÉP & CASE STUDY</p>
        <h1>{postsIndexPage.title}</h1>
        <div className="taxonomy-desc">
          <p>{postsIndexPage.intro}</p>
        </div>
      </header>

      <TaxonomyNav active="all" />

      <Reveal className="post-cards-list">
        {posts.map((post) => (
          <PostCard post={post} key={post.slug} />
        ))}
      </Reveal>

      <Reveal className="post-list-footer-box" delay={0.1}>
        <div className="footer-box-col">
          <h3>Khám phá theo danh mục</h3>
          <ul className="taxonomy-quick-links">
            <li>
              <Link href="/posts/series/">
                <strong>Chuyên đề</strong> — Các chuỗi bài phân tích chuyên sâu theo chủ đề
              </Link>
            </li>
            <li>
              <Link href="/posts/vendors/">
                <strong>Nhà cung cấp</strong> — Phân loại theo ETAP, Ignition, Wonderware...
              </Link>
            </li>
            <li>
              <Link href="/posts/industries/">
                <strong>Ngành công nghiệp</strong> — Dầu khí, Điện lực, Sản xuất...
              </Link>
            </li>
            <li>
              <Link href="/posts/pillars/">
                <strong>Trụ cột nội dung</strong> — Tích hợp đa nền tảng, ranh giới hệ thống
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-box-col">
          <h3>Dự án thực tế</h3>
          <p>
            Các bài viết trên là phân tích case study công khai của bên thứ ba. Để
            xem các dự án thực tế Võ Nhật Quang đã triển khai tại các nhà máy ở Việt Nam:
          </p>
          <p>
            <Link className="action-link" href="/projects/">
              Xem 9 dự án kỹ thuật →
            </Link>
          </p>
        </div>
      </Reveal>
    </div>
  );
}
