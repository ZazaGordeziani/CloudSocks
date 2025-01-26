import { useTranslation } from 'react-i18next'

const HeroTitle = () => {
    const { t } = useTranslation()
    return (
        <h1 className="m-auto max-w-72 text-center text-2xl text-main-blue dark:text-white md:pl-7 lg:text-3xl">
            {t('about-main-title')}{' '}
        </h1>
    )
}

export default HeroTitle
