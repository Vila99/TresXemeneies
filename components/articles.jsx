// articles.jsx — Contingut complet dels 8 capítols
//
// PENDENT DE MATERIAL DEFINITIU (informe del client, 09.2026):
//   · origens-alternadors, origens-calderes → còpies amb marca d'aigua del
//     Fons Històric d'Endesa; s'usen com a referència mentre el Consorci en
//     tramita les definitives. (badalona-i ja és la definitiva, 09.2026.)
//   · video-3cat-referendum, video-3cat-platja → còpies de treball de 3Cat amb
//     timecode i mosca sobreimpresos; drets en tràmit.
//   · Els enllaços sense `href` (Filmoteca, ON/OFF, Fonamentals, 69/78 PRESCRIT,
//     Nou impuls al CMC) esperen URL pública.
// Font: «PROPOSTA NOU TEXT» (Consorci del Besòs, 31.07.2026)
// Cada array és la seqüència de blocs que es renderitza via renderChapter(blocks, lang).

export const ARTICLE_ICONA = [
  { kind: "p", lead: true, t: {
    ca: "Les Tres Xemeneies no són només una fita en l'horitzó metropolità: són les **sentinelles de la memòria obrera** i un dels monuments industrials més alts de la Mediterrània dins la seva tipologia.",
    es: "Las Tres Chimeneas no son sólo un hito en el horizonte metropolitano: son las **centinelas de la memoria obrera** y uno de los monumentos industriales más altos del Mediterráneo dentro de su tipología.",
    en: "The Three Chimneys are more than a landmark on the metropolitan skyline: they are the **sentinels of working-class memory** and one of the tallest industrial monuments in the Mediterranean within their typology.",
  }},
  { kind: "p", t: {
    ca: "Amb els seus **200 metres d'alçada**, defineixen l'estètica del litoral entre Sant Adrià de Besòs i Badalona, i simbolitzen una transició imparable: de la història de la producció elèctrica amb combustibles fòssils al futur de la innovació digital.",
    es: "Con sus **200 metros de altura**, definen la estética del litoral entre Sant Adrià de Besòs y Badalona, y simbolizan una transición imparable: de la historia de la producción eléctrica con combustibles fósiles al futuro de la innovación digital.",
    en: "At **200 metres tall**, they define the coastline between Sant Adrià de Besòs and Badalona, and stand for an unstoppable transition: from a history of fossil-fuelled electricity generation to a future of digital innovation.",
  }},
  { kind: "figure", src: "/assets/fotografies/icona-goula-frontal.jpg", num: "01", ratio: "wide",
    desc: {
      ca: "Les Tres Xemeneies i la Nau de Turbines vistes des de l'esplanada del recinte, a la desembocadura del Besòs.",
      es: "Las Tres Chimeneas y la Nave de Turbinas vistas desde la explanada del recinto, en la desembocadura del Besòs.",
      en: "The Three Chimneys and the Turbine Hall seen from the esplanade of the site, at the mouth of the Besòs.",
    },
    source: { ca: "Adrià Goula · Arxiu Consorci del Besòs", es: "Adrià Goula · Archivo Consorci del Besòs", en: "Adrià Goula · Consorci del Besòs Archive" },
  },
  { kind: "section", t: { ca: "Un símbol d'identitat col·lectiva", es: "Un símbolo de identidad colectiva", en: "A symbol of collective identity" } },
  { kind: "p", t: {
    ca: "Aquest conjunt, declarat **Bé Cultural d'Interès Local (BCIL)**, ha passat de ser una infraestructura de generació elèctrica a convertir-se en un símbol d'identitat col·lectiva.",
    es: "Este conjunto, declarado **Bien Cultural de Interés Local (BCIL)**, ha pasado de ser una infraestructura de generación eléctrica a convertirse en un símbolo de identidad colectiva.",
    en: "Listed as a **Local Cultural Heritage Asset (BCIL)**, the complex has gone from being an electricity-generating facility to a symbol of collective identity.",
  }},
  { kind: "p", t: {
    ca: "Avui, les Tres Xemeneies s'alcen com el cor d'una transformació urbana de **32 hectàrees** que busca recosir el front marítim i situar Catalunya al centre de la indústria creativa mundial.",
    es: "Hoy, las Tres Chimeneas se alzan como el corazón de una transformación urbana de **32 hectáreas** que busca recoser el frente marítimo y situar a Cataluña en el centro de la industria creativa mundial.",
    en: "Today the Three Chimneys stand at the heart of a **32-hectare** urban transformation that aims to stitch the seafront back together and place Catalonia at the centre of the global creative industry.",
  }},
  { kind: "stats", head: { ca: "Dades ràpides", es: "Datos rápidos", en: "Quick facts" },
    items: [
      { num: "200", unit: "m",
        label: { ca: "Alçada", es: "Altura", en: "Height" },
        desc:  { ca: "Una de les estructures industrials més altes del Mediterrani.", es: "Una de las estructuras industriales más altas del Mediterráneo.", en: "One of the tallest industrial structures in the Mediterranean." } },
      { num: "32", unit: "ha",
        label: { ca: "Superfície del sector", es: "Superficie del sector", en: "Sector surface" },
        desc:  { ca: "En transformació integral.", es: "En transformación integral.", en: "Undergoing full transformation." } },
      { num: "2016",
        label: { ca: "Protecció patrimonial", es: "Protección patrimonial", en: "Heritage listing" },
        desc:  { ca: "Declarat Bé Cultural d'Interès Local.", es: "Declarado Bien Cultural de Interés Local.", en: "Listed as Local Cultural Heritage Asset." } },
      { num: "1973",
        label: { ca: "Primer grup", es: "Primer grupo", en: "First unit" },
        desc:  { ca: "Posada en funcionament del primer grup de la central.", es: "Puesta en funcionamiento del primer grupo de la central.", en: "Commissioning of the plant's first generating unit." } },
    ],
  },
  { kind: "figure", video: "/assets/videos/video-icona-aeri.mp4", poster: "/assets/fotografies/poster-icona-aeri.jpg", num: "02", ratio: "wide",
    desc: {
      ca: "Vista aèria del conjunt patrimonial i del front litoral entre Sant Adrià de Besòs i Badalona.",
      es: "Vista aérea del conjunto patrimonial y del frente litoral entre Sant Adrià de Besòs y Badalona.",
      en: "Aerial view of the heritage complex and the coastline between Sant Adrià de Besòs and Badalona.",
    },
    source: { ca: "Adrià Goula · Arxiu Consorci del Besòs", es: "Adrià Goula · Archivo Consorci del Besòs", en: "Adrià Goula · Consorci del Besòs Archive" },
  },
];

export const ARTICLE_ORIGENS = [
  { kind: "section", t: { ca: "El bressol de l'energia", es: "La cuna de la energía", en: "The cradle of energy" } },
  { kind: "p", lead: true, t: {
    ca: "La gènesi elèctrica a la desembocadura del Besòs data de **1913**, quan l'empresa *Energía Eléctrica de Cataluña* va inaugurar la primera central tèrmica de carbó per alimentar una Barcelona en plena ebullició industrial.",
    es: "La génesis eléctrica en la desembocadura del Besòs data de **1913**, cuando la empresa *Energía Eléctrica de Cataluña* inauguró la primera central térmica de carbón para alimentar a una Barcelona en plena ebullición industrial.",
    en: "The electrical genesis at the mouth of the Besòs dates to **1913**, when *Energía Eléctrica de Cataluña* opened the first coal-fired thermal plant to power a Barcelona in full industrial boil.",
  }},
  { kind: "p", t: {
    ca: "El projecte, signat per l'arquitecte **Eduard Ferrés**, va ser una fita d'enginyeria en utilitzar per primer cop a Catalunya el sistema **Hennebique** de formigó armat per a una estructura de grans dimensions.",
    es: "El proyecto, firmado por el arquitecto **Eduard Ferrés**, fue un hito de ingeniería al utilizar por primera vez en Cataluña el sistema **Hennebique** de hormigón armado para una estructura de grandes dimensiones.",
    en: "The project, signed by architect **Eduard Ferrés**, was an engineering milestone: the first use in Catalonia of the **Hennebique** reinforced-concrete system on a large-scale structure.",
  }},
  { kind: "figure", src: "/assets/fotografies/central-1913-aeria.jpg", num: "01", year: "c.1925", ratio: "wide",
    desc: {
      ca: "Primera central tèrmica del Besòs. Vista aèria amb les quatre xemeneies de maons originals, els horts circumdants i el moll de descàrrega de carbó que s'endinsava al mar.",
      es: "Primera central térmica del Besòs. Vista aérea con las cuatro chimeneas de ladrillo originales, las huertas circundantes y el muelle de descarga de carbón adentrándose en el mar.",
      en: "The first Besòs thermal plant. Aerial view of the four original brick chimneys, surrounding orchards, and the coal-unloading pier reaching into the sea.",
    },
    source: { ca: "Arxiu Nacional de Catalunya · Fons FECSA-Endesa", es: "Archivo Nacional de Cataluña · Fondo FECSA-Endesa", en: "National Archive of Catalonia · FECSA-Endesa collection" },
  },
  { kind: "section", t: { ca: "Tecnologia pionera", es: "Tecnología pionera", en: "Pioneering technology" } },
  { kind: "p", t: {
    ca: "Les obres van començar l'abril de 1912 i la central es va connectar a la xarxa el **23 de març de 1913**. El projecte preveia vuit turboalternadors; en l'engegada només n'entraren en funcionament dos, de 7,5 MW cadascun. Un any més tard s'ampliava amb un grup de 15 MW.",
    es: "Las obras comenzaron en abril de 1912 y la central se conectó a la red el **23 de marzo de 1913**. El proyecto preveía ocho turboalternadores; en la puesta en marcha sólo entraron en funcionamiento dos, de 7,5 MW cada uno. Un año después se ampliaba con un grupo de 15 MW.",
    en: "Construction began in April 1912 and the plant was connected to the grid on **23 March 1913**. The original project foresaw eight turbo-alternators; only two went into operation initially, at 7.5 MW each. A year later a 15 MW group was added.",
  }},
  { kind: "p", t: {
    ca: "Aquesta planta no només era innovadora per la seva arquitectura, sinó també per la seva infraestructura tècnica. Per a la condensació del vapor s'utilitzava **aigua de mar** captada mitjançant unes imponents estructures que s'endinsaven **150 metres** dins la Mediterrània.",
    es: "Esta planta no sólo era innovadora por su arquitectura, sino también por su infraestructura técnica. Para la condensación del vapor se utilizaba **agua de mar** captada mediante unas imponentes estructuras que se adentraban **150 metros** en el Mediterráneo.",
    en: "The plant was innovative not only architecturally but technically. Steam was condensed using **seawater** drawn in through imposing structures that reached **150 metres** into the Mediterranean.",
  }},
  { kind: "stats", head: { ca: "La primera central · 1913", es: "La primera central · 1913", en: "The first plant · 1913" },
    items: [
      { num: "30", unit: "MW",
        label: { ca: "Potència total",     es: "Potencia total",     en: "Total power" },
        desc:  { ca: "2 grups de 7,5 + 1 de 15.", es: "2 grupos de 7,5 + 1 de 15.", en: "Two 7.5 MW groups + one 15 MW." } },
      { num: "4",
        label: { ca: "Xemeneies de maons", es: "Chimeneas de ladrillo", en: "Brick chimneys" },
        desc:  { ca: "60 m d'alçada cadascuna.", es: "60 m de altura cada una.", en: "60 m tall each." } },
      { num: "16",
        label: { ca: "Generadors de vapor", es: "Generadores de vapor", en: "Steam generators" },
        desc:  { ca: "Sistema Delaunay-Belleville.", es: "Sistema Delaunay-Belleville.", en: "Delaunay-Belleville system." } },
      { num: "150", unit: "m",
        label: { ca: "Captació al mar", es: "Captación marina", en: "Sea intake" },
        desc:  { ca: "Estructures per al refredament.", es: "Estructuras para la refrigeración.", en: "Structures for cooling." } },
    ],
  },
  { kind: "section", t: { ca: "La primera xarxa d'alta tensió", es: "La primera red de alta tensión", en: "The first high-voltage grid" } },
  { kind: "p", t: {
    ca: "La central formava part de la **primera xarxa d'alta tensió del país**, connectant-se amb la planta hidroelèctrica de *Cabdella* (Pirineus) a través d'una línia de **80 kV i 175 km** de longitud. Això va convertir el Besòs en peça clau del sistema elèctric català.",
    es: "La central formaba parte de la **primera red de alta tensión del país**, conectándose con la planta hidroeléctrica de *Cabdella* (Pirineos) a través de una línea de **80 kV y 175 km** de longitud. Esto convirtió al Besòs en pieza clave del sistema eléctrico catalán.",
    en: "The plant formed part of the **country's first high-voltage grid**, linked to the *Cabdella* hydroelectric station in the Pyrenees by an **80 kV, 175 km** line. This made the Besòs a keystone of the Catalan electrical system.",
  }},
  { kind: "quote",
    t: {
      ca: "La primera xarxa d'alta tensió de **175 quilòmetres** que va connectar *el Pirineu amb el mar*.",
      es: "La primera red de alta tensión de **175 kilómetros** que conectó *el Pirineo con el mar*.",
      en: "The first high-voltage grid of **175 kilometres** to connect *the Pyrenees with the sea*.",
    },
    cite: {
      ca: "— Línia Cabdella–Besòs · 80 kV · 1913",
      es: "— Línea Cabdella–Besòs · 80 kV · 1913",
      en: "— Cabdella–Besòs line · 80 kV · 1913",
    },
  },
  { kind: "figure", src: "/assets/fotografies/origens-alternadors.jpg", num: "02", year: "c.1925", ratio: "wide",
    desc: {
      ca: "Sala de màquines de la primera central, amb els grups turboalternadors alineats sota el pont grua.",
      es: "Sala de máquinas de la primera central, con los grupos turboalternadores alineados bajo el puente grúa.",
      en: "Machine hall of the first plant, with the turbo-alternator sets lined up beneath the overhead crane.",
    },
    source: { ca: "Fons Històric d'Endesa", es: "Fondo Histórico de Endesa", en: "Endesa Historical Archive" },
  },
  { kind: "list", head: { ca: "Cronologia fundacional", es: "Cronología fundacional", en: "Founding chronology" },
    items: [
      { k: "1912", t: {
        ca: "Comencen les obres, sobre projecte d'Eduard Ferrés, amb el sistema Hennebique de formigó armat.",
        es: "Comienzan las obras, sobre proyecto de Eduard Ferrés, con el sistema Hennebique de hormigón armado.",
        en: "Construction starts, to Eduard Ferrés's design, using the Hennebique reinforced-concrete system.",
      }},
      { k: "1913", t: {
        ca: "Inauguració i connexió a la xarxa el **23 de març**.",
        es: "Inauguración y conexión a la red el **23 de marzo**.",
        en: "Inauguration and grid connection on **23 March**.",
      }},
      { k: "1923", t: {
        ca: "L'empresa *Energía Eléctrica de Cataluña* passa a mans de la **Barcelona Traction** (*la Canadenca*), recuperant la producció després de la crisi de la Primera Guerra Mundial.",
        es: "La empresa *Energía Eléctrica de Cataluña* pasa a manos de la **Barcelona Traction** (*la Canadiense*), recuperando la producción tras la crisis de la Primera Guerra Mundial.",
        en: "The company *Energía Eléctrica de Cataluña* passes to **Barcelona Traction** (*the Canadian*), recovering production after the First World War crisis.",
      }},
    ],
  },
  { kind: "figure", src: "/assets/fotografies/origens-calderes.jpg", num: "03", year: "c.1925", ratio: "wide",
    desc: {
      ca: "Sala de calderes: setze generadors de vapor Delaunay-Belleville alimentats amb carbó britànic.",
      es: "Sala de calderas: dieciséis generadores de vapor Delaunay-Belleville alimentados con carbón británico.",
      en: "Boiler house: sixteen Delaunay-Belleville steam generators fired with British coal.",
    },
    source: { ca: "Fons Històric d'Endesa", es: "Fondo Histórico de Endesa", en: "Endesa Historical Archive" },
  },
];

export const ARTICLE_GUERRES = [
  { kind: "section", t: { ca: "El bloqueig del carbó", es: "El bloqueo del carbón", en: "The coal blockade" } },
  { kind: "p", lead: true, t: {
    ca: "Durant la **Primera Guerra Mundial (1914-1918)** l'activitat de la central es va veure seriosament afectada, degut al bloqueig marítim que dificultava l'abastament de carbó que arribava de la Gran Bretanya. No va ser fins el **1923** que es va recuperar la seva producció amb certa normalitat.",
    es: "Durante la **Primera Guerra Mundial (1914-1918)** la actividad de la central se vio seriamente afectada, debido al bloqueo marítimo que dificultaba el abastecimiento de carbón que llegaba de Gran Bretaña. No fue hasta **1923** que se recuperó su producción con cierta normalidad.",
    en: "During the **First World War (1914-1918)** the plant's activity was seriously affected by the maritime blockade that disrupted the supply of coal arriving from Great Britain. Not until **1923** did production recover any normality.",
  }},
  { kind: "p", t: {
    ca: "Posteriorment, durant la **Guerra Civil espanyola (1936-1939)** la central tèrmica de Sant Adrià del Besòs va esdevenir estratègica, donat que garantia el subministrament elèctric de Barcelona. I per aquest motiu va esdevenir un **objectiu militar crític**.",
    es: "Posteriormente, durante la **Guerra Civil española (1936-1939)** la central térmica de Sant Adrià del Besòs pasó a ser estratégica, dado que garantizaba el suministro eléctrico de Barcelona. Y por este motivo se convirtió en un **objetivo militar crítico**.",
    en: "Later, during the **Spanish Civil War (1936-1939)**, the Sant Adrià del Besòs thermal plant became strategic, since it guaranteed Barcelona's electricity supply. And for that reason it became a **critical military target**.",
  }},
  { kind: "figure", src: "/assets/fotografies/aerea-1913.jpg", num: "01", year: "1939", ratio: "wide",
    desc: {
      ca: "L'arc d'entrada de la primera central, amb la inscripció **1912** gravada a la pedra, entre les runes de l'edifici volat al final de la guerra.",
      es: "El arco de entrada de la primera central, con la inscripción **1912** grabada en la piedra, entre las ruinas del edificio volado al final de la guerra.",
      en: "The entrance arch of the first plant, with **1912** carved into the stone, amid the rubble of the building blown up at the end of the war.",
    },
    source: { ca: "Arxiu Nacional de Catalunya · Fons FECSA-Endesa", es: "Archivo Nacional de Cataluña · Fondo FECSA-Endesa", en: "National Archive of Catalonia · FECSA-Endesa collection" },
  },
  { kind: "section", t: { ca: "Un objectiu militar", es: "Un objetivo militar", en: "A military target" } },
  { kind: "p", t: {
    ca: "En un context de *guerra total*, l'**Aviazione Legionaria** italiana, aliada de Franco, va bombardejar sistemàticament el **Pla de Besòs** — nom de Sant Adrià en l'època — per colpejar el subministrament elèctric de Barcelona i desmoralitzar la rereguarda.",
    es: "En un contexto de *guerra total*, la **Aviazione Legionaria** italiana, aliada de Franco, bombardeó sistemáticamente el **Pla de Besòs** — nombre de Sant Adrià en la época — para golpear el suministro eléctrico de Barcelona y desmoralizar la retaguardia.",
    en: "In a context of *total war*, Italy's **Aviazione Legionaria**, allied with Franco, systematically bombed the **Pla de Besòs** — Sant Adrià's name at the time — to strike Barcelona's electricity supply and demoralize the home front.",
  }},
  { kind: "p", t: {
    ca: "L'atac més devastador va tenir lloc el **13 de novembre de 1938**, quan un bombardeig directe contra la central va causar **16 víctimes mortals**. Uns mesos més tard, al **1939**, durant la retirada republicana també es volaria una part de la primera central tèrmica.",
    es: "El ataque más devastador tuvo lugar el **13 de noviembre de 1938**, cuando un bombardeo directo contra la central causó **16 víctimas mortales**. Unos meses más tarde, en **1939**, durante la retirada republicana también se volaría una parte de la primera central térmica.",
    en: "The most devastating attack came on **13 November 1938**, when a direct bombing of the plant killed **16 people**. A few months later, in **1939**, part of the first thermal plant was also blown up during the Republican retreat.",
  }},
  { kind: "fact", t: {
    ca: "L'aviació italiana va bombardejar la central el 13 de novembre de 1938, causant setze morts. **El 1939 la retirada republicana en va volar una part.**",
    es: "La aviación italiana bombardeó la central el 13 de noviembre de 1938, causando dieciséis muertos. **En 1939 la retirada republicana voló una parte.**",
    en: "Italian aviation bombed the plant on 13 November 1938, killing sixteen. **In 1939 the Republican retreat blew up part of it.**",
  }},
  { kind: "section", t: { ca: "Espai de memòria: el refugi de la placeta Macià", es: "Espacio de memoria: el refugio de la placeta Macià", en: "Memory space: the placeta Macià shelter" } },
  { kind: "p", t: {
    ca: "Per protegir la població civil dels atacs — que van causar un total de **39 morts** al municipi — es van construir refugis com el de la **placeta Macià**, a Sant Adrià de Besòs. Avui aquest espai s'ha recuperat com a museu i espai simbòlic per mantenir viva la memòria d'aquells anys sota les bombes.",
    es: "Para proteger a la población civil de los ataques — que causaron un total de **39 muertos** en el municipio — se construyeron refugios como el de la **placeta Macià**, en Sant Adrià de Besòs. Hoy este espacio se ha recuperado como museo y espacio simbólico para mantener viva la memoria de aquellos años bajo las bombas.",
    en: "To protect civilians from the raids — which killed **39 people** in the municipality — shelters were built, among them the one at **placeta Macià** in Sant Adrià de Besòs. Today it has been restored as a museum and symbolic space keeping alive the memory of those years under the bombs.",
  }},
  { kind: "section", t: { ca: "Postguerra", es: "Posguerra", en: "The postwar years" } },
  { kind: "p", t: {
    ca: "Després de la guerra, l'antiga central termoelèctrica va seguir funcionant de manera limitada, fins que el **1948** l'empresa Barcelona Traction — *la Canadenca* — va veure els seus actius integrats a **Fuerzas Eléctricas de Cataluña, S.A. (FECSA)**, que s'acabava de crear. Al **1954** FECSA va aturar definitivament la seva activitat. Després s'hi va desenvolupar el complex de **Badalona I-II**, i la central de les Tres Xemeneies no va començar a construir-se fins al **1971**.",
    es: "Después de la guerra, la antigua central termoeléctrica siguió funcionando de manera limitada, hasta que en **1948** la empresa Barcelona Traction — *la Canadiense* — vio sus activos integrados en **Fuerzas Eléctricas de Cataluña, S.A. (FECSA)**, que acababa de crearse. En **1954** FECSA detuvo definitivamente su actividad. Después se desarrolló allí el complejo de **Badalona I-II**, y la central de las Tres Chimeneas no empezó a construirse hasta **1971**.",
    en: "After the war the old thermal plant kept running on a limited basis, until in **1948** Barcelona Traction — *the Canadian* — saw its assets folded into the newly created **Fuerzas Eléctricas de Cataluña, S.A. (FECSA)**. In **1954** FECSA halted its activity for good. The **Badalona I-II** complex was developed there afterwards, and the Three Chimneys plant was not begun until **1971**.",
  }},
  { kind: "list", head: { ca: "De la guerra al tancament", es: "De la guerra al cierre", en: "From war to closure" },
    items: [
      { k: "1936–39", t: {
        ca: "Central estratègica per al subministrament de Barcelona i, per tant, objectiu militar.",
        es: "Central estratégica para el suministro de Barcelona y, por tanto, objetivo militar.",
        en: "A strategic plant for Barcelona's supply — and therefore a military target.",
      }},
      { k: "13.11.1938", t: {
        ca: "Bombardeig directe de l'Aviazione Legionaria: **16 víctimes mortals**.",
        es: "Bombardeo directo de la Aviazione Legionaria: **16 víctimas mortales**.",
        en: "Direct bombing by the Aviazione Legionaria: **16 deaths**.",
      }},
      { k: "1939", t: {
        ca: "La retirada republicana vola part de la primera central tèrmica.",
        es: "La retirada republicana vuela parte de la primera central térmica.",
        en: "The Republican retreat blows up part of the first thermal plant.",
      }},
      { k: "1948", t: {
        ca: "Els actius de Barcelona Traction s'integren a la nova **FECSA**.",
        es: "Los activos de Barcelona Traction se integran en la nueva **FECSA**.",
        en: "Barcelona Traction's assets are folded into the new **FECSA**.",
      }},
      { k: "1954", t: {
        ca: "Tancament definitiu de la primera central del Besòs.",
        es: "Cierre definitivo de la primera central del Besòs.",
        en: "Definitive closure of the first Besòs plant.",
      }},
      { k: "1959–1971", t: {
        ca: "S'hi desenvolupa el complex de **Badalona I-II**; les Tres Xemeneies no es comencen a construir fins al 1971.",
        es: "Se desarrolla el complejo de **Badalona I-II**; las Tres Chimeneas no se empiezan a construir hasta 1971.",
        en: "The **Badalona I-II** complex is developed; work on the Three Chimneys does not start until 1971.",
      }},
    ],
  },
];

export const ARTICLE_BRUTALISME = [
  { kind: "section", t: { ca: "Demanda creixent", es: "Demanda creciente", en: "Growing demand" } },
  { kind: "p", lead: true, t: {
    ca: "El desenvolupament industrial i l'augment de la població van provocar el creixement accelerat de la demanda d'energia elèctrica a l'àrea metropolitana de Barcelona. **FECSA** va decidir invertir en noves instal·lacions termoelèctriques per reforçar la producció de la regió.",
    es: "El desarrollo industrial y el aumento de la población provocaron el crecimiento acelerado de la demanda de energía eléctrica en el área metropolitana de Barcelona. **FECSA** decidió invertir en nuevas instalaciones termoeléctricas para reforzar la producción de la región.",
    en: "Industrial growth and a rising population drove a sharp increase in electricity demand across metropolitan Barcelona. **FECSA** decided to invest in new thermoelectric facilities to reinforce the region's output.",
  }},
  { kind: "p", t: {
    ca: "Entre **1959 i 1965** es van posar en marxa les noves instal·lacions: les plantes **Badalona I** (1959) i **Badalona II** (1965) van suposar un salt energètic a la comarca, a la vegada que van generar controvèrsia per l'augment de la contaminació atmosfèrica que provocaven.",
    es: "Entre **1959 y 1965** se pusieron en marcha las nuevas instalaciones: las plantas **Badalona I** (1959) y **Badalona II** (1965) supusieron un salto energético en la comarca, a la vez que generaron controversia por el aumento de la contaminación atmosférica que provocaban.",
    en: "Between **1959 and 1965** the new facilities came online: **Badalona I** (1959) and **Badalona II** (1965) marked an energy leap for the area, while stirring controversy over the air pollution they caused.",
  }},
  { kind: "figure", src: "/assets/fotografies/badalona-i.jpg", num: "01", year: "1959", ratio: "cinema",
    desc: {
      ca: "La central de **Badalona I**, en funcionament des del 1959, amb el moll de descàrrega de carbó endinsant-se al mar. És la instal·lació que va generar el *polsim negre* denunciat pel veïnat abans que existissin les Tres Xemeneies.",
      es: "La central de **Badalona I**, en funcionamiento desde 1959, con el muelle de descarga de carbón adentrándose en el mar. Es la instalación que generó el *polvillo negro* denunciado por el vecindario antes de que existieran las Tres Chimeneas.",
      en: "The **Badalona I** plant, operating from 1959, with its coal-unloading pier reaching into the sea. This was the facility behind the *black soot* residents denounced before the Three Chimneys existed.",
    },
    source: { ca: "Fons Històric d'Endesa", es: "Fondo Histórico de Endesa", en: "Endesa Historical Archive" },
  },
  { kind: "section", t: { ca: "Mil cinquanta megawatts", es: "Mil cincuenta megavatios", en: "1,050 megawatts" } },
  { kind: "p", t: {
    ca: "L'actual silueta de les Tres Xemeneies respon al creixement accelerat de la demanda energètica dels anys seixanta i setanta. Construïda entre **1971 i 1976** amb una **arquitectura monumental de formigó vist**, sovint relacionada amb el brutalisme, la planta va assolir una potència de **1.050 MW**, una capacitat comparable a la producció d'una central nuclear convencional.",
    es: "La actual silueta de las Tres Chimeneas responde al crecimiento acelerado de la demanda energética de los años sesenta y setenta. Construida entre **1971 y 1976** con una **arquitectura monumental de hormigón visto**, a menudo relacionada con el brutalismo, la planta alcanzó una potencia de **1.050 MW**, una capacidad comparable a la producción de una central nuclear convencional.",
    en: "The silhouette we know today answers the surging energy demand of the 1960s and 70s. Built between **1971 and 1976** with a **monumental architecture of exposed concrete**, often associated with brutalism, the plant reached **1,050 MW** — a capacity comparable to a conventional nuclear station.",
  }},
  { kind: "stats", head: { ca: "La central brutalista", es: "La central brutalista", en: "The brutalist plant" },
    items: [
      { num: "1.050", unit: "MW",
        label: { ca: "Potència", es: "Potencia", en: "Power" },
        desc:  { ca: "Comparable a una central nuclear.", es: "Comparable a una central nuclear.", en: "Comparable to a nuclear station." } },
      { num: "200", unit: "m",
        label: { ca: "Alçada final", es: "Altura final", en: "Final height" },
        desc:  { ca: "Elevada des dels 180 m del projecte original.", es: "Elevada desde los 180 m del proyecto original.", en: "Raised from the original project's 180 m." } },
      { num: "57.000", unit: "t",
        label: { ca: "SO₂ a l'any", es: "SO₂ al año", en: "SO₂ per year" },
        desc:  { ca: "Emissions de diòxid de sofre.", es: "Emisiones de dióxido de azufre.", en: "Sulphur dioxide emissions." } },
      { num: "1983",
        label: { ca: "Zona contaminada", es: "Zona contaminada", en: "Polluted zone" },
        desc:  { ca: "Sant Adrià, declarada zona atmosfèrica contaminada.", es: "Sant Adrià, declarada zona atmosférica contaminada.", en: "Sant Adrià declared an atmospherically polluted zone." } },
    ],
  },
  { kind: "section", t: { ca: "El polsim negre", es: "El polvillo negro", en: "The black soot" } },
  { kind: "p", t: {
    ca: "Aquesta potència, però, tenia un preu ambiental altíssim: la central arribava a emetre **57.000 tones de diòxid de sofre (SO₂) a l'any**. L'ús de combustibles com el *coc de petroli* — un residu pesat i extremadament brut — va generar el famós **polsim negre** que va marcar la vida dels veïns.",
    es: "Esta potencia, sin embargo, tenía un precio ambiental altísimo: la central llegaba a emitir **57.000 toneladas de dióxido de azufre (SO₂) al año**. El uso de combustibles como el *coque de petróleo* — un residuo pesado y extremadamente sucio — generó el famoso **polvillo negro** que marcó la vida de los vecinos.",
    en: "That power came at a very high environmental price: the plant emitted up to **57,000 tonnes of sulphur dioxide (SO₂) a year**. Fuels such as *petroleum coke* — a heavy, extremely dirty residue — produced the notorious **black soot** that shaped residents' lives.",
  }},
  { kind: "figure", src: "/assets/fotografies/construccio-1971.jpg", num: "02", year: "c.1974", ratio: "wide",
    desc: {
      ca: "Obres de construcció de la central de les Tres Xemeneies, iniciades el 1971 sobre el front litoral.",
      es: "Obras de construcción de la central de las Tres Chimeneas, iniciadas en 1971 sobre el frente litoral.",
      en: "Construction of the Three Chimneys plant, begun in 1971 on the seafront.",
    },
    source: { ca: "Arxiu Nacional de Catalunya · Fons FECSA-Endesa", es: "Archivo Nacional de Cataluña · Fondo FECSA-Endesa", en: "National Archive of Catalonia · FECSA-Endesa collection" },
  },
  { kind: "list", head: { ca: "Enginyeria i context social", es: "Ingeniería y contexto social", en: "Engineering and social context" },
    items: [
      { k: { ca: "Asimetria tècnica", es: "Asimetría técnica", en: "Technical asymmetry" }, t: {
        ca: "Les xemeneies no són equidistants — **53 m i 63 m** de separació — perquè el tercer grup generador no estava previst en el projecte inicial; la seva incorporació explica la separació diferent de la tercera xemeneia.",
        es: "Las chimeneas no son equidistantes — **53 m y 63 m** de separación — porque el tercer grupo generador no estaba previsto en el proyecto inicial; su incorporación explica la separación distinta de la tercera chimenea.",
        en: "The chimneys are not equidistant — **53 m and 63 m** apart — because the third generating unit was not in the original design; its addition explains the different spacing of the third chimney.",
      }},
      { k: { ca: "Força del treball", es: "Fuerza del trabajo", en: "The workforce" }, t: {
        ca: "La construcció i operació de la planta va ser possible gràcies a l'esforç de **milers de treballadors**, molts d'ells immigrants procedents del sud d'Espanya que van trobar en la central la seva porta d'entrada al desenvolupament metropolità.",
        es: "La construcción y operación de la planta fue posible gracias al esfuerzo de **miles de trabajadores**, muchos de ellos inmigrantes procedentes del sur de España que encontraron en la central su puerta de entrada al desarrollo metropolitano.",
        en: "Building and running the plant was possible thanks to **thousands of workers**, many of them migrants from southern Spain for whom the plant was their entry point into metropolitan development.",
      }},
      { k: { ca: "La manifestació de les dones · 1966", es: "La manifestación de las mujeres · 1966", en: "The women's march · 1966" }, t: {
        ca: "El **29 d'octubre de 1966**, una multitudinària manifestació de dones va recórrer Badalona fins a l'Ajuntament per denunciar el *polsim negre* que embrutava carrers, habitatges i roba estesa. La protesta es va produir **abans de la construcció de les Tres Xemeneies** i s'adreçava contra la contaminació generada per les centrals precedents, especialment **Badalona I**, que funcionava amb carbó. La mobilització va donar una gran visibilitat pública al problema i és un precedent destacat de la lluita veïnal i ambiental durant el franquisme.",
        es: "El **29 de octubre de 1966**, una multitudinaria manifestación de mujeres recorrió Badalona hasta el Ayuntamiento para denunciar el *polvillo negro* que ensuciaba calles, viviendas y ropa tendida. La protesta se produjo **antes de la construcción de las Tres Chimeneas** y se dirigía contra la contaminación generada por las centrales precedentes, especialmente **Badalona I**, que funcionaba con carbón. La movilización dio una gran visibilidad pública al problema y es un precedente destacado de la lucha vecinal y ambiental durante el franquismo.",
        en: "On **29 October 1966** a mass demonstration of women marched through Badalona to the town hall to denounce the *black soot* that dirtied streets, homes and washing hung out to dry. The protest took place **before the Three Chimneys were built** and targeted the pollution from the earlier plants, above all coal-fired **Badalona I**. It gave the problem wide public visibility and stands as a landmark of neighbourhood and environmental struggle under the Franco regime.",
      }},
      { k: { ca: "Conflictes ambientals", es: "Conflictos ambientales", en: "Environmental conflicts" }, t: {
        ca: "Els elevats nivells de contaminació atmosfèrica, provocats en bona part per la intensa activitat industrial del municipi — entre la qual destacaven les centrals tèrmiques —, van comportar que l'any **1983** Sant Adrià de Besòs fos declarat *zona d'atmosfera contaminada*.",
        es: "Los elevados niveles de contaminación atmosférica, provocados en buena parte por la intensa actividad industrial del municipio — entre la que destacaban las centrales térmicas —, comportaron que en **1983** Sant Adrià de Besòs fuera declarado *zona de atmósfera contaminada*.",
        en: "High levels of air pollution, driven largely by the town's intense industrial activity — the thermal plants foremost among it — led to Sant Adrià de Besòs being declared a *polluted-atmosphere zone* in **1983**.",
      }},
    ],
  },
  { kind: "links", head: { ca: "Arxiu audiovisual", es: "Archivo audiovisual", en: "Audiovisual archive" },
    items: [
      { href: "https://www.bdncom.cat/ca/badalona-va-viure-la-primera-manifestacio-amb-presencia-de-dones",
        k: {
          ca: "Badalona va viure la primera manifestació amb presència de dones",
          es: "Badalona vivió la primera manifestación con presencia de mujeres",
          en: "Badalona saw the first demonstration with women taking part",
        },
        t: {
          ca: "Imatges de la marxa del *polsim negre* de l'octubre de 1966, des dels barris fins a l'Ajuntament.",
          es: "Imágenes de la marcha del *polvillo negro* de octubre de 1966, desde los barrios hasta el Ayuntamiento.",
          en: "Footage of the October 1966 *black soot* march, from the neighbourhoods to the town hall.",
        },
        meta: {
          ca: "3′ 32″ · Televisió de Badalona – BDN Comunicació · drets en tramitació",
          es: "3′ 32″ · Televisió de Badalona – BDN Comunicació · derechos en tramitación",
          en: "3′ 32″ · Televisió de Badalona – BDN Comunicació · rights pending",
        },
      },
    ],
  },
];

export const ARTICLE_LLUITA = [
  { kind: "section", t: { ca: "Un monument a la dignitat laboral", es: "Un monumento a la dignidad laboral", en: "A monument to labour dignity" } },
  { kind: "p", lead: true, t: {
    ca: "Les Tres Xemeneies són també un monument a la dignitat laboral. El **3 d'abril de 1973**, durant les obres de construcció de la central, la repressió policial contra una protesta obrera per millores laborals va segar la vida del treballador **Manuel Fernández Márquez**, de 27 anys.",
    es: "Las Tres Chimeneas son también un monumento a la dignidad laboral. El **3 de abril de 1973**, durante las obras de construcción de la central, la represión policial contra una protesta obrera por mejoras laborales segó la vida del trabajador **Manuel Fernández Márquez**, de 27 años.",
    en: "The Three Chimneys are also a monument to labour dignity. On **3 April 1973**, during the works to build the plant, police repression of a workers' protest over pay and conditions took the life of **Manuel Fernández Márquez**, aged 27.",
  }},
  { kind: "p", t: {
    ca: "Un fet que roman gravat en la identitat sindical de Sant Adrià i Badalona.",
    es: "Un hecho que permanece grabado en la identidad sindical de Sant Adrià y Badalona.",
    en: "An event that remains engraved in the trade-union identity of Sant Adrià and Badalona.",
  }},
  { kind: "fact", t: {
    ca: "3 d'abril de 1973. Manuel Fernández Márquez, 27 anys, mor per un tret de la policia durant la repressió d'una protesta laboral. La seva memòria és inseparable del conjunt.",
    es: "3 de abril de 1973. Manuel Fernández Márquez, 27 años, muere por un disparo de la policía durante la represión de una protesta laboral. Su memoria es inseparable del conjunto.",
    en: "3 April 1973. Manuel Fernández Márquez, 27, is shot dead by police during the repression of a labour protest. His memory is inseparable from the site.",
  }},
  { kind: "section", t: { ca: "El camí cap a la conservació", es: "El camino hacia la conservación", en: "The road to conservation" } },
  { kind: "p", t: {
    ca: "El **2011** cessa definitivament l'activitat de la central, després del tancament progressiu dels grups, l'enduriment de les exigències ambientals i la substitució de capacitat per instal·lacions de **cicle combinat**.",
    es: "En **2011** cesa definitivamente la actividad de la central, tras el cierre progresivo de los grupos, el endurecimiento de las exigencias ambientales y la sustitución de capacidad por instalaciones de **ciclo combinado**.",
    en: "In **2011** the plant ceased operating for good, after the units were shut down one by one, environmental requirements tightened and its capacity was replaced by **combined-cycle** facilities.",
  }},
  { kind: "list", head: { ca: "La decisió ciutadana", es: "La decisión ciudadana", en: "The citizens' decision" },
    items: [
      { k: "2008", t: {
        ca: "En la **consulta popular** de 2008, el **82,2 %** dels vots emesos van ser favorables a conservar el conjunt.",
        es: "En la **consulta popular** de 2008, el **82,2 %** de los votos emitidos fueron favorables a conservar el conjunto.",
        en: "In the 2008 **citizens' consultation**, **82.2 %** of the votes cast were in favour of keeping the complex.",
      }},
      { k: "2011", t: {
        ca: "Cessa definitivament l'activitat de la central.",
        es: "Cesa definitivamente la actividad de la central.",
        en: "The plant's activity ceases for good.",
      }},
      { k: "2016", t: {
        ca: "La declaració com a **Bé Cultural d'Interès Local (BCIL)** aconsegueix protegir el seu valor com a patrimoni industrial.",
        es: "La declaración como **Bien Cultural de Interés Local (BCIL)** consigue proteger su valor como patrimonio industrial.",
        en: "Listing as a **Local Cultural Heritage Asset (BCIL)** secures protection of its industrial-heritage value.",
      }},
    ],
  },
  { kind: "figure", src: "/assets/fotografies/protesta-1973.jpg", num: "01", year: "1973", ratio: "cinema",
    desc: {
      ca: "Marxa de treballadors després de la mort de Manuel Fernández Márquez, amb les xemeneies de les centrals del Besòs al fons.",
      es: "Marcha de trabajadores tras la muerte de Manuel Fernández Márquez, con las chimeneas de las centrales del Besòs al fondo.",
      en: "A workers' march after the death of Manuel Fernández Márquez, with the chimneys of the Besòs plants in the background.",
    },
    source: { ca: "Europa Press", es: "Europa Press", en: "Europa Press" },
  },
  { kind: "figure", video: "/assets/videos/video-3cat-referendum.mp4", poster: "/assets/fotografies/poster-3cat-referendum.jpg", doc: true, num: "02", year: "2008",
    desc: {
      ca: "Informatiu sobre el resultat de la consulta: **Sant Adrià del Besòs: el referèndum aprova la continuïtat de les xemeneies**.",
      es: "Informativo sobre el resultado de la consulta: **Sant Adrià del Besòs: el referéndum aprueba la continuidad de las chimeneas**.",
      en: "News report on the outcome of the vote: **Sant Adrià del Besòs: the referendum approves keeping the chimneys**.",
    },
    source: { ca: "3Cat · còpia de treball · drets en tràmit", es: "3Cat · copia de trabajo · derechos en trámite", en: "3Cat · working copy · rights pending" },
  },
  { kind: "links", head: { ca: "Arxiu audiovisual", es: "Archivo audiovisual", en: "Audiovisual archive" },
    items: [
      { k: {
          ca: "*Notas sobre el Besós* — fragment (TC 8.40 – 9.36)",
          es: "*Notas sobre el Besós* — fragmento (TC 8.40 – 9.36)",
          en: "*Notas sobre el Besós* — excerpt (TC 8.40 – 9.36)",
        },
        t: {
          ca: "El Besòs industrial i els seus barris, filmats el 1978.",
          es: "El Besòs industrial y sus barrios, filmados en 1978.",
          en: "The industrial Besòs and its neighbourhoods, filmed in 1978.",
        },
        meta: {
          ca: "ICC – Filmoteca de Catalunya · drets en tràmit",
          es: "ICC – Filmoteca de Catalunya · derechos en trámite",
          en: "ICC – Filmoteca de Catalunya · rights pending",
        },
      },
    ],
  },
];

export const ARTICLE_PDU = [
  { kind: "section", t: { ca: "Un nou model de ciutat", es: "Un nuevo modelo de ciudad", en: "A new model of city" } },
  { kind: "p", lead: true, t: {
    ca: "Aprovat el **2023**, el **Pla Director Urbanístic (PDU)** preveu la transformació d'aquest àmbit, de fort passat industrial, en un nou pol de centralitat metropolitana basat en la **resiliència climàtica** i la barreja d'usos.",
    es: "Aprobado en **2023**, el **Plan Director Urbanístico (PDU)** prevé la transformación de este ámbito, de fuerte pasado industrial, en un nuevo polo de centralidad metropolitana basado en la **resiliencia climática** y la mezcla de usos.",
    en: "Approved in **2023**, the **Urban Master Plan (PDU)** sets out the transformation of this strongly industrial area into a new metropolitan centrality based on **climate resilience** and mixed uses.",
  }},
  { kind: "p", t: {
    ca: "El PDU designa el **Consorci del Besòs** com a administració actuant i preveu la transformació d'unes **32 hectàrees** que inclouran el hub audiovisual, un gran **parc urbà de 10 ha**, més de **185.000 m² d'habitatge** — el 40 %, protegit — i uns **100.000 m² de sostre d'activitat econòmica**.",
    es: "El PDU designa el **Consorci del Besòs** como administración actuante y prevé la transformación de unas **32 hectáreas** que incluirán el hub audiovisual, un gran **parque urbano de 10 ha**, más de **185.000 m² de vivienda** — el 40 %, protegida — y unos **100.000 m² de techo de actividad económica**.",
    en: "The PDU names the **Consorci del Besòs** as acting authority and plans the transformation of some **32 hectares**, including the audiovisual hub, a large **10-ha urban park**, over **185,000 m² of housing** — 40 % of it protected — and around **100,000 m² of economic activity floorspace**.",
  }},
  { kind: "figure", src: "/assets/renders/render-pdu-aeria.jpg", num: "01", ratio: "wide",
    desc: {
      ca: "Vista aèria del nou barri marítim previst pel PDU, amb el parc urbà i la renaturalització de la desembocadura del Besòs.",
      es: "Vista aérea del nuevo barrio marítimo previsto por el PDU, con el parque urbano y la renaturalización de la desembocadura del Besòs.",
      en: "Aerial view of the new seafront district envisaged by the PDU, with the urban park and the renaturalization of the Besòs mouth.",
    },
    source: { ca: "Consorci del Besòs · Render del PDU", es: "Consorci del Besòs · Render del PDU", en: "Consorci del Besòs · PDU rendering" },
  },
  { kind: "stats", head: { ca: "El PDU en xifres", es: "El PDU en cifras", en: "The PDU in figures" },
    items: [
      { num: "32", unit: "ha",
        label: { ca: "Àmbit de transformació", es: "Ámbito de transformación", en: "Transformation area" },
        desc:  { ca: "Front marítim entre Sant Adrià i Badalona.", es: "Frente marítimo entre Sant Adrià y Badalona.", en: "Seafront between Sant Adrià and Badalona." } },
      { num: "10", unit: "ha",
        label: { ca: "Parc urbà", es: "Parque urbano", en: "Urban park" },
        desc:  { ca: "Amb renaturalització de la desembocadura.", es: "Con renaturalización de la desembocadura.", en: "With renaturalization of the river mouth." } },
      { num: "40", unit: "%",
        label: { ca: "Habitatges", es: "Viviendas", en: "Homes" },
        desc:  { ca: "Protecció oficial (HPO).", es: "Protección oficial (HPO).", en: "Officially protected (HPO)." } },
      { num: "100.000", unit: "m²",
        label: { ca: "Activitat econòmica", es: "Actividad económica", en: "Economic activity" },
        desc:  { ca: "Sostre destinat a nous usos productius.", es: "Techo destinado a nuevos usos productivos.", en: "Floorspace for new productive uses." } },
    ],
  },
  { kind: "section", t: { ca: "Objectius del PDU", es: "Objetivos del PDU", en: "PDU objectives" } },
  { kind: "list",
    items: [
      { t: {
        ca: "**Integrar** aquest sector del front marítim amb la resta del litoral metropolità nord, amb un model d'ocupació del sòl compacte i una densitat raonablement alta, per permetre tipologies urbanes més eficients que fomentin una riquesa i diversitat més grans en les relacions socials i econòmiques.",
        es: "**Integrar** este sector del frente marítimo con el resto del litoral metropolitano norte, con un modelo de ocupación del suelo compacto y una densidad razonablemente alta, para permitir tipologías urbanas más eficientes que fomenten una riqueza y diversidad mayores en las relaciones sociales y económicas.",
        en: "**Integrate** this stretch of seafront with the rest of the northern metropolitan coast, through compact land use and reasonably high density, enabling more efficient urban typologies that foster richer, more diverse social and economic life.",
      }},
      { t: {
        ca: "**Incorporar el patrimoni industrial** al teixit urbà de nova creació per destinar-lo a nous usos.",
        es: "**Incorporar el patrimonio industrial** al tejido urbano de nueva creación para destinarlo a nuevos usos.",
        en: "**Incorporate the industrial heritage** into the newly created urban fabric and give it new uses.",
      }},
      { t: {
        ca: "**Garantir** a la ciutadania l'accés a l'habitatge assequible en un entorn saludable.",
        es: "**Garantizar** a la ciudadanía el acceso a la vivienda asequible en un entorno saludable.",
        en: "**Guarantee** citizens access to affordable housing in a healthy environment.",
      }},
      { t: {
        ca: "**Construir una xarxa** amb els espais lliures actuals i els de nova creació per fomentar la connexió entre el riu Besòs i el mar, i la continuïtat de tot el front litoral nord entre el Port de Barcelona i Montgat, potenciant la conservació i millora de la biodiversitat.",
        es: "**Construir una red** con los espacios libres actuales y los de nueva creación para fomentar la conexión entre el río Besòs y el mar, y la continuidad de todo el frente litoral norte entre el Puerto de Barcelona y Montgat, potenciando la conservación y mejora de la biodiversidad.",
        en: "**Build a network** of existing and new open spaces to connect the Besòs river with the sea and give continuity to the whole northern coastal front between the Port of Barcelona and Montgat, boosting the conservation and improvement of biodiversity.",
      }},
      { t: {
        ca: "**Establir un model de mobilitat sostenible**, atenent el transport públic, la garantia de l'accessibilitat universal i la regulació de l'aparcament.",
        es: "**Establecer un modelo de movilidad sostenible**, atendiendo al transporte público, la garantía de la accesibilidad universal y la regulación del aparcamiento.",
        en: "**Establish a sustainable mobility model** covering public transport, guaranteed universal accessibility and parking regulation.",
      }},
      { t: {
        ca: "**Incorporar la dimensió climàtica** en la planificació, contemplant estratègies per incrementar la resiliència envers escenaris climàtics futurs, com l'ascens del nivell del mar.",
        es: "**Incorporar la dimensión climática** en la planificación, contemplando estrategias para incrementar la resiliencia ante escenarios climáticos futuros, como el ascenso del nivel del mar.",
        en: "**Build in the climate dimension**, with strategies to increase resilience to future climate scenarios such as sea-level rise.",
      }},
    ],
  },
  { kind: "figure", src: "/assets/renders/render-parc-aeria.jpg", num: "02", ratio: "wide",
    desc: {
      ca: "El parc urbà de 10 hectàrees previst entre les xemeneies i el mar.",
      es: "El parque urbano de 10 hectáreas previsto entre las chimeneas y el mar.",
      en: "The planned 10-hectare urban park between the chimneys and the sea.",
    },
    source: { ca: "Consorci del Besòs · Render del PDU", es: "Consorci del Besòs · Render del PDU", en: "Consorci del Besòs · PDU rendering" },
  },
  { kind: "section", t: { ca: "Més espai per a Sant Adrià i Badalona", es: "Más espacio para Sant Adrià y Badalona", en: "More space for Sant Adrià and Badalona" } },
  { kind: "p", t: {
    ca: "**3X vol dir més espai** per a Sant Adrià i Badalona. El nou barri marítim de les Tres Xemeneies recuperarà un espai amb un fort passat industrial.",
    es: "**3X quiere decir más espacio** para Sant Adrià y Badalona. El nuevo barrio marítimo de las Tres Chimeneas recuperará un espacio con un fuerte pasado industrial.",
    en: "**3X means more space** for Sant Adrià and Badalona. The new Three Chimneys seafront district will reclaim an area with a strong industrial past.",
  }},
  { kind: "list", head: { ca: "Objectius estratègics", es: "Objetivos estratégicos", en: "Strategic objectives" },
    items: [
      { k: { ca: "Habitatge assequible", es: "Vivienda asequible", en: "Affordable housing" }, t: {
        ca: "Més de **185.000 m²** destinats a habitatge, amb un **40 % de protecció oficial** (HPO).",
        es: "Más de **185.000 m²** destinados a vivienda, con un **40 % de protección oficial** (HPO).",
        en: "Over **185,000 m²** of housing, **40 % of it officially protected** (HPO).",
      }},
      { k: { ca: "Mobilitat sostenible", es: "Movilidad sostenible", en: "Sustainable mobility" }, t: {
        ca: "Prioritat per als desplaçaments **a peu i en bicicleta**, amb integració del transport públic.",
        es: "Prioridad para los desplazamientos **a pie y en bicicleta**, con integración del transporte público.",
        en: "Priority for **walking and cycling**, with public transport integration.",
      }},
      { k: { ca: "Sostenibilitat", es: "Sostenibilidad", en: "Sustainability" }, t: {
        ca: "Estratègies per afrontar l'**ascens del nivell del mar** i recuperació de la biodiversitat litoral.",
        es: "Estrategias para afrontar el **ascenso del nivel del mar** y recuperación de la biodiversidad litoral.",
        en: "Strategies to face **sea-level rise** and to restore coastal biodiversity.",
      }},
    ],
  },
  { kind: "figure", src: "/assets/renders/render-parc-cami.jpg", num: "03", ratio: "wide",
    desc: {
      ca: "Recorregut de vianants previst entre el nou barri i la platja.",
      es: "Recorrido peatonal previsto entre el nuevo barrio y la playa.",
      en: "Planned pedestrian route between the new district and the beach.",
    },
    source: { ca: "Consorci del Besòs · Render del PDU", es: "Consorci del Besòs · Render del PDU", en: "Consorci del Besòs · PDU rendering" },
  },
];

export const ARTICLE_MEDIA_CITY = [
  { kind: "section", t: { ca: "El projecte tractor", es: "El proyecto tractor", en: "The driving project" } },
  { kind: "p", lead: true, t: {
    ca: "El gran projecte tractor que donarà vida al recinte patrimonial és el **Catalunya Media City**. Aquest hub transformarà l'emblemàtica **Nau de Turbines** en un centre de referència mundial en producció audiovisual, videojocs i cultura digital de **més de 40.000 m²**.",
    es: "El gran proyecto tractor que dará vida al recinto patrimonial es el **Catalunya Media City**. Este hub transformará la emblemática **Nave de Turbinas** en un centro de referencia mundial en producción audiovisual, videojuegos y cultura digital de **más de 40.000 m²**.",
    en: "The great driving project that will bring the heritage site to life is **Catalunya Media City**. The hub will turn the emblematic **Turbine Hall** into a world-class centre for audiovisual production, video games and digital culture of **over 40,000 m²**.",
  }},
  { kind: "figure", src: "/assets/renders/render-turbines-int.jpg", num: "01", ratio: "wide",
    desc: {
      ca: "Interior de la Nau de Turbines: un contenidor flexible d'usos que conserva l'estructura original.",
      es: "Interior de la Nave de Turbinas: un contenedor flexible de usos que conserva la estructura original.",
      en: "Interior of the Turbine Hall: a flexible container of uses retaining the original structure.",
    },
    source: { ca: "Garcés De Seta Bonet + Marvel · Catalunya Media City", es: "Garcés De Seta Bonet + Marvel · Catalunya Media City", en: "Garcés De Seta Bonet + Marvel · Catalunya Media City" },
  },
  { kind: "list", head: { ca: "Primeres actuacions del projecte", es: "Primeras actuaciones del proyecto", en: "First actions of the project" },
    items: [
      { k: "01", t: {
        ca: "**Rehabilitació i ampliació de la Nau de Turbines**: el cor del projecte a Sant Adrià.",
        es: "**Rehabilitación y ampliación de la Nave de Turbinas**: el corazón del proyecto en Sant Adrià.",
        en: "**Refurbishment and extension of the Turbine Hall**: the heart of the project in Sant Adrià.",
      }},
      { k: "02", t: {
        ca: "**Infraestructura de producció**: ampliació de dos platós al Parc Audiovisual de Catalunya (Terrassa).",
        es: "**Infraestructura de producción**: ampliación de dos platós en el Parc Audiovisual de Catalunya (Terrassa).",
        en: "**Production infrastructure**: expansion of two sound stages at the Parc Audiovisual de Catalunya (Terrassa).",
      }},
      { k: "03", t: {
        ca: "**Adquisició de sòl** destinat a l'activitat econòmica vinculada al sector audiovisual al Besòs.",
        es: "**Adquisición de suelo** destinado a la actividad económica vinculada al sector audiovisual en el Besòs.",
        en: "**Land acquisition** for economic activity linked to the audiovisual sector at the Besòs.",
      }},
    ],
  },
  { kind: "section", t: { ca: "Un ecosistema cultural i científic", es: "Un ecosistema cultural y científico", en: "A cultural and scientific ecosystem" } },
  { kind: "p", t: {
    ca: "La Nau de Turbines combinarà un espai per a la **formació** i un **centre cultural i d'exhibició** que faci difusió de les darreres tendències audiovisuals i digitals, i serà un referent d'excel·lència per a la recerca i la innovació.",
    es: "La Nave de Turbinas combinará un espacio para la **formación** y un **centro cultural y de exhibición** que difunda las últimas tendencias audiovisuales y digitales, y será un referente de excelencia para la investigación y la innovación.",
    en: "The Turbine Hall will combine a space for **training** with a **cultural and exhibition centre** showcasing the latest audiovisual and digital trends, and will be a benchmark of excellence for research and innovation.",
  }},
  { kind: "p", t: {
    ca: "El projecte CMC neix en un moment en què totes les disciplines del coneixement s'hibriden i s'interconnecten, i l'audiovisual ocupa un lloc central a les vides de la gent. Molts d'aquests **llenguatges emergents** tindran un paper creixent en la cultura i la comunicació contemporànies.",
    es: "El proyecto CMC nace en un momento en que todas las disciplinas del conocimiento se hibridan e interconectan, y el audiovisual ocupa un lugar central en las vidas de la gente. Muchos de estos **lenguajes emergentes** tendrán un papel creciente en la cultura y la comunicación contemporáneas.",
    en: "The CMC project is born at a moment when all disciplines of knowledge are hybridizing and interconnecting, and the audiovisual sits at the centre of people's lives. Many of these **emerging languages** will play a growing role in contemporary culture and communication.",
  }},
  { kind: "section", t: { ca: "El concurs arquitectònic", es: "El concurso arquitectónico", en: "The architectural competition" } },
  { kind: "p", t: {
    ca: "El **2024** la Generalitat va convocar un concurs arquitectònic per al projecte d'adequació i ampliació de la Nau de Turbines. S'hi van presentar **26 avantprojectes**, dels quals **cinc** van passar a la segona volta.",
    es: "En **2024** la Generalitat convocó un concurso arquitectónico para el proyecto de adecuación y ampliación de la Nave de Turbinas. Se presentaron **26 anteproyectos**, de los cuales **cinco** pasaron a la segunda vuelta.",
    en: "In **2024** the Generalitat launched an architectural competition for the adaptation and extension of the Turbine Hall. **26 preliminary designs** were submitted, of which **five** reached the second round.",
  }},
  { kind: "p", t: {
    ca: "Finalment es va adjudicar la redacció del projecte a la UTE **Garcés De Seta Bonet arquitectes** + **Marvel Architects, Landscape Architects, Urban Designers**. La seva proposta tècnica, *E la nave va*, planteja respectar els trets patrimonials fonamentals de l'edifici i posar-los en valor amb el desplegament dels usos funcionals.",
    es: "Finalmente se adjudicó la redacción del proyecto a la UTE **Garcés De Seta Bonet arquitectes** + **Marvel Architects, Landscape Architects, Urban Designers**. Su propuesta técnica, *E la nave va*, plantea respetar los rasgos patrimoniales fundamentales del edificio y ponerlos en valor con el despliegue de los usos funcionales.",
    en: "The commission went to the joint venture **Garcés De Seta Bonet arquitectes** + **Marvel Architects, Landscape Architects, Urban Designers**. Their technical proposal, *E la nave va*, sets out to respect the building's essential heritage features and bring them into their own through the new functional uses.",
  }},
  { kind: "p", t: {
    ca: "El cor conceptual de la proposta gira entorn de la conversió d'un espai industrial obsolet en un **ecosistema cultural, científic i audiovisual d'avantguarda**, tot mantenint la identitat arquitectònica de l'antiga central tèrmica.",
    es: "El corazón conceptual de la propuesta gira en torno a la conversión de un espacio industrial obsoleto en un **ecosistema cultural, científico y audiovisual de vanguardia**, manteniendo la identidad arquitectónica de la antigua central térmica.",
    en: "The proposal's conceptual core is the conversion of an obsolete industrial space into a **cutting-edge cultural, scientific and audiovisual ecosystem**, while keeping the architectural identity of the old power plant.",
  }},
  { kind: "p", t: {
    ca: "La nau principal es conserva i es reinterpreta com un **contenidor flexible d'usos**, mentre que el nou cos afegit — lleuger, lluminós i sostenible — acull espais experimentals, laboratoris, sales immersives, platós i zones de recerca i d'innovació.",
    es: "La nave principal se conserva y se reinterpreta como un **contenedor flexible de usos**, mientras que el nuevo cuerpo añadido — ligero, luminoso y sostenible — acoge espacios experimentales, laboratorios, salas inmersivas, platós y zonas de investigación e innovación.",
    en: "The main hall is preserved and reinterpreted as a **flexible container of uses**, while the new added volume — light, luminous and sustainable — houses experimental spaces, laboratories, immersive rooms, sound stages and areas for research and innovation.",
  }},
  { kind: "figure", src: "/assets/renders/render-turbines-ext.jpg", num: "02", ratio: "wide",
    desc: {
      ca: "El nou cos afegit, lleuger i lluminós, al costat de la nau patrimonial conservada.",
      es: "El nuevo cuerpo añadido, ligero y luminoso, junto a la nave patrimonial conservada.",
      en: "The new light, luminous volume alongside the preserved heritage hall.",
    },
    source: { ca: "Garcés De Seta Bonet + Marvel · Catalunya Media City", es: "Garcés De Seta Bonet + Marvel · Catalunya Media City", en: "Garcés De Seta Bonet + Marvel · Catalunya Media City" },
  },
  { kind: "p", t: {
    ca: "La proposta presenta també una elaborada estratègia mediambiental i d'integració al paisatge, així com un discurs potent sobre el valor patrimonial de l'edifici: conserva **buits originals, estructura i ritme** de la nau de turbines i els integra en una nova narrativa arquitectònica que vincula el passat industrial amb el futur digital del Besòs.",
    es: "La propuesta presenta también una elaborada estrategia medioambiental y de integración en el paisaje, así como un discurso potente sobre el valor patrimonial del edificio: conserva **huecos originales, estructura y ritmo** de la nave de turbinas y los integra en una nueva narrativa arquitectónica que vincula el pasado industrial con el futuro digital del Besòs.",
    en: "The proposal also sets out an elaborate environmental and landscape-integration strategy, and a powerful argument about the building's heritage value: it keeps the turbine hall's **original openings, structure and rhythm** and folds them into a new architectural narrative linking the industrial past to the Besòs's digital future.",
  }},
  { kind: "p", t: {
    ca: "El conjunt es concep com una **nova centralitat metropolitana**, capaç de connectar barris, ciutats i disciplines, consolidant el Catalunya Media City com un node clau per a la recerca, la creació i l'experimentació tecnològica.",
    es: "El conjunto se concibe como una **nueva centralidad metropolitana**, capaz de conectar barrios, ciudades y disciplinas, consolidando el Catalunya Media City como un nodo clave para la investigación, la creación y la experimentación tecnológica.",
    en: "The complex is conceived as a **new metropolitan centrality**, able to connect neighbourhoods, cities and disciplines, consolidating Catalunya Media City as a key node for research, creation and technological experimentation.",
  }},
  { kind: "list", head: { ca: "Àmbits d'actuació", es: "Ámbitos de actuación", en: "Areas of action" },
    items: [
      { k: { ca: "Formació", es: "Formación", en: "Training" }, t: {
        ca: "Impuls de programes formatius especialitzats, connectats amb les necessitats del sector i orientats a la generació de talent qualificat, gràcies als estudis de Formació Professional i universitaris.",
        es: "Impulso de programas formativos especializados, conectados con las necesidades del sector y orientados a la generación de talento cualificado, gracias a los estudios de Formación Profesional y universitarios.",
        en: "Specialized training programmes connected to the sector's needs and aimed at generating qualified talent, through vocational and university studies.",
      }},
      { k: { ca: "Innovació i empresa", es: "Innovación y empresa", en: "Innovation and business" }, t: {
        ca: "Entorn favorable al desenvolupament empresarial, la transferència de coneixement i la col·laboració entre empreses, centres de recerca i institucions.",
        es: "Entorno favorable al desarrollo empresarial, la transferencia de conocimiento y la colaboración entre empresas, centros de investigación e instituciones.",
        en: "An environment favourable to business development, knowledge transfer and collaboration between companies, research centres and institutions.",
      }},
      { k: { ca: "Producció i creació", es: "Producción y creación", en: "Production and creation" }, t: {
        ca: "Recerca i promoció de nous continguts, formats, llenguatges i narratives vinculades a l'audiovisual, el digital i el videojoc.",
        es: "Investigación y promoción de nuevos contenidos, formatos, lenguajes y narrativas vinculadas al audiovisual, el digital y el videojuego.",
        en: "Research into and promotion of new content, formats, languages and narratives linked to the audiovisual, the digital and gaming.",
      }},
      { k: { ca: "Experiència i ciutadania", es: "Experiencia y ciudadanía", en: "Experience and citizenship" }, t: {
        ca: "Desenvolupament d'espais i activitats per a connectar el projecte amb la ciutadania, fomentant l'accés a la cultura digital i a nous formats creatius.",
        es: "Desarrollo de espacios y actividades para conectar el proyecto con la ciudadanía, fomentando el acceso a la cultura digital y a nuevos formatos creativos.",
        en: "Spaces and activities that connect the project with citizens, encouraging access to digital culture and new creative formats.",
      }},
    ],
  },
  { kind: "section", t: { ca: "La Nau, oberta abans de les obres", es: "La Nave, abierta antes de las obras", en: "The Hall, open before the works" } },
  { kind: "p", t: {
    ca: "Des de la **tardor del 2024**, i fins a l'inici de les obres de rehabilitació i transformació, la Nau de Turbines ha començat una nova etapa. L'espai s'ha obert per acollir activitats culturals i esdeveniments de projecció internacional, com la biennal d'art contemporani **Manifesta 15 Barcelona Metropolitana** o el **Congrés Mundial d'Arquitectes de la UIA Barcelona 2026**. Aquests usos temporals permeten redescobrir la Nau i apropar-la a la ciutadania mentre avança el procés que n'ha de definir el futur.",
    es: "Desde el **otoño de 2024**, y hasta el inicio de las obras de rehabilitación y transformación, la Nave de Turbinas ha comenzado una nueva etapa. El espacio se ha abierto para acoger actividades culturales y eventos de proyección internacional, como la bienal de arte contemporáneo **Manifesta 15 Barcelona Metropolitana** o el **Congreso Mundial de Arquitectos de la UIA Barcelona 2026**. Estos usos temporales permiten redescubrir la Nave y acercarla a la ciudadanía mientras avanza el proceso que debe definir su futuro.",
    en: "Since **autumn 2024**, and until the refurbishment works begin, the Turbine Hall has entered a new phase. The space has opened to host cultural activities and events of international reach, such as the contemporary art biennial **Manifesta 15 Barcelona Metropolitana** and the **UIA World Congress of Architects Barcelona 2026**. These temporary uses allow the Hall to be rediscovered and brought closer to the public while the process that will define its future moves ahead.",
  }},
  { kind: "figure", src: "/assets/fotografies/manifesta-15-nau.jpg", num: "03", year: "2024", ratio: "wide",
    desc: {
      ca: "Instal·lació de **Manifesta 15** a l'interior de la Nau de Turbines.",
      es: "Instalación de **Manifesta 15** en el interior de la Nave de Turbinas.",
      en: "A **Manifesta 15** installation inside the Turbine Hall.",
    },
    source: { ca: "Adrià Goula · Arxiu Consorci del Besòs", es: "Adrià Goula · Archivo Consorci del Besòs", en: "Adrià Goula · Consorci del Besòs Archive" },
  },
  { kind: "links", head: { ca: "El projecte en vídeo", es: "El proyecto en vídeo", en: "The project on video" },
    items: [
      { href: "https://youtu.be/wL4VeE6uHlk",
        k: { ca: "Catalunya Media City — vídeo de promoció", es: "Catalunya Media City — vídeo de promoción", en: "Catalunya Media City — promotional video" },
        t: {
          ca: "Presentació del hub audiovisual previst a la Nau de Turbines.",
          es: "Presentación del hub audiovisual previsto en la Nave de Turbinas.",
          en: "Presentation of the audiovisual hub planned for the Turbine Hall.",
        },
        meta: { ca: "2025 · Catalunya Media City", es: "2025 · Catalunya Media City", en: "2025 · Catalunya Media City" },
      },
    ],
  },
  { kind: "p", t: {
    ca: "Amb aquesta transformació, les Tres Xemeneies completen el seu cercle vital. El passat industrial esdevé així el fonament d'un **futur ple d'oportunitats** per a la ciutadania.",
    es: "Con esta transformación, las Tres Chimeneas completan su círculo vital. El pasado industrial se convierte así en el fundamento de un **futuro lleno de oportunidades** para la ciudadanía.",
    en: "With this transformation the Three Chimneys complete their life cycle. The industrial past becomes the foundation of a **future full of opportunity** for citizens.",
  }},
];

export const ARTICLE_MEMORIA = [
  { kind: "p", lead: true, t: {
    ca: "L'antiga **sala de control** esdevé espai de memòria: un lloc per mirar de prop la fàbrica en funcionament, el treball que la va fer possible i el procés de desmantellament.",
    es: "La antigua **sala de control** deviene espacio de memoria: un lugar para mirar de cerca la fábrica en funcionamiento, el trabajo que la hizo posible y el proceso de desmantelamiento.",
    en: "The old **control room** becomes the memory space: a place to look closely at the plant at work, the labour that made it possible, and the dismantling that followed.",
  }},
  { kind: "figure", src: "/assets/fotografies/memoria-sala-control.jpg", num: "01", year: "2022", ratio: "wide",
    desc: {
      ca: "La sala de control de la central, a la Nau de Turbines.",
      es: "La sala de control de la central, en la Nave de Turbinas.",
      en: "The plant's control room, in the Turbine Hall.",
    },
    source: { ca: "Arnau Pascual Monells", es: "Arnau Pascual Monells", en: "Arnau Pascual Monells" },
  },
  { kind: "section", t: { ca: "La fàbrica en funcionament", es: "La fábrica en funcionamiento", en: "The plant at work" } },
  { kind: "p", t: {
    ca: "Imatges de la central en diferents moments de la seva història: els quadres de comandament, la sala de turbines en plena activitat i els torns que van sostenir cinquanta anys de producció elèctrica ininterrompuda.",
    es: "Imágenes de la central en distintos momentos de su historia: los cuadros de mando, la sala de turbinas en plena actividad y los turnos que sostuvieron cincuenta años de producción eléctrica ininterrumpida.",
    en: "Images of the plant at different moments in its history: the control panels, the turbine hall in full activity, and the shifts that sustained fifty years of uninterrupted electrical production.",
  }},
  { kind: "figure", src: "/assets/fotografies/memoria-contrapicat.jpg", num: "02", year: "2022", ratio: "wide",
    desc: {
      ca: "Els basaments de les tres xemeneies vistos des de baix: on hi havia les calderes, el cor tèrmic de la central.",
      es: "Las basas de las tres chimeneas vistas desde abajo: donde estaban las calderas, el corazón térmico de la central.",
      en: "The bases of the three chimneys seen from below: where the boilers stood, the plant's thermal core.",
    },
    source: { ca: "Arnau Pascual Monells", es: "Arnau Pascual Monells", en: "Arnau Pascual Monells" },
  },
  { kind: "section", t: { ca: "La demolició", es: "La demolición", en: "The demolition" } },
  { kind: "p", t: {
    ca: "El desmantellament de les instal·lacions no protegides va deixar en peu només allò que la ciutadania havia decidit conservar: les **tres xemeneies** i la **nau de turbines**.",
    es: "El desmantelamiento de las instalaciones no protegidas dejó en pie sólo aquello que la ciudadanía había decidido conservar: las **tres chimeneas** y la **nave de turbinas**.",
    en: "The dismantling of the unprotected facilities left standing only what citizens had decided to keep: the **three chimneys** and the **turbine hall**.",
  }},
  { kind: "figure", src: "/assets/fotografies/memoria-conjunt-litoral.jpg", num: "03", year: "2023", ratio: "wide",
    desc: {
      ca: "Les tres xemeneies i la nau de turbines des del camí de la platja.",
      es: "Las tres chimeneas y la nave de turbinas desde el camino de la playa.",
      en: "The three chimneys and the turbine hall seen from the beach path.",
    },
    source: { ca: "Arnau Pascual Monells", es: "Arnau Pascual Monells", en: "Arnau Pascual Monells" },
  },
  { kind: "figure", video: "/assets/videos/video-3cat-platja.mp4", poster: "/assets/fotografies/poster-3cat-platja.jpg", doc: true, num: "04",
    desc: {
      ca: "Informatiu sobre l'inici de les obres d'ampliació de la platja de Sant Adrià del Besòs, al peu del recinte.",
      es: "Informativo sobre el inicio de las obras de ampliación de la playa de Sant Adrià del Besòs, al pie del recinto.",
      en: "News report on the start of works to widen the Sant Adrià del Besòs beach, at the foot of the site.",
    },
    source: { ca: "3Cat · data per confirmar · drets en tràmit", es: "3Cat · fecha por confirmar · derechos en trámite", en: "3Cat · date to be confirmed · rights pending" },
  },
  { kind: "links", head: { ca: "Per continuar consultant", es: "Para seguir consultando", en: "To explore further" },
    items: [
      { k: {
          ca: "*'69/78 PRESCRIT*. Fragment: ¡Han matado a un obrero! (2018)",
          es: "*'69/78 PRESCRIT*. Fragmento: ¡Han matado a un obrero! (2018)",
          en: "*'69/78 PRESCRIT*. Excerpt: ¡Han matado a un obrero! (2018)",
        },
        t: {
          ca: "Fragment dirigit per Lluís Galter sobre la mort a trets de l'obrer Manuel Fernández Márquez, el 3 d'abril de 1973, dins una pel·lícula sobre els darrers assassinats del franquisme.",
          es: "Fragmento dirigido por Lluís Galter sobre la muerte a tiros del obrero Manuel Fernández Márquez, el 3 de abril de 1973, dentro de una película sobre los últimos asesinatos del franquismo.",
          en: "An excerpt directed by Lluís Galter on the shooting of worker Manuel Fernández Márquez on 3 April 1973, from a film about the final killings of the Franco regime.",
        },
        meta: { ca: "26′ 27″ · Universitat Pompeu Fabra i Lastor Media", es: "26′ 27″ · Universitat Pompeu Fabra y Lastor Media", en: "26′ 27″ · Universitat Pompeu Fabra and Lastor Media" },
      },
      { k: {
          ca: "*ON/OFF: Les Tres Xemeneies* (2023)",
          es: "*ON/OFF: Les Tres Xemeneies* (2023)",
          en: "*ON/OFF: Les Tres Xemeneies* (2023)",
        },
        t: {
          ca: "El passat, present i futur de la central tèrmica de Sant Adrià de Besòs.",
          es: "El pasado, presente y futuro de la central térmica de Sant Adrià de Besòs.",
          en: "The past, present and future of the Sant Adrià de Besòs thermal plant.",
        },
        meta: { ca: "54′ 26″ · Badalona Comunicació", es: "54′ 26″ · Badalona Comunicació", en: "54′ 26″ · Badalona Comunicació" },
      },
      { k: {
          ca: "*Nou impuls al Catalunya Media City* (29.03.25)",
          es: "*Nou impuls al Catalunya Media City* (29.03.25)",
          en: "*Nou impuls al Catalunya Media City* (29.03.25)",
        },
        t: {
          ca: "Acte de presentació del nou impuls al projecte, encapçalat pel president de la Generalitat de Catalunya, el 29 de març de 2025.",
          es: "Acto de presentación del nuevo impulso al proyecto, encabezado por el presidente de la Generalitat de Catalunya, el 29 de marzo de 2025.",
          en: "Presentation of the project's new push, led by the President of the Generalitat de Catalunya, on 29 March 2025.",
        },
        meta: { ca: "37′ 45″ · Generalitat de Catalunya", es: "37′ 45″ · Generalitat de Catalunya", en: "37′ 45″ · Generalitat de Catalunya" },
      },
      { k: {
          ca: "*Xemeneies: Central Tèrmica de Sant Adrià* — Fonamentals (2026)",
          es: "*Xemeneies: Central Tèrmica de Sant Adrià* — Fonamentals (2026)",
          en: "*Xemeneies: Central Tèrmica de Sant Adrià* — Fonamentals (2026)",
        },
        t: {
          ca: "Diversos experts recorren la Nau de Turbines i les Tres Xemeneies, i n'analitzen el passat i el futur.",
          es: "Varios expertos recorren la Nave de Turbinas y las Tres Chimeneas, y analizan su pasado y su futuro.",
          en: "Experts walk through the Turbine Hall and the Three Chimneys, examining their past and future.",
        },
        meta: { ca: "30′ 35″ · RTVE", es: "30′ 35″ · RTVE", en: "30′ 35″ · RTVE" },
      },
    ],
  },
];
