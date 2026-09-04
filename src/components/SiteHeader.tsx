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
          <Link href="/about/" prefetch={false}>Giới thiệu</Link>
          <Link href="/projects/" prefetch={false}>Dự án</Link>
          <Link href="/posts/" prefetch={false}>Bài viết</Link>
          <Link href="/contact/" prefetch={false}>Liên hệ</Link>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
