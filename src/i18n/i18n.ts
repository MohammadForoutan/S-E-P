import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Locales from './locales/locale';

i18n
    .use(initReactI18next) // pass the i18n instance to react-i18next.
    .init({
        resources: {
            // merge Home locale to i18n resource
            ...Locales
            // add other translation to the array
        },
        lng: 'en_US', // default language
        fallbackLng: 'en_US',
        debug: false,
        interpolation: {
            escapeValue: false // not needed for react as it escapes by default
        }
    });
export default i18n;