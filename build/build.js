// Assemble l'appli en un seul fichier HTML autonome (polices, styles, contenu et code inclus).
// Sorties : www/index.html (appli Android / navigateur) et dist/incollable-ma.html (page web).
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');
const SRC = path.join(ROOT, 'src');
const FONTS = path.join(__dirname, 'node_modules', '@fontsource');

const faces = [
  ['Bricolage Grotesque', 'bricolage-grotesque/files/bricolage-grotesque-latin-700-normal.woff2', 700],
  ['Bricolage Grotesque', 'bricolage-grotesque/files/bricolage-grotesque-latin-800-normal.woff2', 800],
  ['IBM Plex Sans', 'ibm-plex-sans/files/ibm-plex-sans-latin-400-normal.woff2', 400],
  ['IBM Plex Sans', 'ibm-plex-sans/files/ibm-plex-sans-latin-500-normal.woff2', 500],
  ['IBM Plex Sans', 'ibm-plex-sans/files/ibm-plex-sans-latin-600-normal.woff2', 600],
  ['IBM Plex Mono', 'ibm-plex-mono/files/ibm-plex-mono-latin-500-normal.woff2', 500],
];
const fontCss = faces.map(([fam, file, w]) => {
  const b64 = fs.readFileSync(path.join(FONTS, file)).toString('base64');
  return `@font-face{font-family:'${fam}';font-style:normal;font-weight:${w};font-display:swap;src:url(data:font/woff2;base64,${b64}) format('woff2');}`;
}).join('\n');

const contentDir = path.join(SRC, 'content');
const contentFiles = fs.readdirSync(contentDir).filter((f) => f.endsWith('.js')).sort();
const content = contentFiles.map((f) => fs.readFileSync(path.join(contentDir, f), 'utf8')).join('\n');
const css = fs.readFileSync(path.join(SRC, 'app.css'), 'utf8');
const js = fs.readFileSync(path.join(SRC, 'app.js'), 'utf8');

const inner = `<title>Incollable M&A</title>
<style>
${fontCss}
${css}
</style>
<div id="app"></div>
<script>
${content}
</script>
<script>
${js}
</script>`;

const full = `<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover, user-scalable=no">
<meta name="theme-color" content="#0B6E5B">
<style>:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px);box-sizing:border-box;height:100%}</style>
</head>
<body>
${inner}
</body>
</html>`;

fs.mkdirSync(path.join(ROOT, 'www'), { recursive: true });
fs.mkdirSync(path.join(ROOT, 'dist'), { recursive: true });
fs.writeFileSync(path.join(ROOT, 'www', 'index.html'), full);
fs.writeFileSync(path.join(ROOT, 'dist', 'incollable-ma.html'), inner);
console.log('www/index.html', (full.length / 1024).toFixed(0) + ' Ko');
