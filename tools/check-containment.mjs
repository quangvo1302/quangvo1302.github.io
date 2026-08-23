// Fails the build if a guarded client name appears anywhere it must not.
// Client names are permitted in rendered body text only. See spec section 9.
import { readdirSync, readFileSync, statSync, existsSync } from "node:fs";
import { join, relative, basename } from "node:path";

const GUARDED = [
  "Hiep Phu", "Hiệp Phú",
  "Vietnam Agribusiness",
  "Nam Duong", "Nam Dương",
  "EVNGenco", "EVN Genco",
  "Tra Vinh", "Trà Vinh",
];

// Guarded case-sensitively as a standalone token so ordinary words are not flagged.
const GUARDED_EXACT = ["VAL"];

// Fold to a comparison form: compatibility-normalize, strip diacritics, lowercase,
// and collapse every non-alphanumeric run to a single space. This makes
// "Hiệp Phú", "Hiep&nbsp;Phu", "hiep-phu" and "HIEP_PHU" all compare equal.
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

// ---- Built output ----------------------------------------------------------
for (const file of walk("public")) {
  const rel = relative("public", file);

  // Rule 1: no guarded name in any output path. Catches slugs and image names.
  for (const name of hits(rel)) flag(rel, "output path", name, rel);

  // Rule 2: no guarded name anywhere inside a diagram.
  if (file.endsWith(".svg")) {
    check(rel, "svg content", readFileSync(file, "utf8"));
    continue;
  }

  // Rule 3: sitemap and any other XML must be clean, since URLs appear there.
  if (file.endsWith(".xml")) {
    check(rel, "xml content", readFileSync(file, "utf8"));
    continue;
  }

  if (!file.endsWith(".html")) continue;
  const html = readFileSync(file, "utf8");

  // Rule 4: <title>
  check(rel, "<title>", (html.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1], {
    stripTags: true,
  });

  // Rule 5: every heading
  for (const m of html.matchAll(/<h([1-6])[^>]*>([\s\S]*?)<\/h\1>/gi)) {
    check(rel, `<h${m[1]}>`, m[2], { stripTags: true });
  }

  // Rule 6: every meta content attribute. Handles double, single and unquoted
  // forms, because --minify strips quotes from attribute values without spaces.
  for (const m of html.matchAll(/<meta\b[^>]*>/gi)) {
    for (const attr of parseAttributes(m[0])) {
      if (attr.name.toLowerCase() === "content") check(rel, "<meta content>", attr.value);
    }
  }

  // Rule 7: human-readable attributes and links must not carry guarded names.
  for (const m of html.matchAll(/<\s*[a-z][^>]*>/gi)) {
    for (const attr of parseAttributes(m[0])) {
      const name = attr.name.toLowerCase();
      if (name === "alt" || name === "title" || name === "aria-label" || name === "href") {
        check(rel, `attribute ${attr.name}`, attr.value);
      }
    }
  }

  // Rule 8: every JSON-LD block
  for (const m of html.matchAll(
    /<script[^>]*type=["']?application\/ld\+json["']?[^>]*>([\s\S]*?)<\/script>/gi
  )) {
    check(rel, "JSON-LD", m[1], { stripTags: true });
  }
}

// ---- Sources ---------------------------------------------------------------
// A violating filename or diagram label is easier to fix before it is rendered.
for (const file of walk("content")) {
  for (const name of hits(basename(file))) flag(file, "source filename", name, file);
}
for (const file of walk("diagrams")) {
  for (const name of hits(basename(file))) flag(file, "diagram filename", name, file);
  if (file.endsWith(".mmd")) check(file, "mermaid source", readFileSync(file, "utf8"));
}

if (violations.length) {
  console.error(`Containment check FAILED with ${violations.length} violation(s):\n`);
  for (const v of violations) {
    console.error(`  ${v.file}\n    ${v.where}: found "${v.name}"\n    in: ${v.text}\n`);
  }
  console.error("Client names are permitted in rendered body text only. See spec section 9.");
  process.exit(1);
}

console.log("Containment check passed.");
