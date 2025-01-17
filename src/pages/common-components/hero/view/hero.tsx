import { useMediaQuery } from '@/hooks/use-media-query'
import DesktopPageHero from '@/pages/common-components/hero/components/desktop/desktop-common-hero'
import MobileAboutPageHero from '@/pages/common-components/hero/components/mobile/mobile-common-hero'

const Hero = () => {
    const isDesktop = useMediaQuery('(min-width: 768px)')

    return (
        <div>{isDesktop ? <DesktopPageHero /> : <MobileAboutPageHero />} </div>
    )
}

export default Hero
