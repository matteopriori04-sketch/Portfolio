/**
 * Short UI strings (navigation, buttons, labels, aria-labels) keyed by locale.
 * Longer prose lives in `content.ts`; reusable lookup happens via `utils.ts`.
 *
 * Every key present under `en` must also exist under `it` so the `t()` helper
 * is fully type-checked.
 */

export const languages = {
  en: 'EN',
  it: 'IT',
} as const;

export type Lang = keyof typeof languages;

export const ui = {
  en: {
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',

    'hero.cta_projects': 'View projects',
    'hero.cta_contact': 'Get in touch',

    'projects.role': 'Role',
    'projects.stack': 'Stack',
    'projects.status_inprogress': 'In progress · thesis',
    'projects.github': 'View on GitHub',
    'projects.demo': 'Live demo',
    'projects.highlight': 'Result',

    'contact.email': 'Email me',
    'contact.github': 'GitHub',
    'contact.linkedin': 'LinkedIn',
    'contact.cv': 'Download CV (PDF)',

    'footer.built': 'Built with Astro & Tailwind CSS.',
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy Policy',

    'a11y.theme_toggle': 'Toggle light / dark theme',
    'a11y.lang_toggle': 'Switch to Italian',
    'a11y.skip': 'Skip to content',
    'a11y.menu': 'Toggle navigation menu',
  },
  it: {
    'nav.about': 'Chi sono',
    'nav.projects': 'Progetti',
    'nav.skills': 'Competenze',
    'nav.contact': 'Contatti',

    'hero.cta_projects': 'Vedi i progetti',
    'hero.cta_contact': 'Contattami',

    'projects.role': 'Ruolo',
    'projects.stack': 'Stack',
    'projects.status_inprogress': 'In corso · tesi',
    'projects.github': 'Vedi su GitHub',
    'projects.demo': 'Demo live',
    'projects.highlight': 'Risultato',

    'contact.email': 'Scrivimi una mail',
    'contact.github': 'GitHub',
    'contact.linkedin': 'LinkedIn',
    'contact.cv': 'Scarica il CV (PDF)',

    'footer.built': 'Realizzato con Astro e Tailwind CSS.',
    'footer.rights': 'Tutti i diritti riservati.',
    'footer.privacy': 'Informativa sulla privacy',

    'a11y.theme_toggle': 'Cambia tema chiaro / scuro',
    'a11y.lang_toggle': 'Passa all’inglese',
    'a11y.skip': 'Vai al contenuto',
    'a11y.menu': 'Apri / chiudi il menu',
  },
} as const;
