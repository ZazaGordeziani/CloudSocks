import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'
import headerTranslationsKa from '@/i18n/ka/header/header.json'
import headerTranslationsEn from '@/i18n/en/header/header.json'
import aboutUsEn from '@/i18n/en/pages/about-us/about-us.json'
import aboutUsKa from '@/i18n/ka/pages/about-us/about-us.json'
import notFoundEn from '@/i18n/en/pages/404/404.json'
import notFoundKa from '@/i18n/ka/pages/404/404.json'
import cookieKa from '@/i18n/ka/pages/cookie-policy/cookie.json'
import cookieEN from '@/i18n/En/pages/cookie-policy/cookie.json'
import privacyEn from '@/i18n/en/pages/privacy-policy/privacy.json'
import privacyKa from '@/i18n/Ka/pages/privacy-policy/privacy.json'
i18n.use(initReactI18next).init({
    resources: {
        ka: {
            translation: {
                ...headerTranslationsKa,
                ...aboutUsKa,
                ...notFoundKa,
                ...cookieKa,
                ...privacyKa,
            },
        },
        en: {
            translation: {
                ...headerTranslationsEn,
                ...aboutUsEn,
                ...notFoundEn,
                ...cookieEN,
                ...privacyEn,
            },
        },
    },
    // lng: 'ka',
    fallbackLng: 'en',

    interpolation: {
        escapeValue: false,
    },
})
