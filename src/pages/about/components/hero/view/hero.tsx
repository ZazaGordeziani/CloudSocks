import { useMediaQuery } from '@/hooks/use-media-query'
import DesktopAboutPageHero from '@/pages/about/components/hero/components/desktop/desktop-about-hero'
import MobileAboutPageHero from '@/pages/about/components/hero/components/mobile/mobile-about-hero'

const AboutUsHero = () => {
    const isDesktop = useMediaQuery('(min-width: 768px)')

    return (
        <div>
            {isDesktop ? <DesktopAboutPageHero /> : <MobileAboutPageHero />}{' '}
        </div>
    )
}

export default AboutUsHero
