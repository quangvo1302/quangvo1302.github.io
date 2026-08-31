import { PersonSchema } from "@/components/Schema";
import { SectionContent } from "@/components/SectionContent";
import { aboutPage } from "@/data/pages";
import { siteConfig } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: aboutPage.seoTitle,
  description: aboutPage.description,
  path: aboutPage.path
});

export default function AboutPage() {
  return (
    <article className="wrap">
      <PersonSchema pagePath="/about/" />
      <h1>{aboutPage.title}</h1>
      <p>{aboutPage.intro}</p>
      <SectionContent sections={aboutPage.sections} />

      <section>
        <h2>Liên hệ</h2>
        <p>
          Email: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>. Hồ sơ nghề
          nghiệp trên <a href={siteConfig.linkedin}>LinkedIn</a> và mã nguồn trên{" "}
          <a href={siteConfig.github}>GitHub</a>.
        </p>
      </section>
    </article>
  );
}
