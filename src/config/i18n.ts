export const locales = ['de', 'en', 'fr'] as const;
export type Locale = typeof locales[number];

export const defaultLocale = 'de';

export function getLocale(): Locale {
  return defaultLocale;
}

export const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  de: () => import('./dictionaries/de.json').then((module) => module.default),
  fr: () => import('./dictionaries/fr.json').then((module) => module.default),
};
