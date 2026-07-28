import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://vp-tw.github.io',
  base: '/taipei-sans-tc',
  integrations: [sitemap()],
});
