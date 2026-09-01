import Link from "next/link";
import type { CaseStudy } from "@/data/types";

export function ProjectCard({ project }: { project: CaseStudy }) {
  return (
    <div className="card">
      <Link href={`/projects/${project.slug}/`} prefetch={false}>{project.title}</Link>
      <div className="desc">{project.descriptor}</div>
      <div className="desc">{project.summary}</div>
      <div className="stack">{project.stack.join(" · ")}</div>
    </div>
  );
}
