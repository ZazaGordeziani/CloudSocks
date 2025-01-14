import { useTranslation } from 'react-i18next'

const HeroTitle = () => {
    const { t } = useTranslation()
    return (
        <h1 className="m-auto max-w-72 text-center text-3xl text-sky-400 md:pl-7">
            {t('about-main-title')}{' '}
        </h1>
    )
}

export default HeroTitle
