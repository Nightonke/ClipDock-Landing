import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import { tutorialStructure } from "./src/content/tutorial-structure";
import { localizedPath, publishedLocales } from "./src/i18n/locales";

const draftPaths = new Set(publishedLocales.flatMap(locale => tutorialStructure.filter(article => !article.screenshotsReady).map(article => localizedPath(locale, `articles/${article.slug}`))));

export default defineConfig({
  site: "https://clipdock.video",
  integrations: [tailwind(), sitemap({
    filter: (page) => {
      const pathname = new URL(page).pathname;
      return !draftPaths.has(pathname) && !pathname.includes('/404');
    },
  })],
  output: "static", // optional
});
