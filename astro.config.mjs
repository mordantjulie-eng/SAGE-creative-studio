import { defineConfig } from 'astro/config';

export default defineConfig({
  // À remplacer par le domaine définitif une fois réservé.
  site: 'https://example.com',
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
