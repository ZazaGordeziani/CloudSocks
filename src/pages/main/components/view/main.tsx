// import React from 'react'

import CloudSocksFeatures from '@/pages/common-components/features/view/index'
import Hero from '@/pages/common-components/hero/view/hero'
import CommercialWindow from '@/pages/main/components/commercial-window'

const MainPage = () => {
    return (
        <div className="flex flex-col items-center gap-9 pt-8 dark:text-slate-300">
            <Hero />
            <CommercialWindow />
            <CloudSocksFeatures />
        </div>
    )
}

export default MainPage
