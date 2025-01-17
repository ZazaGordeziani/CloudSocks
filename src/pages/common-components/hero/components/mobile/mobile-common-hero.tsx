import HeroImgDark from '@/pages/common-components/hero/components/hero-dark-image'
import HeroDescription from '@/pages/common-components/hero/components//hero-description'
import HeroImgLight from '@/pages/common-components/hero/components/hero-light-image'
import HeroTitle from '@/pages/common-components/hero/components/hero-title'

const MobilePageHero = () => {
    return (
        <>
            <div className="flex h-[40vh] w-screen items-center justify-around bg-light bg-center bg-no-repeat px-20 text-slate-500 dark:bg-about-hero-dark dark:text-white">
                <HeroImgDark />
                <HeroImgLight />
            </div>
            <div className="flex flex-col items-center gap-5 bg-light py-8 dark:bg-about-hero-dark">
                <HeroTitle />
                <HeroDescription />
            </div>
        </>
    )
}

export default MobilePageHero
