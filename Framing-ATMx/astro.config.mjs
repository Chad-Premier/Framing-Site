import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import tailwindcss from '@tailwindcss/vite';

import { defaultLocale, languages } from './src/i18n/locales';

export default defineConfig({
  site: 'https://justaskframing.co.uk',

  i18n: {
    defaultLocale: defaultLocale,
    locales: Object.keys(languages),
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    }
  },

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: defaultLocale,
        locales: {
          en: 'en-US',
          es: 'es-ES',
          fr: 'fr-CA'
        }
      }
    }),
    mdx()
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});