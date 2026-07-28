import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://vdustr.dev',
  base: '/taipei-sans-tc',
  integrations: [sitemap()],
});
