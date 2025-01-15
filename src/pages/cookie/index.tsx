import { useTranslation } from 'react-i18next'

const CookiePolicyPage = () => {
    const { t } = useTranslation()

    return (
        <div className="flex w-screen flex-col items-center gap-8 py-20 leading-5 text-gray-600 dark:text-gray-300">
            <h2 className="text-3xl font-bold">{t('cookie-title')}</h2>
            <p
                className="w-auto px-5 text-lg lg:max-w-[900px] lg:text-2xl"
                dangerouslySetInnerHTML={{
                    __html: t('cookie-descritpion').replace(
                        /\n/g,
                        '<br/><br/>',
                    ),
                }}
            />
        </div>
    )
}

export default CookiePolicyPage
