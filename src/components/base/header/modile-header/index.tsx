import HeaderTitle from '@/components/base/header/header-title/header-title'
import { header } from '@/components/base/header/header.style'
import Langtoggle from '@/components/base/header/lang-toggle/lang-toggle'
import { ModeToggle } from '@/components/base/header/mode-toggle/mode-toggle'
import NavigationMenu from '@/components/base/header/navigation-menu'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const MobileHeader = () => {
    const { t } = useTranslation()

    return (
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

export default MobileHeader
