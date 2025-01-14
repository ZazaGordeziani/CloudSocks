import HeroImgDark from '@/pages/about/components/hero/components/hero-dark-image'
import HeroDescription from '@/pages/about/components/hero/components/hero-description'
import HeroImgLight from '@/pages/about/components/hero/components/hero-light-image'
import HeroTitle from '@/pages/about/components/hero/components/hero-title'

const DesktopAboutPageHero = () => {
    return (
        <div className="bg-light flex h-[40vh] w-screen items-center justify-evenly overflow-hidden bg-center bg-no-repeat text-slate-500 dark:bg-about-hero-dark dark:text-white">
            <HeroTitle />
            <HeroImgDark />
            <HeroImgLight />
            <HeroDescription />
        </div>
    )
}

export default DesktopAboutPageHero
