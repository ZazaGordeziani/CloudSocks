import { useTranslation } from 'react-i18next'
import termsData from '@/i18n/en/pages/terms-conditions/terms-conditions.json'

const TermsConditions = () => {
    const { t } = useTranslation()
    return (
        <div className="flex w-screen flex-col items-center gap-8 py-20 leading-5 text-gray-600 dark:text-gray-300">
            <h1 className="text-3xl font-bold">{t('terms-main-heading')}</h1>
            {termsData.sections.map((section, index) => (
                <div key={index} className="mb-6 flex flex-col gap-3">
                    <h2 className="text-2xl font-bold">{section.heading}</h2>
                    <p className="w-auto px-5 text-lg lg:max-w-[900px] lg:text-2xl">
                        {section.paragraph}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default TermsConditions
