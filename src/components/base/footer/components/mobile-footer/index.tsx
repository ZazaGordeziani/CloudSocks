import ContactItem from '@/components/base/footer/components/contact'
import JoinUs from '@/components/base/footer/components/join-us'
import PagesNav from '@/components/base/footer/components/pages'
import Subscribe from '@/components/base/footer/components/subscribe'

const MobileFooter = () => {
    return (
        <div className="dark:text-grey-600 mt-8 flex h-auto w-screen flex-col items-center justify-evenly gap-5 bg-main-blue px-5 py-12 text-white lg:py-20">
            <div className="flex gap-5">
                <PagesNav />
                <div className="flex flex-col gap-5">
                    <ContactItem />
                    <JoinUs />
                </div>
            </div>

            <Subscribe />
        </div>
    )
}

export default MobileFooter
