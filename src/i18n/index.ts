import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'
import headerTranslationsKa from '@/i18n/ka/header/header.json'
import headerTranslationsEn from '@/i18n/en/header/header.json'
i18n.use(initReactI18next).init({
    resources: {
        ka: {
            translation: {
                ...headerTranslationsKa,
            },
        },
        en: {
            translation: {
                ...headerTranslationsEn,
            },
        },
    },
    lng: 'en',
    fallbackLng: 'en',

    interpolation: {
        escapeValue: false,
    },
})
