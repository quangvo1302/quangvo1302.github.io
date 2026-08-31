import type { ContentSection } from "@/data/types";

export function SectionContent({
  sections
}: {
  sections: readonly ContentSection[];
}) {
  return (
    <>
      {sections.map((section) => (
        <section key={section.heading}>
          <h2>{section.heading}</h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>
      ))}
    </>
  );
}
