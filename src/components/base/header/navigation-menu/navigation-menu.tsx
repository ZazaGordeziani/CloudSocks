import { HeaderNavItem } from '@/components/base/header/header-nav-item/header-nav-item'
import { Button } from '@/components/ui/button'
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'
import { useMediaQuery } from '@/hooks/use-media-query'
import { MenuIcon } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

//
export default function NavigationMenu() {
    const { t } = useTranslation()
    const isDesktop = useMediaQuery('(min-width: 768px)')

    const [isOpen, setIsOpen] = useState(false)

    // Function to handle closing the drawer
    const closeDrawer = () => {
        setIsOpen(false)
    }
    return isDesktop ? (
        <div>
            {' '}
            <div className="padding flex flex-row gap-6 px-10 py-28 text-3xl">
                <Link to="/">
                    <HeaderNavItem text={t('nav-item-home')} />{' '}
                </Link>
                <Link to="/products">
                    <HeaderNavItem text={t('nav-item-products')} />{' '}
                </Link>
                <Link to="/about">
                    <HeaderNavItem text={t('nav-item-about')} />{' '}
                </Link>
            </div>
        </div>
    ) : (
        <div>
            <Drawer open={isOpen} onOpenChange={setIsOpen} direction="left">
                <DrawerTrigger>
                    <MenuIcon onClick={() => setIsOpen(true)} />
                </DrawerTrigger>
                <DrawerContent className="bg-sky-300 dark:bg-gray-950">
                    <div className="padding flex flex-col gap-6 px-10 py-28 text-3xl">
                        <Link to="/" onClick={closeDrawer}>
                            <HeaderNavItem text={t('nav-item-home')} />{' '}
                        </Link>
                        <Link to="/products" onClick={closeDrawer}>
                            <HeaderNavItem text={t('nav-item-products')} />{' '}
                        </Link>
                        <Link to="/about" onClick={closeDrawer}>
                            <HeaderNavItem text={t('nav-item-about')} />{' '}
                        </Link>
                        <Link to="/signIn" onClick={closeDrawer}>
                            <Button className="bg-white dark:bg-blue-700">
                                <HeaderNavItem text={t('nav-item-sign-in')} />{' '}
                            </Button>
                        </Link>
                    </div>
                </DrawerContent>
            </Drawer>
        </div>
    )
}
