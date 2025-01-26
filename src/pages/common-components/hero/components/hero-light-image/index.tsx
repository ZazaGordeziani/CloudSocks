import lightHeroImage from '@/assets/logos/22.png'

const HeroImgLight = () => {
    return (
        <img
            src={lightHeroImage}
            className="h-[25vh] px-5 dark:hidden lg:h-[30vh] xl:h-[40vh] xl:px-0"
            alt="light mode logo"
        />
    )
}

export default HeroImgLight
