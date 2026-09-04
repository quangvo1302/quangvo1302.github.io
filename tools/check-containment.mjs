// Fails the build if a guarded client name appears anywhere it must not.
// Client names are permitted in rendered body text only.
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { basename, join, relative } from "node:path";
import ts from "typescript-compiler-api";

const SOURCE_ONLY = process.argv.includes("--source-only");

const GUARDED = [
  "Hiep Phu", "Hiệp Phú",
  "Vietnam Agribusiness",
  "Nam Duong", "Nam Dương",
  "EVNGenco", "EVN Genco",
  "Tra Vinh", "Trà Vinh"
];

const GUARDED_EXACT = ["VAL"];

function fold(s) {
  return s
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\u0111/g, "d")
    .replace(/\u0110/g, "D")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function decodeEntities(s) {
  return s
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)));
}

function decodeJsonUnicodeEscapes(s) {
  return s
    .replace(
      /(?<!\\)\\u(d[89ab][0-9a-f]{2})(?<!\\)\\u(d[cdef][0-9a-f]{2})/gi,
      (_, high, low) => {
        const highCode = parseInt(high, 16);
        const lowCode = parseInt(low, 16);
        return String.fromCodePoint(
          ((highCode - 0xd800) << 10) + (lowCode - 0xdc00) + 0x10000
        );
      }
    )
    .replace(/(?<!\\)\\u([0-9a-f]{4})/gi, (_, h) =>
      String.fromCharCode(parseInt(h, 16))
    );
}

function stripHtmlTags(s) {
  return s.replace(/<[^>]*>/g, " ");
}

function comparisonText(raw, { stripTags = false } = {}) {
  let text = decodeJsonUnicodeEscapes(decodeEntities(raw));
  if (stripTags) text = stripHtmlTags(text);
  return text;
}

function parseAttributes(tag) {
  const attrSource = tag
    .replace(/^<\s*\/?\s*[^\s/>]+/, "")
    .replace(/\/?\s*>$/, "");
  const attrs = [];
  for (const m of attrSource.matchAll(
    /([^\s"'<>\/=]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g
  )) {
    attrs.push({ name: m[1], value: m[2] ?? m[3] ?? m[4] ?? "" });
  }
  return attrs;
}

const FOLDED_GUARDED = GUARDED.map((n) => ({ name: n, folded: fold(n) }));

function hits(raw, options) {
  if (!raw) return [];
  const found = [];
  const text = comparisonText(raw, options);
  const folded = fold(text);
  for (const g of FOLDED_GUARDED) {
    if (folded.includes(g.folded)) found.push(g.name);
  }
  for (const name of GUARDED_EXACT) {
    if (new RegExp(`\\b${name}\\b`).test(text)) found.push(name);
  }
  return [...new Set(found)];
}

function* walk(dir) {
  if (!existsSync(dir)) return;
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) yield* walk(full);
    else yield full;
  }
}

const violations = [];

function flag(file, where, name, text) {
  violations.push({ file, where, name, text: (text || "").trim().slice(0, 120) });
}

function check(file, where, text, options) {
  const normalized = text ? comparisonText(text, options) : text;
  for (const name of hits(text, options)) flag(file, where, name, normalized);
}

function propertyNameText(name) {
  if (ts.isIdentifier(name) || ts.isStringLiteral(name) || ts.isNumericLiteral(name)) {
    return name.text;
  }
  return name.getText();
}

function isBodyTextPath(path) {
  return path.includes("paragraphs") ||
    path.includes("sourceNote") ||
    path.includes("integratorView") ||
    path.includes("intro");
}

function scanTypeScriptData(file) {
  const source = readFileSync(file, "utf8");
  const sourceFile = ts.createSourceFile(
    file,
    source,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TS
  );

  function visit(node, path = []) {
    if (ts.isPropertyAssignment(node)) {
      visit(node.initializer, [...path, propertyNameText(node.name)]);
      return;
    }

    if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
      if (!isBodyTextPath(path)) {
        check(file, `source data ${path.join(".") || "(top-level string)"}`, node.text);
      }
    }

    ts.forEachChild(node, (child) => visit(child, path));
  }

  visit(sourceFile);
}

function scanSourceData() {
  for (const file of walk("src/data")) {
    for (const name of hits(basename(file))) flag(file, "source filename", name, file);
    if (file.endsWith(".ts")) scanTypeScriptData(file);
  }

  for (const file of walk("public")) {
    const rel = relative("public", file);
    for (const name of hits(rel)) flag(rel, "public path", name, rel);
    if (file.endsWith(".svg")) check(rel, "svg content", readFileSync(file, "utf8"));
    if (file.endsWith(".xml")) check(rel, "xml source", readFileSync(file, "utf8"));
  }
}

function scanBuiltOutput() {
  if (!existsSync("out")) {
    console.error("Containment check FAILED: missing out/. Run npm run build first.");
    process.exit(1);
  }

  for (const file of walk("out")) {
    const rel = relative("out", file);

    for (const name of hits(rel)) flag(rel, "output path", name, rel);

    if (file.endsWith(".svg")) {
      check(rel, "svg content", readFileSync(file, "utf8"));
      continue;
    }

    if (file.endsWith(".xml")) {
      check(rel, "xml content", readFileSync(file, "utf8"));
      continue;
    }

    if (!file.endsWith(".html")) continue;
    const html = readFileSync(file, "utf8");

    check(rel, "<title>", (html.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1], {
      stripTags: true
    });

    for (const m of html.matchAll(/<h([1-6])[^>]*>([\s\S]*?)<\/h\1>/gi)) {
      check(rel, `<h${m[1]}>`, m[2], { stripTags: true });
    }

    for (const m of html.matchAll(/<meta\b[^>]*>/gi)) {
      for (const attr of parseAttributes(m[0])) {
        if (attr.name.toLowerCase() === "content") check(rel, "<meta content>", attr.value);
      }
    }

    for (const m of html.matchAll(/<\s*[a-z][^>]*>/gi)) {
      for (const attr of parseAttributes(m[0])) {
        const name = attr.name.toLowerCase();
        if (name === "alt" || name === "title" || name === "aria-label" || name === "href") {
          check(rel, `attribute ${attr.name}`, attr.value);
        }
      }
    }

    for (const m of html.matchAll(
      /<script[^>]*type=["']?application\/ld\+json["']?[^>]*>([\s\S]*?)<\/script>/gi
    )) {
      check(rel, "JSON-LD", m[1], { stripTags: true });
    }
  }
}

scanSourceData();
if (!SOURCE_ONLY) scanBuiltOutput();

if (violations.length) {
  console.error(`Containment check FAILED with ${violations.length} violation(s):\n`);
  for (const v of violations) {
    console.error(`  ${v.file}\n    ${v.where}: found "${v.name}"\n    in: ${v.text}\n`);
  }
  console.error("Client names are permitted in rendered body text only.");
  process.exit(1);
}

console.log("Containment check passed.");
