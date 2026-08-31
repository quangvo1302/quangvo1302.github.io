import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="wrap">
        <Link className="brand" href="/">
          Võ Nhật Quang
        </Link>
        <nav>
          <Link href="/about/">Giới thiệu</Link>
          <Link href="/projects/">Dự án</Link>
          <Link href="/posts/">Bài viết</Link>
          <Link href="/contact/">Liên hệ</Link>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
