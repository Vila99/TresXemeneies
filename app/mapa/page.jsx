'use client';

// map.jsx — Mapa del recorregut · Tres Xemeneies
// Plànol simplificat (SVG) de 3 plantes amb 8 punts clicables → capítols del microsite.
// Reutilitza CHAPTERS i UI de content-meta.jsx · CA / ES / EN · mòbil.

import { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { CHAPTERS, UI } from '@/components/content-meta';
import ConsorciFooter from '@/components/footer';
import '@/app/styles/map.css';

/* ─────────── Inline markdown lite (**bold** · *italic*) ─────────── */
function mapInline(text) {
  if (!text) return null;
  const parts = [];
  let i = 0, last = 0, m;
  const re = /(\*\*[^*]+\*\*|\*[^*]+\*)/g;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    const tk = m[0];
    if (tk.startsWith('**')) parts.push(<strong key={i++}>{tk.slice(2, -2)}</strong>);
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
    eyebrow: 'Microsite · Mapa',
    title: { main: 'El mapa del', em: 'recorregut' },
    deck: 'Vuit punts repartits en **tres plantes**. Toca un punt numerat per descobrir-ne el contingut.',
    floorLabel: 'Planta',
    floors: ['Baixa', 'Primera', 'Segona'],
    pointsWord: 'punts',
    listLabel: "Els punts d'aquesta planta",
    cta: 'Veure el contingut',
    back: 'Tornar al microsite',
    close: 'Tancar',
    legendPoint: 'Punt',
    legendActive: 'Seleccionat',
    youAreHere: 'Ets aquí',
    fromChapter: 'Has arribat des d\'aquest capítol. Explora la resta de punts del recorregut.',
    entrance: 'Entrada',
    stairsLbl: 'Escala',
    liftLbl: 'Ascensor',
    sheetTip: 'Capítol del microsite',
  },
  es: {
    eyebrow: 'Microsite · Mapa',
    title: { main: 'El mapa del', em: 'recorrido' },
    deck: 'Ocho puntos repartidos en **tres plantas**. Toca un punto numerado para descubrir su contenido.',
    floorLabel: 'Planta',
    floors: ['Baja', 'Primera', 'Segunda'],
    pointsWord: 'puntos',
    listLabel: 'Los puntos de esta planta',
    cta: 'Ver el contenido',
    back: 'Volver al microsite',
    close: 'Cerrar',
    legendPoint: 'Punto',
    legendActive: 'Seleccionado',
    youAreHere: 'Estás aquí',
    fromChapter: 'Has llegado desde este capítulo. Explora el resto de puntos del recorrido.',
    entrance: 'Entrada',
    stairsLbl: 'Escalera',
    liftLbl: 'Ascensor',
    sheetTip: 'Capítulo del microsite',
  },
  en: {
    eyebrow: 'Microsite · Map',
    title: { main: 'The tour', em: 'map' },
    deck: 'Eight points across **three floors**. Tap a numbered point to discover its content.',
    floorLabel: 'Floor',
    floors: ['Ground', 'First', 'Second'],
    pointsWord: 'points',
    listLabel: 'The points on this floor',
    cta: 'View content',
    back: 'Back to microsite',
    close: 'Close',
    legendPoint: 'Point',
    legendActive: 'Selected',
    youAreHere: 'You are here',
    fromChapter: 'You arrived from this chapter. Explore the rest of the points on the tour.',
    entrance: 'Entrance',
    stairsLbl: 'Stairs',
    liftLbl: 'Lift',
    sheetTip: 'Microsite chapter',
  },
};

/* ─────────── Els 8 punts → capítols ─────────── */
// floor: 0 = Baixa · 1 = Primera · 2 = Segona
const POINTS = [
  { n: 1, slug: 'icona',       floor: 0, fx: 0.045, fy: 0.470, img: '/assets/fotografies/actual-aeria.jpg' },
  { n: 2, slug: 'origens',     floor: 0, fx: 0.170, fy: 0.400, img: '/assets/fotografies/aerea-1913.jpg' },
  { n: 3, slug: 'guerres',     floor: 0, fx: 0.375, fy: 0.560, img: '/assets/fotografies/construccio-1971-b.jpg' },
  { n: 4, slug: 'brutalisme',  floor: 1, fx: 0.170, fy: 0.420, img: '/assets/fotografies/actual-03.jpg' },
  { n: 5, slug: 'lluita',      floor: 1, fx: 0.520, fy: 0.360, img: '/assets/fotografies/actual-05.jpg' },
  { n: 6, slug: 'pdu',         floor: 1, fx: 0.850, fy: 0.460, img: '/assets/renders/render-pdu-aeria.jpg' },
  { n: 7, slug: 'media-city',  floor: 2, fx: 0.220, fy: 0.470, img: '/assets/renders/render-turbines-int.jpg' },
  { n: 8, slug: 'memoria',     floor: 2, fx: 0.470, fy: 0.600, img: '/assets/fotografies/mp-1.jpg' },
];

// Plànols oficials (fulls EA-100 / EA-101) redibuixats com a mapa de visitant:
// massa sòlida de l'edifici + estructura, fora cotes, ratllats i línia auxiliar.
const FLOOR_IMG = [
  '/assets/planols/plan-viz-pb.png',
  '/assets/planols/plan-viz-p1.png',
  '/assets/planols/plan-viz-p2.png',
];

function chapterFor(slug) {
  return CHAPTERS.find((c) => c.slug === slug);
}
function plain(t) { return (t.main + ' ' + t.em).trim(); }

// Punt d'origen llegit de la URL (?from=slug) — quan s'arriba des d'un capítol
function pointFromSearch(searchParams) {
  const from = searchParams?.get ? searchParams.get('from') : null;
  if (!from) return null;
  return POINTS.find((p) => p.slug === from) || null;
}

/* ─────────── Plànol de la planta ─────────── */
function FloorPlan({ floor, alt }) {
  return (
    <Image
      className="plan-img"
      src={FLOOR_IMG[floor]}
      alt={alt}
      width={1400}
      height={328}
      sizes="(max-width: 1200px) 100vw, 1200px"
      priority
      draggable="false"
    />
  );
}

/* ─────────── Zona d'influència de cada punt ─────────── */
function Zones({ pts, selected, here }) {
  return pts.map((p) => {
    const isActive = selected && selected.n === p.n;
    const isHere = here && here.n === p.n;
    return (
      <span key={p.n} aria-hidden="true"
        className={'map-zone' + (isActive ? ' active' : '') + (isHere ? ' here' : '')}
        style={{ left: `${p.fx * 100}%`, top: `${p.fy * 100}%` }} />
    );
  });
}

/* ─────────── Llista dels punts de la planta ─────────── */
function PointList({ pts, selected, here, onSelect, lang, t }) {
  return (
    <div className="point-list">
      <p className="pl-lbl">{t.listLabel}</p>
      <ul>
        {pts.map((p) => {
          const ch = chapterFor(p.slug);
          if (!ch) return null;
          const ttl = ch.title[lang];
          const isActive = selected && selected.n === p.n;
          const isHere = here && here.n === p.n;
          const per = ch.meta.period.v;
          const perV = typeof per === 'string' ? per : per[lang];
          const perL = ch.meta.period.label[lang];
          const perTx = /^(període|período|period)$/i.test(perL) ? perV : perL + ' · ' + perV;
          return (
            <li key={p.n}>
              <button type="button"
                className={'pl-row' + (isActive ? ' active' : '') + (isHere ? ' here' : '')}
                onClick={() => onSelect(p)}>
                <span className="pl-n">{p.n}</span>
                <span className="pl-tx">
                  <span className="pl-t">{ttl.main} <em>{ttl.em}</em></span>
                  <span className="pl-m">{perTx}{isHere ? ' · ' + t.youAreHere : ''}</span>
                </span>
                <span className="pl-go" aria-hidden="true">{MIcon.arrR}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/* ─────────── Marcadors clicables sobre el plànol ─────────── */
function Markers({ pts, selected, here, onSelect, lang }) {
  return pts.map((p) => {
    const ch = chapterFor(p.slug);
    const isActive = selected && selected.n === p.n;
    const isHere = here && here.n === p.n;
    return (
      <button
        key={p.n}
        type="button"
        className={'map-marker' + (isActive ? ' active' : '') + (isHere ? ' here' : '')}
        style={{ left: `${p.fx * 100}%`, top: `${p.fy * 100}%` }}
        onClick={() => onSelect(p)}
        aria-pressed={isActive}
        aria-label={`${isHere ? MAP_UI[lang].youAreHere + ' — ' : ''}${MAP_UI[lang].legendPoint} ${p.n} — ${ch ? plain(ch.title[lang]) : ''}`}>
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
      if (e.key === 'Escape') { e.preventDefault(); onClose(); }
      else if (e.key === 'Tab') {
        const f = sheetRef.current?.querySelectorAll('button, a[href], [tabindex]:not([tabindex="-1"])');
        if (!f || !f.length) return;
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prev; };
  }, [onClose, point]);

  if (!ch) return null;
  const title = ch.title[lang];
  const href = `/#${ch.slug}`;

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
        <div className="sheet-fig">
          <Image src={point.img} alt={plain(title)} fill sizes="(max-width: 430px) 100vw, 430px" />
        </div>
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
  const labels = { ca: 'Català', es: 'Castellano', en: 'English' };
  return (
    <div className="langbar" role="radiogroup" aria-label={UI[lang].langGroup}>
      {['ca', 'es', 'en'].map((l) => (
        <button key={l} type="button"
          className={'langbar-btn ' + (lang === l ? 'on' : '')}
          role="radio" aria-checked={lang === l} aria-label={labels[l]}
          onClick={() => setLang(l)}>
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

/* ─────────── App ─────────── */
export default function MapPage() {
  const router = useRouter();
  const [arrival, setArrival] = useState(null);
  const [lang, setLang] = useState('ca');
  const [floor, setFloor] = useState(0);
  const [selected, setSelected] = useState(null);
  const [here, setHere] = useState(null);
  const stageRef = useRef(null);

  // Inicialització només al client (URL search params, localStorage)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const arr = pointFromSearch(params);
    setArrival(arr);
    setHere(arr);

    setLang(localStorage.getItem('tx-lang') || 'ca');

    if (arr) {
      setFloor(arr.floor);
    } else {
      const v = parseInt(localStorage.getItem('tx-map-floor') || '0', 10);
      setFloor([0, 1, 2].includes(v) ? v : 0);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tx-lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);
  useEffect(() => { localStorage.setItem('tx-map-floor', String(floor)); }, [floor]);

  // En arribar des d'un capítol, porta la vista al plànol per veure "Ets aquí"
  useEffect(() => {
    if (!arrival || !stageRef.current) return;
    const id = requestAnimationFrame(() => {
      const top = stageRef.current.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    });
    return () => cancelAnimationFrame(id);
  }, [arrival]);

  const t = MAP_UI[lang];
  const ui = UI[lang];
  const floorPts = POINTS.filter((p) => p.floor === floor);

  const goFloor = useCallback((f) => { setFloor(f); setSelected(null); }, []);
  const countFor = (f) => POINTS.filter((p) => p.floor === f).length;
  const goBack = () => { router.push('/'); };

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
                className={'seg-btn' + (floor === f ? ' on' : '')}
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

        {/* Avís d'arribada des d'un capítol */}
        {here && (
          <p className="map-arrival" role="status">
            <span className="pin" aria-hidden="true">{t.youAreHere}</span>
            {t.fromChapter}
          </p>
        )}

        {/* Plànol + marcadors */}
        <div className="map-stage" ref={stageRef}>
          <div className="map-frame" key={floor}>
            <FloorPlan floor={floor} alt={`${t.floorLabel} ${t.floors[floor]}`} />
            <Zones pts={floorPts} selected={selected} here={here} />
            <Markers pts={floorPts} selected={selected} here={here} onSelect={setSelected} lang={lang} />
          </div>
        </div>

        <PointList pts={floorPts} selected={selected} here={here} onSelect={setSelected} lang={lang} t={t} />

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