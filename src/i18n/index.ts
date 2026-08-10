import sk from './sk.json';
import en from './en.json';

export const languages = {
  sk: 'Slovenčina',
  en: 'English'
};

export const defaultLanguage = 'sk';

export const translations = {
  sk,
  en
};

export function getTranslation(lang: string, key: string): string {
  const langKey = lang in translations ? lang : defaultLanguage;
  const keys = key.split('.');
  let value: any = translations[langKey as keyof typeof translations];

  for (const k of keys) {
    value = value?.[k];
  }

  return value || key;
}

export function getLanguageFromUrl(pathname: string): string {
  const langMatch = pathname.match(/^\/(sk|en)(\/|$)/);
  return langMatch ? langMatch[1] : defaultLanguage;
}
