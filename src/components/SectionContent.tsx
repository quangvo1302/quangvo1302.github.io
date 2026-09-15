import type { ReactNode } from "react";
import { Reveal } from "@/components/animation";
import { TermGloss } from "@/components/TermGloss";
import type { ContentSection } from "@/data/types";

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
            {section.paragraphs.map((paragraph, paragraphIndex) => (
              <p key={paragraphIndex}>{renderParagraph(paragraph)}</p>
            ))}
          </Reveal>
        ) : (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs.map((paragraph, paragraphIndex) => (
              <p key={paragraphIndex}>{renderParagraph(paragraph)}</p>
            ))}
          </section>
        )
      )}
    </>
  );
}
