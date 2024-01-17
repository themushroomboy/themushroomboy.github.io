import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://catboyash.xyz',
  redirects: {
    '/pixel-painters-cheats': '/oddities/pixel-painters-cheats',
    '/cheatsdownload': 'https://www.youtube.com/watch?v=k3ebBTBeUTg&t=98s'
  },
  integrations: [sitemap(), icon(), tailwind()]
});