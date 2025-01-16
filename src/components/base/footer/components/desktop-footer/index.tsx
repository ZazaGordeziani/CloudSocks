import ContactItem from '@/components/base/footer/components/contact'
import JoinUs from '@/components/base/footer/components/join-us'
import PagesNav from '@/components/base/footer/components/pages'
import Subscribe from '@/components/base/footer/components/subscribe'

const DesktopFooter = () => {
    return (
        <div className="dark:text-grey-600 mt-8 flex h-auto w-screen flex-col items-center justify-evenly gap-5 bg-main-blue px-5 py-8 text-white lg:py-14">
            <h1 className="mb-6 text-5xl">CloudSocks</h1>
            <div className="flex flex-row gap-10">
                <Subscribe />
                <PagesNav />
                <ContactItem />
                <JoinUs />
            </div>
        </div>
    )
}

export default DesktopFooter
