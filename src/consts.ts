/**
 * Site-wide constants — the single source of truth for identity, URLs and
 * social handles. Edit values here and they propagate everywhere (layout head,
 * footer, contact section, Open Graph tags).
 */

export const SITE = {
  /** Canonical production URL. Keep in sync with `site` in astro.config.mjs. */
  url: 'https://matteo-priori.vercel.app',
  /** Author / owner. */
  author: 'Matteo Priori',
  /** Path (relative to /public) of the social-sharing image. */
  ogImage: '/og-image.png',
  /** Path of the downloadable CV. Replace the placeholder file in /public. */
  cv: '/cv-matteo-priori.pdf',
} as const;

export const CONTACTS = {
  email: 'matteo.priori04@gmail.com',
  github: 'matteopriori04-sketch',
  githubUrl: 'https://github.com/matteopriori04-sketch',
} as const;
