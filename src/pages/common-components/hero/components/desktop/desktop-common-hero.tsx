import HeroImgDark from '@/pages/common-components/hero/components/hero-dark-image'
import HeroDescription from '@/pages/common-components/hero/components//hero-description'
import HeroImgLight from '@/pages/common-components/hero/components/hero-light-image'
import HeroTitle from '@/pages/common-components/hero/components/hero-title'

const DesktopPageHero = () => {
    return (
        <div className="flex h-[40vh] w-screen items-center justify-evenly overflow-hidden bg-light bg-center bg-no-repeat text-slate-500 dark:bg-about-hero-dark dark:text-white">
            <HeroTitle />
            <HeroImgDark />
            <HeroImgLight />
            <HeroDescription />
        </div>
    )
}

export default DesktopPageHero
