import type { Locale } from '@/config/i18n';

interface Dictionary {
  navigation: {
    start: string;
    learn: string;
  };
  hero: {
    title: string;
    subtitle: string;
  };
  features: {
    title: string;
    automation: string;
    workflow: string;
    integration: string;
  };
}

const dictionaries = {
  de: () => import('@/dictionaries/de.json').then(module => module.default),
  en: () => import('@/dictionaries/en.json').then(module => module.default),
  fr: () => import('@/dictionaries/fr.json').then(module => module.default),
} as const;

export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
  return dictionaries[locale]();
};
