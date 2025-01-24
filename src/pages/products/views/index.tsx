import DisplayProduct from '@/pages/products'
import Products from '@/pages/products/components/product-create'

const ProductsView = () => {
    return (
        <div className="flex h-full w-screen flex-col justify-center gap-12">
            <Products />
            <DisplayProduct />
        </div>
    )
}

export default ProductsView
