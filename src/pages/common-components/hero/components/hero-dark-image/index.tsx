import darkHeroImage from '@/assets/logos/black logo1.jpeg'

const HeroImgDark = () => {
    return (
        <img
            src={darkHeroImage}
            className="hidden h-[30vh] px-5 dark:block lg:h-[40vh]"
            alt="dark mode logo"
        />
    )
}

export default HeroImgDark
