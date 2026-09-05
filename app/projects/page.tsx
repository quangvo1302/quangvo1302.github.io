import Link from "next/link";
import { Reveal, SignatureTrace } from "@/components/animation";
import { ProjectCard } from "@/components/ProjectCard";
import { projectsIndexPage } from "@/data/pages";
import { getProjectsByCategory, projectCategorySections } from "@/data/projects";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: projectsIndexPage.seoTitle,
  description: projectsIndexPage.description,
  path: projectsIndexPage.path
});

export default function ProjectsPage() {
  return (
    <div className="wrap">
      <header className="page-hero">
        <h1>{projectsIndexPage.title}</h1>
        <SignatureTrace variant="converge" />
        <p>
          Chín dự án, nhóm theo năng lực chứ không theo thời gian. Mỗi dự án có một
          trang riêng trình bày theo cùng một bố cục: vai trò và phạm vi, bài toán,
          cách tiếp cận, bàn giao, kết quả. Dòng thời gian sự nghiệp nằm ở trang{" "}
          <Link href="/about/">Giới thiệu</Link>.
        </p>
      </header>

      {projectCategorySections.map((section, index) => (
        <Reveal as="section" delay={index * 0.08} key={section.key}>
          <h2>{section.label}</h2>
          <div className="cards">
            {getProjectsByCategory(section.key).map((project) => (
              <ProjectCard project={project} key={project.slug} />
            ))}
          </div>
        </Reveal>
      ))}
    </div>
  );
}
