import { useTranslation } from 'react-i18next'
import shippongData from '@/i18n/en/pages/shipping-return/shipping-return.json'

const ShippingReturn = () => {
    const { t } = useTranslation()
    return (
        <div className="flex w-screen flex-col items-center gap-8 py-20 leading-5 text-gray-600 dark:text-gray-300">
            <h1 className="text-2xl font-bold lg:text-3xl">
                {t('terms-main-heading')}
            </h1>
            {shippongData.sections.map((section, index) => (
                <div key={index} className="mb-6 flex flex-col gap-3 px-4">
                    <h2 className="text-xl font-bold lg:text-2xl">
                        {section.heading}
                    </h2>
                    <p className="w-auto px-5 text-lg lg:max-w-[900px] lg:text-2xl">
                        {section.paragraph1}
                    </p>
                    <p className="w-auto px-5 text-lg lg:max-w-[900px] lg:text-2xl">
                        {section.paragraph2}
                    </p>
                    <p className="w-auto px-5 text-lg lg:max-w-[900px] lg:text-2xl">
                        {section.paragraph3}
                    </p>
                    <p className="w-auto px-5 text-lg lg:max-w-[900px] lg:text-2xl">
                        {section.paragraph}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default ShippingReturn
