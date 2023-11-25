import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';  
import Backend from 'i18next-http-backend';

const resources = {
  en: {
    translation: require("../public/locales/en/translation.json"),
  },
  gr: {
    translation: require("../public/locales/gr/translation.json"),
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .init({
    resources,
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: true,
    },
  });

export default i18n;