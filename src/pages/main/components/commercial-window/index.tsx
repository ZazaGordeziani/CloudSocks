import { useMediaQuery } from '@/hooks/use-media-query'
import CommercialOnMainDesktop from '@/pages/main/components/commercial-window/desktop-version'
import CommercialOnMainMobileTablet from '@/pages/main/components/commercial-window/mobile-tablet-version'

const CommercialWindow = () => {
    const isDesktop = useMediaQuery('(min-width: 1024px)')

    return isDesktop ? (
        <CommercialOnMainDesktop />
    ) : (
        <CommercialOnMainMobileTablet />
    )
}

export default CommercialWindow
