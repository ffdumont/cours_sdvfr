const fs = require('fs');
const { marked } = require('marked');

// ---------------------------------------------------------------------------
// Identifiant de la vidéo YouTube (replay du cours, en "non répertorié").
// >>> Remplacer la valeur ci-dessous par l'ID réel après l'upload. <<<
// (l'ID est la partie après "v=" dans l'URL, ex. https://youtu.be/XXXXXXXXXXX)
const REPLAY_VIDEO_ID = 'peaGo83h6iw';
// ---------------------------------------------------------------------------

const NAV = `<div class="nav-bar">
  <span class="nav-title">SDVFR Next</span>
  <a href="index.html">Plan du cours</a>
  <a href="replay.html">Replay commenté</a>
  <a href="slides_60min.html">Diaporama 60 min</a>
  <a href="script_60min.html">Script 60 min</a>
  <a href="script.html">Script 75 min</a>
</div>`;

const STYLES = `<style>
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
    scroll-margin-top: 90px;
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
  td[id] { scroll-margin-top: 90px; }
  tbody tr:nth-child(even) { background: var(--table-stripe); }
  tbody tr:hover { background: var(--accent2); }
  tbody tr:target { background: #fff3cd; }
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
  /* --- Lecteur replay --- */
  .player-wrap {
    position: sticky;
    top: 2.5rem;
    z-index: 90;
    background: var(--bg);
    margin: 0 -1.5rem 1.5rem;
    padding: 0.6rem 1.5rem;
    border-bottom: 1px solid var(--border);
    box-shadow: 0 2px 6px rgba(0,0,0,0.06);
  }
  .player-box {
    position: relative;
    max-width: 520px;
    margin: 0 auto;
    aspect-ratio: 16 / 9;
    background: #000;
    border-radius: 8px;
    overflow: hidden;
  }
  .player-box iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }
  .player-msg {
    max-width: 520px; margin: 0 auto;
    background: var(--blockquote-bg);
    border: 1px solid var(--blockquote-border);
    border-radius: 8px; padding: 1rem; font-size: 0.9rem; text-align: center;
  }
  a[href^="#t="] {
    font-weight: 700;
    background: var(--accent2);
    padding: 0.05rem 0.45rem;
    border-radius: 5px;
    white-space: nowrap;
  }
  a[href^="#t="]:hover { background: #d6e4fb; text-decoration: none; }
  @media (max-width: 600px) {
    body { padding: 1rem; font-size: 0.95rem; }
    h1 { font-size: 1.5rem; }
    h2 { font-size: 1.2rem; }
    table { font-size: 0.82rem; }
    .nav-bar { flex-wrap: wrap; gap: 0.5rem; margin: -1rem -1rem 1rem; }
    .player-wrap { position: static; top: auto; margin: 0 -1rem 1rem; padding: 0.5rem 1rem; }
  }
  @media print {
    .nav-bar, .player-wrap { display: none; }
    h2 { break-before: page; }
    body { max-width: 100%; }
  }
</style>`;

const FOOTER = `<footer style="margin-top:3rem;padding-top:1rem;border-top:1px solid var(--border);color:#888;font-size:0.85rem;text-align:center;">
  Cours SDVFR Next &mdash; Généré à partir des <a href="https://www.youtube.com/playlist?list=PLmkb2zKUeBgMppHpCJ1raboyQe9yKhhTw">47 tutoriels vidéo SDVFR</a>
</footer>`;

const template = (title, body, { prebody = '', extraScripts = '' } = {}) => `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title}</title>
${STYLES}
</head>
<body>
${NAV}
${prebody}
${body}
${FOOTER}
${extraScripts}
</body>
</html>`;

// GitHub-compatible slug (lowercase, accents conservés, ponctuation retirée).
function slugify(text) {
  return text
    .replace(/&#0?39;|&#x27;|&rsquo;|&lsquo;|['’]/g, '')
    .replace(/&amp;/g, '')
    .replace(/&[a-z0-9]+;/gi, '')
    .replace(/<[^>]+>/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^\p{L}\p{N}\s-]/gu, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

// Post-traitement du HTML produit par marked :
//  - id sur les titres h1/h2/h3 (corrige les ancres de la table des matières)
//  - id sur les cellules de fiches (ex. <td>B2</td> -> <td id="B2">B2</td>)
function postProcess(html) {
  const seen = {};
  html = html.replace(/<h([1-3])>([\s\S]*?)<\/h\1>/g, (m, lvl, inner) => {
    let slug = slugify(inner);
    if (!slug) return m;
    if (seen[slug] != null) { seen[slug]++; slug = `${slug}-${seen[slug]}`; }
    else seen[slug] = 0;
    return `<h${lvl} id="${slug}">${inner}</h${lvl}>`;
  });
  html = html.replace(/<td>([A-I]\d{1,2})<\/td>/g, '<td id="$1">$1</td>');
  return html;
}

const files = [
  { src: 'cours_sdvfr_next.md', dst: 'docs/index.html', title: 'Cours SDVFR Next — Plan et fonctionnalités' },
  { src: 'script_cours_60min.md', dst: 'docs/script_60min.html', title: 'Cours SDVFR Next — Script 60 minutes (présentiel)' },
  { src: 'script_cours_75min.md', dst: 'docs/script.html', title: 'Cours SDVFR Next — Script 75 minutes' },
];

if (!fs.existsSync('docs')) fs.mkdirSync('docs');

for (const f of files) {
  const md = fs.readFileSync(f.src, 'utf-8');
  const html = postProcess(marked(md));
  fs.writeFileSync(f.dst, template(f.title, html));
  console.log(`✓ ${f.dst}`);
}

// --- Page spéciale : replay commenté (lecteur YouTube + sauts horodatés) ---
{
  const md = fs.readFileSync('replay_compagnon.md', 'utf-8');
  const body = postProcess(marked(md));
  const prebody = `<div class="player-wrap" id="player-wrap">
  <div class="player-box" id="player-box"><div id="yt-player"></div></div>
</div>`;
  const extraScripts = `<script>
  var REPLAY_VIDEO_ID = ${JSON.stringify(REPLAY_VIDEO_ID)};
  var ytPlayer = null;
  if (REPLAY_VIDEO_ID.indexOf('REMPLACER') !== -1) {
    document.getElementById('player-box').outerHTML =
      '<div class="player-msg">▶ La vidéo du replay n\\'est pas encore liée.<br>' +
      'Renseignez l\\'identifiant YouTube dans <code>build_html.js</code> (constante <code>REPLAY_VIDEO_ID</code>) puis régénérez la page. ' +
      'Les horodatages ci-dessous sont déjà fonctionnels.</div>';
  } else {
    var tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.head.appendChild(tag);
  }
  function onYouTubeIframeAPIReady() {
    ytPlayer = new YT.Player('yt-player', {
      videoId: REPLAY_VIDEO_ID,
      playerVars: { rel: 0, modestbranding: 1 }
    });
  }
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href^="#t="]');
    if (!a) return;
    e.preventDefault();
    var t = parseInt(a.getAttribute('href').slice(3), 10) || 0;
    if (ytPlayer && ytPlayer.seekTo) {
      ytPlayer.seekTo(t, true);
      if (ytPlayer.playVideo) ytPlayer.playVideo();
      var pw = document.getElementById('player-wrap');
      if (pw && pw.getBoundingClientRect().top < 0) pw.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.open('https://youtu.be/' + REPLAY_VIDEO_ID + '?t=' + t, '_blank');
    }
  });
</script>`;
  fs.writeFileSync('docs/replay.html', template('Cours SDVFR Next — Replay commenté', body, { prebody, extraScripts }));
  console.log('✓ docs/replay.html');
}
