import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'
import headerTranslationsKa from '@/i18n/ka/header/header.json'
import headerTranslationsEn from '@/i18n/en/header/header.json'
import aboutUsEn from '@/i18n/en/pages/about-us/about-us.json'
import aboutUsKa from '@/i18n/ka/pages/about-us/about-us.json'
import notFoundEn from '@/i18n/en/pages/404/404.json'
import notFoundKa from '@/i18n/ka/pages/404/404.json'
import cookieKa from '@/i18n/ka/pages/cookie-policy/cookie.json'
import cookieEn from '@/i18n/en/pages/cookie-policy/cookie.json'
import privacyEn from '@/i18n/en/pages/privacy-policy/privacy.json'
import privacyKa from '@/i18n/ka/pages/privacy-policy/privacy.json'
import termsConditionsEn from '@/i18n/en/pages/terms-conditions/terms-conditions.json'
import termsConditionsKa from '@/i18n/ka/pages/terms-conditions/terms-conditions.json'
import footerKa from '@/i18n/ka/footer/footer.json'
import footerEn from '@/i18n/en/footer/footer.json'
import mainKa from '@/i18n/ka/pages/main/main.json'
import mainEn from '@/i18n/en/pages/main/main.json'
import signInEn from '@/i18n/en/pages/auth/sign-in/sign-in.json'
import signInKa from '@/i18n/ka/pages/auth/sign-in/sign-in.json'
import signUpEn from '@/i18n/en/pages/auth/sign-up/sign-up.json'
import signUpKa from '@/i18n/ka/pages/auth/sign-up/sign-up.json'
import accountInfoEn from '@/i18n/en/pages/account/profile/profile.json'
import accountInfoKa from '@/i18n/ka/pages/account/profile/profile.json'
import authCommonKa from '@/i18n/ka/pages/auth/common.json'
import authCommonEn from '@/i18n/en/pages/auth/common.json'
import productsKa from '@/i18n/ka/pages/products/products.json'
import productsEn from '@/i18n/en/pages/products/products.json'

i18n.use(initReactI18next).init({
    resources: {
        ka: {
            translation: {
                ...headerTranslationsKa,
                ...aboutUsKa,
                ...notFoundKa,
                ...cookieKa,
                ...privacyKa,
                ...termsConditionsKa,
                ...footerKa,
                ...mainKa,
                ...signInKa,
                ...signUpKa,
                ...accountInfoKa,
                ...authCommonKa,
                ...productsKa,
            },
        },
        en: {
            translation: {
                ...headerTranslationsEn,
                ...aboutUsEn,
                ...notFoundEn,
                ...cookieEn,
                ...privacyEn,
                ...termsConditionsEn,
                ...footerEn,
                ...mainEn,
                ...signInEn,
                ...signUpEn,
                ...accountInfoEn,
                ...authCommonEn,
                ...productsEn,
            },
        },
    },
    // lng: 'ka',
    fallbackLng: 'en',

    interpolation: {
        escapeValue: false,
    },
})
