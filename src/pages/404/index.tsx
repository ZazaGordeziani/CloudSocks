import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

const NotFoundPage = () => {
    const { t } = useTranslation()

    return (
        <div className="flex h-screen flex-col items-center justify-center text-4xl text-slate-800 dark:text-yellow-100">
            404
            <NavLink to="/">{t('not-found')}</NavLink>
        </div>
    )
}

export default NotFoundPage
