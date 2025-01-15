import HeaderTitle from '@/components/base/header/header-title/header-title'
import { header } from '@/components/base/header/header.style'
import Langtoggle from '@/components/base/header/lang-toggle/lang-toggle'
import { ModeToggle } from '@/components/base/header/mode-toggle/mode-toggle'
import NavigationMenu from '@/components/base/header/navigation-menu'
import SignIn from '@/components/base/header/sign-in'
import { useTranslation } from 'react-i18next'

export const DesktopHeader = () => {
    const { t } = useTranslation()
    return (
        <div className={`${header()} lg:py-6`}>
            <HeaderTitle title={t('title-translation')} />
            <NavigationMenu />

            <div className="mr-4 flex items-center justify-between gap-4">
                <SignIn />
                <Langtoggle />
                <ModeToggle />
            </div>
        </div>
    )
}
