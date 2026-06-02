// Génère un diaporama reveal.js à partir de slides_60min.md
// Les diapos sont séparées par une ligne « --- ». Tout ce qui suit « Note: »
// dans une diapo devient note du présentateur (touche S dans reveal).
const fs = require('fs');

const REVEAL = '5.1.0'; // version CDN

const md = fs.readFileSync('slides_60min.md', 'utf-8');

const html = `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>SDVFR Next — Diaporama 60 min</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@${REVEAL}/dist/reveal.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@${REVEAL}/dist/theme/white.css">
<style>
  :root {
    --accent: #2d5aa0;
    --accent2: #e8f0fe;
    --blockquote-bg: #fff8e1;
    --blockquote-border: #f9a825;
  }
  .reveal { font-family: 'Segoe UI', system-ui, -apple-system, sans-serif; }
  .reveal h1, .reveal h2, .reveal h3 { color: var(--accent); text-transform: none; letter-spacing: 0; }
  .reveal h1 { font-size: 1.9em; }
  .reveal h2 { font-size: 1.25em; margin-bottom: 0.5em; }
  .reveal section[data-background-color] h1,
  .reveal section[data-background-color] h2,
  .reveal section[data-background-color] h3,
  .reveal section[data-background-color] p { color: #fff; }
  .reveal strong { color: var(--accent); }
  .reveal section[data-background-color] strong { color: #ffe082; }
  /* encadré jaune sur diapo à fond coloré : garder un texte sombre lisible */
  .reveal section[data-background-color] blockquote,
  .reveal section[data-background-color] blockquote p { color: #1a1a2e; }
  .reveal section[data-background-color] blockquote strong { color: var(--accent); }
  .reveal ul { display: block; margin: 0; }
  .reveal li { margin: 0.25em 0; line-height: 1.3; font-size: 0.86em; }
  .reveal li li { font-size: 0.95em; }
  .reveal blockquote {
    background: var(--blockquote-bg);
    border-left: 5px solid var(--blockquote-border);
    border-radius: 0 8px 8px 0;
    box-shadow: none;
    width: 100%;
    font-size: 0.66em;
    font-style: normal;
    padding: 0.5em 0.9em;
    margin-top: 0.6em;
  }
  .reveal table { font-size: 0.78em; }
  .reveal table th { background: var(--accent); color: #fff; }
  .reveal table tr:nth-child(even) { background: var(--accent2); }
  .reveal .slide-number { background: var(--accent); }
</style>
</head>
<body>
<div class="reveal">
  <div class="slides">
    <section data-markdown
             data-separator="^\\r?\\n---\\r?\\n$"
             data-separator-notes="^Note:">
      <textarea data-template>
${md}
      </textarea>
    </section>
  </div>
</div>
<script src="https://cdn.jsdelivr.net/npm/reveal.js@${REVEAL}/dist/reveal.js"></script>
<script src="https://cdn.jsdelivr.net/npm/reveal.js@${REVEAL}/plugin/markdown/markdown.js"></script>
<script src="https://cdn.jsdelivr.net/npm/reveal.js@${REVEAL}/plugin/notes/notes.js"></script>
<script src="https://cdn.jsdelivr.net/npm/reveal.js@${REVEAL}/plugin/highlight/highlight.js"></script>
<script>
  Reveal.initialize({
    hash: true,
    slideNumber: 'c/t',
    transition: 'slide',
    width: 1100,
    height: 800,
    margin: 0.04,
    minScale: 0.2,
    maxScale: 1.8,
    plugins: [ RevealMarkdown, RevealNotes, RevealHighlight ],
  });
</script>
</body>
</html>`;

if (!fs.existsSync('docs')) fs.mkdirSync('docs');
fs.writeFileSync('docs/slides_60min.html', html);
console.log('✓ docs/slides_60min.html');
