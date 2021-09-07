import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ChainedBackend from "i18next-chained-backend";
import resourcesToBackend from "i18next-resources-to-backend";
import translationEN from "./locales/en/translation.json";
import translationRU from "./locales/ru/translation.json";
import Phrase from "react-native-phrase-sdk";

const localResources = {
  en: {
    translation: translationEN,
  },
  ru: {
    translation: translationRU,
  },
};

let phrase = new Phrase(
    "YOUR_DISTRIBUTION_ID",
    "YOUR_ENVIRONMENT_ID",
    require('./package.json').version,
    "i18next"
);

const backendPhrase = resourcesToBackend((language, namespace, callback) => {
    phrase.requestTranslation(language)
        .then((remoteResources) => {
            callback(null, remoteResources);
        })
        .catch((error) => {
            callback(error, null);
        });
});

const backendFallback = resourcesToBackend(localResources)

i18n
  .use(ChainedBackend)
  .use(initReactI18next)
  .init({
    backend: {
        backends: [backendPhrase, backendFallback]
    },
    debug: true,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });

