import ContactItem from '@/components/base/footer/components/contact'
import JoinUs from '@/components/base/footer/components/join-us'
import PagesNav from '@/components/base/footer/components/pages'
import Subscribe from '@/components/base/footer/components/subscribe'
import { Link } from 'react-router-dom'

const DesktopFooter = () => {
    return (
        <div className="dark:text-grey-600 mt-8 flex h-auto w-screen flex-col items-center justify-evenly gap-5 bg-main-blue px-5 py-8 text-white lg:py-14">
            <Link to="/">
                <h1 className="mb-6 cursor-pointer text-5xl hover:text-orange-500">
                    CloudSocks
                </h1>
            </Link>
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
