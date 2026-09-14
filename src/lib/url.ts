/**
 * The site is served from a subpath on GitHub Pages
 * (…github.io/MitchellSalzmanPortfolio/), so every root-relative link and
 * asset has to carry that prefix. Astro rewrites imported assets for you,
 * but NOT hand-written `href="/…"` strings — those are what this is for.
 *
 * Use it for any path you write by hand:
 *   <a href={withBase("/archive")}>
 *
 * Paths in src/data/site.ts stay plain ("/archive", "/#about") — the
 * components apply this at render time, so content stays free of base-path
 * concerns. If the site ever moves to a root domain, drop `base` from
 * astro.config.mjs and this becomes a no-op; nothing else changes.
 */
const BASE = import.meta.env.BASE_URL;

export function withBase(path: string): string {
  // Leave full URLs and other schemes (mailto:, tel:) untouched.
  if (/^[a-z][a-z0-9+.-]*:/i.test(path) || path.startsWith("//")) return path;

  const base = BASE.replace(/\/$/, "");
  const rest = path.startsWith("/") ? path : `/${path}`;
  return `${base}${rest}`;
}
