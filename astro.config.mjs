// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Used to generate absolute URLs (sitemap, canonical, Open Graph).
  // Update this to your final domain once deployed (see README).
  site: 'https://matteo-priori.vercel.app',

  // Bilingual site: English is the default and lives at the site root (`/`),
  // Italian is served under the `/it` prefix. Both are fully pre-rendered.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'it'],
    routing: {
      // Keep the default locale (en) un-prefixed: `/` instead of `/en`.
      prefixDefaultLocale: false,
    },
  },

  // This <meta> CSP is the single strict, authoritative policy. Astro injects a
  // SHA-256 hash for every inline <script>/<style> at build time, so the policy
  // needs NO 'unsafe-inline': any injected inline code is blocked because its
  // hash won't match. The vercel.json header carries ONLY `frame-ancestors`
  // (which a <meta> CSP cannot express); it deliberately omits script-src/
  // style-src so it never weakens — nor needs to duplicate — these hashes.
  experimental: {
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        // Vite inlines tiny font subsets as data: URIs; fonts can't execute, so this is low risk.
        "font-src 'self' data:",
        "connect-src 'self'",
        "base-uri 'self'",
        "form-action 'self'",
        "object-src 'none'",
        // Force any http:// subresource to https:// (belongs in the meta CSP).
        'upgrade-insecure-requests',
      ],
    },
  },

  // Generates sitemap-index.xml + per-locale sitemaps (referenced by robots.txt).
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', it: 'it' },
      },
    }),
  ],

  // Tailwind CSS v4 is wired in through its official Vite plugin.
  // All theme configuration lives in `src/styles/global.css` (CSS-first config).
  vite: {
    plugins: [tailwindcss()],
  },
});
