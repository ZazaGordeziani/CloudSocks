import darkHeroImage from '@/assets/black logo1.jpeg'

const HeroImgDark = () => {
    return (
        <img
            src={darkHeroImage}
            className="hidden h-[40vh] dark:block"
            alt="dark mode logo"
        />
    )
}

export default HeroImgDark
