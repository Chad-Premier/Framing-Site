import { locales, defaultLocale } from './locales';

export function getLangFromUrl(url: URL) {
  const [, langOptOne, langOptTwo ] = url.pathname.split('/', 3);

  if (langOptOne in locales)
    return langOptOne as keyof typeof locales;
  else if (langOptTwo in locales)
    return langOptTwo as keyof typeof locales;
  
  return defaultLocale;
}

export function useTranslations(lang: keyof typeof locales) {
  return function t(key: keyof typeof locales[typeof defaultLocale]) {
    return locales[lang][key] || locales[defaultLocale][key];
  }
}