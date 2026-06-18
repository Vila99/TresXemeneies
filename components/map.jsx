// map.jsx — Mapa del recorregut · Tres Xemeneies
// Plànol simplificat (SVG) de 3 plantes amb 7 punts clicables → capítols del microsite.
// Reutilitza CHAPTERS i UI de content-meta.jsx · CA / ES / EN · mòbil.

const { useState, useEffect, useRef, useCallback } = React;

/* ─────────── Inline markdown lite (**bold** · *italic*) ─────────── */
function mapInline(text) {
  if (!text) return null;
  const parts = [];
  let i = 0, last = 0, m;
  const re = /(\*\*[^*]+\*\*|\*[^*]+\*)/g;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    const tk = m[0];
    if (tk.startsWith("**")) parts.push(<strong key={i++}>{tk.slice(2, -2)}</strong>);
    else parts.push(<em key={i++}>{tk.slice(1, -1)}</em>);
    last = m.index + tk.length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

/* ─────────── Icones ─────────── */
const MIcon = {
  back: <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>,
  close: <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M6 6l12 12M6 18L18 6" /></svg>,
  arrR: <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>,
};

/* ─────────── Traduccions de la pàgina mapa ─────────── */
const MAP_UI = {
  ca: {
    eyebrow: "Microsite · Mapa",
    title: { main: "El mapa del", em: "recorregut" },
    deck: "Set punts repartits en **tres plantes**. Toca un punt numerat per descobrir-ne el contingut.",
    floorLabel: "Planta",
    floors: ["Primera", "Segona", "Tercera"],
    pointsWord: "punts",
    cta: "Veure el contingut",
    back: "Tornar al microsite",
    close: "Tancar",
    legendPoint: "Punt",
    legendActive: "Seleccionat",
    youAreHere: "Ets aquí",
    fromChapter: "Has arribat des d'aquest capítol. Explora la resta de punts del recorregut.",
    entrance: "Entrada",
    stairsLbl: "Escala",
    liftLbl: "Ascensor",
    sheetTip: "Capítol del microsite",
  },
  es: {
    eyebrow: "Microsite · Mapa",
    title: { main: "El mapa del", em: "recorrido" },
    deck: "Siete puntos repartidos en **tres plantas**. Toca un punto numerado para descubrir su contenido.",
    floorLabel: "Planta",
    floors: ["Primera", "Segunda", "Tercera"],
    pointsWord: "puntos",
    cta: "Ver el contenido",
    back: "Volver al microsite",
    close: "Cerrar",
    legendPoint: "Punto",
    legendActive: "Seleccionado",
    youAreHere: "Estás aquí",
    fromChapter: "Has llegado desde este capítulo. Explora el resto de puntos del recorrido.",
    entrance: "Entrada",
    stairsLbl: "Escalera",
    liftLbl: "Ascensor",
    sheetTip: "Capítulo del microsite",
  },
  en: {
    eyebrow: "Microsite · Map",
    title: { main: "The tour", em: "map" },
    deck: "Seven points across **three floors**. Tap a numbered point to discover its content.",
    floorLabel: "Floor",
    floors: ["First", "Second", "Third"],
    pointsWord: "points",
    cta: "View content",
    back: "Back to microsite",
    close: "Close",
    legendPoint: "Point",
    legendActive: "Selected",
    youAreHere: "You are here",
    fromChapter: "You arrived from this chapter. Explore the rest of the points on the tour.",
    entrance: "Entrance",
    stairsLbl: "Stairs",
    liftLbl: "Lift",
    sheetTip: "Microsite chapter",
  },
};

/* ─────────── Els 7 punts → capítols ─────────── */
// floor: 0 = Primera · 1 = Segona · 2 = Tercera
// x / y en coordenades del viewBox del plànol (0..1000 × 0..560)
const POINTS = [
  { n: 1, slug: "origens",       floor: 0, fx: 0.028, fy: 0.502, img: "assets/aerea-1913.jpg" },
  { n: 2, slug: "produccio",     floor: 0, fx: 0.232, fy: 0.450, img: "assets/turbines-1988.jpg" },
  { n: 3, slug: "tancament",     floor: 0, fx: 0.740, fy: 0.500, img: "assets/actual-01.jpg" },
  { n: 4, slug: "reivindicacio", floor: 1, fx: 0.667, fy: 0.407, img: "assets/actual-02.jpg" },
  { n: 5, slug: "futur",         floor: 1, fx: 0.294, fy: 0.462, img: "assets/render-pdu-aeria.jpg" },
  { n: 6, slug: "nau-turbines",  floor: 2, fx: 0.416, fy: 0.531, img: "assets/render-turbines-int.jpg" },
  { n: 7, slug: "memoria",       floor: 2, fx: 0.287, fy: 0.227, img: "assets/render-turbines-ext.jpg" },
];

// Plànols (redibuixats nets a partir dels originals)
const FLOOR_IMG = [
  "assets/plan-clean-1.png",
  "assets/plan-clean-2.png",
  "assets/plan-clean-3.png",
];

const VB_W = 1240, VB_H = 820;

function chapterFor(slug) {
  return CHAPTERS.find((c) => c.slug === slug);
}
function plain(t) { return (t.main + " " + t.em).trim(); }

// Punt d'origen llegit de la URL (#slug) — quan s'arriba des d'un capítol
function pointFromURL() {
  const h = (window.location.hash || "").replace(/^#/, "");
  if (!h) return null;
  return POINTS.find((p) => p.slug === h) || null;
}

/* ─────────── Plànol de la planta (imatge original del projecte) ─────────── */
function FloorPlan({ floor, alt }) {
  return (
    <img className="plan-img" src={window.res(FLOOR_IMG[floor])} alt={alt} draggable="false" />
  );
}

/* ─────────── Marcadors clicables sobre el plànol ─────────── */
function Markers({ floor, selected, here, onSelect, lang }) {
  const pts = POINTS.filter((p) => p.floor === floor);
  return pts.map((p) => {
    const ch = chapterFor(p.slug);
    const isActive = selected && selected.n === p.n;
    const isHere = here && here.n === p.n;
    return (
      <button
        key={p.n}
        type="button"
        className={"map-marker" + (isActive ? " active" : "") + (isHere ? " here" : "")}
        style={{ left: `${p.fx * 100}%`, top: `${p.fy * 100}%` }}
        onClick={() => onSelect(p)}
        aria-pressed={isActive}
        aria-label={`${isHere ? MAP_UI[lang].youAreHere + " — " : ""}${MAP_UI[lang].legendPoint} ${p.n} — ${ch ? plain(ch.title[lang]) : ""}`}>
        <span className="pulse" aria-hidden="true"></span>
        {isHere && !isActive && <span className="here-tag" aria-hidden="true">{MAP_UI[lang].youAreHere}</span>}
        {p.n}
      </button>
    );
  });
}

/* ─────────── Bottom-sheet del punt ─────────── */
function PointSheet({ point, lang, onClose }) {
  const ch = chapterFor(point.slug);
  const t = MAP_UI[lang];
  const closeRef = useRef(null);
  const sheetRef = useRef(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") { e.preventDefault(); onClose(); }
      else if (e.key === "Tab") {
        const f = sheetRef.current?.querySelectorAll('button, a[href], [tabindex]:not([tabindex="-1"])');
        if (!f || !f.length) return;
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = prev; };
  }, [onClose, point]);

  if (!ch) return null;
  const title = ch.title[lang];
  const href = encodeURI("Tres Xemeneies.html") + "#" + ch.slug;

  return (
    <>
      <div className="sheet-scrim" onClick={onClose} aria-hidden="true"></div>
      <div className="sheet" role="dialog" aria-modal="true" aria-labelledby="sheet-title" ref={sheetRef}>
        <div className="sheet-grab" aria-hidden="true"></div>
        <div className="sheet-head">
          <div className="sheet-eyebrow">
            <span className="ix" aria-hidden="true">{point.n}</span>
            <span>{plain(title)}</span>
          </div>
          <button ref={closeRef} type="button" className="sheet-close" onClick={onClose} aria-label={t.close}>
            {MIcon.close}
          </button>
        </div>
        <div className="sheet-fig" role="img"
          aria-label={plain(title)}
          style={{ backgroundImage: `url('${window.res(point.img)}')` }}></div>
        <div className="sheet-body">
          <h2 id="sheet-title">{title.main} <em>{title.em}</em></h2>
          <p className="deck">{mapInline(ch.deck[lang])}</p>
        </div>
        <a className="sheet-cta" href={href}
          aria-label={`${t.cta}: ${ch.n} ${plain(title)}`}>
          <span>{t.cta}</span>
          {MIcon.arrR}
        </a>
      </div>
    </>
  );
}

/* ─────────── Langbar (idèntica al microsite) ─────────── */
function MapLangBar({ lang, setLang }) {
  const labels = { ca: "Català", es: "Castellano", en: "English" };
  return (
    <div className="langbar" role="radiogroup" aria-label={UI[lang].langGroup}>
      {["ca", "es", "en"].map((l) => (
        <button key={l} type="button"
          className={"langbar-btn " + (lang === l ? "on" : "")}
          role="radio" aria-checked={lang === l} aria-label={labels[l]}
          onClick={() => setLang(l)}>
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

/* ─────────── App ─────────── */
function MapPage() {
  const arrival = pointFromURL();
  const [lang, setLang] = useState(() => localStorage.getItem("tx-lang") || "ca");
  const [floor, setFloor] = useState(() => {
    if (arrival) return arrival.floor;
    const v = parseInt(localStorage.getItem("tx-map-floor") || "0", 10);
    return [0, 1, 2].includes(v) ? v : 0;
  });
  const [selected, setSelected] = useState(null);
  const [here, setHere] = useState(arrival);
  const stageRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("tx-lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);
  useEffect(() => { localStorage.setItem("tx-map-floor", String(floor)); }, [floor]);

  // En arribar des d'un capítol, porta la vista al plànol per veure “Ets aquí”
  useEffect(() => {
    if (!arrival || !stageRef.current) return;
    const id = requestAnimationFrame(() => {
      const top = stageRef.current.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    });
    return () => cancelAnimationFrame(id);
  }, []);

  const t = MAP_UI[lang];
  const ui = UI[lang];

  const goFloor = useCallback((f) => { setFloor(f); setSelected(null); }, []);
  const countFor = (f) => POINTS.filter((p) => p.floor === f).length;
  const goBack = () => { window.location.href = encodeURI("Tres Xemeneies.html"); };

  return (
    <div className="page map-page" data-screen-label="Mapa">
      <a href="#map-main" className="skip-link">{ui.skipToContent}</a>

      {/* App bar */}
      <header className="appbar" role="banner">
        <div className="appbar-row">
          <button className="back" type="button" aria-label={t.back} onClick={goBack}>
            {MIcon.back}
          </button>
          <div className="title">
            <span className="crumb">{ui.site}</span>
            <span className="name">{plain(t.title)}</span>
          </div>
          <span style={{ width: 44 }} aria-hidden="true"></span>
        </div>
        <MapLangBar lang={lang} setLang={setLang} />
      </header>

      <main id="map-main" tabIndex="-1">
        <header className="map-hero">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>{t.title.main}<br /><em>{t.title.em}</em></h1>
          <p className="deck">{mapInline(t.deck)}</p>
        </header>

        {/* Selector de planta */}
        <div className="floor-switch">
          <p className="lbl">{t.floorLabel}</p>
          <div className="seg" role="tablist" aria-label={t.floorLabel}>
            {[0, 1, 2].map((f) => (
              <button key={f} type="button" role="tab" aria-selected={floor === f}
                className={"seg-btn" + (floor === f ? " on" : "")}
                onClick={() => goFloor(f)}>
                <span className="ord">{t.floors[f]}</span>
                <span className="cnt">{countFor(f)} {t.pointsWord}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Caption */}
        <div className="floor-cap">
          <span className="bullet" aria-hidden="true"></span>
          <span className="line" aria-hidden="true"></span>
          <span className="label">{t.floorLabel} {t.floors[floor]}</span>
        </div>

        {/* Avis d'arribada des d'un capítol */}
        {here && (
          <p className="map-arrival" role="status">
            <span className="pin" aria-hidden="true">{t.youAreHere}</span>
            {t.fromChapter}
          </p>
        )}

        {/* Plànol + marcadors */}
        <div className="map-stage" ref={stageRef}>
          <div className="map-frame">
            <FloorPlan floor={floor} alt={`${t.floorLabel} ${t.floors[floor]}`} />
            <Markers floor={floor} selected={selected} here={here} onSelect={setSelected} lang={lang} />
          </div>
        </div>

        {/* Llegenda */}
        <div className="map-legend">
          <span className="item"><span className="dot slate"></span>{t.legendPoint}</span>
          <span className="item"><span className="dot warm"></span>{t.legendActive}</span>
          {here && <span className="item"><span className="dot here"></span>{t.youAreHere}</span>}
        </div>
      </main>

      <ConsorciFooter />

      {selected && (
        <PointSheet point={selected} lang={lang} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<MapPage />);
