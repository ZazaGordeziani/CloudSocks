import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const Footer = () => {
    const { t } = useTranslation()
    return (
        <div className="dark:text-grey-600 flex h-auto w-screen flex-row justify-evenly gap-5 bg-main-blue px-12 py-12 text-white lg:py-20">
            <div className="flex flex-col gap-4">
                <h2 className="pb-4 text-xl lg:text-3xl">
                    {t('footer-pages')}
                </h2>
                <Link className="text-sm lg:text-xl" to="cookie-policy">
                    {t('cookie')}
                </Link>
                <Link className="text-sm lg:text-xl" to="privacy-policy">
                    {t('privacy-title')}
                </Link>
                <Link className="text-sm lg:text-xl" to="cookie">
                    shipping and returns{' '}
                </Link>
                <Link className="text-sm lg:text-xl" to="terms&conditions">
                    Terms & Conditions
                </Link>
            </div>
            <div className="flex flex-col gap-6 text-2xl">
                {' '}
                <div>
                    <h2 className="mb-4 text-xl lg:text-3xl">
                        {' '}
                        {t('footer-contact')}
                    </h2>
                    <p className="text-sm lg:text-xl">
                        email: info@CloudSocks.com
                    </p>
                </div>
                <div>
                    <h2 className="text-xl lg:text-3xl"> {t('footer-join')}</h2>
                </div>
            </div>
        </div>
    )
}

export default Footer
