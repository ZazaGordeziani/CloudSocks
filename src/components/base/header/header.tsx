// import React from 'react'
import { DesktopHeader } from '@/components/base/header/desktop-header'
import MobileHeader from '@/components/base/header/mobile-header'
import { useMediaQuery } from '@/hooks/use-media-query'

const Header = () => {
    const isDesktop = useMediaQuery('(min-width: 1024px)')

    return isDesktop ? <DesktopHeader /> : <MobileHeader />
}

export default Header
