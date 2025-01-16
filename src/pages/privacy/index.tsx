import { useTranslation } from 'react-i18next'

const PrivacyPolicyPage = () => {
    const { t } = useTranslation()
    return (
        <div className="w-screen">
            <div className="m-auto flex w-2/3 flex-col items-center gap-8 py-20 leading-5 text-gray-600 dark:text-gray-300">
                <h1 className="text-xl font-bold lg:text-3xl">
                    {t('privacy-title')}
                </h1>
                <p className="w-auto px-5 text-lg lg:max-w-[900px] lg:text-2xl">
                    {t('privacy-description-header')}
                </p>
                <h2 className="text-xl font-bold lg:text-2xl">
                    {t('privacy-heading-1')}
                </h2>
                <ul className="list-disc">
                    <li className="w-auto px-5 text-lg lg:max-w-[900px] lg:text-2xl">
                        {t('privacy-heading-1-paragraph-1')}
                    </li>
                    <li className="w-auto px-5 text-lg lg:max-w-[900px] lg:text-2xl">
                        {t('privacy-heading-1-paragraph-2')}
                    </li>
                    <li className="w-auto px-5 text-lg lg:max-w-[900px] lg:text-2xl">
                        {t('privacy-description-header-3')}
                    </li>
                </ul>
                <h2 className="text-xl font-bold lg:text-2xl">
                    {t('privacy-heading-2')}
                </h2>
                <ul className="list-disc">
                    <li className="w-auto px-5 text-lg lg:max-w-[900px] lg:text-2xl">
                        {t('privacy-heading-2-paragraph-1')}
                    </li>
                    <li className="w-auto px-5 text-lg lg:max-w-[900px] lg:text-2xl">
                        {t('privacy-heading-2-paragraph-2')}
                    </li>
                    <li className="w-auto px-5 text-lg lg:max-w-[900px] lg:text-2xl">
                        {t('privacy-heading-2-paragraph-3')}
                    </li>
                    <li className="w-auto px-5 text-lg lg:max-w-[900px] lg:text-2xl">
                        {t('privacy-heading-2-paragraph-4')}
                    </li>
                    <li className="w-auto px-5 text-lg lg:max-w-[900px] lg:text-2xl">
                        {t('privacy-heading-2-paragraph-5')}
                    </li>
                </ul>
                <h2 className="text-xl font-bold lg:text-2xl">
                    {t('privacy-heading-3')}
                </h2>
                <p className="text-xl font-bold lg:text-2xl">
                    {t('privacy-heading-3-paragraph')}
                </p>
                <ul className="list-disc">
                    <li className="w-auto px-5 text-lg lg:max-w-[900px] lg:text-2xl">
                        {t('privacy-heading-3-paragraph-1')}
                    </li>
                    <li className="w-auto px-5 text-lg lg:max-w-[900px] lg:text-2xl">
                        {t('privacy-heading-3-paragraph-2')}
                    </li>
                    <li className="w-auto px-5 text-lg lg:max-w-[900px] lg:text-2xl">
                        {t('privacy-heading-3-paragraph-3')}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default PrivacyPolicyPage
