import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import translationEN from "./locales/en/translation.json";

const localResources = {
  en: {
    translation: translationEN,
  },
  ru: {
    translation: translationEN,
  },
};

const backendPhrase = resourcesToBackend((language, namespace, callback) => {
    callback(null, localResources[language]);
});

i18n
  .use(backendPhrase)
  .use(initReactI18next)
  .init({
    resources: localResources,
    debug: true,
    lng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });

