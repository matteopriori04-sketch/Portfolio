/**
 * i18n helpers. English is the default locale and lives at the root (`/`);
 * Italian is served under `/it`.
 */

import { ui, type Lang } from './ui';

export const defaultLang: Lang = 'en';

/** Infer the active locale from a URL pathname (`/it/...` → "it", else "en"). */
export function getLangFromUrl(url: URL): Lang {
  const [, segment] = url.pathname.split('/');
  return segment === 'it' ? 'it' : 'en';
}

/**
 * Returns a translate function `t(key)` bound to a locale, with graceful
 * fallback to the default locale if a key is somehow missing.
 */
export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** Build the home path for a given locale (`en` → `/`, `it` → `/it`). */
export function homePath(lang: Lang): string {
  return lang === 'en' ? '/' : '/it';
}

/** The locale to switch *to* from the current one (used by the language toggle). */
export function otherLang(lang: Lang): Lang {
  return lang === 'en' ? 'it' : 'en';
}
