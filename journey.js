/* journey.js: interviewer persona and chat look, spoken questions, interview rounds, progress, badges and app install.
   Loaded after coach.js. Uses its globals: items, answers, sIdx, ROUNDS, analyseItem, avg, $, esc, curRole. */

const JY = (() => {
  const KEY = "ip_sessions";
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let token = 0;
  const load = () => { try { return JSON.parse(localStorage.getItem(KEY) || "[]"); } catch { return []; } };
  const store = h => { try { localStorage.setItem(KEY, JSON.stringify(h.slice(-60))); } catch {} };
  const dayNo = t => Math.floor((t - new Date(t).getTimezoneOffset() * 60000) / 864e5);
  const short = (t, n) => { t = String(t || "").replace(/^\[[^\]]+\]\s*/, ""); return t.length > n ? t.slice(0, n - 1) + "…" : t; };
  const presentRounds = () => [...new Set(items.map(i => i.round))].sort((a, b) => a - b);

  /* ---------- Round scoring ---------- */
  function roundScore(r) {
    const sc = [];
    let fix = "";
    items.forEach((it, i) => {
      if (it.round !== r) return;
      const x = analyseItem(it, answers[i]);
      if (x.skipped) return;
      sc.push(x.score);
      if (!fix && x.fix && x.fix.length && x.score < 70) fix = x.fix[0];
    });
    return { score: sc.length ? Math.round(sc.reduce((a, b) => a + b, 0) / sc.length) : null, fix, n: sc.length };
  }
  function verdict(score, who) {
    if (score == null) return { key: "na", label: "No answers", line: `${who}: "We did not get to talk much in this round."` };
    if (score >= 70) return { key: "pass", label: "Moving forward", line: `${who}: "Thank you, that was clear and well supported. Let's move you on."` };
    if (score >= 55) return { key: "maybe", label: "On the fence", line: `${who}: "Some good points, but a few answers need more evidence. We would like to continue."` };
    return { key: "no", label: "Needs work", line: `${who}: "I have some concerns about depth and clarity here. Practise these points, then try again."` };
  }

  /* ---------- Journey path and round cards ---------- */
  function pathHtml(cur, results) {
    const rs = presentRounds();
    return `<ol class="path">${rs.map((r, k) => {
      const v = results[r], st = v ? "done" : r === cur ? "cur" : "todo";
      return `<li class="${st}"><span class="dot">${v ? "✓" : k + 1}</span><b>${esc(ROUNDS[r].name)}</b><small>${v ? esc(v.label) : st === "cur" ? "Now" : "Next"}</small></li>`;
    }).join("")}</ol>`;
  }
  let results = {};
  function showCard(html) {
    $("qui").classList.add("hide");
    const c = $("roundCard"); c.innerHTML = html; c.classList.remove("hide");
    c.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  }
  function hideCard() { $("roundCard").classList.add("hide"); $("qui").classList.remove("hide"); }
  function introHtml(r) {
    const R = ROUNDS[r], n = items.filter(i => i.round === r).length, rs = presentRounds();
    return `${pathHtml(r, results)}
      <div class="rc"><span class="av big">${esc(R.who[0])}</span>
      <div><h2>${esc(R.name)}</h2><p class="note">Round ${rs.indexOf(r) + 1} of ${rs.length}. You meet ${esc(R.who)}, ${esc(R.role.toLowerCase())}. ${esc(R.intro)} About ${n} question${n === 1 ? "" : "s"}.</p></div></div>`;
  }
  function begin() {
    results = {};
    const r = items[0].round;
    showCard(introHtml(r) + `<button id="rcGo">Start the ${esc(ROUNDS[r].name.toLowerCase())}</button>`);
    $("rcGo").onclick = () => { hideCard(); showItem(); };
  }
  function roundBreak(r, nextR, cont) {
    const R = ROUNDS[r], rs = roundScore(r), v = verdict(rs.score, R.who);
    results[r] = { ...v, score: rs.score };
    showCard(`${pathHtml(nextR, results)}
      <div class="rc"><span class="av big">${esc(R.who[0])}</span><div><h2>${esc(R.name)} done</h2>
      <div class="vd ${v.key}">${esc(v.label)}${rs.score != null ? `, ${rs.score}/100` : ""}</div>
      <p>${esc(v.line)}</p>${rs.fix && v.key !== "pass" ? `<p class="note">Work on: ${esc(rs.fix)}</p>` : ""}</div></div>
      <div class="rc next"><span class="av big">${esc(ROUNDS[nextR].who[0])}</span><div><h3>Next: ${esc(ROUNDS[nextR].name)}</h3><p class="note">${esc(ROUNDS[nextR].who)}, ${esc(ROUNDS[nextR].role.toLowerCase())}. ${esc(ROUNDS[nextR].intro)}</p></div></div>
      <button id="rcGo">Start the ${esc(ROUNDS[nextR].name.toLowerCase())}</button>`);
    $("rcGo").onclick = () => { hideCard(); cont(); };
  }

  /* ---------- Chat look, typing and spoken questions ---------- */
  function speak(text) {
    try {
      if (!("speechSynthesis" in window)) return;
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(String(text).replace(/^\[[^\]]+\]\s*/, "").slice(0, 400));
      speechSynthesis.speak(u);
    } catch {}
  }
  function transcript(it) {
    const rows = [];
    for (let i = sIdx - 1; i >= 0 && rows.length < 3; i--) {
      if (items[i].round !== it.round) break;
      const a = answers[i], x = items[i];
      const ans = x.type === "code" ? (a.code && a.code !== (a.starter || x.prob.starter) ? "(code submitted)" : "") : x.type === "solve" && x.ans != null ? (a.num || a.text) : a.text;
      rows.unshift(`<div class="msg q"><p>${esc(short(x.type === "code" ? x.t : x.t, 150))}</p></div><div class="msg me"><p>${ans && ans.trim() ? esc(short(ans.trim(), 150)) : "<i>skipped</i>"}</p></div>`);
    }
    return rows.join("");
  }
  function enhance() {
    const it = items[sIdx], R = ROUNDS[it.round];
    $("av").textContent = R.who[0];
    $("whoName").textContent = R.who;
    $("whoRole").textContent = it.fu ? R.role + ", follow-up" : R.role;
    $("chatLog").innerHTML = transcript(it);
    const full = $("sQ").textContent, my = ++token;
    const sp = $("speak"); sp.classList.toggle("hide", !("speechSynthesis" in window));
    sp.onclick = () => speak(full);
    const show = () => { if (my !== token) return; $("sQ").textContent = full; if ($("tts").checked) speak(it.type === "code" ? it.t : full); };
    if (reduce) { show(); return; }
    $("sQ").innerHTML = '<span class="dots" aria-label="typing"><i></i><i></i><i></i></span>';
    setTimeout(show, 450 + Math.min(700, full.length * 5));
  }
  const _show = showItem;
  showItem = function () { _show(); enhance(); };
  const _leave = leaveItem;
  leaveItem = function () { token++; try { speechSynthesis.cancel(); } catch {} _leave(); };

  /* ---------- Progress, streaks and badges ---------- */
  function streaks(h) {
    const days = [...new Set(h.map(x => dayNo(x.d)))].sort((a, b) => a - b);
    let best = 0, run = 0, prev = null;
    days.forEach(d => { run = prev !== null && d === prev + 1 ? run + 1 : 1; best = Math.max(best, run); prev = d; });
    const today = dayNo(Date.now()); let cur = 0, d = days.includes(today) ? today : days.includes(today - 1) ? today - 1 : null;
    while (d !== null && days.includes(d)) { cur++; d--; }
    return { cur, best };
  }
  const BADGES = [
    ["first", "First interview", "Finish one session", (h) => h.length >= 1],
    ["five", "Five sessions", "Finish 5 sessions", (h) => h.length >= 5],
    ["s3", "3-day streak", "Practise 3 days in a row", (h, s) => s.best >= 3],
    ["s7", "7-day streak", "Practise 7 days in a row", (h, s) => s.best >= 7],
    ["p75", "Score 75+", "Score 75 or more", (h) => h.some(x => x.score >= 75)],
    ["clear", "Cleared every round", "Pass all rounds in one session", (h) => h.some(x => x.cleared)],
    ["press", "Pressure tested", "Finish a pressure-mode session", (h) => h.some(x => x.press)],
    ["climb", "On the way up", "Beat your first score by 10 points", (h) => h.length >= 3 && h[h.length - 1].score >= h[0].score + 10]
  ];
  const earned = h => { const s = streaks(h); return BADGES.filter(b => b[3](h, s)).map(b => b[0]); };

  function lineChart(h) {
    const pts = h.slice(-10), W = 320, H = 110, px = 28, py = 12;
    if (pts.length < 2) return "";
    const x = i => px + (W - px - 8) * i / (pts.length - 1), y = v => H - py - (H - 2 * py) * v / 100;
    const grid = [0, 50, 100].map(v => `<line x1="${px}" x2="${W - 8}" y1="${y(v)}" y2="${y(v)}" class="gl"/><text x="2" y="${y(v) + 4}" class="gt">${v}</text>`).join("");
    const line = pts.map((p, i) => `${i ? "L" : "M"}${x(i).toFixed(1)} ${y(p.score).toFixed(1)}`).join(" ");
    const dots = pts.map((p, i) => `<circle cx="${x(i).toFixed(1)}" cy="${y(p.score).toFixed(1)}" r="3.5" class="gd"><title>${p.score}</title></circle>`).join("");
    return `<svg viewBox="0 0 ${W} ${H}" class="chart" role="img" aria-label="Scores over your last ${pts.length} sessions">${grid}<path d="${line}" class="gline"/>${dots}</svg>`;
  }
  function radar(cats) {
    const keys = Object.keys(cats), n = keys.length, R = 70, cx = 170, cy = 105;
    const pt = (i, v) => { const a = -Math.PI / 2 + 2 * Math.PI * i / n; return [cx + R * v / 100 * Math.cos(a), cy + R * v / 100 * Math.sin(a)]; };
    const ring = f => keys.map((_, i) => pt(i, 100 * f).map(z => z.toFixed(1)).join(",")).join(" ");
    const poly = keys.map((k, i) => pt(i, cats[k] == null ? 0 : cats[k]).map(z => z.toFixed(1)).join(",")).join(" ");
    const labels = keys.map((k, i) => { const [x, y] = pt(i, 128); return `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}" text-anchor="${x < cx - 8 ? "end" : x > cx + 8 ? "start" : "middle"}" class="rt">${esc(k)} ${cats[k] == null ? "" : cats[k]}</text>`; }).join("");
    return `<svg viewBox="0 0 340 215" class="radar" role="img" aria-label="Skills radar">${[0.33, 0.66, 1].map(f => `<polygon points="${ring(f)}" class="rg"/>`).join("")}<polygon points="${poly}" class="rp"/>${labels}</svg>`;
  }
  function badgesHtml(h, newOnes) {
    const got = new Set(earned(h));
    return `<div class="badges">${BADGES.map(b => `<span class="bdg ${got.has(b[0]) ? "on" : ""} ${newOnes && newOnes.includes(b[0]) ? "new" : ""}" title="${esc(b[2])}">${got.has(b[0]) ? "★ " : ""}${esc(b[1])}</span>`).join("")}</div>`;
  }
  function renderProgress() {
    const el = $("progress"), h = load();
    if (!h.length) { el.classList.add("hide"); return; }
    const s = streaks(h), best = Math.max(...h.map(x => x.score));
    const last3 = h.slice(-3).map(x => x.score), ready = Math.round(last3.reduce((a, b) => a + b, 0) / last3.length);
    const label = ready >= 75 ? "Interview ready" : ready >= 60 ? "Getting there" : "Keep practising";
    el.innerHTML = `<h2>Your progress</h2>
      <div class="stats"><div><b>${ready}</b><small>Readiness, ${esc(label)}</small></div><div><b>${s.cur}</b><small>Day streak</small></div><div><b>${h.length}</b><small>Sessions</small></div><div><b>${best}</b><small>Best score</small></div></div>
      ${lineChart(h)}${badgesHtml(h)}
      <button class="link" id="resetProg" type="button">Clear my progress</button>`;
    el.classList.remove("hide");
    $("resetProg").onclick = () => { if (confirm("Clear all saved progress on this device?")) { store([]); renderProgress(); } };
  }

  /* ---------- Report additions ---------- */
  const _render = renderReport;
  renderReport = function (rep) {
    _render(rep);
    if (rep.overall == null || rep._jy) return;
    rep._jy = true;
    const rs = presentRounds(), res = {};
    rs.forEach(r => { const q = roundScore(r), v = verdict(q.score, ROUNDS[r].who); res[r] = { ...v, score: q.score }; });
    const cleared = rs.length > 0 && rs.every(r => res[r].key === "pass");
    const before = load(), had = earned(before);
    const entry = { d: Date.now(), field: curFieldName(), level: $("level").value, score: rep.overall, cats: rep.cats, press: !!$("press").checked && items.length > 3, cleared };
    const after = [...before, entry]; store(after);
    const nu = earned(after).filter(b => !had.includes(b));
    const prev = before.length ? before[before.length - 1].score : null;
    const delta = prev == null ? "" : rep.overall - prev === 0 ? "Same as last time." : `${rep.overall - prev > 0 ? "Up" : "Down"} ${Math.abs(rep.overall - prev)} from last time.`;
    const s = streaks(after);
    const html = `<div class="jsum">
      ${pathHtml(-1, res)}
      <p class="note">${cleared ? "You cleared every round. " : ""}${delta} ${s.cur > 1 ? `${s.cur}-day streak.` : ""}</p>
      ${nu.length ? `<div class="newb">New badge${nu.length > 1 ? "s" : ""}: ${nu.map(id => esc(BADGES.find(b => b[0] === id)[1])).join(", ")}</div>` : ""}
      ${radar(rep.cats)}
      ${badgesHtml(after, nu)}</div>`;
    const sc = $("report").querySelector(".score"); if (sc) sc.insertAdjacentHTML("afterend", html);
    renderProgress();
    if (rep.overall >= 75 && !reduce) confetti();
  };

  function confetti() {
    const c = document.createElement("canvas"); c.className = "confetti"; c.width = innerWidth; c.height = innerHeight; document.body.appendChild(c);
    const g = c.getContext("2d"), cols = ["#2B4BFF", "#FFD04A", "#35B37E", "#CFF4E0"];
    const ps = Array.from({ length: 90 }, () => ({ x: Math.random() * c.width, y: -20 - Math.random() * c.height * 0.5, v: 2 + Math.random() * 3, s: 4 + Math.random() * 6, c: cols[Math.floor(Math.random() * 4)], r: Math.random() * 6 }));
    let t = 0;
    (function f() { g.clearRect(0, 0, c.width, c.height); ps.forEach(p => { p.y += p.v; p.x += Math.sin((p.y + p.r) / 20); g.fillStyle = p.c; g.fillRect(p.x, p.y, p.s, p.s * 0.6); }); if (++t < 150) requestAnimationFrame(f); else c.remove(); })();
  }

  /* ---------- App install ---------- */
  let deferred = null;
  addEventListener("beforeinstallprompt", e => { e.preventDefault(); deferred = e; $("install").classList.remove("hide"); });
  addEventListener("appinstalled", () => { $("install").classList.add("hide"); deferred = null; });
  $("install").onclick = async () => { if (!deferred) return; deferred.prompt(); try { await deferred.userChoice; } catch {} deferred = null; $("install").classList.add("hide"); };
  if (/iphone|ipad|ipod/i.test(navigator.userAgent) && !navigator.standalone && !matchMedia("(display-mode: standalone)").matches) $("iosHint").classList.remove("hide");
  if ("serviceWorker" in navigator && /^https?:$/.test(location.protocol)) navigator.serviceWorker.register("sw.js").catch(() => {});

  renderProgress();
  return { begin, roundBreak, renderProgress };
})();
