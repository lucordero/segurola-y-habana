// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
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