/* Incollable M&A — moteur de l'appli (vanilla JS, 100 % hors ligne). */
(function () {
  'use strict';

  /* ---------- Utilitaires ---------- */
  const $ = (s) => document.querySelector(s);
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const pct = (x) => Math.round(x * 100);
  const fmt = (n) => (typeof n === 'number' ? n.toLocaleString('fr-FR', { maximumFractionDigits: 3 }) : n);
  const dkey = (d = new Date()) => d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  const addDays = (k, n) => { const [y, m, d] = k.split('-').map(Number); return dkey(new Date(y, m - 1, d + n)); };
  const today = () => dkey();
  const mmss = (s) => { const a = Math.abs(Math.round(s)); return (s < 0 ? '+' : '') + Math.floor(a / 60) + ':' + String(a % 60).padStart(2, '0'); };
  const Cap = window.Capacitor && window.Capacitor.Plugins ? window.Capacitor.Plugins : null;
  const isNative = !!(window.Capacitor && window.Capacitor.isNativePlatform && window.Capacitor.isNativePlatform());

  /* ---------- Icônes ---------- */
  const P = {
    path: '<path d="M6 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM18 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/><path d="M8 17h5a3 3 0 0 0 0-6h-2a3 3 0 0 1 0-6h5"/>',
    review: '<path d="M3 12a9 9 0 0 1 15.5-6.2L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15.5 6.2L3 16"/><path d="M3 21v-5h5"/>',
    exam: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 3v2h6V3"/><path d="m9 13 2 2 4-4"/>',
    mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0"/><path d="M12 18v3"/>',
    chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
    flame: '<path d="M12 22c4 0 7-2.7 7-7 0-3.5-2.3-5.8-4-7.5-.4 2-1.4 3.3-3 4C12 8 11 4.5 8.5 2 8.6 6 5 8.5 5 14c0 4.3 3 8 7 8z"/>',
    bolt: '<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',
    x: '<path d="M18 6 6 18M6 6l12 12"/>',
    check: '<path d="M5 12.5 10 17 19 7"/>',
    star: '<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z" fill="currentColor"/>',
    chev: '<path d="m6 9 6 6 6-6"/>',
    right: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    back: '<path d="M19 12H5M11 18l-6-6 6-6"/>',
    gear: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
    book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5z"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"/>',
    sigma: '<path d="M18 7V4H6l6 8-6 8h12v-3"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
    trophy: '<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
    shuffle: '<path d="M16 3h5v5M4 20 21 3M21 16v5h-5M15 15l6 6M4 4l5 5"/>',
    weak: '<path d="M12 9v4M12 17h.01"/><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/>',
    layers: '<path d="m12 2 10 5-10 5L2 7z"/><path d="m2 17 10 5 10-5M2 12l10 5 10-5"/>',
    play: '<path d="M7 4v16l13-8z"/>',
    lock: '<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
    bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/>',
    flag: '<path d="M4 22V4M4 4h13l-2 4 2 4H4"/>',
  };
  const ic = (n, cls) => '<svg class="' + (cls || '') + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + P[n] + '</svg>';

  /* ---------- Contenu indexé ---------- */
  const UNITS = MA.units, Q = {}, LESSONS = {}, ALLQ = [], LESSON_LIST = [];
  UNITS.forEach((u, ui) => {
    u.n = ui + 1;
    u.lessons.forEach((l, li) => {
      l.unit = u; l.n = li + 1; LESSONS[l.id] = l; LESSON_LIST.push(l);
      l.qs.forEach((q, qi) => { q.id = l.id + '.' + qi; q.lesson = l; q.unit = u; Q[q.id] = q; ALLQ.push(q); });
    });
  });
  const AUTO = (q) => q.t !== 'open';
  const TYPE_LABEL = { mcq: 'QCM', tf: 'Vrai ou faux', num: 'Calcul', ord: 'Remets dans l’ordre', open: 'Question d’entretien' };

  /* ---------- Sauvegarde (localStorage + stockage natif sur Android) ---------- */
  const KEY = 'incollable-ma.v1';
  const DEF = () => ({ v: 1, ts: 0, xp: 0, days: {}, streak: { n: 0, last: null }, q: {}, lessons: {}, exams: [], sims: [], badges: {},
    set: { goal: 50, sound: true, haptic: true, theme: 'system', remind: null } });
  const hydrate = (o) => { const d = DEF(); o = o || {}; return Object.assign(d, o, { set: Object.assign(d.set, o.set || {}), streak: Object.assign(d.streak, o.streak || {}) }); };
  let st = DEF();
  function loadLocal() { try { const r = localStorage.getItem(KEY); if (r) return hydrate(JSON.parse(r)); } catch (e) { /* stockage indisponible */ } return null; }
  function save() {
    st.ts = Date.now();
    const s = JSON.stringify(st);
    try { localStorage.setItem(KEY, s); } catch (e) { /* ignore */ }
    if (Cap && Cap.Preferences) Cap.Preferences.set({ key: KEY, value: s }).catch(() => {});
  }

  /* ---------- XP, série, niveaux ---------- */
  const LEVELS = [[0, 'Stagiaire'], [150, 'Analyste 1'], [400, 'Analyste 2'], [800, 'Analyste 3'], [1400, 'Associate'], [2200, 'Vice President'], [3200, 'Director'], [4500, 'Managing Director']];
  function level() {
    let i = 0; while (i + 1 < LEVELS.length && st.xp >= LEVELS[i + 1][0]) i++;
    const cur = LEVELS[i][0], nxt = LEVELS[i + 1] ? LEVELS[i + 1][0] : null;
    return { i, name: LEVELS[i][1], next: LEVELS[i + 1] ? LEVELS[i + 1][1] : null, p: nxt ? (st.xp - cur) / (nxt - cur) : 1, toNext: nxt ? nxt - st.xp : 0 };
  }
  function gainXP(n) {
    n = Math.round(n); if (n <= 0) return;
    st.xp += n; const t = today(); st.days[t] = (st.days[t] || 0) + n;
    if (st.streak.last !== t) { st.streak.n = st.streak.last === addDays(t, -1) ? st.streak.n + 1 : 1; st.streak.last = t; }
  }
  const streakNow = () => { const t = today(); return st.streak.last === t || st.streak.last === addDays(t, -1) ? st.streak.n : 0; };
  const xpToday = () => st.days[today()] || 0;

  /* ---------- Répétition espacée (Leitner) ---------- */
  const IV = [0, 1, 3, 7, 14, 30];
  const MW = [0, 0.25, 0.5, 0.8, 1, 1];
  const qst = (id) => st.q[id] || { b: 0, due: null, ok: 0, ko: 0 };
  function record(q, correct) {
    const s = st.q[q.id] || (st.q[q.id] = { b: 0, due: null, ok: 0, ko: 0 });
    if (correct) { s.b = Math.min(5, s.b + 1); s.ok++; } else { s.b = 1; s.ko++; }
    s.due = addDays(today(), correct ? IV[s.b] : 0); s.last = today();
  }
  const dueList = () => ALLQ.filter((q) => { const s = st.q[q.id]; return s && s.b > 0 && s.due <= today(); });
  const weakList = () => ALLQ.filter((q) => { const s = st.q[q.id]; return s && s.ko > 0 && s.b <= 2; })
    .sort((a, b) => (qst(b.id).ko - qst(b.id).ok) - (qst(a.id).ko - qst(a.id).ok));
  const mastery = (qs) => qs.length ? qs.reduce((t, q) => t + MW[qst(q.id).b], 0) / qs.length : 0;
  const unitQs = (u) => u.lessons.flatMap((l) => l.qs);
  const masteredCount = () => ALLQ.filter((q) => qst(q.id).b >= 3).length;

  /* ---------- Feu vert entretien ---------- */
  const STAGES = ['Teaser', 'NDA', 'Phase 1', 'Phase 2', 'Signing', 'Closing'];
  const EXAM_N = 40, EXAM_PASS = 35;
  function readiness() {
    const lessonsDone = LESSON_LIST.filter((l) => st.lessons[l.id] && st.lessons[l.id].done).length;
    const pL = lessonsDone / LESSON_LIST.length;
    const m = mastery(ALLQ);
    const um = UNITS.map((u) => ({ u, m: mastery(unitQs(u)) }));
    const minU = um.reduce((a, b) => (b.m < a.m ? b : a));
    const pM = Math.min(1, m / 0.8) * 0.8 + Math.min(1, minU.m / 0.7) * 0.2;
    let streakPass = 0; for (let i = st.exams.length - 1; i >= 0 && st.exams[i].score >= EXAM_PASS; i--) streakPass++;
    const pE = Math.min(3, streakPass) / 3;
    const best = {}; st.sims.forEach((s) => { best[s.id] = Math.max(best[s.id] || 0, s.score); });
    const qual = Object.keys(best).filter((k) => best[k] >= 0.8);
    const superOk = qual.includes('s5');
    const pS = (Math.min(3, qual.filter((k) => k !== 's5').length) + (superOk ? 1 : 0)) / 4;
    const activeDays = Object.keys(st.days).filter((k) => st.days[k] > 0).length;
    const recent = [0, 1, 2].some((d) => (st.days[addDays(today(), -d)] || 0) > 0);
    const pR = Math.min(1, activeDays / 10) * (recent ? 1 : 0.9);
    const crit = [
      { t: 'Parcours terminé', s: lessonsDone + ' / ' + LESSON_LIST.length + ' leçons', p: pL, ok: pL >= 1 },
      { t: 'Maîtrise ≥ 80 %, aucune unité < 70 %', s: 'Maîtrise ' + pct(m) + ' % · unité la plus faible : ' + minU.u.title + ' (' + pct(minU.m) + ' %)', p: pM, ok: m >= 0.8 && minU.m >= 0.7 },
      { t: '3 examens blancs réussis d’affilée', s: streakPass >= 3 ? '3 réussis d’affilée' : streakPass + ' / 3 · seuil ' + EXAM_PASS + '/' + EXAM_N, p: pE, ok: streakPass >= 3 },
      { t: '4 simulations ≥ 80 %, dont le Superday', s: qual.length + ' validée' + (qual.length > 1 ? 's' : '') + ' · Superday ' + (superOk ? 'validé' : (best.s5 ? pct(best.s5) + ' %' : 'non tenté')), p: pS, ok: qual.length >= 4 && superOk },
      { t: '10 jours d’entraînement, actif ces 3 derniers jours', s: activeDays + ' jour' + (activeDays > 1 ? 's' : '') + (recent ? '' : ' · pas d’activité récente'), p: pR, ok: activeDays >= 10 && recent },
    ];
    const W = [0.15, 0.35, 0.2, 0.2, 0.1];
    const ready = crit.every((c) => c.ok);
    let score = crit.reduce((t, c, i) => t + W[i] * c.p, 0);
    score = ready ? 1 : Math.min(0.99, score);
    const stage = ready ? 5 : Math.min(4, Math.floor(score * 5));
    return { score, ready, stage, crit, um, m };
  }

  /* ---------- Badges ---------- */
  const BADGES = [
    ['first', 'Premier deal', 'flag', () => LESSON_LIST.some((l) => st.lessons[l.id] && st.lessons[l.id].done)],
    ['unit', 'Unité bouclée', 'layers', () => UNITS.some((u) => u.lessons.every((l) => st.lessons[l.id] && st.lessons[l.id].done))],
    ['s3', 'Série de 3 jours', 'flame', () => st.streak.n >= 3],
    ['s7', 'Série de 7 jours', 'flame', () => st.streak.n >= 7],
    ['s30', 'Série de 30 jours', 'flame', () => st.streak.n >= 30],
    ['m100', '100 questions maîtrisées', 'target', () => masteredCount() >= 100],
    ['exam', 'Examen réussi', 'exam', () => st.exams.some((e) => e.score >= EXAM_PASS)],
    ['perfect', 'Sans faute', 'star', () => st.exams.some((e) => e.score === EXAM_N)],
    ['sim', 'Prêt pour le 1er tour', 'mic', () => st.sims.some((s) => s.id === 's1' && s.score >= 0.8)],
    ['superday', 'Superday validé', 'trophy', () => st.sims.some((s) => s.id === 's5' && s.score >= 0.8)],
    ['all', 'Parcours complet', 'path', () => LESSON_LIST.every((l) => st.lessons[l.id] && st.lessons[l.id].done)],
    ['ready', 'Feu vert', 'check', () => readiness().ready],
  ];
  function checkBadges() {
    const fresh = [];
    BADGES.forEach(([id, name, , test]) => { if (!st.badges[id] && test()) { st.badges[id] = today(); fresh.push(name); } });
    return fresh;
  }

  /* ---------- Son et vibrations ---------- */
  let actx = null;
  function beep(ok) {
    if (!st.set.sound) return;
    try {
      actx = actx || new (window.AudioContext || window.webkitAudioContext)();
      const t = actx.currentTime, notes = ok ? [660, 990] : [196, 165];
      notes.forEach((f, i) => {
        const o = actx.createOscillator(), g = actx.createGain();
        o.type = ok ? 'sine' : 'triangle'; o.frequency.value = f;
        g.gain.setValueAtTime(0.0001, t + i * 0.09);
        g.gain.exponentialRampToValueAtTime(0.14, t + i * 0.09 + 0.02);
        g.gain.exponentialRampToValueAtTime(0.0001, t + i * 0.09 + 0.2);
        o.connect(g); g.connect(actx.destination); o.start(t + i * 0.09); o.stop(t + i * 0.09 + 0.22);
      });
    } catch (e) { /* audio indisponible */ }
  }
  function buzz(ms) { if (st.set.haptic && navigator.vibrate) try { navigator.vibrate(ms); } catch (e) { /* ignore */ } }

  /* ---------- Thème ---------- */
  function applyTheme() {
    const r = document.documentElement;
    if (st.set.theme === 'system') r.removeAttribute('data-theme'); else r.setAttribute('data-theme', st.set.theme);
  }

  /* ---------- Rappels (Android) ---------- */
  async function scheduleReminder() {
    if (!Cap || !Cap.LocalNotifications) return false;
    const LN = Cap.LocalNotifications;
    try {
      await LN.cancel({ notifications: [{ id: 1 }] });
      if (!st.set.remind) return true;
      const perm = await LN.requestPermissions();
      if (perm.display !== 'granted') { toast('Autorise les notifications dans les réglages Android'); return false; }
      const [h, m] = st.set.remind.split(':').map(Number);
      await LN.schedule({ notifications: [{ id: 1, title: 'Incollable M&A', body: 'Ta séance du jour t’attend. 10 minutes pour garder ta série.', schedule: { on: { hour: h, minute: m }, allowWhileIdle: true } }] });
      return true;
    } catch (e) { return false; }
  }

  /* ---------- Vue et navigation ---------- */
  const view = { tab: 'home', sub: null, arg: null, open: null };
  let S = null; // session en cours
  let sheet = null; // feuille modale
  let tickId = null;

  function go(tab, sub, arg) { view.tab = tab; view.sub = sub || null; view.arg = arg || null; S = null; sheet = null; render(false); }

  function render(keep) {
    const app = $('#app');
    const sc = keep ? (document.querySelector('.scroll') || document.querySelector('.p-body')) : null;
    const top = sc ? sc.scrollTop : 0;
    let html = S ? renderPlayer() : renderShell();
    if (sheet) html += sheet;
    app.innerHTML = html;
    if (keep) { const n = document.querySelector('.scroll') || document.querySelector('.p-body'); if (n) n.scrollTop = top; }
    const inp = document.getElementById('numin'); if (inp && S && !S.fb) inp.focus({ preventScroll: true });
    clearInterval(tickId); if (S && (S.kind === 'exam' || S.kind === 'sim') && !S.done) tickId = setInterval(tick, 1000);
  }

  function renderShell() {
    let body;
    if (view.sub === 'gloss') body = scrGloss();
    else if (view.sub === 'formulas') body = scrFormulas();
    else if (view.sub === 'settings') body = scrSettings();
    else if (view.sub === 'pick') body = scrPick();
    else if (view.sub === 'examlog') body = scrExamLog();
    else body = ({ home: scrHome, review: scrReview, exam: scrExam, sim: scrSim, prog: scrProg })[view.tab]();
    const due = dueList().length;
    const T = [['home', 'path', 'Parcours'], ['review', 'review', 'Réviser'], ['exam', 'exam', 'Examen'], ['sim', 'mic', 'Entretien'], ['prog', 'chart', 'Progrès']];
    return body + '<nav class="tabs" aria-label="Navigation">' + T.map(([k, i, l]) =>
      '<button data-a="tab" data-k="' + k + '" class="' + (view.tab === k && !view.sub ? 'on' : '') + '"><span class="ic">' + ic(i) +
      (k === 'review' && due ? '<span class="dot">' + (due > 99 ? '99+' : due) + '</span>' : '') + '</span>' + l + '</button>').join('') + '</nav>';
  }

  function topbar(title, extra) {
    return '<header class="top"><h1 class="grow">' + title + '</h1>' + (extra || '') + '</header>';
  }
  function subbar(title) {
    return '<header class="top"><button class="icon-btn" data-a="back" aria-label="Retour">' + ic('back') + '</button><h1 class="grow" style="font-size:20px">' + title + '</h1></header>';
  }
  const statChips = () => '<span class="chip brass ' + (streakNow() && xpToday() ? 'on' : '') + '" title="Série">' + ic('flame') + '<span class="num">' + streakNow() + '</span></span>' +
    '<span class="chip brass" title="XP">' + ic('bolt') + '<span class="num">' + st.xp + '</span></span>';

  /* ---------- Écran : Parcours ---------- */
  function nextLesson() { return LESSON_LIST.find((l) => !(st.lessons[l.id] && st.lessons[l.id].done)); }
  function ring(p) {
    const r = 21, c = 2 * Math.PI * r;
    return '<svg class="ring" viewBox="0 0 54 54"><circle class="tr" cx="27" cy="27" r="' + r + '"/><circle class="pg" cx="27" cy="27" r="' + r + '" stroke-dasharray="' + c.toFixed(1) + '" stroke-dashoffset="' + (c * (1 - Math.min(1, p))).toFixed(1) + '" transform="rotate(-90 27 27)"/></svg>';
  }
  function tombstone(R, compact) {
    const stg = STAGES.map((s, i) => '<span class="' + (i < R.stage || R.ready ? 'done' : i === R.stage ? 'now' : '') + '"></span>').join('');
    const lbl = STAGES.map((s, i) => i === R.stage ? '<b>' + s + '</b>' : '<span>' + s + '</span>').join('');
    return '<div class="tomb"' + (compact ? ' data-a="tab" data-k="prog" role="button" tabindex="0"' : '') + '><div class="tomb-in">' +
      '<div class="eyebrow">Mandat · Entretien M&A</div>' +
      '<div class="big num" style="margin-top:8px">' + pct(R.score) + '<span style="font-size:22px"> %</span></div>' +
      '<div style="font-weight:600;margin-top:4px">' + (R.ready ? 'Feu vert : tu es prêt pour l’entretien' : 'Statut : ' + STAGES[R.stage]) + '</div>' +
      '<div class="stages">' + stg + '</div><div class="stage-labels">' + lbl + '</div>' +
      (compact ? '<div class="small muted" style="margin-top:8px">' + R.crit.filter((c) => c.ok).length + ' critère' + (R.crit.filter((c) => c.ok).length > 1 ? 's' : '') + ' sur 5 validés · voir le détail</div>' : '') +
      '</div></div>';
  }
  function scrHome() {
    const L = level(), R = readiness(), nl = nextLesson(), goal = st.set.goal, xt = xpToday();
    if (view.open === null) view.open = nl ? nl.unit.id : null;
    let h = topbar('Incollable M&A', statChips()) + '<main class="scroll stack">';
    h += '<div class="card row" style="gap:14px">' + ring(xt / goal) +
      '<div class="grow"><div class="eyebrow">Objectif du jour</div><div style="font:700 17px/1.3 var(--f-display)"><span class="num">' + xt + '</span> / ' + goal + ' XP</div>' +
      '<div class="small muted">' + (xt >= goal ? 'Objectif atteint, bravo.' : 'Encore ' + (goal - xt) + ' XP pour valider ta journée.') + '</div></div></div>';
    h += '<div class="card"><div class="row"><div class="grow"><div class="eyebrow">Niveau</div><div style="font:700 17px var(--f-display)">' + L.name + '</div></div>' +
      '<div class="small muted">' + (L.next ? L.toNext + ' XP avant ' + L.next : 'Niveau maximum') + '</div></div><div class="bar brass" style="margin-top:10px"><i style="width:' + pct(L.p) + '%"></i></div></div>';
    h += tombstone(R, true);
    if (nl) {
      h += '<button class="btn" data-a="startLesson" data-id="' + nl.id + '">' + ic('play') + '<span>Continuer : ' + esc(nl.title) + '</span></button>';
    } else {
      const d = dueList().length;
      h += '<button class="btn" data-a="startReview" data-m="due">' + ic('review') + '<span>' + (d ? 'Révision du jour (' + d + ')' : 'Sprint de 10 questions') + '</span></button>';
    }
    h += '<div class="eyebrow" style="margin-top:6px">Programme · ' + UNITS.length + ' unités · ' + ALLQ.length + ' questions</div>';
    UNITS.forEach((u) => {
      const done = u.lessons.filter((l) => st.lessons[l.id] && st.lessons[l.id].done).length;
      const complete = done === u.lessons.length, open = view.open === u.id;
      const m = mastery(unitQs(u));
      h += '<section class="unit ' + (complete ? 'complete ' : '') + (open ? 'open' : '') + '">' +
        '<button class="unit-h" data-a="toggleUnit" data-id="' + u.id + '" aria-expanded="' + open + '"><span class="unit-n">' + String(u.n).padStart(2, '0') + '</span>' +
        '<span class="grow"><span class="t" style="display:block">' + esc(u.title) + '</span><span class="d" style="display:block">' + done + '/' + u.lessons.length + ' leçons · maîtrise ' + pct(m) + ' %</span>' +
        '<span class="bar" style="display:block;margin-top:7px;height:5px"><i style="width:' + pct(m) + '%"></i></span></span>' + ic('chev', 'chev') + '</button>';
      if (open) {
        h += '<div class="lessons">' + u.lessons.map((l) => {
          const ls = st.lessons[l.id], isDone = ls && ls.done, isNext = nl && nl.id === l.id;
          const stars = isDone ? '<span class="stars">' + [1, 2, 3].map((k) => '<span class="' + (k <= ls.stars ? '' : 'off') + '">' + ic('star') + '</span>').join('') + '</span>' : '';
          return '<button class="lesson ' + (isDone ? 'done' : '') + (isNext ? ' next' : '') + '" data-a="startLesson" data-id="' + l.id + '"><span class="node">' + (isDone ? ic('check') : isNext ? ic('play') : '<span class="num" style="font-size:13px;font-weight:700">' + u.n + '.' + l.n + '</span>') + '</span>' +
            '<span class="grow"><span class="lt" style="display:block">' + esc(l.title) + '</span><span class="small muted">' + l.cards.length + ' fiches · ' + l.qs.length + ' exercices ' + stars + '</span></span></button>';
        }).join('') + '</div>';
      }
      h += '</section>';
    });
    return h + '</main>';
  }

  /* ---------- Écran : Réviser ---------- */
  function scrReview() {
    const due = dueList().length, weak = weakList().length;
    const seen = ALLQ.filter((q) => qst(q.id).b > 0).length, mast = masteredCount();
    let h = topbar('Réviser', statChips()) + '<main class="scroll stack">';
    h += '<div class="card"><div class="eyebrow">Ta mémoire</div><div class="row" style="margin-top:10px;gap:4px;height:12px;border-radius:99px;overflow:hidden">' +
      '<i style="height:100%;background:var(--accent);width:' + (mast / ALLQ.length * 100) + '%"></i><i style="height:100%;background:var(--brass);width:' + ((seen - mast) / ALLQ.length * 100) + '%"></i><i style="height:100%;background:var(--surface-2);flex:1"></i></div>' +
      '<div class="row small" style="margin-top:8px;justify-content:space-between;flex-wrap:wrap"><span><b class="num">' + mast + '</b> maîtrisées</span><span><b class="num">' + (seen - mast) + '</b> en cours</span><span><b class="num">' + (ALLQ.length - seen) + '</b> jamais vues</span></div>' +
      '<p class="small muted" style="margin:10px 0 0">Chaque bonne réponse espace la prochaine révision (1, 3, 7, 14 puis 30 jours). Une erreur remet la question en tête de pile.</p></div>';
    h += '<div class="card"><div class="menu">' +
      mi('startReview', 'due', 'review', 'g', 'Révision du jour', due ? due + ' question' + (due > 1 ? 's' : '') + ' arrivée' + (due > 1 ? 's' : '') + ' à échéance' : 'Rien à revoir pour l’instant', due) +
      mi('startReview', 'weak', 'weak', 'r', 'Points faibles', weak ? 'Les questions que tu rates le plus' : 'Aucun point faible repéré', weak) +
      mi('startReview', 'sprint', 'shuffle', 'b', 'Sprint de 10 questions', 'Questions au hasard sur tout le programme', '') +
      mi('pickUnit', 'unit', 'layers', '', 'S’entraîner par unité', '10 questions sur le thème de ton choix', '') +
      mi('pickUnit', 'oral', 'mic', '', 'Questions d’entretien à l’oral', 'Réponds à voix haute puis compare à la réponse modèle', '') +
      '</div></div>';
    h += '<div class="card"><div class="menu">' + mi('sub', 'formulas', 'sigma', '', 'Formules clés', 'L’antisèche à relire avant l’entretien', '') + mi('sub', 'gloss', 'book', '', 'Lexique FR / EN', MA.glossary.length + ' termes', '') + '</div></div>';
    return h + '</main>';
  }
  function mi(a, m, icon, tone, t, s, cnt) {
    return '<button class="mi" data-a="' + a + '" data-m="' + m + '"><span class="ico ' + tone + '">' + ic(icon) + '</span><span class="grow"><span class="t" style="display:block">' + t + '</span><span class="s">' + s + '</span></span>' +
      (cnt !== '' && cnt != null ? '<span class="cnt">' + cnt + '</span>' : '') + ic('right', 'chev') + '</button>';
  }
  function scrPick() {
    const oral = view.arg === 'oral';
    let h = subbar(oral ? 'Questions d’entretien' : 'S’entraîner par unité') + '<main class="scroll stack"><div class="card"><div class="menu">';
    UNITS.forEach((u) => {
      const n = unitQs(u).filter((q) => (oral ? q.t === 'open' : true)).length;
      if (!n) return;
      h += '<button class="mi" data-a="startUnit" data-id="' + u.id + '" data-m="' + (oral ? 'oral' : 'mix') + '"><span class="unit-n" style="width:36px;height:36px;font-size:14px">' + String(u.n).padStart(2, '0') + '</span><span class="grow"><span class="t" style="display:block">' + esc(u.title) + '</span><span class="s">' + n + ' question' + (n > 1 ? 's' : '') + ' · maîtrise ' + pct(mastery(unitQs(u))) + ' %</span></span>' + ic('right', 'chev') + '</button>';
    });
    return h + '</div></div></main>';
  }

  /* ---------- Écran : Examen blanc ---------- */
  function scrExam() {
    const last = st.exams.slice(-5).reverse();
    let streakPass = 0; for (let i = st.exams.length - 1; i >= 0 && st.exams[i].score >= EXAM_PASS; i--) streakPass++;
    let h = topbar('Examen blanc', statChips()) + '<main class="scroll stack">';
    h += '<div class="card stack"><div class="eyebrow">Comme le code de la route</div><h2>' + EXAM_N + ' questions, chronométrées</h2>' +
      '<p class="muted" style="margin:0">QCM, vrai/faux, calculs et remises en ordre sur tout le programme technique. Pas de correction pendant l’épreuve : tu découvres ton score à la fin. Temps limité par question (25 s à 75 s selon le type).</p>' +
      '<div class="tiles"><div class="tile"><div class="v">' + EXAM_N + '</div><div class="l">questions</div></div><div class="tile"><div class="v">' + EXAM_PASS + '</div><div class="l">bonnes réponses pour réussir</div></div><div class="tile"><div class="v">≈ 25</div><div class="l">minutes</div></div></div>' +
      '<button class="btn" data-a="startExam">' + ic('play') + 'Commencer l’examen</button></div>';
    h += '<div class="card"><div class="row"><div class="grow"><div class="eyebrow">Objectif feu vert</div><div style="font:700 16px var(--f-display)">3 examens réussis d’affilée</div></div><div class="num" style="font:700 22px var(--f-mono)">' + Math.min(3, streakPass) + '/3</div></div>' +
      '<div class="stages" style="grid-template-columns:repeat(3,1fr)">' + [0, 1, 2].map((i) => '<span class="' + (i < streakPass ? 'done' : '') + '"></span>').join('') + '</div></div>';
    if (last.length) {
      h += '<div class="card"><div class="eyebrow" style="margin-bottom:4px">Derniers examens</div><div class="menu">' + last.map((e) =>
        '<div class="mi" style="cursor:default"><span class="ico ' + (e.score >= EXAM_PASS ? 'g' : 'r') + '">' + ic(e.score >= EXAM_PASS ? 'check' : 'x') + '</span><span class="grow"><span class="t" style="display:block"><span class="num">' + e.score + '/' + EXAM_N + '</span> · ' + (e.score >= EXAM_PASS ? 'Réussi' : 'Échoué') + '</span><span class="s">' + fdate(e.d) + '</span></span></div>').join('') + '</div>' +
        (st.exams.length > 5 ? '<button class="link" data-a="sub" data-m="examlog">Voir tout l’historique (' + st.exams.length + ')</button>' : '') + '</div>';
    }
    return h + '</main>';
  }
  function scrExamLog() {
    return subbar('Historique des examens') + '<main class="scroll"><div class="card"><div class="menu">' + st.exams.slice().reverse().map((e) =>
      '<div class="mi" style="cursor:default"><span class="ico ' + (e.score >= EXAM_PASS ? 'g' : 'r') + '">' + ic(e.score >= EXAM_PASS ? 'check' : 'x') + '</span><span class="grow"><span class="t num">' + e.score + '/' + EXAM_N + '</span><div class="s">' + fdate(e.d) + '</div></span></div>').join('') + '</div></div></main>';
  }
  const fdate = (k) => { const [y, m, d] = k.split('-').map(Number); return new Date(y, m - 1, d).toLocaleDateString('fr-FR', { weekday: 'short', day: 'numeric', month: 'short' }); };

  /* ---------- Écran : Simulations d'entretien ---------- */
  function scrSim() {
    const best = {}; st.sims.forEach((s) => { best[s.id] = Math.max(best[s.id] || 0, s.score); });
    let h = topbar('Entretien', statChips()) + '<main class="scroll stack">';
    h += '<div class="card"><div class="eyebrow">Comment ça marche</div><p style="margin:6px 0 0">Une question s’affiche avec un chrono. <b>Réponds à voix haute</b>, comme face au recruteur, puis compare à la réponse modèle et coche honnêtement les points clés que tu as cités. Les calculs se font de tête. Une série est validée à <b>80 %</b>.</p></div>';
    MA.sims.forEach((s) => {
      const n = s.src.reduce((t, x) => t + x[2], 0), b = best[s.id];
      h += '<div class="card stack" style="gap:10px"><div class="row"><div class="grow"><div class="eyebrow">' + s.level + ' · ' + n + ' questions</div><h2 style="font-size:18px;margin-top:3px">' + esc(s.title) + '</h2></div>' +
        (b != null ? '<span class="chip ' + (b >= 0.8 ? 'good' : '') + '">' + (b >= 0.8 ? ic('check') : '') + '<span class="num">' + pct(b) + ' %</span></span>' : '') + '</div>' +
        '<p class="small muted" style="margin:0">' + esc(s.desc) + '</p><button class="btn sm ' + (s.id === 's5' ? 'brass' : '') + '" style="align-self:flex-start" data-a="startSim" data-id="' + s.id + '">' + ic('play') + 'Lancer la simulation</button></div>';
    });
    return h + '</main>';
  }

  /* ---------- Écran : Progrès ---------- */
  function scrProg() {
    const R = readiness();
    let h = topbar('Progrès', '<button class="icon-btn" data-a="sub" data-m="settings" aria-label="Réglages">' + ic('gear') + '</button>') + '<main class="scroll stack">';
    h += tombstone(R, false);
    h += '<div class="card"><div class="eyebrow">Les 5 critères du feu vert</div><p class="small muted" style="margin:4px 0 2px">L’appli te déclare prêt quand les 5 sont validés en même temps.</p>' + R.crit.map((c) =>
      '<div class="crit ' + (c.ok ? 'ok' : '') + '"><span class="ck">' + ic('check') + '</span><div class="grow"><div class="t">' + c.t + '</div><div class="s">' + esc(c.s) + '</div><div class="bar" style="height:5px"><i style="width:' + pct(c.p) + '%"></i></div></div></div>').join('') + '</div>';
    h += '<div class="card"><div class="eyebrow" style="margin-bottom:6px">Maîtrise par unité</div>' + R.um.map(({ u, m }) =>
      '<div class="mrow"><span class="n">' + String(u.n).padStart(2, '0') + '</span><div style="min-width:0"><div class="l">' + esc(u.title) + '</div><div class="bar" style="height:6px"><i style="width:' + pct(m) + '%;' + (m < 0.7 ? 'background:var(--brass)' : '') + '"></i></div></div><span class="p">' + pct(m) + '%</span></div>').join('') + '</div>';
    const days = []; for (let i = 13; i >= 0; i--) days.push(addDays(today(), -i));
    const vals = days.map((d) => st.days[d] || 0), max = Math.max(st.set.goal * 1.25, ...vals);
    h += '<div class="card"><div class="row"><div class="eyebrow grow">Activité · 14 derniers jours</div><span class="small muted">pointillés = objectif</span></div><div class="chart" style="margin-top:12px">' +
      '<div class="goal" style="bottom:' + (st.set.goal / max * 100) + '%"></div>' + vals.map((v, i) => '<div class="c ' + (v ? '' : 'zero ') + (i === 13 ? 'today' : '') + '" style="height:' + Math.max(2, v / max * 100) + '%" title="' + v + ' XP"></div>').join('') + '</div>' +
      '<div class="chart-x">' + days.map((d, i) => '<span>' + (i % 2 === 1 || i === 13 ? Number(d.slice(8)) : '') + '</span>').join('') + '</div></div>';
    const seen = ALLQ.filter((q) => qst(q.id).b > 0), okT = seen.reduce((t, q) => t + qst(q.id).ok, 0), koT = seen.reduce((t, q) => t + qst(q.id).ko, 0);
    h += '<div class="tiles"><div class="tile"><div class="v">' + masteredCount() + '</div><div class="l">questions maîtrisées</div></div><div class="tile"><div class="v">' + (okT + koT ? pct(okT / (okT + koT)) + '%' : '–') + '</div><div class="l">bonnes réponses</div></div><div class="tile"><div class="v">' + st.streak.n + '</div><div class="l">série (jours)</div></div></div>';
    h += '<div class="card"><div class="eyebrow" style="margin-bottom:10px">Badges</div><div class="badges">' + BADGES.map(([id, name, icn]) =>
      '<div class="badge ' + (st.badges[id] ? 'on' : '') + '"><div class="bi">' + ic(st.badges[id] ? icn : 'lock') + '</div><div class="bt">' + name + '</div></div>').join('') + '</div></div>';
    h += '<div class="card"><div class="menu">' + mi('sub', 'formulas', 'sigma', '', 'Formules clés', 'L’antisèche à relire', '') + mi('sub', 'gloss', 'book', '', 'Lexique FR / EN', MA.glossary.length + ' termes', '') + mi('sub', 'settings', 'gear', '', 'Réglages', 'Objectif, rappels, sauvegarde', '') + '</div></div>';
    return h + '</main>';
  }

  /* ---------- Écrans outils ---------- */
  const FORMULAS = [
    ['Enterprise Value', 'EV = Equity value + Dette nette + Minoritaires + Actions de préf. + Provisions assimilées − Participations'],
    ['Free cash-flow unlevered', 'FCFF = EBIT × (1 − t) + D&A − Capex − ΔBFR'],
    ['WACC', 'WACC = E/(D+E) × Ke + D/(D+E) × Kd × (1 − t)'],
    ['CAPM', 'Ke = Rf + β × (Rm − Rf)'],
    ['Bêta désendetté / réendetté', 'βu = βL / [1 + (1 − t) × D/E]\nβL = βu × [1 + (1 − t) × D/E]'],
    ['Valeur terminale (Gordon)', 'VT = FCFn × (1 + g) / (WACC − g)  → actualiser sur n années'],
    ['Croissance implicite d’un multiple', 'g = (VT × WACC − FCF) / (VT + FCF)'],
    ['Actions diluées (TSM)', 'Dilution = Options × (1 − Prix d’exercice / Cours)'],
    ['LTM', 'LTM = Exercice N-1 + Cumul N − Cumul N-1'],
    ['BFR et délais', 'BFR = Stocks + Créances − Fournisseurs\nDSO = Créances / CA × 365'],
    ['TRI d’un flux unique', 'TRI = MOIC^(1/n) − 1\n2x/3 ans ≈ 26 % · 2x/5 ans ≈ 15 % · 2,5x/5 ans ≈ 20 % · 3x/5 ans ≈ 25 %'],
    ['Levier', 'Levier = Dette nette / EBITDA'],
    ['Goodwill', 'GW = Prix − (Actif net comptable + Réévaluations − IDP sur réévaluations)'],
    ['Accretion / dilution rapide', 'Rendement cible = 1 / P/E payé\nCoût titres = 1 / P/E acheteur · Coût dette = taux × (1 − t)\nRendement > coût pondéré → relutif'],
    ['Parité et prime', 'Parité = Prix offert / Cours de l’acheteur\nPrime = Prix offert / Cours de référence − 1'],
    ['Règle de 72', 'Années pour doubler ≈ 72 / taux (%)'],
  ];
  function scrFormulas() {
    return subbar('Formules clés') + '<main class="scroll"><div class="card">' + FORMULAS.map(([t, f]) =>
      '<div class="formula"><div style="font-weight:600">' + esc(t) + '</div><div class="f">' + esc(f).replace(/\n/g, '<br>') + '</div></div>').join('') + '</div></main>';
  }
  function glossItems(qv) {
    const s = (qv || '').toLowerCase();
    const items = MA.glossary.filter((g) => !s || g.join(' ').toLowerCase().includes(s));
    return items.length ? items.map((g) => '<div class="gloss"><div class="g1">' + esc(g[0]) + '</div><div class="g2">' + esc(g[1]) + '</div><div class="g3">' + esc(g[2]) + '</div></div>').join('') : '<p class="muted">Aucun terme ne correspond.</p>';
  }
  function scrGloss() {
    return subbar('Lexique FR / EN') + '<main class="scroll stack"><label class="search">' + ic('search') + '<input id="gq" type="search" placeholder="Chercher un terme (WACC, earn-out…)" autocomplete="off"></label><div class="card" id="glist">' + glossItems('') + '</div></main>';
  }
  function scrSettings() {
    const s = st.set;
    const sw = (k) => '<button class="switch ' + (s[k] ? 'on' : '') + '" data-a="toggleSet" data-k="' + k + '" role="switch" aria-checked="' + !!s[k] + '"></button>';
    let h = subbar('Réglages') + '<main class="scroll stack">';
    h += '<div class="card stack"><div class="eyebrow">Objectif quotidien</div><div class="seg">' + [[20, 'Cool · 20'], [50, 'Sérieux · 50'], [100, 'Intensif · 100']].map(([v, l]) => '<button class="' + (s.goal === v ? 'on' : '') + '" data-a="setGoal" data-v="' + v + '">' + l + '</button>').join('') + '</div><p class="small muted" style="margin:0">XP par jour. Une leçon rapporte environ 60 à 100 XP.</p></div>';
    h += '<div class="card"><div class="menu">' +
      '<div class="mi" style="cursor:default"><span class="grow t">Sons</span>' + sw('sound') + '</div>' +
      '<div class="mi" style="cursor:default"><span class="grow t">Vibrations</span>' + sw('haptic') + '</div></div></div>';
    h += '<div class="card stack"><div class="eyebrow">Thème</div><div class="seg">' + [['system', 'Système'], ['light', 'Clair'], ['dark', 'Sombre']].map(([v, l]) => '<button class="' + (s.theme === v ? 'on' : '') + '" data-a="setTheme" data-v="' + v + '">' + l + '</button>').join('') + '</div></div>';
    h += '<div class="card stack"><div class="eyebrow">Rappel quotidien</div><div class="row"><span class="grow">' + (s.remind ? 'Tous les jours à ' + s.remind : 'Désactivé') + '</span><input id="remind" class="field" type="time" style="width:auto" value="' + (s.remind || '19:00') + '"></div>' +
      '<div class="row" style="gap:8px"><button class="btn sm" data-a="setRemind">' + ic('bell') + (s.remind ? 'Mettre à jour' : 'Activer') + '</button>' + (s.remind ? '<button class="btn sm ghost" data-a="clearRemind">Désactiver</button>' : '') + '</div>' +
      (isNative ? '' : '<p class="small muted" style="margin:0">Les notifications fonctionnent dans l’appli Android installée.</p>') + '</div>';
    h += '<div class="card stack"><div class="eyebrow">Sauvegarde</div><p class="small muted" style="margin:0">Ta progression est enregistrée sur cet appareil. Pour la transférer, copie le code de sauvegarde et colle-le sur l’autre appareil.</p>' +
      '<div class="row" style="gap:8px;flex-wrap:wrap"><button class="btn sm ghost" data-a="exportData">Copier ma sauvegarde</button><button class="btn sm ghost" data-a="importOpen">Importer</button></div>' +
      '<textarea id="io" class="field" placeholder="Colle ici un code de sauvegarde" hidden></textarea><button class="btn sm" id="iobtn" data-a="importDo" hidden>Restaurer cette sauvegarde</button></div>';
    h += '<div class="card stack"><div class="eyebrow">Zone sensible</div><button class="btn sm bad" data-a="resetAsk">Remettre à zéro ma progression</button></div>';
    h += '<p class="small muted" style="text-align:center">Incollable M&A · ' + ALLQ.length + ' questions · ' + LESSON_LIST.length + ' leçons · ' + MA.sims.length + ' simulations</p>';
    return h + '</main>';
  }

  /* ---------- Sessions ---------- */
  function startSession(o) {
    S = Object.assign({ i: 0, res: [], fb: null, ans: null, done: false, xp: 0, t0: Date.now() }, o);
    if (S.kind === 'lesson' && S.cards.length && !S.skipCards) { S.phase = 'cards'; S.ci = 0; } else S.phase = 'q';
    prepQ(); sheet = null; render(false);
  }
  const curQ = () => S.items[S.i];
  function prepQ() {
    S.ans = null; S.fb = null; S.reveal = false; S.ticks = {};
    const q = curQ(); if (!q) return;
    if (q.t === 'mcq') S.perm = shuffle(q.o.map((_, k) => k));
    if (q.t === 'ord') { S.perm = shuffle(q.o.map((_, k) => k)); if (S.perm.every((v, k) => v === k) && q.o.length > 1) S.perm.reverse(); S.ans = []; }
    S.qStart = Date.now();
    S.limit = S.kind === 'exam' ? ({ mcq: 35, tf: 25, num: 75, ord: 60 })[q.t] : S.kind === 'sim' ? S.sec : null;
  }
  function parseNum(s) {
    if (s == null) return NaN;
    s = String(s).replace(/[\s  ]/g, '').replace(/−/g, '-').replace(',', '.').replace(/[^0-9.\-]/g, '');
    return s === '' || s === '-' ? NaN : Number(s);
  }
  function grade(q, a) {
    if (q.t === 'mcq' || q.t === 'tf') return a === q.a;
    if (q.t === 'num') { const v = parseNum(a); if (isNaN(v)) return false; const tol = (q.tol || 0) + 1e-9; return Math.abs(v - q.a) <= tol || (q.u === '%' && Math.abs(v * 100 - q.a) <= tol); }
    if (q.t === 'ord') return a.length === q.o.length && a.every((v, k) => v === k);
    return false;
  }
  const hasAnswer = (q) => q.t === 'mcq' || q.t === 'tf' ? S.ans !== null : q.t === 'num' ? !isNaN(parseNum(S.ans)) : q.t === 'ord' ? S.ans.length === q.o.length : S.reveal;
  const correctText = (q) => q.t === 'mcq' ? q.o[q.a] : q.t === 'tf' ? (q.a ? 'Vrai' : 'Faux') : q.t === 'num' ? fmt(q.a) + (q.u ? ' ' + q.u : '') : q.t === 'ord' ? q.o.map((x, k) => (k + 1) + '. ' + x).join(' → ') : '';
  const userText = (q, a) => a == null ? 'Pas de réponse' : q.t === 'mcq' ? q.o[a] : q.t === 'tf' ? (a ? 'Vrai' : 'Faux') : q.t === 'num' ? String(a) + (q.u ? ' ' + q.u : '') : q.t === 'ord' ? a.map((k) => q.o[k]).join(' → ') : '';

  function validate(timeout) {
    const q = curQ(); if (!q || S.fb) return;
    if (q.t === 'num') { const inp = document.getElementById('numin'); if (inp) S.ans = inp.value; }
    let ok, ratio = null;
    if (q.t === 'open') { const n = q.p.length; ratio = Object.keys(S.ticks).filter((k) => S.ticks[k]).length / n; ok = ratio >= 0.6; }
    else ok = !timeout && grade(q, S.ans);
    const first = !S.retry || !S.retry[q.id];
    const time = (Date.now() - S.qStart) / 1000;
    if (first) { record(q, ok); S.res.push({ q, ok, ratio, ans: S.ans, time, ticks: Object.assign({}, S.ticks) }); }
    let xp = 0;
    if (S.kind === 'exam') xp = ok ? 2 : 0;
    else if (S.kind === 'sim') xp = q.t === 'open' ? 6 * ratio : ok ? 6 : 0;
    else xp = first ? (q.t === 'open' ? 10 * ratio : ok ? 10 : 0) : (ok ? 3 : 0);
    S.xp += xp; gainXP(xp); save();
    if (S.kind === 'lesson' && !ok && first && q.t !== 'open') { S.retry = S.retry || {}; S.retry[q.id] = true; S.items.push(q); }
    if (S.kind === 'exam') { next(); return; }
    S.fb = { ok, ratio, xp: Math.round(xp) };
    if (q.t !== 'open') { beep(ok); if (!ok) buzz(120); }
    render(true);
  }
  function next() {
    S.i++;
    if (S.i >= S.items.length) return finish();
    prepQ(); render(false);
  }
  function finish() {
    S.done = true; clearInterval(tickId);
    const firsts = S.res, n = firsts.length;
    const score = n ? firsts.reduce((t, r) => t + (r.ratio != null ? r.ratio : r.ok ? 1 : 0), 0) / n : 0;
    S.score = score;
    if (S.kind === 'lesson') {
      const prev = st.lessons[S.lesson.id] || {}, stars = score >= 0.9 ? 3 : score >= 0.7 ? 2 : 1;
      st.lessons[S.lesson.id] = { done: true, best: Math.max(prev.best || 0, score), stars: Math.max(prev.stars || 0, stars) };
      S.stars = stars; gainXP(15); S.xp += 15;
    } else if (S.kind === 'exam') {
      const good = firsts.filter((r) => r.ok).length; S.good = good;
      st.exams.push({ d: today(), score: good });
      if (good >= EXAM_PASS) { gainXP(20); S.xp += 20; }
    } else if (S.kind === 'sim') {
      st.sims.push({ id: S.sim.id, d: today(), score });
    }
    S.badges = checkBadges();
    save(); render(false);
    if ((S.kind === 'exam' && S.good >= EXAM_PASS) || (S.kind === 'lesson' && S.stars === 3) || (S.kind === 'sim' && score >= 0.8) || S.badges.includes('Feu vert')) confetti();
  }

  /* ---------- Rendu du lecteur ---------- */
  function renderPlayer() {
    if (S.done) return renderEnd();
    if (S.phase === 'cards') return renderCards();
    const q = curQ(), total = S.items.length;
    const prog = S.kind === 'lesson' ? (S.i + (S.fb ? 1 : 0)) / total : S.i / total;
    let head = '<div class="p-top"><button class="icon-btn" data-a="quitAsk" aria-label="Quitter">' + ic('x') + '</button><div class="bar thick"><i style="width:' + pct(prog) + '%"></i></div>';
    if (S.kind === 'exam' || S.kind === 'sim') head += '<span class="timer num" id="tmr">' + mmss(S.limit - (Date.now() - S.qStart) / 1000) + '</span>';
    else head += '<span class="chip brass">' + ic('bolt') + '<span class="num">' + Math.round(S.xp) + '</span></span>';
    head += '</div>';
    if (S.kind === 'exam') head += '<div style="padding:0 16px"><div class="tbar"><i id="tbar" style="width:' + Math.max(0, 100 * (1 - (Date.now() - S.qStart) / 1000 / S.limit)) + '%"></i></div></div>';
    let b = '<div class="p-body">';
    const meta = S.kind === 'exam' ? 'Question ' + (S.i + 1) + ' / ' + total : S.kind === 'sim' ? 'Question ' + (S.i + 1) + ' / ' + total + ' · ' + esc(q.unit.title) : esc(q.unit.title);
    b += '<div class="row" style="flex-wrap:wrap;gap:8px"><span class="chip qtype">' + TYPE_LABEL[q.t] + '</span><span class="small muted">' + meta + '</span></div>';
    b += '<div class="qtext ' + (q.t === 'open' ? 'lg' : '') + '">' + esc(q.q) + '</div>';
    b += answerUI(q);
    b += '</div>';
    return '<div class="player">' + head + b + footer(q) + '</div>';
  }
  function answerUI(q) {
    const fb = S.fb, lock = !!fb;
    if (q.t === 'mcq') {
      return '<div class="opts">' + S.perm.map((k, idx) => {
        let c = S.ans === k ? 'sel' : '';
        if (fb) c = k === q.a ? 'right' : S.ans === k ? 'wrong' : '';
        return '<button class="opt ' + c + '" data-a="pick" data-v="' + k + '" ' + (lock ? 'disabled' : '') + '><span class="k">' + 'ABCDEF'[idx] + '</span><span class="grow">' + esc(q.o[k]) + '</span></button>';
      }).join('') + '</div>';
    }
    if (q.t === 'tf') {
      return '<div class="tf">' + [[true, 'Vrai'], [false, 'Faux']].map(([v, l]) => {
        let c = S.ans === v ? 'sel' : '';
        if (fb) c = v === q.a ? 'right' : S.ans === v ? 'wrong' : '';
        return '<button class="opt ' + c + '" data-a="pick" data-v="' + v + '" ' + (lock ? 'disabled' : '') + '>' + l + '</button>';
      }).join('') + '</div>';
    }
    if (q.t === 'num') {
      return '<label class="numwrap"><input id="numin" type="text" inputmode="decimal" autocomplete="off" placeholder="Ta réponse" value="' + esc(S.ans || '') + '" ' + (lock ? 'disabled' : '') + ' aria-label="Ta réponse">' + (q.u ? '<span class="u">' + esc(q.u) + '</span>' : '') + '</label>' +
        '<div class="hint">' + (q.tol ? 'Tolérance : ± ' + fmt(q.tol) + (q.u && q.u !== '%' && q.u !== 'x' ? ' ' + q.u : q.u === '%' ? ' point' : '') + '. ' : '') + 'Virgule ou point acceptés. Mets un signe moins si la variation est négative.</div>';
    }
    if (q.t === 'ord') {
      const placed = S.ans || [];
      return '<div class="ordbox">' + placed.map((k, idx) => '<button class="oitem placed" data-a="unplace" data-i="' + idx + '" ' + (lock ? 'disabled' : '') + '><span class="n">' + (idx + 1) + '</span>' + esc(q.o[k]) + '</button>').join('') + '</div>' +
        '<div class="ordbank">' + S.perm.map((k) => '<button class="oitem ' + (placed.includes(k) ? 'used' : '') + '" data-a="place" data-v="' + k + '" ' + (lock ? 'disabled' : '') + '>' + esc(q.o[k]) + '</button>').join('') + '</div>' +
        (fb && !fb.ok ? '<div class="answer"><div class="eyebrow" style="margin-bottom:6px">Bon ordre</div>' + q.o.map((x, k) => '<div><b class="num">' + (k + 1) + '.</b> ' + esc(x) + '</div>').join('') + '</div>' : '');
    }
    // question ouverte
    if (!S.reveal) {
      return '<div class="card flat stack" style="gap:8px"><div class="row" style="gap:8px">' + ic('mic', 'chev') + '<b>À toi de jouer</b></div><p class="small muted" style="margin:0">Réponds à voix haute, comme face au recruteur. Structure ta réponse (2 ou 3 idées), puis compare.' + (S.kind === 'sim' ? ' Vise moins de ' + Math.round(S.sec / 60 * 10) / 10 + ' minutes.' : '') + '</p></div>';
    }
    const n = q.p.length, k = Object.keys(S.ticks).filter((x) => S.ticks[x]).length;
    return '<div class="answer"><div class="eyebrow" style="margin-bottom:6px">Réponse modèle</div>' + esc(q.r) + '</div>' +
      '<div class="eyebrow">Coche les points que tu as cités (' + k + '/' + n + ')</div><div class="points">' + q.p.map((p, i) =>
        '<button class="pt ' + (S.ticks[i] ? 'on' : '') + '" data-a="tick" data-i="' + i + '" ' + (lock ? 'disabled' : '') + '><span class="box">' + ic('check') + '</span><span class="grow">' + esc(p) + '</span></button>').join('') + '</div>';
  }
  function footer(q) {
    if (S.fb) {
      const f = S.fb;
      const title = q.t === 'open' ? (f.ok ? 'Bien couvert' : 'À retravailler') + ' · ' + pct(f.ratio) + ' % des points' : f.ok ? pick(['Exact', 'Bien joué', 'Parfait', 'Juste']) : 'Pas tout à fait';
      let ex = '';
      if (q.t !== 'open') {
        if (!f.ok) ex += '<div><b>Bonne réponse :</b> ' + esc(correctText(q)) + '</div>';
        if (q.e) ex += '<div style="margin-top:4px">' + esc(q.e) + '</div>';
      }
      return '<div class="fb ' + (f.ok ? 'ok' : 'ko') + '"><div class="fbt">' + ic(f.ok ? 'check' : 'x') + '<span class="grow">' + title + '</span>' + (f.xp ? '<span class="chip brass">+' + f.xp + ' XP</span>' : '') + '</div>' +
        (ex ? '<div class="ex">' + ex + '</div>' : '') + '<button class="btn ' + (f.ok ? '' : 'bad') + '" data-a="next">Continuer</button></div>';
    }
    if (q.t === 'open' && !S.reveal) return '<div class="p-foot"><button class="btn" data-a="reveal">Voir la réponse modèle</button></div>';
    const lbl = S.kind === 'exam' ? (S.i + 1 === S.items.length ? 'Terminer l’examen' : 'Valider et suivante') : 'Valider';
    return '<div class="p-foot"><button class="btn" data-a="validate" ' + (hasAnswer(q) || q.t === 'num' ? '' : 'disabled') + '>' + lbl + '</button></div>';
  }
  const pick = (a) => a[Math.floor(Math.random() * a.length)];
  function renderCards() {
    const c = S.cards[S.ci], last = S.ci === S.cards.length - 1;
    return '<div class="player"><div class="p-top"><button class="icon-btn" data-a="quitAsk" aria-label="Quitter">' + ic('x') + '</button><div class="bar thick"><i style="width:' + pct((S.ci + 1) / (S.cards.length + 1)) + '%;background:var(--brass)"></i></div><button class="link" data-a="skipCards" style="padding:6px 8px">Exercices</button></div>' +
      '<div class="p-body"><div class="row" style="flex-wrap:wrap;gap:8px"><span class="chip">Fiche ' + (S.ci + 1) + ' / ' + S.cards.length + '</span><span class="small muted">' + esc(S.lesson.unit.title) + ' · ' + esc(S.lesson.title) + '</span></div>' +
      '<article class="lcard"><h2>' + esc(c[0]) + '</h2><div>' + c[1] + '</div></article><div class="dots">' + S.cards.map((_, i) => '<i class="' + (i === S.ci ? 'on' : '') + '"></i>').join('') + '</div></div>' +
      '<div class="p-foot row" style="gap:10px">' + (S.ci > 0 ? '<button class="btn ghost" style="width:auto" data-a="cardPrev" aria-label="Fiche précédente">' + ic('back') + '</button>' : '') +
      '<button class="btn" data-a="cardNext">' + (last ? 'C’est parti : ' + S.items.length + ' exercices' : 'Suivant') + '</button></div></div>';
  }
  function renderEnd() {
    const sc = S.score, n = S.res.length;
    let b = '<div class="p-body"><div class="result">';
    if (S.kind === 'lesson') {
      b += '<div class="eyebrow">Leçon terminée</div><h2 style="font-size:24px">' + esc(S.lesson.title) + '</h2>' +
        '<div class="stars big">' + [1, 2, 3].map((k) => '<span class="' + (k <= S.stars ? '' : 'off') + '">' + ic('star') + '</span>').join('') + '</div>';
    } else if (S.kind === 'exam') {
      const pass = S.good >= EXAM_PASS;
      b += '<div class="eyebrow">Examen blanc</div><div class="score num">' + S.good + '<small>/' + EXAM_N + '</small></div><span class="chip ' + (pass ? 'good' : 'bad') + '" style="font-size:15px;padding:7px 14px">' + (pass ? 'Réussi' : 'Échoué · seuil ' + EXAM_PASS) + '</span>';
    } else if (S.kind === 'sim') {
      b += '<div class="eyebrow">Simulation · ' + esc(S.sim.title) + '</div><div class="score num">' + pct(sc) + '<small>%</small></div><span class="chip ' + (sc >= 0.8 ? 'good' : '') + '" style="font-size:15px;padding:7px 14px">' + (sc >= 0.8 ? 'Niveau entretien atteint' : 'Objectif : 80 %') + '</span>';
    } else {
      b += '<div class="eyebrow">' + esc(S.title) + '</div><div class="score num">' + pct(sc) + '<small>%</small></div>';
    }
    const okN = S.res.filter((r) => r.ok).length;
    b += '<div class="tiles"><div class="tile"><div class="v">+' + Math.round(S.xp) + '</div><div class="l">XP gagnés</div></div><div class="tile"><div class="v">' + okN + '/' + n + '</div><div class="l">réussies</div></div><div class="tile"><div class="v">' + mmss((Date.now() - S.t0) / 1000) + '</div><div class="l">durée</div></div></div>';
    if (S.badges && S.badges.length) b += '<div class="card" style="width:100%"><div class="eyebrow">Nouveau badge</div><div style="font:700 17px var(--f-display);margin-top:4px">' + S.badges.map(esc).join(' · ') + '</div></div>';
    b += '</div>';
    if (S.kind === 'exam' || S.kind === 'sim') {
      const wrong = S.res.filter((r) => (r.ratio != null ? r.ratio < 0.6 : !r.ok));
      b += '<div class="card"><div class="eyebrow">' + (wrong.length ? 'À revoir (' + wrong.length + ')' : 'Aucune erreur') + '</div>' + wrong.map((r) =>
        '<div class="review-row"><div class="q">' + esc(r.q.q) + '</div>' + (r.q.t === 'open' ? '<div class="a muted">Points manqués : ' + esc(r.q.p.filter((_, i) => !(r.ticks && r.ticks[i])).join(' · ')) + '</div>'
          : '<div class="a y">Ta réponse : ' + esc(userText(r.q, r.ans)) + '</div><div class="a">Bonne réponse : <b>' + esc(correctText(r.q)) + '</b></div>' + (r.q.e ? '<div class="a muted">' + esc(r.q.e) + '</div>' : '')) + '</div>').join('') + '</div>';
    }
    b += '</div>';
    const again = S.kind === 'exam' ? '<button class="btn ghost" data-a="startExam">Repasser un examen</button>' : S.kind === 'sim' ? '<button class="btn ghost" data-a="startSim" data-id="' + S.sim.id + '">Relancer cette simulation</button>' : '';
    const nl = nextLesson();
    const cont = S.kind === 'lesson' && nl ? '<button class="btn" data-a="startLesson" data-id="' + nl.id + '">Leçon suivante : ' + esc(nl.title) + '</button><button class="btn ghost" data-a="exit">Retour au parcours</button>' : '<button class="btn" data-a="exit">Terminer</button>';
    return '<div class="player"><div class="p-top"><button class="icon-btn" data-a="exit" aria-label="Fermer">' + ic('x') + '</button><div class="grow"></div><span class="chip brass">' + ic('flame') + '<span class="num">' + streakNow() + '</span></span></div>' + b +
      '<div class="p-foot stack" style="gap:10px">' + cont + again + '</div></div>';
  }

  function tick() {
    if (!S || S.done || S.phase === 'cards') return;
    const left = S.limit - (Date.now() - S.qStart) / 1000;
    const t = document.getElementById('tmr');
    if (t) { t.textContent = mmss(left); t.classList.toggle('late', left < 0 || (S.kind === 'exam' && left < 8)); }
    const tb = document.getElementById('tbar'); if (tb) tb.style.width = Math.max(0, 100 * left / S.limit) + '%';
    if (S.kind === 'exam' && left <= 0) validate(true);
  }

  /* ---------- Construction des sessions ---------- */
  function lessonItems(l) { const qs = l.qs.slice(); return shuffle(qs.filter(AUTO)).concat(qs.filter((q) => !AUTO(q))); }
  function buildExam() {
    const alloc = { u1: 4, u2: 4, u3: 5, u4: 5, u5: 3, u6: 5, u7: 5, u8: 5, u10: 3, u11: 1 };
    let items = [];
    Object.keys(alloc).forEach((uid) => { const u = UNITS.find((x) => x.id === uid); items = items.concat(shuffle(unitQs(u).filter(AUTO)).slice(0, alloc[uid])); });
    return shuffle(items).slice(0, EXAM_N);
  }
  function buildSim(s) {
    let items = [];
    s.src.forEach(([uid, types, n]) => { const u = UNITS.find((x) => x.id === uid); const pool = shuffle(unitQs(u).filter((q) => types.includes(q.t) && !items.includes(q))); items = items.concat(pool.slice(0, n)); });
    const opens = items.filter((q) => q.t === 'open');
    const nums = items.filter((q) => q.t !== 'open');
    // alterne oral et calcul, fit d'abord comme dans un vrai entretien
    const fit = opens.filter((q) => q.unit.id === 'u9'), tech = shuffle(opens.filter((q) => q.unit.id !== 'u9'));
    const mixed = [...fit]; const rest = tech.slice(); nums.forEach((q, i) => rest.splice(Math.min(rest.length, i * 2 + 1), 0, q));
    return mixed.concat(rest);
  }

  /* ---------- Actions ---------- */
  const ACT = {
    tab: (d) => go(d.k),
    back: () => go(view.tab),
    sub: (d) => { view.sub = d.m; view.arg = null; render(false); },
    pickUnit: (d) => { view.sub = 'pick'; view.arg = d.m; render(false); },
    pick: (d) => { if (S) ACT.pickAns(d); },
    pickAns: (d) => { if (S.fb) return; const q = curQ(); S.ans = q.t === 'tf' ? d.v === 'true' : Number(d.v); if (st.set.haptic) buzz(8); render(true); },
    toggleUnit: (d) => { view.open = view.open === d.id ? '' : d.id; render(true); },
    startLesson: (d) => { const l = LESSONS[d.id]; startSession({ kind: 'lesson', lesson: l, cards: l.cards, items: lessonItems(l), title: l.title }); },
    startReview: (d) => {
      let items, title;
      if (d.m === 'due') { items = dueList().sort((a, b) => qst(a.id).b - qst(b.id).b).slice(0, 20); title = 'Révision du jour'; if (!items.length) { items = shuffle(ALLQ.filter(AUTO)).slice(0, 10); title = 'Sprint'; } }
      else if (d.m === 'weak') { items = weakList().slice(0, 12); title = 'Points faibles'; if (!items.length) return toast('Aucun point faible pour l’instant'); }
      else { const pool = ALLQ.filter((q) => AUTO(q)); items = shuffle(pool).slice(0, 10); title = 'Sprint'; }
      startSession({ kind: 'review', items: shuffle(items), title });
    },
    startUnit: (d) => {
      const u = UNITS.find((x) => x.id === d.id);
      let items = d.m === 'oral' ? shuffle(unitQs(u).filter((q) => q.t === 'open')).slice(0, 6)
        : shuffle(unitQs(u)).sort((a, b) => qst(a.id).b - qst(b.id).b).slice(0, 10);
      startSession({ kind: 'review', items: shuffle(items), title: u.title });
    },
    startExam: () => startSession({ kind: 'exam', items: buildExam(), title: 'Examen blanc' }),
    startSim: (d) => { const s = MA.sims.find((x) => x.id === d.id); startSession({ kind: 'sim', sim: s, sec: s.sec, items: buildSim(s), title: s.title }); },
    cardNext: () => { if (S.ci < S.cards.length - 1) { S.ci++; } else { S.phase = 'q'; prepQ(); } render(false); },
    cardPrev: () => { if (S.ci > 0) S.ci--; render(false); },
    skipCards: () => { S.phase = 'q'; prepQ(); render(false); },
    place: (d) => { if (S.fb) return; const v = Number(d.v); if (!S.ans.includes(v)) S.ans.push(v); buzz(8); render(true); },
    unplace: (d) => { if (S.fb) return; S.ans.splice(Number(d.i), 1); render(true); },
    reveal: () => { S.reveal = true; render(true); },
    tick: (d) => { if (S.fb) return; S.ticks[d.i] = !S.ticks[d.i]; buzz(8); render(true); },
    validate: () => {
      const q = curQ();
      if (q.t === 'num') { const inp = document.getElementById('numin'); const v = inp ? inp.value : ''; if (isNaN(parseNum(v))) { if (S.kind === 'exam') return validate(true); return toast('Entre un nombre'); } }
      validate(false);
    },
    next: () => next(),
    quitAsk: () => {
      if (S.kind === 'lesson' && S.phase === 'cards' && S.ci === 0) return ACT.exit();
      sheet = '<div class="sheet-bg" data-a="closeSheet"><div class="sheet" data-a="noop"><h2 style="font-size:20px">Quitter ' + (S.kind === 'exam' ? 'l’examen' : S.kind === 'sim' ? 'la simulation' : 'la séance') + ' ?</h2><p class="muted" style="margin:0">' +
        (S.kind === 'exam' ? 'L’examen ne sera pas comptabilisé.' : 'Tes réponses déjà données restent prises en compte dans ta révision.') + '</p><button class="btn" data-a="closeSheet">Continuer</button><button class="btn ghost" data-a="exit">Quitter</button></div></div>';
      render(true);
    },
    closeSheet: () => { sheet = null; render(true); },
    noop: () => {},
    exit: () => { const t = view.tab; S = null; sheet = null; go(t, view.sub, view.arg); },
    toggleSet: (d) => { st.set[d.k] = !st.set[d.k]; save(); render(true); },
    setGoal: (d) => { st.set.goal = Number(d.v); save(); render(true); },
    setTheme: (d) => { st.set.theme = d.v; applyTheme(); save(); render(true); },
    setRemind: async () => {
      const v = document.getElementById('remind').value || '19:00'; st.set.remind = v; save();
      const ok = await scheduleReminder(); render(true);
      toast(isNative ? (ok ? 'Rappel programmé à ' + v : 'Rappel enregistré') : 'Rappel enregistré, actif dans l’appli Android');
    },
    clearRemind: async () => { st.set.remind = null; save(); await scheduleReminder(); render(true); toast('Rappel désactivé'); },
    exportData: () => {
      const code = btoa(unescape(encodeURIComponent(JSON.stringify(st))));
      const ta = document.getElementById('io'); ta.hidden = false; ta.value = code;
      const done = () => toast('Sauvegarde copiée');
      try { navigator.clipboard.writeText(code).then(done, () => { ta.select(); toast('Sélectionne et copie le code'); }); } catch (e) { ta.select(); toast('Sélectionne et copie le code'); }
    },
    importOpen: () => { const ta = document.getElementById('io'); ta.hidden = false; ta.value = ''; document.getElementById('iobtn').hidden = false; ta.focus(); },
    importDo: () => {
      const v = (document.getElementById('io').value || '').trim();
      try { const o = JSON.parse(decodeURIComponent(escape(atob(v)))); if (!o || typeof o.xp !== 'number') throw new Error('format'); st = hydrate(o); save(); applyTheme(); toast('Sauvegarde restaurée'); go('prog'); }
      catch (e) { toast('Code invalide : copie-le en entier, sans espace'); }
    },
    resetAsk: () => {
      sheet = '<div class="sheet-bg" data-a="closeSheet"><div class="sheet" data-a="noop"><h2 style="font-size:20px">Tout remettre à zéro ?</h2><p class="muted" style="margin:0">XP, série, leçons, examens et simulations seront effacés. Cette action est définitive.</p><button class="btn bad" data-a="resetDo">Effacer ma progression</button><button class="btn ghost" data-a="closeSheet">Annuler</button></div></div>';
      render(true);
    },
    resetDo: () => { const set = st.set; st = DEF(); st.set = set; save(); sheet = null; toast('Progression remise à zéro'); go('home'); },
  };

  document.addEventListener('click', (e) => {
    const el = e.target.closest('[data-a]'); if (!el || el.disabled) return;
    const a = el.dataset.a;
    if (a === 'closeSheet' && el.classList.contains('sheet-bg') && e.target !== el) return;
    if (a === 'noop') return;
    if (ACT[a]) ACT[a](el.dataset, el, e);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.target.tagName === 'BUTTON') return;
    if (e.key === 'Enter' && S && !S.done && S.phase === 'q') {
      if (e.target.id === 'gq') return;
      e.preventDefault();
      if (S.fb) next(); else if (curQ().t === 'num') ACT.validate();
    }
    if (e.key === 'Enter' && e.target.getAttribute('role') === 'button') e.target.click();
  });
  document.addEventListener('input', (e) => {
    if (e.target.id === 'gq') document.getElementById('glist').innerHTML = glossItems(e.target.value);
    if (e.target.id === 'numin' && S) {
      S.ans = e.target.value;
      const b = document.querySelector('[data-a="validate"]'); if (b) b.disabled = false;
    }
  });

  /* ---------- Toast et confettis ---------- */
  let toastT = null;
  function toast(msg) {
    const old = document.querySelector('.toast'); if (old) old.remove();
    const t = document.createElement('div'); t.className = 'toast'; t.textContent = msg; $('#app').appendChild(t);
    clearTimeout(toastT); toastT = setTimeout(() => t.remove(), 2400);
  }
  function confetti() {
    if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const c = document.createElement('canvas'); c.className = 'confetti'; const app = $('#app'); app.appendChild(c);
    const w = c.width = app.clientWidth, h = c.height = app.clientHeight, ctx = c.getContext('2d');
    const cs = getComputedStyle(document.documentElement);
    const cols = ['--accent', '--brass', '--ink'].map((v) => cs.getPropertyValue(v).trim() || '#0B6E5B');
    const ps = Array.from({ length: 90 }, () => ({ x: w / 2 + (Math.random() - 0.5) * 80, y: h * 0.35, vx: (Math.random() - 0.5) * 9, vy: -Math.random() * 9 - 3, r: Math.random() * 6 + 3, a: Math.random() * 6, c: cols[Math.floor(Math.random() * 3)] }));
    let f = 0;
    (function step() {
      ctx.clearRect(0, 0, w, h);
      ps.forEach((p) => { p.vy += 0.28; p.x += p.vx; p.y += p.vy; p.a += 0.15; ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.a); ctx.fillStyle = p.c; ctx.fillRect(-p.r / 2, -p.r / 4, p.r, p.r / 2); ctx.restore(); });
      if (++f < 120) requestAnimationFrame(step); else c.remove();
    })();
  }

  /* ---------- Démarrage ---------- */
  async function boot() {
    st = loadLocal() || DEF();
    if (Cap && Cap.Preferences) {
      try { const r = await Cap.Preferences.get({ key: KEY }); if (r && r.value) { const o = hydrate(JSON.parse(r.value)); if (!st.ts || o.ts > st.ts) st = o; } } catch (e) { /* ignore */ }
    }
    applyTheme();
    if (Cap && Cap.App) {
      Cap.App.addListener('backButton', () => {
        if (sheet) { sheet = null; render(true); }
        else if (S && !S.done) ACT.quitAsk();
        else if (S) ACT.exit();
        else if (view.sub) go(view.tab);
        else if (view.tab !== 'home') go('home');
        else Cap.App.exitApp();
      });
    }
    if (Cap && Cap.StatusBar) { try { Cap.StatusBar.setOverlaysWebView({ overlay: false }); } catch (e) { /* ignore */ } }
    render(false);
  }
  window.__incollable = { get state() { return st; }, readiness, ALLQ, grade, parseNum };
  boot();
})();
