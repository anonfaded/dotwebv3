import type { Locale } from '@/config/i18n';

const dictionaries = {
  de: () => import('@/dictionaries/de.json').then(module => module.default),
  en: () => import('@/dictionaries/en.json').then(module => module.default),
  fr: () => import('@/dictionaries/fr.json').then(module => module.default),
};

export const getDictionary = async (locale: string) => {
  return dictionaries[locale as Locale]();
};
