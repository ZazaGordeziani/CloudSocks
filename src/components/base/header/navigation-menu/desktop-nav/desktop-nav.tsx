import { HeaderNavItem } from '@/components/base/header/header-nav-item/header-nav-item'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

const DesktopNav = () => {
    const { t } = useTranslation()

    return (
        <div>
            {' '}
            <div className="flex min-w-[465px] flex-row justify-center gap-6 px-10 text-5xl">
                <NavLink
                    to="home"
                    className={({ isActive }) => {
                        console.log('Active state:', isActive) // Debug active state
                        return isActive ? 'text-orange-500' : 'text-white'
                    }}
                >
                    <HeaderNavItem text={t('nav-item-home')} />
                </NavLink>
                <NavLink
                    to="products"
                    className={({ isActive }) => {
                        console.log('Active state:', isActive) // Debug active state
                        return isActive ? 'text-orange-500' : 'text-white'
                    }}
                >
                    <HeaderNavItem text={t('nav-item-products')} />{' '}
                </NavLink>
                <NavLink
                    to="about"
                    className={({ isActive }) => {
                        console.log('Active state:', isActive) // Debug active state
                        return isActive ? 'text-orange-500' : 'text-white'
                    }}
                >
                    <HeaderNavItem text={t('nav-item-about')} />{' '}
                </NavLink>
            </div>
        </div>
    )
}

export default DesktopNav
