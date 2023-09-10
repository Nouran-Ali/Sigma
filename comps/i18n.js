import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import TranslationEN from "../pages/locale/en.json";
import TranslationAR from "../pages/locale/ar.json";
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-localstorage-backend';

const resources = {
  en: {
    translation: TranslationEN,
  },
  ar: {
    translation: TranslationAR,
  },
};

i18n
  .use(initReactI18next)
  .use(Backend)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: 'en', // Default language
    debug: true, // Enable debug mode
    backend: {
      // Configure the local storage backend
      prefix: 'your_app_namespace:',
      version: '1.0',
      expirationTime: 7 * 24 * 60 * 60 * 1000, // 7 days
    },
  });