import CloudSocksFeatures from '@/pages/common-components/features/view/index'
import Story from '@/pages/about/components/story'
import Hero from '@/pages/common-components/hero/view/hero'

const AboutUs = () => {
    return (
        <div className="flex flex-col items-center gap-9 dark:text-slate-300">
            <Hero />
            <Story />
            <CloudSocksFeatures />
        </div>
    )
}

export default AboutUs
