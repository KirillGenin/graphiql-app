import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import en from './translations/en.json';
import ru from './translations/ru.json';

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .init({
    debug: false,
    fallbackLng: 'en',
    resources: {
      en: {
        translation: en,
      },
      ru: {
        translation: ru,
      },
    },
  });
