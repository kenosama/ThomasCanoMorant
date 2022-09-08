import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://kenosama.github.io',
  base: '/ThomasCanoMorant',
  integrations: [tailwind()]
});