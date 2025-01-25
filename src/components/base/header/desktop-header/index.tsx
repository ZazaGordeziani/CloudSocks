import CartSign from '@/components/base/header/cart-sign'
import HeaderTitle from '@/components/base/header/header-title/header-title'
import { header } from '@/components/base/header/header.style'
import Langtoggle from '@/components/base/header/lang-toggle/lang-toggle'
import { ModeToggle } from '@/components/base/header/mode-toggle/mode-toggle'
import NavigationMenu from '@/components/base/header/navigation-menu'
import SignIn from '@/components/base/header/sign-in'
import { useUserProfile } from '@/react-query/profile'
import { userAtom } from '@/store/auth'
import { useAtomValue } from 'jotai'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

export const DesktopHeader = () => {
    const { t } = useTranslation()
    const user = useAtomValue(userAtom)

    const { data: userProfile } = useUserProfile(user?.user.id ?? null)
    return (
        <div className={`${header()} `}>
            <div className="flex items-center gap-8">
                <HeaderTitle title={t('title-translation')} />
                {user ? (
                    <NavLink
                        className={({ isActive }) =>
                            `w-fit rounded-3xl border-4 border-solid border-sky-300 bg-white p-2 text-2xl text-main-blue hover:bg-orange-500 ${
                                isActive ? 'bg-orange-500' : ''
                            }`
                        }
                        to="profile"
                    >
                        {userProfile?.[0].username}
                    </NavLink>
                ) : null}
            </div>
            <NavigationMenu />

            <div className="mr-4 flex items-center justify-between gap-4">
                <CartSign />
                <SignIn />
                <Langtoggle />
                <ModeToggle />
            </div>
        </div>
    )
}
