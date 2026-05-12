const fs = require('fs');
const { marked } = require('marked');

const template = (title, body) => `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title}</title>
<style>
  :root {
    --bg: #ffffff;
    --fg: #1a1a2e;
    --accent: #2d5aa0;
    --accent2: #e8f0fe;
    --border: #d0d7de;
    --code-bg: #f6f8fa;
    --table-stripe: #f6f8fa;
    --blockquote-bg: #fff8e1;
    --blockquote-border: #f9a825;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
    color: var(--fg);
    background: var(--bg);
    line-height: 1.7;
    max-width: 960px;
    margin: 0 auto;
    padding: 2rem 1.5rem 4rem;
  }
  h1 {
    font-size: 2rem;
    border-bottom: 3px solid var(--accent);
    padding-bottom: 0.5rem;
    margin: 2rem 0 1rem;
    color: var(--accent);
  }
  h2 {
    font-size: 1.5rem;
    margin: 2.5rem 0 0.75rem;
    padding: 0.4rem 0.8rem;
    background: var(--accent);
    color: #fff;
    border-radius: 6px;
  }
  h3 {
    font-size: 1.2rem;
    margin: 1.8rem 0 0.5rem;
    color: var(--accent);
    border-left: 4px solid var(--accent);
    padding-left: 0.7rem;
  }
  h4 { font-size: 1.05rem; margin: 1.2rem 0 0.4rem; }
  p { margin: 0.5rem 0; }
  ul, ol { margin: 0.5rem 0 0.5rem 1.5rem; }
  li { margin: 0.25rem 0; }
  strong { color: var(--accent); }
  em { color: #555; }
  blockquote {
    border-left: 4px solid var(--blockquote-border);
    background: var(--blockquote-bg);
    padding: 0.8rem 1rem;
    margin: 1rem 0;
    border-radius: 0 6px 6px 0;
    font-style: italic;
  }
  blockquote p { margin: 0.2rem 0; }
  code {
    background: var(--code-bg);
    padding: 0.15rem 0.4rem;
    border-radius: 4px;
    font-size: 0.9em;
  }
  pre {
    background: var(--code-bg);
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: 1rem;
    overflow-x: auto;
    margin: 1rem 0;
  }
  pre code { background: none; padding: 0; }
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 1rem 0;
    font-size: 0.92rem;
  }
  thead th {
    background: var(--accent);
    color: #fff;
    font-weight: 600;
    text-align: left;
    padding: 0.6rem 0.8rem;
  }
  thead th:first-child { border-radius: 6px 0 0 0; }
  thead th:last-child { border-radius: 0 6px 0 0; }
  td {
    padding: 0.5rem 0.8rem;
    border-bottom: 1px solid var(--border);
  }
  tbody tr:nth-child(even) { background: var(--table-stripe); }
  tbody tr:hover { background: var(--accent2); }
  a { color: var(--accent); text-decoration: none; }
  a:hover { text-decoration: underline; }
  hr {
    border: none;
    border-top: 2px solid var(--border);
    margin: 2rem 0;
  }
  .nav-bar {
    position: sticky;
    top: 0;
    background: var(--accent);
    color: #fff;
    padding: 0.6rem 1rem;
    margin: -2rem -1.5rem 2rem;
    display: flex;
    gap: 1.5rem;
    align-items: center;
    z-index: 100;
    font-size: 0.9rem;
    box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  }
  .nav-bar a { color: #fff; font-weight: 500; }
  .nav-bar a:hover { opacity: 0.85; text-decoration: none; }
  .nav-title { font-weight: 700; margin-right: auto; }
  @media (max-width: 600px) {
    body { padding: 1rem; font-size: 0.95rem; }
    h1 { font-size: 1.5rem; }
    h2 { font-size: 1.2rem; }
    table { font-size: 0.82rem; }
    .nav-bar { flex-wrap: wrap; gap: 0.5rem; margin: -1rem -1rem 1rem; }
  }
  @media print {
    .nav-bar { display: none; }
    h2 { break-before: page; }
    body { max-width: 100%; }
  }
</style>
</head>
<body>
<div class="nav-bar">
  <span class="nav-title">SDVFR Next</span>
  <a href="index.html">Plan du cours</a>
  <a href="script_60min.html">Script 60 min</a>
  <a href="script.html">Script 75 min</a>
</div>
${body}
<footer style="margin-top:3rem;padding-top:1rem;border-top:1px solid var(--border);color:#888;font-size:0.85rem;text-align:center;">
  Cours SDVFR Next &mdash; Généré à partir des <a href="https://www.youtube.com/playlist?list=PLmkb2zKUeBgMppHpCJ1raboyQe9yKhhTw">47 tutoriels vidéo SDVFR</a>
</footer>
</body>
</html>`;

const files = [
  { src: 'cours_sdvfr_next.md', dst: 'docs/index.html', title: 'Cours SDVFR Next — Plan et fonctionnalités' },
  { src: 'script_cours_60min.md', dst: 'docs/script_60min.html', title: 'Cours SDVFR Next — Script 60 minutes (présentiel)' },
  { src: 'script_cours_75min.md', dst: 'docs/script.html', title: 'Cours SDVFR Next — Script 75 minutes' },
];

if (!fs.existsSync('docs')) fs.mkdirSync('docs');

for (const f of files) {
  const md = fs.readFileSync(f.src, 'utf-8');
  const html = marked(md);
  fs.writeFileSync(f.dst, template(f.title, html));
  console.log(`✓ ${f.dst}`);
}
