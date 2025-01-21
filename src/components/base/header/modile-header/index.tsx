import HeaderTitle from '@/components/base/header/header-title/header-title'
import { header } from '@/components/base/header/header.style'
import Langtoggle from '@/components/base/header/lang-toggle/lang-toggle'
import { ModeToggle } from '@/components/base/header/mode-toggle/mode-toggle'
import NavigationMenu from '@/components/base/header/navigation-menu'
import { userAtom } from '@/store/auth'
import { useAtomValue } from 'jotai'
import { useTranslation } from 'react-i18next'
import { Link, NavLink } from 'react-router-dom'

const MobileHeader = () => {
    const { t } = useTranslation()
    const user = useAtomValue(userAtom)

    return (
        <div className={`${header()}`}>
            <NavigationMenu />

            <Link to="/">
                <HeaderTitle title={t('title-translation')} />
            </Link>
            <div className="flex items-center justify-between gap-4">
                {user ? <NavLink to="profile">Profile</NavLink> : null}
                <Langtoggle />
                <ModeToggle />
            </div>
        </div>
    )
}

export default MobileHeader
