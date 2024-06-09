import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-localstorage-backend';
import TranslationEN from '../pages/locale/en.json';
import TranslationAR from '../pages/locale/ar.json';

const resources = {
  en: {
    translation: TranslationEN,
  },
  ar: {
    translation: TranslationAR,
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false, // React already safes from xss
    },
    backend: {
      prefix: 'your_app_namespace:',
      version: '1.0',
      expirationTime: 7 * 24 * 60 * 60 * 1000, // 7 days
    },
    detection: {
      order: [
        'localStorage',
        'cookie',
        'navigator',
        'htmlTag',
        'path',
        'subdomain',
      ],
      caches: ['localStorage', 'cookie'],
    },
  });

export default i18n;