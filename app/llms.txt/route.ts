import { projects } from "@/data/projects";
import { getPostsNewestFirst } from "@/data/posts";
import { absoluteUrl, siteConfig } from "@/data/site";

export const dynamic = "force-static";

export function GET() {
  const lines: string[] = [];

  lines.push(`# ${siteConfig.name}`);
  lines.push("");
  lines.push(`> ${siteConfig.description}`);
  lines.push("");
  lines.push(`[Giới thiệu chi tiết](${absoluteUrl("/about/")})`);
  lines.push("");
  lines.push("## Dự án");
  lines.push("");
  for (const project of projects) {
    lines.push(`- [${project.title}](${absoluteUrl(`/projects/${project.slug}/`)}): ${project.description}`);
  }
  lines.push("");
  lines.push("## Bài viết");
  lines.push("");
  for (const post of getPostsNewestFirst()) {
    lines.push(`- [${post.title}](${absoluteUrl(`/posts/${post.slug}/`)}): ${post.description}`);
  }
  lines.push("");

  const content = lines.join("\n");

  return new Response(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" }
  });
}