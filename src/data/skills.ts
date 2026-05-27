/**
 * Skills grouped by category. Group names are localized; the individual
 * technologies are language-neutral and rendered as monospace badges.
 */

import type { Lang } from '../i18n/ui';

export interface SkillGroup {
  /** Localized category name. */
  category: Record<Lang, string>;
  /** Technologies in this category. */
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: { en: 'Languages', it: 'Linguaggi' },
    items: ['Python', 'JavaScript', 'PHP', 'SQL', 'C'],
  },
  {
    category: { en: 'Web', it: 'Web' },
    items: ['HTML', 'CSS', 'FastAPI', 'Jinja2'],
  },
  {
    category: { en: 'Databases', it: 'Database' },
    items: ['MariaDB', 'SQL'],
  },
  {
    category: { en: 'Tooling', it: 'Strumenti' },
    items: ['Docker', 'Git / GitHub', 'Linux', 'Ollama'],
  },
];
