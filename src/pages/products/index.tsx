import {
    getProductsList,
    Product,
} from '@/pages/products/components/product-display'
import { useQuery } from '@tanstack/react-query'

const DisplayProduct = () => {
    const { data: DisplayData } = useQuery<Product[]>({
        queryKey: ['products'],
        queryFn: getProductsList,
    })
    return (
        <form className="flex h-full w-screen flex-col items-center justify-center gap-10">
            {/* <div className="flex flex-col rounded-lg border-2 border-solid border-black p-10 dark:border-white lg:max-w-[400px]"> */}
            {DisplayData?.map((data) => {
                const productImageUrl = data?.image_url
                    ? `${import.meta.env.VITE_SUPABASE_PRODUCT_IMAGES_STORAGE_URL}/${data.image_url}`
                    : ''
                return (
                    <div
                        key={data.id}
                        className="max-w[400px] flex w-[284px] flex-col gap-y-8 rounded-lg border-2 border-solid border-black p-6 pb-8 dark:border-white lg:w-[400px]"
                    >
                        <div>
                            <img
                                src={productImageUrl}
                                alt="product image"
                                className="rounded-lg border-2 border-gray-500"
                            />
                        </div>
                        <div>
                            <span className="pr-2">Type:</span>
                            {data.type}
                        </div>
                        <div>
                            <span className="pr-2">Color:</span> {data.color}
                        </div>
                    </div>
                )
            })}
            {/* </div> */}
        </form>
    )
}

export default DisplayProduct
