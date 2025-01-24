import { HeaderNavItem } from '@/components/base/header/header-nav-item/header-nav-item'
import { Button } from '@/components/ui/button'
import {
    Drawer,
    DrawerContent,
    DrawerTitle,
    DrawerTrigger,
} from '@/components/ui/drawer'
import { useUserProfile } from '@/react-query/profile'
import { userAtom } from '@/store/auth'
import { logout } from '@/supabase/auth'
import { useAtomValue } from 'jotai'
import { MenuIcon } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const MobileNav = () => {
    const { t } = useTranslation()
    const [isOpen, setIsOpen] = useState(false)
    const user = useAtomValue(userAtom)
    const { data: userProfile } = useUserProfile(user?.user.id ?? null)

    const closeDrawer = () => {
        setIsOpen(false)
    }
    return (
        <div>
            <Drawer open={isOpen} onOpenChange={setIsOpen} direction="left">
                <DrawerTrigger>
                    <MenuIcon onClick={() => setIsOpen(true)} />
                </DrawerTrigger>
                <DrawerTitle>
                    <DrawerContent className="bg-main-blue dark:bg-gray-950">
                        <div className="padding flex flex-col gap-6 px-10 py-28 text-3xl">
                            {user ? (
                                <Link
                                    onClick={closeDrawer}
                                    to="profile"
                                    className="w-fit rounded-3xl border-2 border-solid p-3 text-white"
                                >
                                    {userProfile?.[0].username}
                                </Link>
                            ) : null}
                            <Link to="home" onClick={closeDrawer}>
                                <HeaderNavItem text={t('nav-item-home')} />{' '}
                            </Link>
                            <Link to="products" onClick={closeDrawer}>
                                <HeaderNavItem text={t('nav-item-products')} />{' '}
                            </Link>
                            <Link to="about" onClick={closeDrawer}>
                                <HeaderNavItem text={t('nav-item-about')} />{' '}
                            </Link>
                            {user ? (
                                <Button
                                    onClick={logout}
                                    className="bg-white dark:bg-blue-700"
                                >
                                    <HeaderNavItem
                                        text={t('nav-item-sign-out')}
                                    />{' '}
                                </Button>
                            ) : (
                                <Link to="signIn" onClick={closeDrawer}>
                                    <Button className="bg-white text-black dark:bg-blue-700">
                                        <HeaderNavItem
                                            text={t('nav-item-sign-in')}
                                        />{' '}
                                    </Button>
                                </Link>
                            )}
                        </div>
                    </DrawerContent>
                </DrawerTitle>
            </Drawer>
        </div>
    )
}

export default MobileNav
