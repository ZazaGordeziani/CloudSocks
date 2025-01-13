import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'
import headerTranslationsKa from '@/i18n/ka/header/header.json'
import headerTranslationsEn from '@/i18n/en/header/header.json'
import aboutUsEn from '@/i18n/en/pages/about-us/about-us.json'
import aboutUsKa from '@/i18n/ka/pages/about-us/about-us.json'
import notFoundEn from '@/i18n/en/pages/404/404.json'
import notFoundKa from '@/i18n/ka/pages/404/404.json'
i18n.use(initReactI18next).init({
    resources: {
        ka: {
            translation: {
                ...headerTranslationsKa,
                ...aboutUsKa,
                ...notFoundKa,
            },
        },
        en: {
            translation: {
                ...headerTranslationsEn,
                ...aboutUsEn,
                ...notFoundEn,
            },
        },
    },
    // lng: 'ka',
    fallbackLng: 'en',

    interpolation: {
        escapeValue: false,
    },
})
