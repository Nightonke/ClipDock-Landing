import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://clipdock.video",
  integrations: [tailwind(), sitemap({
    // Tutorial drafts stay out of the sitemap until screenshot/workflow review.
    filter: (page) => !new URL(page).pathname.startsWith('/zh-Hans/articles/'),
  })],
  output: "static", // optional
});
