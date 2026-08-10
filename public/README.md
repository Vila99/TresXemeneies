# Continguts estàtics — Tres Xemeneies

Tot el que hi ha dins de `public/` es publica tal qual a l'arrel del web.

## `assets/` — material que fa servir el microsite

| Carpeta | Contingut |
|---|---|
| `fotografies/` | Estat actual (`actual-*`), vistes aèries, imatges històriques (`aerea-1913`, `construccio-1971`, `turbines-1988`) i material de la memòria del projecte (`mp-*`). |
| `renders/` | Renders del PDU, del parc, de la vialitat i de la sala de turbines. |
| `planols/` | `plan-viz-*` són els plànols simplificats del mapa interactiu (planta baixa, 1 i 2) — els únics referenciats pel codi. `oficial-*` són els plànols oficials redibuixats (inclou soterrani) i `original-*` els escaneigs d'origen. |
| `videos/` | Clips en `.mp4` (H.264). Els `.mov` originals no es publiquen: Chrome no els reprodueix de forma nativa. |
| `consorci-logo.png` | Logotip corporatiu, usat al footer. |

Les rutes al codi són **absolutes** (`/assets/…`), perquè el microsite (`/`) i el
mapa (`/mapa`) han de resoldre-les igual.

### Pes de les imatges

Les fotografies i els renders es guarden a **2000 px de costat llarg** com a màxim.
Els originals de càmera (fins a 8256 px, 45 MP) i els renders de 7300 px no aporten
res a un microsite mòbil i multiplicaven per vint el pes del repositori.

Quan afegeixis material nou, passa-hi l'script:

```sh
node scripts/optimize-images.mjs --dry-run   # informa sense tocar res
node scripts/optimize-images.mjs             # aplica
```

A partir d'aquí, `next/image` s'encarrega de servir AVIF/WebP a la mida exacta de
cada pantalla, així que **no cal generar variants a mà**.

> `fotografies/actual-03.jpg` va arribar truncat de l'arxiu original (només un 66 %
> del JPEG era llegible). S'ha retallat a la zona vàlida; convindria substituir-lo
> per la còpia sencera quan estigui disponible.

## `uploads/` — material d'origen, no publicat pel microsite

| Carpeta | Contingut |
|---|---|
| `documents/` | Guions, històric i documentació de partida (`.docx`, `.pdf`, `.txt`). |
| `imatges/` | Captures i esquemes de treball fets durant la redacció del contingut. |

## `screenshots/` — captures de treball

Captures de maquetació del microsite i del mapa fetes durant el desenvolupament.

## Pendent

Imatges en alta resolució i crèdits definitius de l'arxiu del Consorci. El material
d'aquestes carpetes és el que s'ha fet servir de manera provisional durant el
desenvolupament.
