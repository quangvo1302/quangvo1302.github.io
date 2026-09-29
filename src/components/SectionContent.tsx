import type { ReactNode } from "react";
import { Reveal } from "@/components/animation";
import { TermGloss } from "@/components/TermGloss";
import type { ContentFigure, ContentSection } from "@/data/types";

function renderParagraph(paragraph: string): ReactNode[] {
  const parts: ReactNode[] = [];
  const regex = /\{\{([^{}]+)\}\}/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let matchIndex = 0;

  while ((match = regex.exec(paragraph)) !== null) {
    if (match.index > lastIndex) {
      parts.push(paragraph.slice(lastIndex, match.index));
    }

    parts.push(
      <TermGloss
        key={`term-${matchIndex}-${match.index}`}
        term={match[1] ?? ""}
      />
    );

    matchIndex += 1;
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < paragraph.length) {
    parts.push(paragraph.slice(lastIndex));
  }

  return parts;
}

function renderSectionBody(section: ContentSection): ReactNode[] {
  return section.paragraphs.flatMap((paragraph, paragraphIndex) => {
    const nodes: ReactNode[] = [
      <p key={`p-${paragraphIndex}`}>{renderParagraph(paragraph)}</p>
    ];
    const figures: readonly ContentFigure[] = section.figures ?? [];
    figures
      .filter((figure) => figure.afterParagraph === paragraphIndex)
      .forEach((figure) => {
        nodes.push(
          <figure className="content-figure" key={figure.src}>
            <a href={figure.src} target="_blank" rel="noopener">
              <img
                src={figure.src}
                alt={figure.alt}
                width={figure.width}
                height={figure.height}
                loading="lazy"
                decoding="async"
              />
            </a>
            <figcaption>{figure.caption}</figcaption>
          </figure>
        );
      });
    return nodes;
  });
}

export function SectionContent({
  sections,
  animate = false
}: {
  sections: readonly ContentSection[];
  animate?: boolean;
}) {
  return (
    <>
      {sections.map((section, index) =>
        animate ? (
          <Reveal as="section" delay={index * 0.08} key={section.heading}>
            <h2>{section.heading}</h2>
            {renderSectionBody(section)}
          </Reveal>
        ) : (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            {renderSectionBody(section)}
          </section>
        )
      )}
    </>
  );
}
