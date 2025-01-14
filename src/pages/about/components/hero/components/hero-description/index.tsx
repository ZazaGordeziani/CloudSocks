import { useTranslation } from 'react-i18next'

const HeroDescription = () => {
    const { t } = useTranslation()

    return (
        <p className="m-auto max-w-72 text-center text-2xl text-sky-400 md:pr-7">
            {t('about-main-description')}
        </p>
    )
}

export default HeroDescription
