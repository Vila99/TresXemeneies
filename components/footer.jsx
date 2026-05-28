'use client';

import { useState, useEffect } from 'react';

// footer.jsx — Footer corporatiu del Consorci del Besòs
// Adaptat per complir amb la Llei Europea d'Accessibilitat (EAA · WCAG 2.1 AA):
//  · role + aria-label per identificar el landmark
//  · contrasts AA sobre fons fosc (#19323e)
//  · enllaços externs: rel="noopener noreferrer" + sr-only "s'obre en nova pestanya"
//  · SVG decoratiu: aria-hidden="true"

const FOOTER_COPY = {
  ca: { newTab: "(s'obre en una nova pestanya)", contact: "Contacte del Consorci del Besòs", legal: "Avís legal i copyright", privacy: "Política de privacitat", a11y: "Declaració d'accessibilitat" },
  es: { newTab: "(se abre en una nueva pestaña)", contact: "Contacto del Consorci del Besòs", legal: "Aviso legal y copyright", privacy: "Política de privacidad", a11y: "Declaración de accesibilidad" },
  en: { newTab: "(opens in a new tab)", contact: "Consorci del Besòs contact details", legal: "Legal notice and copyright", privacy: "Privacy policy", a11y: "Accessibility statement" },
};

function ConsorciFooter() {
  const [lang, setLang] = useState('ca');

  useEffect(() => {
    const l = (document.documentElement.lang || 'ca').slice(0, 2);
    setLang(FOOTER_COPY[l] ? l : 'ca');

    const observer = new MutationObserver(() => {
      const updated = (document.documentElement.lang || 'ca').slice(0, 2);
      setLang(FOOTER_COPY[updated] ? updated : 'ca');
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
    return () => observer.disconnect();
  }, []);

  const t = FOOTER_COPY[lang] || FOOTER_COPY.ca;

  const wrapStyle = {
    backgroundColor: "#19323e",
    color: "#cfdbe2",
    fontFamily: "Arial, sans-serif",
    fontSize: "13px",
    textAlign: "center",
    padding: "24px 16px 0",
    borderTop: "3px solid #466375",
    lineHeight: 1.55,
  };
  const linkColor = "#dbe5ea";        // 9.4:1 vs #19323e — AAA
  const dimColor  = "#b0c4cc";        // 6.7:1 vs #19323e — AA

  return (
    <footer role="contentinfo" aria-label={t.contact} style={wrapStyle}>
      <img
        src="assets/consorci-logo.png"
        alt="Consorci del Besòs"
        style={{ height: 26, width: "auto", display: "block", margin: "0 auto 14px", filter: "brightness(0) invert(1)" }}
      />

      <address style={{ margin: "0 0 8px", fontStyle: "normal", color: linkColor }}>
        c/ Olímpic s/n, pl.2 · 08930 Sant Adrià de Besòs
        <br/>
        <a href="tel:+34934626868" style={{ color: linkColor, textDecoration: "underline" }}>93 462 68 68</a>
        <br/>
        <a href="mailto:info@consorcibesos.cat" style={{ color: linkColor, textDecoration: "underline" }}>
          info@consorcibesos.cat
        </a>
      </address>

      <hr style={{ border: "none", borderTop: "1px solid #5c7886", margin: "14px auto", width: "60%" }} aria-hidden="true" />

      <p style={{ margin: 0, lineHeight: 1.8, display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
        <a
          href="https://consorcibesos.cat/politica-de-privacitat/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: linkColor, textDecoration: "underline", fontSize: 13 }}
        >
          {t.privacy}
          <span className="sr-only"> {t.newTab}</span>
          <span aria-hidden="true" style={{ marginLeft: 6 }}>↗</span>
        </a>
        <span aria-hidden="true" style={{ color: dimColor }}>·</span>
        <a
          href="#accessibilitat"
          onClick={(e) => {
            e.preventDefault();
            window.location.hash = "#accessibilitat";
            window.scrollTo(0, 0);
          }}
          style={{ color: linkColor, textDecoration: "underline", fontSize: 13 }}
        >
          {t.a11y}
        </a>
      </p>

      <p style={{ margin: "8px 0 16px", color: dimColor, fontSize: 13 }} aria-label={t.legal}>
        © 2026 Consorci del Besòs · Powered by{" "}
        <a
          href="https://oktics.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: linkColor, textDecoration: "underline", fontWeight: 700 }}
        >
          Oktics
          <span className="sr-only"> {t.newTab}</span>
          <span aria-hidden="true" style={{ marginLeft: 4 }}>↗</span>
        </a>
      </p>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1047.8 68.4"
        width="100%"
        style={{ display: "block", margin: 0, width: "100%" }}
        aria-hidden="true"
        focusable="false"
      >
        <g fill="#466375">
          <polygon points="392.1 58.6 391.8 53.6 391.6 48.6 387.3 47.3 383 46 383 52.3 383 58.6 387.5 58.6 392.1 58.6"/>
          <path d="M973.3,58.2c0-.9-1.2-1.1-6.8-1.1h-6.8v-3c0-1.7-.3-3-.8-3s-.8.8-.8,1.9c0,1.6-.3,1.9-2.6,1.9h-2.6v-16.5h-2.2c-2.8,0-3.1-.9-3.1-8.5,0-3.4-.2-11-.6-17-.5-9.7-.6-10.3-1-6-.3,2.7-.5,10.5-.6,17.4v12.6h-5.9l-.5-5.4c-.3-3-.7-10.6-1-16.9-.3-6.3-.7-11.4-1-11.4s-.8,7.5-1.2,16.7c-.7,16.5-.7,16.7-2.3,16.9-.9.1-1.7-.1-1.7-.6s-1-.8-2.2-.8c-2.1,0-2.2,0-2.6-5.8-.3-3.2-.6-10.2-.9-15.6-.7-15.6-1.4-18.2-1.9-7.5-.3,5-.5,13.2-.6,18.2-.1,9.7-.7,12.1-3.1,12.1-3.7,0-3.8.2-3.8,11.7v10.8h-21.8v-6.8h-21.8v-12c0-10.2-.2-12-1.1-12s-1.1-.5-1.1-1.1-.9-1.1-3.8-1.1h-3.8v-6h-15.8v-3.4c0-2.9-.2-3.4-1.5-3.4s-1.5.5-1.5,3-.3,3-1.1,3-1.1.8-1.1,2.2-.3,2.2-1.5,2.2-1.5.5-1.5,17.6v17.6h-24V23.5l-2.1-.4c-1.1-.2-4.2-.2-6.9,0-3.8.3-4.9.7-5.1,1.8-.3,1.2-1.1,1.4-5,1.4s-7.3.2-10.4.5l-5.7.5v8.8c0,8.6,0,8.8,1.7,9.1,1.3.2,1.7.8,1.9,2.7.2,2.4.2,2.4-3.2,2.4h-3.4v9h-2.2c-2.2,0-2.2,0-2.2-3.7s0-3.7-2.4-3.9c-2.1-.2-2.5-.5-2.7-2.7-.2-2.2,0-2.4,1.7-2.4h1.9v-16.3l-2.8-.3c-1.5-.2-5.9.3-9.8,1.1l-6.9,1.5v15.4l2.1.2c1.6.2,2.1.7,2.3,2.3.2,2,0,2.1-2.8,2.1h-3v6.7h-6v-24.7l-3.2-.9c-3.7-1-3.9-1-13.5.2l-7.3.9v14.8h-8.2v8.1l-3.2.5c-1.8.3-5.8.7-8.9.9l-5.7.4-.3-6.4c-.5-9.2-.6-9.2-16.3-9.9-10.9-.5-12.4-.4-13.2.7-.7.9-2.2,1.2-6.6,1.2s-5.7.1-5.7,1.5-.5,1.5-4.1,1.5h-4.1l-.5,4.3c-.9,7.7,1.6,6.9-22.5,6.9h-21.3v-6h5.8c4.8-.1,5.4-.3,3.6-.8-2.1-.7-15.5-2.9-17.4-2.9-.7,0-.8,1.3-.5,4.9l.5,4.9h-15.2v-3c0-2.2.4-3.2,1.3-3.5.7-.3,2.4-1.3,3.6-2.2,2.8-2.1,3.3-2.2,3.4-.4,0,.8.3.6.6-.6.3-1,1.7-2.7,3.1-3.7l2.6-1.8-13.3.4-13.3.4-13.7,5.1c-11,4.1-13.3,5.2-11.3,5.4,2,.2,2.4.5,2.4,2.1s-.3,1.8-4.1,1.8-4.1-.1-4.1-1.7-1.9-3.6-5.6-7.3l-5.6-5.6v14.6h-15.7c-17.9,0-21.7-.6-25.9-4.2l-3-2.5h4.4c4.1,0,4.3-.1,4.1-1.7-.2-1.5-.7-1.7-5.7-1.9l-5.4-.2v-12.7l-3.9,1.7c-3.9,1.7-4,1.7-6.9.4-1.6-.7-3.2-1.3-3.6-1.4s-.6,2.6-.6,5.9v6l-5.8.2c-5.4.2-5.8.3-6.1,1.9-.2,1.6,0,1.7,3.6,1.7s3.8.2,3.8.4-1.1,1.4-2.4,2.6c-2.5,2.2-3.4,2.6-9.8,3.4-3.2.4-3.6.3-3.6-1.1s-.5-1.5-1.1-1.5-1.1.7-1.1,1.5-.5,1.5-1.9,1.5-1.9-.3-1.9-2.6-.3-2.6-1.1-2.6-1.1.8-1.1,2.6-.2,2.6-1.9,2.6-1.9-.3-1.9-3.4-.3-3.4-1.1-3.4-1.1.9-1.1,3.4-.2,3.4-1.9,3.4-1.9-.2-1.9-4.5-.2-4.5-1.1-4.5-1.1,1-1.1,4.5,0,4.5-1.9,4.5-1.9-.1-1.9-5.6-.2-5.6-1.1-5.6-1.1,1.1-1.1,5.6,0,5.6-1.9,5.6-1.9,0-1.9-6.8-.2-6.8-1.1-6.8-1.1,1.3-1.1,6.8-.1,6.8-1.5,6.8-1.5-.5-1.5-7.5-.1-7.5-1.5-7.5-1.5.5-1.5,7.5v7.5h-33v-18h-15.8v9c0,5.5-.3,9-.8,9s-.8-3.5-.8-9-.3-9-.6-9c-.3,0-3.9.6-7.9,1.3l-7.3,1.3v15.5h-1.9c-1.9,0-1.9,0-1.9-6.8v-6.8h-20.2v6.8c0,6.2-.1,6.8-1.5,6.8s-1.5-.5-1.5-6.8v-6.8h-20.2v6.8c0,6.7,0,6.8-1.9,6.8s-1.9,0-1.9-7v-7l-11.8-1.3c-6.5-.7-12.1-1.3-12.4-1.3-.3,0-.6,3.7-.6,8.3,0,7.8,0,8.2-1.5,8.2s-1.5-.5-1.5-8.2-.3-8.2-.6-8.2-2.2.5-4.1,1.2l-3.5,1.2v14.1h-18.9c0,0-18.9-.2-18.9-.2l13.4-1.9,13.4-1.9-.2-2.3c-.2-2.1-1.8-3.5-15.8-13.7l-15.6-11.4-6.1,2.1c-3.4,1.2-7.2,2.5-8.6,3l-2.4.9v8.7c0,4.8.4,10.5.7,12.7l.6,3.9h-80v-3.4c0-3.2,0-3.4,2.2-3.4s2.2-.2,2.2-.4-1.2-2.7-2.6-5.6c-1.8-3.7-3.1-5.3-4.3-5.6-2.9-.6-39.9-5.6-40.1-5.3-.1.1.5,1.8,1.3,3.8,1.8,4.1,1.8,5.4.7,13.7l-.9,6.2H0v9h1048.4v-9,9h2v-9c-66.6,0-77.1-.3-77.1-1.1Z"/>
          <path d="M79.3,57.1c0,2.2,0,2.3-4.1,2.3h-4.1v-6.9c0,0,.1-6.9.1-6.9l2.3,5.1c2.1,4.6,2.5,5.1,4.1,4.7,1.5-.4,1.7-.2,1.7,1.8h0Z"/>
          <path d="M108.5,56.2v3.2h-27.8v-1.9c0-1,.4-2.1.9-2.2.5-.2,6.8-.8,13.9-1.3l12.9-1v3.2Z"/>
          <path d="M473.7,49.6h-5.5c-3,0-5.7-.2-6-.5-.6-.6-.7-8.5,0-8.5s1.7.4,3.3.8c2.3.7,3.2.6,5.1-.4,1.3-.7,2.5-1.2,2.7-1.2s.4,2.2.4,4.9v4.9Z"/>
          <path d="M526.2,55.3c0,3.5-.2,4-1.5,4s-1.5-.5-1.5-5.8v-5.8s1.5,1.8,1.5,1.8c1.1,1.3,1.5,2.9,1.5,5.8h0Z"/>
          <path d="M533,57.4c0,1.7-.3,1.9-3,1.9h-3v-3.2c0-3.1,0-3.1,1.3-1.7.8.9,2,1.4,3,1.3,1.4-.2,1.7.1,1.7,1.7h0Z"/>
          <path d="M558.5,55.2v4.2h-15v-2.1c0-2,.4-2.3,4.7-3.7,2.6-.8,6-1.8,7.5-2.1l2.8-.5v4.2Z"/>
          <path d="M560.8,59.4c-1.2,0-1.5-.5-1.5-2.2s.3-2.2,1.5-2.2,1.5.5,1.5,2.2-.3,2.2-1.5,2.2Z"/>
          <path d="M565.2,59.4c-2.1,0-2.3-.2-2.1-2.1.2-1.6.7-2.1,2.3-2.3,1.9-.2,2.1,0,2.1,2.1h0c0,2.1-.2,2.3-2.3,2.3Z"/>
          <polygon points="575.8 56.7 575.8 59.4 572 59.4 568.3 59.4 568.3 56.7 568.3 54.1 572 54.1 575.8 54.1 575.8 56.7"/>
          <polygon points="599 56.4 599 59.4 596 59.4 593 59.4 593 56.4 593 53.4 596 53.4 599 53.4 599 56.4"/>
          <path d="M163.2,57.4h0c8,.5,16.9,1,19.7,1.1,5,.1,5.1,0,5.1-2,0-5.4-1.9-20.6-2.6-20.9-.4-.2-4.5,1-9,2.6-6.7,2.4-8.3,3.2-8.6,4.6-.4,1.5-.5,1.6-1.4.5-.9-1.1-2.2-.8-12.4,2.8l-11.4,4-.2,3.1-.2,3.1h3.2c1.8.1,9.8.6,17.9,1.1Z"/>
        </g>
      </svg>
    </footer>
  );
}

export default ConsorciFooter;