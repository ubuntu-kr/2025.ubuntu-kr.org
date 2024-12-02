// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import paraglide from "@inlang/paraglide-astro"

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    mdx(),
    paraglide({
      // recommended settings
      project: "./project.inlang",
      outdir: "./src/paraglide", //where your files should be
    }),],
  i18n: {
    defaultLocale: "ko",
    locales: ["en", "ko"],
    routing: {
      prefixDefaultLocale: true
  }
  },

});