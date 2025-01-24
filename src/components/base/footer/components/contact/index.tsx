import { useTranslation } from 'react-i18next'

const ContactItem = () => {
    const { t } = useTranslation()
    return (
        <div className="flex flex-col gap-4">
            <h2 className="pb-4 text-lg lg:text-2xl"> {t('footer-contact')}</h2>
            <p className="cursor-pointer text-sm lg:text-lg">
                email:{' '}
                <a
                    className="hover:text-orange-500"
                    href="info@CloudSocks.com"
                    onClick={(e) => {
                        e.preventDefault()
                    }}
                >
                    info@CloudSocks.com
                </a>{' '}
            </p>
        </div>
    )
}

export default ContactItem
