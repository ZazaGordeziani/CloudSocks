import DisplayProduct from '@/pages/products/list/index'
import Products from '@/pages/products/components/product-create'
// import ProductsFilter from '@/pages/products/components/product-display/filter'

const ProductsView = () => {
    return (
        <div className="flex h-full w-screen flex-col justify-center gap-12">
            <Products />
            {/* <ProductsFilter /> */}
            <DisplayProduct />
        </div>
    )
}

export default ProductsView
