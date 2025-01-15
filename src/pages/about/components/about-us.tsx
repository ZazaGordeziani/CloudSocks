import CloudSocksFeatures from '@/pages/about/components/features/view'
import AboutUsHero from '@/pages/about/components/hero/view/hero'
// import Story from '@/pages/about/components/'
import Story from '@/pages/about/components/story'

const AboutUs = () => {
    return (
        <div className="flex flex-col items-center gap-9 dark:text-slate-300">
            <AboutUsHero />
            <Story />
            <CloudSocksFeatures />
        </div>
    )
}

export default AboutUs
