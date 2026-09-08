import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import { tutorials, articleHref } from "./src/content/tutorials";

const draftPaths = new Set(tutorials.filter(article => !article.screenshotsReady).map(article => articleHref(article.slug)));
const redirects = new Set(['/privacy/', '/terms/', '/zh-Hans/privacy/', '/zh-Hans/terms/']);

export default defineConfig({
  site: "https://clipdock.video",
  integrations: [tailwind(), sitemap({
    filter: (page) => {
      const pathname = new URL(page).pathname;
      return !draftPaths.has(pathname) && !redirects.has(pathname) && !pathname.includes('/404');
    },
  })],
  output: "static", // optional
});
