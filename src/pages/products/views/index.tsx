import DisplayProduct from '@/pages/products/list/index'
import ProductsCreate from '@/pages/products/components/product-create'
import { userAtom } from '@/store/auth'
import { useAtomValue } from 'jotai'
// import ProductsFilter from '@/pages/products/components/product-display/filter'

const ProductsView = () => {
    const user = useAtomValue(userAtom)
    // console.log(user?.user.email)
    return (
        <div className="flex h-full w-screen flex-col justify-center gap-12">
            {user?.user.email === 'zg.gordeziani@gmail.com' ? (
                <ProductsCreate />
            ) : null}

            {/* <ProductsFilter /> */}
            <DisplayProduct />
        </div>
    )
}

export default ProductsView
