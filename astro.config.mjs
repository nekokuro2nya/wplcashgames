// @ts-check
import { defineConfig } from 'astro/config';
import UnoCSS from '@unocss/astro';

// https://astro.build/config
export default defineConfig({
  integrations: [UnoCSS()],
  output: 'static',
  site: 'https://wpl-games.pages.dev',
  build: {
    format: 'file'
  }
});
