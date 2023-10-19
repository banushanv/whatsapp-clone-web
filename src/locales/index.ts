import { createI18n } from "vue-i18n";
import en from "@/locales/locale/en.json";
import nl from "@/locales/locale/nl.json";
import Constants from "@/utils/constants";

import { toLower } from "lodash";

// define regional datetime formats
const dateTimeFormats = {
  en: {
    short: {
      year: "numeric",
      month: "short",
      day: "numeric"
    },
    long: {
      year: "numeric",
      month: "short",
      day: "numeric",
      weekday: "short",
      hour: "numeric",
      minute: "numeric"
    }
  },
  nl: {
      short: {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
      },
      long: {
        year: "numeric",
        month: "short",
        day: "numeric",
        weekday: "short",
        hour: "2-digit",
        minute: "2-digit"
    }
    }
};

function countryCodeLanguage() {
  const countryCode = `${import.meta.env.VITE_APP_WHATS_APP_COUNTRY_CODE}`;
  let returnLang = "nl";

  if (countryCode === Constants.ApplicationConstants.CountryCodes.Netherlands) {
     returnLang = "nl";
  }else{
     returnLang  = "en";
  }    
    return returnLang;
}

const messages: any = {
  en,
  nl
};

const i18n: any = createI18n({
  locale: countryCodeLanguage(),
  fallbackLocale: import.meta.env.VITE_APP_WHATS_APP_FALLBACK_LOCALE,
  messages,
  allowComposition: true,
  dateTimeFormats,
  silentTranslationWarn: true
});

/**
 *
 * @param key translate test
 */
const translate = (key: string) => {
  if (!key) {
    return "";
  }
  return i18n.global.t(key);
};



const resolveLocale = (locale: string) => {
  let lang = "";
  switch (toLower(locale)) {
    case "en-us":
    case "en-au":
    case "en-gb":
      lang = "en";
      break;

    case "nl":
    case "nl-NL":
      lang = "nl";
      break;
    
    default:
      lang = "en";
  }
  return lang;
};

export { i18n, translate, resolveLocale };
