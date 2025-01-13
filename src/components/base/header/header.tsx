// import React from 'react'
import { HeaderNavItem } from '@/components/base/header/header-nav-item/header-nav-item'
import HeaderTitle from '@/components/base/header/header-title/header-title'
import { header } from '@/components/base/header/header.style'
import Langtoggle from '@/components/base/header/lang-toggle/lang-toggle'
import { ModeToggle } from '@/components/base/header/mode-toggle/mode-toggle'
import NavigationMenu from '@/components/base/header/navigation-menu/navigation-menu'
import { Button } from '@/components/ui/button'
import { useMediaQuery } from '@/hooks/use-media-query'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const Header = () => {
    const isDesktop = useMediaQuery('(min-width: 768px)')

    const { t } = useTranslation()
    return isDesktop ? (
        <div className={`${header()} `}>
            <Link to="/">
                <HeaderTitle title={t('title-translation')} />
            </Link>
            <NavigationMenu />

            <div className="mr-4 flex items-center justify-between gap-4">
                <Link to="/signIn">
                    <Button className="bg-white dark:bg-blue-700">
                        <HeaderNavItem text={t('nav-item-sign-in')} />{' '}
                    </Button>
                </Link>
                <Langtoggle />
                <ModeToggle />
            </div>
        </div>
    ) : (
        <div className={`${header()}`}>
            <NavigationMenu />

            <Link to="/">
                <HeaderTitle title={t('title-translation')} />
            </Link>
            <div className="flex items-center justify-between gap-4">
                <Langtoggle />
                <ModeToggle />
            </div>
        </div>
    )
}

export default Header
