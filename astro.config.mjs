import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://themushroomboy.github.io',
  redirects: {
    '/pixel-painters-cheats': '/oddities/pixel-painters-cheats'
  },
  integrations: [sitemap(), icon(), tailwind()]
});