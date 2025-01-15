import lightHeroImage from '@/assets/white logo.jpeg'

const HeroImgLight = () => {
    return (
        <img
            src={lightHeroImage}
            className="h-[40vh] dark:hidden"
            alt="dark mode logo"
        />
    )
}

export default HeroImgLight
