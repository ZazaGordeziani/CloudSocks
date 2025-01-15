import { useTranslation } from 'react-i18next'

const PrivacyPolicyPage = () => {
    const { t } = useTranslation()
    return (
        <div className="m-auto flex w-1/2 flex-col items-center gap-8 py-20 leading-5 text-gray-600 dark:text-gray-300">
            <h1>{t('privacy-title')}</h1>
            <p>{t('privacy-description-header')}</p>
            <h2>{t('privacy-heading-1')}</h2>
            <ul className="list-disc">
                <li>{t('privacy-heading-1-paragraph-1')}</li>
                <li>{t('privacy-heading-1-paragraph-2')}</li>
                <li>{t('privacy-description-header-3')}</li>
            </ul>
            <h2>{t('privacy-heading-2')}</h2>
            <ul className="list-disc">
                <li>{t('privacy-heading-2-paragraph-1')}</li>
                <li>{t('privacy-heading-2-paragraph-2')}</li>
                <li>{t('privacy-heading-2-paragraph-3')}</li>
                <li>{t('privacy-heading-2-paragraph-4')}</li>
                <li>{t('privacy-heading-2-paragraph-5')}</li>
            </ul>
            <h2>{t('privacy-heading-3')}</h2>
            <p>{t('privacy-heading-3-paragraph')}</p>
            <ul className="list-disc">
                <li>{t('privacy-heading-3-paragraph-1')}</li>
                <li>{t('privacy-heading-3-paragraph-2')}</li>
                <li>{t('privacy-heading-3-paragraph-3')}</li>
            </ul>
        </div>
    )
}

export default PrivacyPolicyPage
