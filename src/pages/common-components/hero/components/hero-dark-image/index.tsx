import darkHeroImage from '@/assets/logos/11.png'

const HeroImgDark = () => {
    return (
        <img
            src={darkHeroImage}
            className="hidden h-[30vh] px-5 dark:block lg:h-[50vh]"
            alt="dark mode logo"
        />
    )
}

export default HeroImgDark
