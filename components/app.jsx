'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

import { CHAPTERS } from '@/components/content-meta';
import { UI } from '@/components/content-meta';
import { renderChapter } from '@/components/chapters';
import {
  ARTICLE_ORIGENS, ARTICLE_PRODUCCIO, ARTICLE_TANCAMENT,
  ARTICLE_REIVINDICACIO, ARTICLE_FUTUR, ARTICLE_NAU_TURBINES,
  ARTICLE_MEMORIA,
} from '@/components/articles';
import ConsorciFooter from '@/components/footer';

/* ═══════════════════════════════════════════════════════════════
   ICONS (decoratius — sempre aria-hidden)
   ═══════════════════════════════════════════════════════════════ */
const Icon = {
  back:  <svg aria-hidden="true" focusable="false" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>,
  menu:  <svg aria-hidden="true" focusable="false" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 6h18M3 12h18M3 18h18" /></svg>,
  close: <svg aria-hidden="true" focusable="false" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M6 18L18 6" /></svg>,
  arrR:  <svg aria-hidden="true" focusable="false" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>,
  arrL:  <svg aria-hidden="true" focusable="false" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M11 19l-7-7 7-7" /></svg>,
  a11y:  <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="4" r="2" /><path d="M4 9l8 1 8-1M12 10v6m-4 6 4-6 4 6" /></svg>,
};

/* ═══════════════════════════════════════════════════════════════
   Mapping article slug → blocks
   ═══════════════════════════════════════════════════════════════ */
const ARTICLE_MAP = {
  origens:        ARTICLE_ORIGENS,
  produccio:      ARTICLE_PRODUCCIO,
  tancament:      ARTICLE_TANCAMENT,
  reivindicacio:  ARTICLE_REIVINDICACIO,
  futur:          ARTICLE_FUTUR,
  'nau-turbines': ARTICLE_NAU_TURBINES,
  memoria:        ARTICLE_MEMORIA,
};

function articleFor(slug) {
  if (slug === 'accessibilitat') return null;
  return ARTICLE_MAP[slug] ?? null;
}

function plainTitle(t) {
  return (t.main + ' ' + t.em).trim();
}

/* ═══════════════════════════════════════════════════════════════
   App Bar — capçalera amb idioma + menú + progrés
   ═══════════════════════════════════════════════════════════════ */
function AppBar({ progress, lang, setLang, ui, currentSlug, onMenu, menuOpen, current, totalCh }) {
  const isLanding = currentSlug === 'landing';
  const isAccessibility = currentSlug === 'accessibilitat';
  return (
    <header className="appbar" role="banner">
      <div className="appbar-row">
        <button
          className="back"
          type="button"
          aria-label={ui.backLabel}
          onClick={() => navigate('landing')}
          disabled={isLanding}>
          {!isLanding && Icon.back}
        </button>
        <div className="title" aria-live="polite" aria-atomic="true">
          <span className="crumb">
            {ui.site}{current && ` · ${current.n} / ${totalCh}`}
          </span>
          <span className="name">
            {isLanding ? ui.landingFull
              : isAccessibility ? ui.a11y.title
              : current ? plainTitle(current.title[lang]) : ''}
          </span>
        </div>
        <button
          className="menu"
          type="button"
          aria-label={ui.menuLabel}
          aria-expanded={menuOpen}
          aria-controls="microsite-menu"
          onClick={onMenu}>
          {Icon.menu}
        </button>
      </div>
      <LangBar lang={lang} setLang={setLang} ui={ui} />
      {!isLanding && !isAccessibility && (
        <div className="progress" aria-hidden="true">
          <div className="progress-fill" style={{ width: `${progress}%` }}></div>
        </div>
      )}
    </header>
  );
}

/* ═══════════════════════════════════════════════════════════════
   Language switcher — radio group accessible
   ═══════════════════════════════════════════════════════════════ */
function LangBar({ lang, setLang, ui }) {
  const labels = { ca: 'Català', es: 'Castellano', en: 'English' };
  return (
    <div className="langbar" role="radiogroup" aria-label={ui.langGroup}>
      {['ca', 'es', 'en'].map((l) => (
        <button
          key={l}
          type="button"
          className={'langbar-btn ' + (lang === l ? 'on' : '')}
          role="radio"
          aria-checked={lang === l}
          aria-label={labels[l]}
          onClick={() => setLang(l)}>
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   Chapter Hero
   ═══════════════════════════════════════════════════════════════ */
function ChapterHero({ chapter, lang }) {
  const title = chapter.title[lang];
  return (
    <header className="hero">
      <h1>{title.main}<br /><em>{title.em}</em></h1>
      <p className="deck">{renderInline(chapter.deck[lang])}</p>
    </header>
  );
}

/* ═══════════════════════════════════════════════════════════════
   Inline markdown parser
   ═══════════════════════════════════════════════════════════════ */
function renderInline(text) {
  if (!text) return null;
  const parts = [];
  let i = 0;
  const re = /(\*\*[^*]+\*\*|\*[^*]+\*)/g;
  let match, last = 0;
  while ((match = re.exec(text)) !== null) {
    if (match.index > last) parts.push(text.slice(last, match.index));
    const token = match[0];
    if (token.startsWith('**')) parts.push(<strong key={i++}>{token.slice(2, -2)}</strong>);
    else parts.push(<em key={i++}>{token.slice(1, -1)}</em>);
    last = match.index + token.length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

/* ═══════════════════════════════════════════════════════════════
   Pager — prev / next chapter (semantic <nav>)
   ═══════════════════════════════════════════════════════════════ */
function Pager({ chapter, lang, ui }) {
  const idx = CHAPTERS.findIndex((c) => c.slug === chapter.slug);
  const prev = idx > 0 ? CHAPTERS[idx - 1] : null;
  const next = idx < CHAPTERS.length - 1 ? CHAPTERS[idx + 1] : null;
  const go = (slug) => (e) => { e.preventDefault(); navigate(slug); };
  return (
    <nav className="pager" aria-label={ui.pagerLabel}>
      <a
        className="prev"
        href={prev ? `#${prev.slug}` : '#landing'}
        rel="prev"
        onClick={go(prev ? prev.slug : 'landing')}
        aria-label={prev ? `${ui.prev}: ${prev.n} ${plainTitle(prev.title[lang])}` : `${ui.prev}: ${ui.landingFull}`}>
        <span className="dir" aria-hidden="true">{Icon.arrL} {ui.prev}</span>
        <span className="ti" aria-hidden="true">
          {prev ? `${prev.n} · ${plainTitle(prev.title[lang])}` : ui.landingFull}
        </span>
      </a>
      <a
        className="next"
        href={next ? `#${next.slug}` : '#landing'}
        rel="next"
        onClick={go(next ? next.slug : 'landing')}
        aria-label={next ? `${ui.next}: ${next.n} ${plainTitle(next.title[lang])}` : `${ui.landingFull}`}>
        <span className="dir" aria-hidden="true">{next ? ui.next : ui.landing} {Icon.arrR}</span>
        <span className="ti" aria-hidden="true">
          {next ? `${next.n} · ${plainTitle(next.title[lang])}` : ui.landingFull}
        </span>
      </a>
    </nav>
  );
}

/* ═══════════════════════════════════════════════════════════════
   Landing copy
   ═══════════════════════════════════════════════════════════════ */
const LANDING_COPY = {
  ca: {
    eyebrow: 'Microsite',
    title: { main: 'Tres', em: 'Xemeneies' },
    deck: "Un segle de producció elèctrica i de mobilització veïnal al marge esquerre del Besòs. Set capítols sobre el passat, present i futur d'un dels patrimonis industrials més emblemàtics de Catalunya.",
    chapters: 'Els set capítols',
    promoter: 'Promotor',
    languages: 'Idiomes',
    location: 'Ubicació',
    updated: 'Actualitzat',
    a11yLink: "Declaració d'accessibilitat",
  },
  es: {
    eyebrow: 'Microsite',
    title: { main: 'Tres', em: 'Chimeneas' },
    deck: 'Un siglo de producción eléctrica y de movilización vecinal en el margen izquierdo del Besòs. Siete capítulos sobre el pasado, presente y futuro de uno de los patrimonios industriales más emblemáticos de Cataluña.',
    chapters: 'Los siete capítulos',
    promoter: 'Promotor',
    languages: 'Idiomas',
    location: 'Ubicación',
    updated: 'Actualizado',
    a11yLink: 'Declaración de accesibilidad',
  },
  en: {
    eyebrow: 'Microsite',
    title: { main: 'Three', em: 'Chimneys' },
    deck: "A century of electrical production and citizen mobilization on the left bank of the Besòs. Seven chapters on the past, present and future of one of Catalonia's most emblematic industrial heritage sites.",
    chapters: 'The seven chapters',
    promoter: 'Promoted by',
    languages: 'Languages',
    location: 'Location',
    updated: 'Updated',
    a11yLink: 'Accessibility statement',
  },
};

/* ═══════════════════════════════════════════════════════════════
   Landing page
   ═══════════════════════════════════════════════════════════════ */
function Landing({ lang, ui }) {
  const L = LANDING_COPY[lang];
  return (
    <article className="landing" aria-labelledby="landing-title">
      <header className="landing-hero">
        <div
          className="landing-bg"
          role="img"
          aria-label={L.title.main + ' ' + L.title.em + ' — Sant Adrià de Besòs'}
          style={{ backgroundImage: "url('assets/render-pdu-aeria.jpg')" }}
        ></div>
        <div className="landing-overlay" aria-hidden="true"></div>
        <div className="landing-content">
          <p className="landing-eyebrow">{ui.site}</p>
          <h1 id="landing-title">{L.title.main}<br /><em>{L.title.em}</em></h1>
          <p className="landing-deck">{L.deck}</p>
        </div>
      </header>

      <section className="landing-menu" aria-labelledby="landing-menu-head">
        <h2 id="landing-menu-head" className="landing-menu-head">{L.chapters}</h2>
        <ol className="landing-list" aria-label={L.chapters}>
          {CHAPTERS.map((c) => (
            <li key={c.n}>
              <button
                type="button"
                className="landing-row"
                onClick={() => navigate(c.slug)}
                aria-label={`${c.n}. ${plainTitle(c.title[lang])}`}>
                <span className="landing-row-num" aria-hidden="true">{c.n}</span>
                <span className="landing-row-body">
                  <span className="landing-row-h3">
                    {c.title[lang].main} <em>{c.title[lang].em}</em>
                  </span>
                  <span className="landing-row-p">{renderInline(c.deck[lang])}</span>
                </span>
                <span className="landing-row-arr" aria-hidden="true">{Icon.arrR}</span>
              </button>
            </li>
          ))}
        </ol>
      </section>

      <dl className="landing-meta">
        <div className="row"><dt>{L.promoter}</dt><dd>Consorci del Besòs</dd></div>
        <div className="row"><dt>{L.languages}</dt><dd>CA · ES · EN</dd></div>
        <div className="row"><dt>{L.location}</dt><dd>Sant Adrià de Besòs</dd></div>
        <div className="row"><dt>{L.updated}</dt><dd>2026</dd></div>
      </dl>
    </article>
  );
}

/* ═══════════════════════════════════════════════════════════════
   Chapter page
   ═══════════════════════════════════════════════════════════════ */
function ChapterPage({ chapter, lang, ui, totalCh }) {
  const blocks = articleFor(chapter.slug);
  return (
    <article className="chapter-content" aria-labelledby={`ch-${chapter.slug}-title`}>
      <ChapterHero chapter={chapter} lang={lang} ui={ui} totalCh={totalCh} />
      <span id={`ch-${chapter.slug}-title`} className="sr-only">{plainTitle(chapter.title[lang])}</span>
      {blocks && renderChapter(blocks, lang)}
      <Pager chapter={chapter} lang={lang} ui={ui} />
    </article>
  );
}

/* ═══════════════════════════════════════════════════════════════
   Accessibility statement page (EAA requirement)
   ═══════════════════════════════════════════════════════════════ */
const A11Y_COPY = {
  ca: {
    title: "Declaració d'accessibilitat",
    intro: "Aquest microsite del Consorci del Besòs s'ha desenvolupat per complir amb la **Directiva Europea (UE) 2019/882** d'accessibilitat dels productes i serveis, així com amb les **Pautes WCAG 2.1 nivell AA**.",
    sections: [
      {
        h: 'Compatibilitat',
        items: [
          'Compatible amb lectors de pantalla (VoiceOver, TalkBack, NVDA, JAWS).',
          'Navegació completa amb teclat (Tab, Enter, Esc).',
          'Suporta zoom de text fins al 200 % sense pèrdua de funcionalitat.',
          'Respecta la preferència de moviment reduït del sistema.',
          'Contrast de color verificat segons WCAG 2.1 AA.',
        ],
      },
      {
        h: 'Estructura semàntica',
        items: [
          'Encapçalaments jeràrquics i landmarks ARIA correctes.',
          'Botons i enllaços diferenciats segons funció.',
          'Idioma de la pàgina declarat (CA / ES / EN).',
          'Imatges amb descripcions alternatives.',
        ],
      },
      {
        h: 'Contacte',
        body: 'Si trobeu cap barrera d\'accessibilitat o necessiteu un format alternatiu, escriviu-nos a info@consorcibesos.cat o truqueu al 93 462 68 68.',
      },
    ],
  },
  es: {
    title: 'Declaración de accesibilidad',
    intro: 'Este microsite del Consorci del Besòs se ha desarrollado para cumplir con la **Directiva Europea (UE) 2019/882** de accesibilidad de los productos y servicios, así como con las **Pautas WCAG 2.1 nivel AA**.',
    sections: [
      {
        h: 'Compatibilidad',
        items: [
          'Compatible con lectores de pantalla (VoiceOver, TalkBack, NVDA, JAWS).',
          'Navegación completa con teclado (Tab, Enter, Esc).',
          'Soporta zoom de texto hasta el 200 % sin pérdida de funcionalidad.',
          'Respeta la preferencia de movimiento reducido del sistema.',
          'Contraste de color verificado según WCAG 2.1 AA.',
        ],
      },
      {
        h: 'Estructura semántica',
        items: [
          'Encabezados jerárquicos y landmarks ARIA correctos.',
          'Botones y enlaces diferenciados según función.',
          'Idioma de la página declarado (CA / ES / EN).',
          'Imágenes con descripciones alternativas.',
        ],
      },
      {
        h: 'Contacto',
        body: 'Si encuentras alguna barrera de accesibilidad o necesitas un formato alternativo, escríbenos a info@consorcibesos.cat o llama al 93 462 68 68.',
      },
    ],
  },
  en: {
    title: 'Accessibility statement',
    intro: "This Consorci del Besòs microsite has been developed to comply with the **European Directive (EU) 2019/882** on accessibility of products and services, as well as with the **WCAG 2.1 Level AA Guidelines**.",
    sections: [
      {
        h: 'Compatibility',
        items: [
          'Compatible with screen readers (VoiceOver, TalkBack, NVDA, JAWS).',
          'Full keyboard navigation (Tab, Enter, Esc).',
          'Supports text zoom up to 200 % without loss of functionality.',
          'Honors the system\'s reduced-motion preference.',
          'Color contrast verified to WCAG 2.1 AA.',
        ],
      },
      {
        h: 'Semantic structure',
        items: [
          'Hierarchical headings and proper ARIA landmarks.',
          'Buttons and links differentiated by function.',
          'Page language declared (CA / ES / EN).',
          'Images with alternative descriptions.',
        ],
      },
      {
        h: 'Contact',
        body: 'If you encounter an accessibility barrier or need an alternative format, write to info@consorcibesos.cat or call +34 93 462 68 68.',
      },
    ],
  },
};

function AccessibilityPage({ lang }) {
  const A = A11Y_COPY[lang];
  return (
    <article className="a11y-page" aria-labelledby="a11y-title">
      <header className="hero">
        <p className="hero-eyebrow"><span className="ix" aria-hidden="true">{Icon.a11y}</span><span>EAA · WCAG 2.1 AA</span></p>
        <h1 id="a11y-title">{A.title}</h1>
        <p className="deck">{renderInline(A.intro)}</p>
      </header>

      {A.sections.map((s, i) => (
        <section key={i} className="body" aria-labelledby={`a11y-sec-${i}`}>
          <div className="section-marker" aria-hidden="true">
            <span className="bullet"></span>
            <span className="line"></span>
            <span className="label">{s.h}</span>
          </div>
          <h2 id={`a11y-sec-${i}`} className="sr-only">{s.h}</h2>
          {s.items ? (
            <ul className="a11y-list">{s.items.map((it, j) => <li key={j}>{it}</li>)}</ul>
          ) : (
            <p>{s.body}</p>
          )}
        </section>
      ))}
    </article>
  );
}

/* ═══════════════════════════════════════════════════════════════
   Menu Overlay — modal dialog (focus trap + Escape)
   ═══════════════════════════════════════════════════════════════ */
function MenuOverlay({ lang, ui, onClose, returnFocusRef }) {
  const dialogRef = useRef(null);
  const closeBtnRef = useRef(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement;
    closeBtnRef.current?.focus();

    const onKey = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'Tab') {
        const focusables = dialogRef.current?.querySelectorAll(
          'button, a[href], [tabindex]:not([tabindex="-1"])'
        );
        if (!focusables || focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', onKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
      if (returnFocusRef?.current) returnFocusRef.current.focus();
      else previouslyFocused?.focus?.();
    };
  }, [onClose, returnFocusRef]);

  return (
    <div
      ref={dialogRef}
      className="menu-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="menu-title"
      id="microsite-menu">
      <button
        ref={closeBtnRef}
        type="button"
        className="menu-close"
        onClick={onClose}
        aria-label={ui.close}>
        {Icon.close}
      </button>
      <h2 id="menu-title" className="menu-eyebrow">{ui.indexTitle}</h2>
      <nav aria-label={ui.indexTitle}>
        <ul className="menu-list">
          <li>
            <button type="button" onClick={() => { navigate('landing'); onClose(); }}>
              <span className="n" aria-hidden="true">00</span>
              <span className="l">{ui.landingFull}</span>
            </button>
          </li>
          {CHAPTERS.map((c) => (
            <li key={c.n}>
              <button type="button" onClick={() => { navigate(c.slug); onClose(); }}>
                <span className="n" aria-hidden="true">{c.n}</span>
                <span className="l">{plainTitle(c.title[lang])}</span>
              </button>
            </li>
          ))}
          <li className="menu-list-sep">
            <button type="button" onClick={() => { navigate('accessibilitat'); onClose(); }}>
              <span className="n" aria-hidden="true">{Icon.a11y}</span>
              <span className="l">{ui.a11y.title}</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   Routing
   ═══════════════════════════════════════════════════════════════ */
function navigate(slug) {
  if (window.location.hash !== '#' + slug) {
    window.location.hash = '#' + slug;
  }
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  requestAnimationFrame(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    const main = document.getElementById('main-content');
    if (main) main.focus({ preventScroll: true });
  });
}

function currentSlugFromHash() {
  if (typeof window === 'undefined') return 'landing';
  const h = (window.location.hash || '#landing').replace(/^#/, '');
  if (h === 'landing' || h === '') return 'landing';
  if (h === 'accessibilitat') return 'accessibilitat';
  const exists = CHAPTERS.some((c) => c.slug === h);
  return exists ? h : 'landing';
}

/* ═══════════════════════════════════════════════════════════════
   Root Page
   ═══════════════════════════════════════════════════════════════ */
function Page() {
  const [lang, setLang] = useState(() => {
    if (typeof window === 'undefined') return 'ca';
    return localStorage.getItem('tx-lang') || 'ca';
  });
  const [slug, setSlug] = useState(currentSlugFromHash);
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);

  // Persist language + update <html lang>
  useEffect(() => {
    localStorage.setItem('tx-lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  // Update page title per route + language
  useEffect(() => {
    const ui = UI[lang];
    if (slug === 'landing') {
      document.title = `${ui.site} · ${UI[lang].landingFull} — Consorci del Besòs`;
    } else if (slug === 'accessibilitat') {
      document.title = `${UI[lang].a11y.title} · ${ui.site}`;
    } else {
      const c = CHAPTERS.find((x) => x.slug === slug);
      if (c) document.title = `${c.n} · ${plainTitle(c.title[lang])} — ${ui.site}`;
    }
  }, [slug, lang]);

  // Hash sync
  useEffect(() => {
    const onHash = () => setSlug(currentSlugFromHash());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  // Scroll progress
  useEffect(() => {
    const onScroll = () => {
      const st = window.scrollY;
      const sh = document.documentElement.scrollHeight;
      const ch = window.innerHeight;
      const p = Math.max(0, Math.min(100, (st / Math.max(1, sh - ch)) * 100));
      setProgress(p);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [slug]);

  const ui = UI[lang];
  const current = CHAPTERS.find((c) => c.slug === slug);
  const isLanding = slug === 'landing';
  const isA11y = slug === 'accessibilitat';
  const totalCh = CHAPTERS.length.toString().padStart(2, '0');

  const handleMenu = useCallback(() => setMenuOpen((v) => !v), []);

  return (
    <div className="page" data-slug={slug}>
      <a href="#main-content" className="skip-link">{ui.skipToContent}</a>

      <AppBar
        progress={progress}
        lang={lang}
        setLang={setLang}
        ui={ui}
        currentSlug={slug}
        current={current}
        menuOpen={menuOpen}
        totalCh={totalCh}
        onMenu={(e) => {
          menuButtonRef.current = e?.currentTarget || document.querySelector('.appbar .menu');
          handleMenu();
        }}
      />

      <main id="main-content" tabIndex="-1">
        {isLanding ? <Landing lang={lang} ui={ui} />
          : isA11y  ? <AccessibilityPage lang={lang} />
          : current ? <ChapterPage chapter={current} lang={lang} ui={ui} totalCh={totalCh} />
          : null}
      </main>

      {/* Polite announcement region — fires only on route change */}
      <div role="status" aria-live="polite" aria-atomic="true" className="sr-only">
        {isLanding ? UI[lang].landingFull
          : isA11y ? UI[lang].a11y.title
          : current ? `${UI[lang].chapter} ${current.n}: ${plainTitle(current.title[lang])}`
          : ''}
      </div>

      <ConsorciFooter />

      {menuOpen && (
        <MenuOverlay
          lang={lang}
          ui={ui}
          onClose={() => setMenuOpen(false)}
          returnFocusRef={menuButtonRef}
        />
      )}
    </div>
  );
}

export default function App() {
  return <Page />;
}