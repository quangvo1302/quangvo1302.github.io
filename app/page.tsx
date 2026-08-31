import Link from "next/link";
import { PersonSchema } from "@/components/Schema";
import { ProjectCard } from "@/components/ProjectCard";
import { homePage } from "@/data/pages";
import { featuredProjectSlugs, getProject } from "@/data/projects";
import type { CaseStudy } from "@/data/types";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: homePage.seoTitle,
  description: homePage.description,
  path: homePage.path
});

const featuredProjects = featuredProjectSlugs
  .map((slug) => getProject(slug))
  .filter((project): project is CaseStudy => Boolean(project));

export default function HomePage() {
  return (
    <>
      <PersonSchema pagePath="/" />
      <section className="hero">
        <div className="wrap">
          <p className="eyebrow">{homePage.eyebrow}</p>
          <h1>
            {homePage.title} <span className="mono">(Vo Nhat Quang)</span>
          </h1>
          <p>
            <strong>{homePage.role}</strong>
          </p>
          {homePage.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="chips">
            {homePage.chips.map((chip) => (
              <span className="chip" key={chip}>
                {chip}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap">
        <h2>Dự án tiêu biểu</h2>
        <div className="cards">
          {featuredProjects.map((project) => (
            <ProjectCard project={project} key={project.slug} />
          ))}
        </div>
        <p>
          <Link href="/projects/">Xem toàn bộ chín dự án</Link>
        </p>
      </section>
    </>
  );
}
