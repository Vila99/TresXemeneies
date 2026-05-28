'use client';

// chapters.jsx — Contingut del microsite Tres Xemeneies en CA / ES / EN
// Estructura data-driven: cada capítol és un array de "blocs" amb tres versions lingüístiques.
//
// Sintaxi inline de format en els textos:
//   **negreta**, *itàlica*
//   *m_dash_* es renderitza com "—"
//
// Tipus de bloc:
//   {kind:"section", t:{ca,es,en}}
//   {kind:"p", lead?:bool, t:{ca,es,en}}
//   {kind:"figure", src, num, year?, ratio?, desc:{ca,es,en}, source:{ca,es,en}}
//   {kind:"fact", t:{ca,es,en}}
//   {kind:"quote", t:{ca,es,en}, cite:{ca,es,en}}
//   {kind:"stats", head:{ca,es,en}, items:[{num, unit?, label:{ca,es,en}, desc?:{ca,es,en}}]}

import { Fragment, useRef, useEffect } from 'react';

/* ─────────── Markdown-lite inline parser ─────────── */
function renderInline(text) {
  if (!text) return null;
  // Split on **bold**, *italic*, with non-greedy. Order matters: bold first.
  const parts = [];
  let i = 0;
  const re = /(\*\*[^*]+\*\*|\*[^*]+\*)/g;
  let match;
  let last = 0;
  while ((match = re.exec(text)) !== null) {
    if (match.index > last) parts.push(text.slice(last, match.index));
    const token = match[0];
    if (token.startsWith("**")) {
      parts.push(<strong key={i++}>{token.slice(2, -2)}</strong>);
    } else {
      parts.push(<em key={i++}>{token.slice(1, -1)}</em>);
    }
    last = match.index + token.length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

/* ─────────── Block renderers ─────────── */
function Section({ t }) {
  return (
    <div className="section-marker" role="presentation">
      <span className="bullet" aria-hidden="true"></span>
      <span className="line" aria-hidden="true"></span>
      <h2 className="label">{t}</h2>
    </div>
  );
}

function Para({ text, lead }) {
  return <p className={lead ? "lead" : ""}>{renderInline(text)}</p>;
}

function Fig({ src, num, year, ratio, desc, source, video, poster }) {
  const altText = typeof desc === "string" ? desc : "";
  const isVideo = !!video;
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.defaultMuted = true;
      videoRef.current.volume = 0;
    }
  }, []);
  return (
    <figure className="figure">
      {isVideo ? (
        <video
          ref={videoRef}
          className={"img " + (ratio || "")}
          src={video}
          poster={poster || undefined}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={altText}
        >
          <p>{altText}</p>
        </video>
      ) : (
        <div
          className={"img " + (ratio || "")}
          role="img"
          aria-label={altText}
          style={{ backgroundImage: `url('${src}')` }}>
        </div>
      )}
      <figcaption>
        <div className="row">
          <span className="num">Fig. {num}{year ? " / " + year : ""}</span>
          <span className="src">{source}</span>
        </div>
        <span className="desc">{renderInline(desc)}</span>
      </figcaption>
    </figure>
  );
}

function FactBox({ t, lang }) {
  const labels = { ca: "Fact", es: "Fact", en: "Fact" };
  return (
    <div className="fact">
      <span className="fact-tag">{labels[lang]}</span>
      <p>{renderInline(t)}</p>
    </div>
  );
}

function QuoteBlock({ text, cite }) {
  return (
    <div className="pull">
      <span className="mark">"</span>
      <blockquote>{renderInline(text)}</blockquote>
      {cite && <cite>{cite}</cite>}
    </div>
  );
}

function StatsBlock({ head, items, lang }) {
  return (
    <div className="stats">
      <div className="head">{head}</div>
      <div className="grid">
        {items.map((s, i) => (
          <div key={i} className="cell">
            <div className="num">{s.num}{s.unit && <small>{s.unit}</small>}</div>
            <div className="unit">{s.label[lang]}</div>
            {s.desc && <div className="desc">{renderInline(s.desc[lang])}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────── Block dispatcher ─────────── */
function Block({ block, lang }) {
  const tr = (obj) => obj ? obj[lang] : "";
  switch (block.kind) {
    case "section":
      return <div className="body"><Section t={tr(block.t)} /></div>;
    case "p":
      return <div className="body"><Para text={tr(block.t)} lead={block.lead} /></div>;
    case "ps": // multiple paragraphs in one body block
      return (
        <div className="body">
          {block.items.map((p, i) => <Para key={i} text={tr(p)} />)}
        </div>
      );
    case "figure":
      return <Fig
        src={block.src}
        video={block.video}
        poster={block.poster}
        num={block.num}
        year={block.year}
        ratio={block.ratio}
        desc={tr(block.desc)}
        source={tr(block.source)}
      />;
    case "fact":
      return <div className="body"><FactBox t={tr(block.t)} lang={lang} /></div>;
    case "quote":
      return <QuoteBlock text={tr(block.t)} cite={tr(block.cite)} />;
    case "stats":
      return <div className="body"><StatsBlock head={tr(block.head)} items={block.items} lang={lang} /></div>;
    default:
      return null;
  }
}

/* ─────────── Generic chapter renderer ─────────── */
function renderChapter(blocks, lang) {
  return (
    <div className="chapter-blocks">
      {blocks.map((b, i) => <Block key={i} block={b} lang={lang} />)}
    </div>
  );
}

export { renderChapter };