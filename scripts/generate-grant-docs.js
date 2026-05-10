const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const docsDir = path.join(root, "docs");
const outDir = path.join(root, "grant-docs");

const docs = [
  ["grant-brief", "Grant brief", "Main plain-English project brief."],
  ["plain-english-one-pager", "One-pager", "Short version for supporters and councillors."],
  ["site-and-traffic-note", "Site and traffic note", "Crossing, speed calming, 40 km/h extension and road-edge logic."],
  ["potable-water-note", "Potable water note", "Drinking fountain and service-route checks."],
  ["qr-activity-programmes", "QR activity programmes", "All-ages routine library that informs equipment choices."],
  ["site-checklist", "Site checklist", "Approvals, services, access, standards and quote checklist."],
  ["equipment-research", "Equipment research", "Outdoor fitness equipment options and coastal specification."],
  ["equipment-price-comparison", "Equipment price comparison", "Public price anchors and Australian quote lane."],
  ["grant-options", "Grant options", "Funding pathways and priority logic."],
  ["consultation-plan", "Consultation plan", "Questions for residents, campers, older users and Council."],
  ["comparable-projects", "Comparable projects", "Useful public examples and scale checks."],
  ["source-notes", "Source notes", "Evidence links and verification sources."],
];

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function inline(value) {
  let text = escapeHtml(value);
  text = text.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  text = text.replace(/(https?:\/\/[^\s<]+)/g, (url) => {
    const clean = url.replace(/[.)]+$/, "");
    const tail = url.slice(clean.length);
    return `<a href="${clean}" target="_blank" rel="noopener noreferrer">${clean}</a>${tail}`;
  });
  return text;
}

function isTableDivider(line) {
  return /^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?\s*$/.test(line);
}

function parseTable(lines, start) {
  const rows = [];
  let i = start;
  while (i < lines.length && lines[i].includes("|") && lines[i].trim()) {
    rows.push(lines[i]);
    i += 1;
  }
  const headers = rows[0].split("|").map((cell) => cell.trim()).filter(Boolean);
  const body = rows.slice(2).map((row) => row.split("|").map((cell) => cell.trim()).filter(Boolean));
  const headHtml = headers.map((cell) => `<th>${inline(cell)}</th>`).join("");
  const bodyHtml = body.map((row) => `<tr>${row.map((cell) => `<td>${inline(cell)}</td>`).join("")}</tr>`).join("");
  return {
    html: `<div class="table-wrap"><table><thead><tr>${headHtml}</tr></thead><tbody>${bodyHtml}</tbody></table></div>`,
    next: i,
  };
}

function parseList(lines, start, ordered) {
  const tag = ordered ? "ol" : "ul";
  const pattern = ordered ? /^\d+\.\s+(.+)$/ : /^-\s+(.+)$/;
  const items = [];
  let i = start;
  while (i < lines.length) {
    const match = lines[i].match(pattern);
    if (!match) break;
    items.push(`<li>${inline(match[1])}</li>`);
    i += 1;
  }
  return { html: `<${tag}>${items.join("")}</${tag}>`, next: i };
}

function markdownToHtml(markdown) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const html = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i].trim();
    if (!line) {
      i += 1;
      continue;
    }
    if (i + 1 < lines.length && lines[i].includes("|") && isTableDivider(lines[i + 1])) {
      const table = parseTable(lines, i);
      html.push(table.html);
      i = table.next;
      continue;
    }
    if (line.startsWith("### ")) {
      html.push(`<h3>${inline(line.slice(4))}</h3>`);
      i += 1;
      continue;
    }
    if (line.startsWith("## ")) {
      html.push(`<h2>${inline(line.slice(3))}</h2>`);
      i += 1;
      continue;
    }
    if (line.startsWith("# ")) {
      html.push(`<h2>${inline(line.slice(2))}</h2>`);
      i += 1;
      continue;
    }
    if (line.startsWith("> ")) {
      const quote = [];
      while (i < lines.length && lines[i].trim().startsWith("> ")) {
        quote.push(lines[i].trim().slice(2));
        i += 1;
      }
      html.push(`<blockquote><p>${inline(quote.join(" "))}</p></blockquote>`);
      continue;
    }
    if (/^-\s+/.test(line)) {
      const list = parseList(lines, i, false);
      html.push(list.html);
      i = list.next;
      continue;
    }
    if (/^\d+\.\s+/.test(line)) {
      const list = parseList(lines, i, true);
      html.push(list.html);
      i = list.next;
      continue;
    }
    const paragraph = [line];
    i += 1;
    while (i < lines.length && lines[i].trim() && !/^(#|>|-|\d+\.)\s/.test(lines[i].trim()) && !(i + 1 < lines.length && lines[i].includes("|") && isTableDivider(lines[i + 1]))) {
      paragraph.push(lines[i].trim());
      i += 1;
    }
    html.push(`<p>${inline(paragraph.join(" "))}</p>`);
  }
  return html.join("\n");
}

function page(slug, title, description, content) {
  return `<!doctype html>
<html lang="en-AU">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(title)} - Amity Outdoor Fitness</title>
  <link rel="stylesheet" href="../assets/site.css?v=20260510-1552">
</head>
<body>
  <header class="site-header">
    <a class="brand" href="../index.html"><span>A</span><strong>Amity Outdoor Fitness</strong></a>
    <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav">Menu</button>
    <nav id="site-nav" class="site-nav" aria-label="Main navigation"><a href="../index.html">Vision</a><a href="../site-access.html">Site</a><a href="../equipment.html">Gear</a><a href="../activity-plans.html">Activities</a><a href="../budget-funding.html">Budget</a><a href="../delivery-models.html">Delivery</a><a href="../evidence.html">Evidence</a><a href="../honour-board.html">Honour</a><a class="active" href="../grant-pack.html">Pack</a></nav>
  </header>

  <main>
    <section class="section doc-hero">
      <p class="kicker">Grant pack document</p>
      <h1>${escapeHtml(title)}</h1>
      <p class="lead">${escapeHtml(description)}</p>
      <div class="button-row">
        <a class="button ghost" href="../grant-pack.html">Back to grant pack</a>
        <a class="button primary" href="../docs/${slug}.md" download>Download Markdown</a>
      </div>
    </section>
    <article class="section doc-content">
${content}
    </article>
  </main>

  <nav class="page-flow" aria-label="Page flow">
    <a class="flow-link prev" href="../grant-pack.html"><span>Back</span>Grant pack</a>
  </nav>

  <script src="../assets/site.js?v=20260510-1552"></script>
</body>
</html>
`;
}

fs.mkdirSync(outDir, { recursive: true });

for (const [slug, title, description] of docs) {
  const markdown = fs.readFileSync(path.join(docsDir, `${slug}.md`), "utf8");
  const html = markdownToHtml(markdown);
  fs.writeFileSync(path.join(outDir, `${slug}.html`), page(slug, title, description, html), "utf8");
}

console.log(`Generated ${docs.length} grant document pages.`);
