// import Subscribe from '@/components/base/footer/components/subscribe'
import DesktopFooter from '@/components/base/footer/components/desktop-footer'
import MobileFooter from '@/components/base/footer/components/mobile-footer'
import { useMediaQuery } from '@/hooks/use-media-query'
const Footer = () => {
    const isDesktop = useMediaQuery('(min-width: 1236px)')

    return isDesktop ? <DesktopFooter /> : <MobileFooter />
}

export default Footer
