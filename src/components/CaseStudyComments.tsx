"use client";

import { useEffect, useRef } from "react";
import { giscusConfig } from "@/data/giscus";

function currentGiscusTheme(): "dark" | "light" {
  return document.documentElement.getAttribute("data-theme") === "dark"
    ? "dark"
    : "light";
}

export function CaseStudyComments({ slug }: { slug: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!giscusConfig.repoId || !giscusConfig.categoryId || !containerRef.current) {
      return;
    }

    const container = containerRef.current;
    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.async = true;
    script.crossOrigin = "anonymous";
    script.setAttribute("data-repo", giscusConfig.repo);
    script.setAttribute("data-repo-id", giscusConfig.repoId);
    script.setAttribute("data-category", giscusConfig.category);
    script.setAttribute("data-category-id", giscusConfig.categoryId);
    script.setAttribute("data-mapping", "specific");
    script.setAttribute("data-term", `case-study:${slug}`);
    script.setAttribute("data-strict", "1");
    script.setAttribute("data-reactions-enabled", "0");
    script.setAttribute("data-input-position", "top");
    script.setAttribute("data-theme", currentGiscusTheme());
    script.setAttribute("data-lang", "vi");
    container.appendChild(script);

    const observer = new MutationObserver(() => {
      const iframe = container.querySelector<HTMLIFrameElement>("iframe.giscus-frame");
      iframe?.contentWindow?.postMessage(
        { giscus: { setConfig: { theme: currentGiscusTheme() } } },
        "https://giscus.app"
      );
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"]
    });

    return () => {
      observer.disconnect();
      container.replaceChildren();
    };
  }, [slug]);

  if (!giscusConfig.repoId || !giscusConfig.categoryId) {
    return null;
  }

  return (
    <section className="case-study-comments" aria-label="Bình luận">
      <h2>Bình luận</h2>
      <p>
        Bạn có thể đặt câu hỏi về giải pháp hoặc chia sẻ góc nhìn kỹ thuật của mình ở
        bên dưới.
      </p>
      <div ref={containerRef} />
    </section>
  );
}
