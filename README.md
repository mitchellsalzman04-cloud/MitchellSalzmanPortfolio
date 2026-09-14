# Mitchell Salzman — Portfolio

Personal portfolio and resume site.

Built on [guilyx/v4](https://github.com/guilyx/v4) (MIT) — the layout and
design system are adapted from it; the original `LICENSE` is retained as that
license requires. All personal content, copy, and artwork are my own.

## Stack

- **[Astro 5](https://astro.build)** — static output, ships ~0 JS by default
- **[Tailwind CSS 4](https://tailwindcss.com)** — design tokens in a single `@theme` block
- **Vanilla TypeScript** — flocking sim, scroll reveals, and the timeline; no framework

## Commands

| Command           | Action                         |
| :---------------- | :----------------------------- |
| `npm install`     | Install dependencies           |
| `npm run dev`     | Dev server at `localhost:4321` |
| `npm run build`   | Production build to `./dist/`  |
| `npm run preview` | Preview the build locally      |

## Editing content

**Everything on the homepage comes from [`src/data/site.ts`](src/data/site.ts)** —
bio, jobs, projects, tech list, socials, contact copy. No component edits needed.
Anything marked `TODO` in that file is a placeholder waiting to be replaced.

The site is three pages: the homepage (hero, background, experience,
projects, contact), `/archive`, and a 404.

- **Experience** — the `experience` array. Each entry renders both a tab and
  a bar on the timeline; `end: null` means "still there". Set
  `TIMELINE_START` to your earliest year.
- **Projects** — `featured` gets the large cards, `projects` the compact grid
  below, `archive` the table at `/archive`. `closed: true` drops the links
  for anything non-public.
- **Nav** — the `nav` array. Add a section here and it appears in both the
  desktop bar and the mobile drawer.

## Adding links (important)

The site is served from a repo subpath
(`…github.io/MitchellSalzmanPortfolio/`), so hand-written root-relative links
need the base prefix. Astro handles imported assets automatically; it does
**not** rewrite `href="/…"` strings.

Wrap those with the helper in [`src/lib/url.ts`](src/lib/url.ts):

```astro
---
import { withBase } from "@/lib/url";
---
<a href={withBase("/archive")}>Archive</a>   <!-- correct -->
<a href="/archive">Archive</a>               <!-- breaks in production -->
```

Paths inside `src/data/site.ts` stay plain (`/archive`, `/#about`) — the
components apply `withBase()` when rendering, so content stays clean.

If the site ever moves to a root domain, delete `base` from
`astro.config.mjs` and `withBase()` becomes a no-op. Nothing else changes.

**In dev the site is at `http://localhost:4321/MitchellSalzmanPortfolio/`**,
not the bare root — the base applies there too.

## Before deploying

1. Replace every `TODO` in `src/data/site.ts`.
2. If you move to a custom domain, update `site`/`base` in `astro.config.mjs`, plus `src/data/site.ts` and `public/robots.txt`.
3. Swap the placeholder artwork: `src/assets/portrait.png`, `public/og.png`, `public/favicon.svg`.
4. Add your resume PDF to `public/` (or point `site.resume` elsewhere).

## Deploying

Static output — anything works:

- **Vercel / Netlify / Cloudflare Pages**: build command `npm run build`, output directory `dist`.
- **GitHub Pages**: same, via the workflow in `.github/workflows/`.

## Notes

- `_upstream-reference/` holds the original author's content (their photos,
  blog posts, portrait, and promo clips), kept locally as a format reference
  only. It is gitignored and must not be published. Delete it when you no
  longer need it.
