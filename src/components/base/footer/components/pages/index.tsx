import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const PagesNav = () => {
    const { t } = useTranslation()
    return (
        <div className="flex flex-col gap-4">
            <h2 className="pb-4 text-lg lg:text-2xl">{t('footer-pages')}</h2>
            <Link className="text-sm lg:text-lg" to="cookie-policy">
                {t('footer-cookie')}
            </Link>
            <Link className="text-sm lg:text-lg" to="privacy-policy">
                {t('footer-privacy')}
            </Link>
            <Link className="text-sm lg:text-lg" to="shipping&return">
                {t('footer-shipping')}{' '}
            </Link>
            <Link className="text-sm lg:text-lg" to="terms&conditions">
                {t('footer-terms')}{' '}
            </Link>
        </div>
    )
}

export default PagesNav
