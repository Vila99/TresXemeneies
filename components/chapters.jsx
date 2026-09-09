'use client';

//   **negreta**, *itàlica*
//   *m_dash_* es renderitza com "—"

import { Fragment, useRef, useEffect } from 'react';
import Image from 'next/image';

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

// `<video poster>` no accepta <Image>, així que fem passar el pòster pel mateix
// optimitzador via URL: estalvia ~85 % en un fitxer que només es veu un instant.
function optimized(src, w = 828, q = 70) {
  return `/_next/image?url=${encodeURIComponent(src)}&w=${w}&q=${q}`;
}

// `doc: true` marca les peces documentals (arxius de 3Cat, clips d'informatius):
// porten veu i durada pròpies, així que es reprodueixen amb controls i amb so,
// a diferència dels vídeos d'ambient, que fan loop mut.
function Fig({ src, num, year, ratio, desc, source, video, poster, doc }) {
  const altText = typeof desc === "string" ? desc : "";
  const isVideo = !!video;
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current && !doc) {
      const v = videoRef.current;
      v.muted = true;
      v.defaultMuted = true;
      v.volume = 0;
      v.removeAttribute("controls");
      const play = () => { const p = v.play(); if (p && p.catch) p.catch(() => {}); };
      play();
      v.addEventListener("pause", play);
      return () => v.removeEventListener("pause", play);
    }
  }, [doc]);
  return (
    <figure className="figure">
      {isVideo ? (
        doc ? (
          <video
            ref={videoRef}
            className={"img doc " + (ratio || "")}
            src={video}
            poster={poster ? optimized(poster) : undefined}
            controls
            playsInline
            preload="metadata"
            aria-label={altText}
          >
            <p>{altText}</p>
          </video>
        ) : (
        <video
          ref={videoRef}
          className={"img " + (ratio || "")}
          src={video}
          poster={poster ? optimized(poster) : undefined}
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          disablePictureInPicture
          disableRemotePlayback
          tabIndex={-1}
          preload="metadata"
          aria-label={altText}
        >
          <p>{altText}</p>
        </video>
        )
      ) : (
        <div className={"img " + (ratio || "")}>
          <Image
            src={src || poster}
            alt={altText}
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
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

function ListBlock({ head, items, lang }) {
  const tr = (v) => (typeof v === "string" ? v : v ? v[lang] : "");
  return (
    <div className="dlist">
      {head && <div className="head">{head}</div>}
      <ul>
        {items.map((it, i) => (
          <li key={i}>
            {it.k && <span className="k">{tr(it.k)}</span>}
            <span className="v">{renderInline(tr(it.t))}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Fons audiovisuals que viuen fora del microsite (3Cat, Filmoteca, BDN, RTVE…):
// s'hi enllaça amb autoria i durada, perquè els drets són de tercers.
function LinksBlock({ head, items, lang }) {
  const tr = (v) => (typeof v === "string" ? v : v ? v[lang] : "");
  return (
    <div className="dlist links">
      {head && <div className="head">{head}</div>}
      <ul>
        {items.map((it, i) => (
          <li key={i}>
            {it.href ? (
              <a className="k" href={it.href} target="_blank" rel="noopener noreferrer">
                {tr(it.k)}
                <span className="ext" aria-hidden="true">↗</span>
              </a>
            ) : (
              // Peces citades encara sense URL pública (drets en tràmit).
              <span className="k">{tr(it.k)}</span>
            )}
            {it.t && <span className="v">{renderInline(tr(it.t))}</span>}
            {it.meta && <span className="m">{tr(it.meta)}</span>}
          </li>
        ))}
      </ul>
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
        doc={block.doc}
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
    case "list":
      return <div className="body"><ListBlock head={tr(block.head)} items={block.items} lang={lang} /></div>;
    case "links":
      return <div className="body"><LinksBlock head={tr(block.head)} items={block.items} lang={lang} /></div>;
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