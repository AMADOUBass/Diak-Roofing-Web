// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://diakiteroofingrestoration.com',
  // The live site's URLs all end with a slash; keep them identical for SEO.
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()]
  }
});
