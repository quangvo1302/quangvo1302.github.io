import { readFileSync } from "node:fs";
import { join } from "node:path";

export function DiagramFigure({ fileName }: { fileName: string }) {
  const svgMarkup = readFileSync(
    join(process.cwd(), "public", "diagrams", fileName),
    "utf-8"
  );

  return (
    <figure className="diagram-light-island">
      <div
        className="scroll-x"
        dangerouslySetInnerHTML={{ __html: svgMarkup }}
      />
      <figcaption>Sơ đồ kiến trúc, đã lược bỏ chi tiết định danh hệ thống.</figcaption>
    </figure>
  );
}
