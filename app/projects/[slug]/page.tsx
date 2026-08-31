import { notFound } from "next/navigation";
import { DiagramFigure } from "@/components/DiagramFigure";
import { ArticleSchema } from "@/components/Schema";
import { SectionContent } from "@/components/SectionContent";
import { getProject, projects } from "@/data/projects";
import { pageMetadata } from "@/lib/metadata";

export const dynamicParams = false;

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) {
    return {};
  }

  return pageMetadata({
    title: project.seoTitle,
    description: project.description,
    path: `/projects/${project.slug}/`,
    openGraphType: "article"
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="wrap">
      <ArticleSchema
        title={project.title}
        description={project.description}
        path={`/projects/${project.slug}/`}
        type="Article"
        datePublished={project.publishedDate}
      />
      <p className="eyebrow">{project.descriptor}</p>
      <h1>{project.title}</h1>

      <h2>Vai trò và phạm vi</h2>
      <div className="scroll-x">
        <table className="meta-table">
          <tbody>
            <tr>
              <th>Vai trò</th>
              <td>{project.role}</td>
            </tr>
            <tr>
              <th>Thời gian</th>
              <td>{project.period}</td>
            </tr>
            <tr>
              <th>Phạm vi</th>
              <td>{project.scale}</td>
            </tr>
            <tr>
              <th>Nền tảng kỹ thuật</th>
              <td className="mono">{project.stack.join(" · ")}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <SectionContent sections={project.sections} />
      <DiagramFigure fileName={project.diagram} />
    </article>
  );
}
