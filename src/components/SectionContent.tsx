import { Reveal } from "@/components/animation";
import type { ContentSection } from "@/data/types";

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
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Reveal>
        ) : (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        )
      )}
    </>
  );
}
