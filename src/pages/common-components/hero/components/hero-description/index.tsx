import { useTranslation } from 'react-i18next'

const HeroDescription = () => {
    const { t } = useTranslation()

    return (
        <p className="m-auto max-w-72 text-center text-2xl text-sky-600 md:pr-7 lg:text-3xl">
            {t('about-main-description')}
        </p>
    )
}

export default HeroDescription
