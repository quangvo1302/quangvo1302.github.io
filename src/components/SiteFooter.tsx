import { siteConfig } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <span>Võ Nhật Quang</span>
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        <a href={siteConfig.linkedin} rel="me">
          LinkedIn
        </a>
        <a href={siteConfig.github} rel="me">
          GitHub
        </a>
      </div>
    </footer>
  );
}
