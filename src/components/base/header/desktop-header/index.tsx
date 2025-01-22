import HeaderTitle from '@/components/base/header/header-title/header-title'
import { header } from '@/components/base/header/header.style'
import Langtoggle from '@/components/base/header/lang-toggle/lang-toggle'
import { ModeToggle } from '@/components/base/header/mode-toggle/mode-toggle'
import NavigationMenu from '@/components/base/header/navigation-menu'
import SignIn from '@/components/base/header/sign-in'
import { userAtom } from '@/store/auth'
import { useAtomValue } from 'jotai'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

export const DesktopHeader = () => {
    const { t } = useTranslation()
    const user = useAtomValue(userAtom)
    // console.log(user)
    return (
        <div className={`${header()} `}>
            <HeaderTitle title={t('title-translation')} />
            <NavigationMenu />

            <div className="mr-4 flex items-center justify-between gap-4">
                {user ? <NavLink to="profile">Profile</NavLink> : null}
                <SignIn />
                <Langtoggle />
                <ModeToggle />
            </div>
        </div>
    )
}
