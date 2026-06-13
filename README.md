# Cantina Bellavigne — Demo Astro

Progetto demo del percorso di formazione web. Migrazione del sito statico HTML/CSS (`demo-cantina/`) in Astro, con deploy su Cloudflare.

**Live:** https://cantina-bellavigne-astro.info-60a.workers.dev/

---

## Cosa è stato costruito

- Layout condiviso con navigazione attiva (`src/layouts/Layout.astro`)
- 3 pagine: Homepage, Catalogo vini, Contatti (`src/pages/`)
- Content Collections: 6 vini in Markdown con schema Zod (`src/content/vini/`)
- Deploy automatico su Cloudflare via GitHub

## Concetti appresi

| Concetto | Dove si vede |
|---|---|
| Layout con `<slot />` | `src/layouts/Layout.astro` |
| `Astro.url.pathname` per nav attiva | `src/layouts/Layout.astro` |
| Content Collections (Content Layer API) | `src/content.config.js` |
| Schema con Zod | `src/content.config.js` |
| `getCollection()` | `src/pages/vini.astro` |
| Deploy Cloudflare con `[assets]` | `wrangler.toml` |

## Comandi

```bash
pnpm dev        # server locale su localhost:4321
pnpm build      # genera il sito in ./dist/
```

## Fasi completate

- [x] Fase 1 — HTML semantico (`demo-cantina/`)
- [x] Fase 2 — CSS (`demo-cantina/`)
- [x] Fase 3 — Astro + Cloudflare (questo progetto)
- [x] Fase 4 — JavaScript
- [x] Fase 5 — Blog con routing dinamico
