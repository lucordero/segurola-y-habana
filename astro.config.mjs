// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  // Configuración para GitHub Pages
  site: 'https://lucordero.github.io',
  base: '/segurola-y-habana',
  output: 'static',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [preact()],

  // Configuración adicional para build
  build: {
    assets: 'assets'
  }
});