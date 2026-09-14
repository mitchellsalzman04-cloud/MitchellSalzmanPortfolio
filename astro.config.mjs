// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://mitchellsalzman04-cloud.github.io",
  // Served from a repo subpath on GitHub Pages. Remove this if you move
  // the site to a root domain (and drop the withBase() calls with it).
  base: "/MitchellSalzmanPortfolio",
  output: "static",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      theme: "night-owl",
    },
  },
});
