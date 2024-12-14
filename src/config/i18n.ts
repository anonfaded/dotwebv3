import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { NextRequest } from 'next/server';

export const locales = ['de', 'en', 'fr'] as const;
export const defaultLocale = 'de' as const;

export type Locale = (typeof locales)[number];

function getLocaleFromHeaders(request: NextRequest): string {
  // Always return German as default if no locale is specified
  return defaultLocale;
  
  // Uncomment below if you want to use browser's language preference
  /*
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  const locales = ['de', 'en', 'fr'];
  
  return match(languages, locales, defaultLocale);
  */
}

export function getLocale(request: NextRequest): string {
  return getLocaleFromHeaders(request);
}

export const dictionaries = {
  de: () => import('../dictionaries/de.json').then((module) => module.default),
  en: () => import('../dictionaries/en.json').then((module) => module.default),
  fr: () => import('../dictionaries/fr.json').then((module) => module.default),
};
