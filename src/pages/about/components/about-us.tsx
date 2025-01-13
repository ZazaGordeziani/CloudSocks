import CloudSocksFeatures from '@/pages/about/components/cloud-socks-features'
import AboutUsHero from '@/pages/about/components/hero'
import Story from '@/pages/about/components/story'

const AboutUs = () => {
    return (
        <div className="flex flex-col items-center gap-9 dark:text-slate-300">
            <AboutUsHero />
            <Story />
            <CloudSocksFeatures />
            <div>link to shop</div>
        </div>
    )
}

export default AboutUs
