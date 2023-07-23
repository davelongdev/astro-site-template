import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://davelong.dev',
  integrations: [preact(), sitemap()]
});