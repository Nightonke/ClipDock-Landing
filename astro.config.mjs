import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://clipdock.video",
  integrations: [tailwind(), sitemap()],
  output: "static", // optional
});
