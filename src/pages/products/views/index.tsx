import DisplayProduct from '@/pages/products/list/index'
import ProductsCreate from '@/pages/products/components/product-create'
import { userAtom } from '@/store/auth'
import { useAtomValue } from 'jotai'

const ProductsView = () => {
    const user = useAtomValue(userAtom)
    return (
        <div className="flex h-full w-screen flex-col justify-center gap-12">
            {user?.user.email === 'zg.gordeziani@gmail.com' ? (
                <ProductsCreate />
            ) : null}

            <DisplayProduct />
        </div>
    )
}

export default ProductsView
