// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationFR from './locales/fr/translation.json';
import translationEN from './locales/eng/translation.json';

const resources = {
  fr: {
    translation: translationFR
  },
  en: {
    translation: translationEN
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fr', // langue par défaut
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;