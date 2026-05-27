/**
 * Skills grouped by category. Group names are localized; the individual
 * technologies are language-neutral and rendered as monospace badges.
 */

import type { Lang } from '../i18n/ui';

export interface SkillGroup {
  /** Localized category name. */
  category: Record<Lang, string>;
  /** Short, localized note giving context on how the category is used. */
  context: Record<Lang, string>;
  /** Technologies in this category. */
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: { en: 'Languages', it: 'Linguaggi' },
    context: {
      en: 'Used across academic projects and personal work',
      it: 'Usati in progetti accademici e personali',
    },
    items: ['Python', 'JavaScript', 'PHP', 'SQL', 'C'],
  },
  {
    category: { en: 'Web', it: 'Web' },
    context: {
      en: 'FastAPI and Jinja2 in production-grade multi-container setups',
      it: 'FastAPI e Jinja2 in setup multi-container di livello produttivo',
    },
    items: ['HTML', 'CSS', 'FastAPI', 'Jinja2'],
  },
  {
    category: { en: 'Databases', it: 'Database' },
    context: {
      en: 'MariaDB for structured data in the Minerva pipeline',
      it: 'MariaDB per i dati strutturati nella pipeline di Minerva',
    },
    items: ['MariaDB', 'SQL'],
  },
  {
    category: { en: 'Tooling', it: 'Strumenti' },
    context: {
      en: 'Daily drivers for development and deployment',
      it: 'Strumenti quotidiani per sviluppo e deploy',
    },
    items: ['Docker', 'Git / GitHub', 'Linux', 'Ollama'],
  },
];
