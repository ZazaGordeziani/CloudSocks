import DesktopNav from '@/components/base/header/navigation-menu/desktop-nav/desktop-nav'
import MobileNav from '@/components/base/header/navigation-menu/mobile-nav/mobile-nav'
import { useMediaQuery } from '@/hooks/use-media-query'

//
export default function NavigationMenu() {
    const isDesktop = useMediaQuery('(min-width: 1024px)')

    return isDesktop ? <DesktopNav /> : <MobileNav />
}
