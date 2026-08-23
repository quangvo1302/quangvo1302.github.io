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

// Fold to a comparison form: NFC-normalize, strip diacritics, lowercase,
// and collapse every non-alphanumeric run to a single space. This makes
// "Hiệp Phú", "Hiep&nbsp;Phu", "hiep-phu" and "HIEP_PHU" all compare equal.
function fold(s) {
  return s
    .normalize("NFD")
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

const FOLDED_GUARDED = GUARDED.map((n) => ({ name: n, folded: fold(n) }));

function hits(raw) {
  if (!raw) return [];
  const found = [];
  const text = decodeEntities(raw);
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
function check(file, where, text) {
  for (const name of hits(text)) flag(file, where, name, text);
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
  check(rel, "<title>", (html.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1]);

  // Rule 5: every <h1>
  for (const m of html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)) check(rel, "<h1>", m[1]);

  // Rule 6: every meta content attribute. Handles double, single and unquoted
  // forms, because --minify strips quotes from attribute values without spaces.
  for (const m of html.matchAll(
    /<meta[^>]*?content=(?:"([^"]*)"|'([^']*)'|([^\s>]+))[^>]*>/gi
  )) {
    check(rel, "<meta content>", m[1] ?? m[2] ?? m[3]);
  }

  // Rule 7: every JSON-LD block
  for (const m of html.matchAll(
    /<script[^>]*type=["']?application\/ld\+json["']?[^>]*>([\s\S]*?)<\/script>/gi
  )) {
    check(rel, "JSON-LD", m[1]);
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
