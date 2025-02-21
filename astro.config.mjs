// @ts-check
import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), preact()],
  site: "https://astro.theblackscreensociety.com"
});