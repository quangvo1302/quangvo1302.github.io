"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { href: "/about/", label: "Giới thiệu" },
  { href: "/projects/", label: "Dự án" },
  { href: "/posts/", label: "Bài viết" },
  { href: "/contact/", label: "Liên hệ" }
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="wrap">
        <Link className="brand" href="/">
          Võ Nhật Quang
        </Link>
        <nav>
          {navItems.map((item) => {
            const isActive =
              pathname === item.href || pathname?.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                prefetch={false}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
