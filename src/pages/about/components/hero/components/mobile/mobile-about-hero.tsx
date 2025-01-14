import HeroImgDark from '@/pages/about/components/hero/components/hero-dark-image'
import HeroDescription from '@/pages/about/components/hero/components/hero-description'
import HeroImgLight from '@/pages/about/components/hero/components/hero-light-image'
import HeroTitle from '@/pages/about/components/hero/components/hero-title'

const MobileAboutPageHero = () => {
    return (
        <>
            <div className="bg-light flex h-[40vh] w-screen items-center justify-around bg-center bg-no-repeat px-20 text-slate-500 dark:bg-about-hero-dark dark:text-white">
                <HeroImgDark />
                <HeroImgLight />
            </div>
            <div className="bg-light flex flex-col items-center gap-5 py-8 dark:bg-about-hero-dark">
                <HeroTitle />
                <HeroDescription />
            </div>
        </>
    )
}

export default MobileAboutPageHero
