import { HeaderNavItem } from '@/components/base/header/header-nav-item/header-nav-item'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const DesktopNav = () => {
    const { t } = useTranslation()

    return (
        <div>
            {' '}
            <div className="flex min-w-[465px] flex-row justify-center gap-6 px-10 text-5xl">
                <Link to="home">
                    <HeaderNavItem text={t('nav-item-home')} />{' '}
                </Link>
                <Link to="products">
                    <HeaderNavItem text={t('nav-item-products')} />{' '}
                </Link>
                <Link to="about">
                    <HeaderNavItem text={t('nav-item-about')} />{' '}
                </Link>
            </div>
        </div>
    )
}

export default DesktopNav
