# Cantina Bellavigne — Demo Astro

Progetto demo del percorso di formazione web. Migrazione del sito statico HTML/CSS (`demo-cantina/`) in Astro, con deploy su Cloudflare.

**Live:** https://cantina-bellavigne-astro.info-60a.workers.dev/

---

## Cosa è stato costruito

- Layout condiviso con navigazione attiva (`src/layouts/Layout.astro`)
- 3 pagine: Homepage, Catalogo vini, Contatti (`src/pages/`)
- Content Collections: 6 vini + 3 articoli blog in Markdown con schema Zod
- Blog con routing dinamico (`src/pages/blog/[slug].astro`)
- Filtro categorie vini con JavaScript
- Keystatic CMS per editing locale di blog e vini
- Deploy automatico su Cloudflare via GitHub

## Concetti appresi

| Concetto | Dove si vede |
|---|---|
| Layout con `<slot />` | `src/layouts/Layout.astro` |
| `Astro.url.pathname` per nav attiva | `src/layouts/Layout.astro` |
| Content Collections (Content Layer API) | `src/content.config.js` |
| Schema con Zod | `src/content.config.js` |
| `getCollection()` | `src/pages/vini.astro` |
| Routing dinamico con `[slug].astro` | `src/pages/blog/[slug].astro` |
| `getStaticPaths()` e `render()` | `src/pages/blog/[slug].astro` |
| Filtro JS con `querySelectorAll` e `addEventListener` | `src/pages/vini.astro` |
| Keystatic CMS (locale) | `keystatic.config.ts` |

## Comandi

```bash
pnpm dev        # server locale su localhost:4321
pnpm build      # genera il sito in ./dist/
pnpm run deploy # deploy manuale su Cloudflare
```

## Admin CMS (solo in locale)

```
http://localhost:4321/keystatic
```

Modifica contenuti → salva → `git add . && git commit -m "..." && git push`

## Fasi completate

- [x] Fase 1 — HTML semantico (`demo-cantina/`)
- [x] Fase 2 — CSS (`demo-cantina/`)
- [x] Fase 3 — Astro + Cloudflare
- [x] Fase 4 — JavaScript
- [x] Fase 5 — Blog con routing dinamico
- [x] Fase 6 — Keystatic CMS
- [ ] Fase 7 — Form funzionanti (Web3Forms)
- [ ] Fase 8 — SEO tecnica
- [ ] Fase 9 — Analytics
- [ ] Fase 10 — Cookie banner
