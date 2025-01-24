import { Button } from '@/components/ui/button'
import {
    getProductsList,
    getProductsListInFilter,
    Product,
    ProductFilterFormValues,
    productFilterFromDefaultValues,
} from '@/pages/products/components/product-display'
import qs from 'qs'
import { useDebounce } from '@uidotdev/usehooks'

import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'

const DisplayProduct = () => {
    // const { data: DisplayData } = useQuery<Product[]>({
    //     queryKey: ['products'],
    //     queryFn: getProductsList,
    // })
    const [searchParams, setSearchParams] = useSearchParams()
    const [products, setProducts] = useState<Product[]>()

    const parsedQueryParams = {
        ...productFilterFromDefaultValues,
        ...qs.parse(searchParams.toString()),
    }

    const { control, watch } = useForm<ProductFilterFormValues>({
        defaultValues: parsedQueryParams,
    })
    //to watch the search text and fetch product according to it
    const searchText = watch('searchText')
    const debouncedSearchText = useDebounce(searchText, 1000)

    // const onSubmit = async ({ searchText }: ProductFilterFormValues) => {
    //     const productsList = await getProductsListInFilter(searchText)
    //     setProducts(productsList)
    //     setSearchParams(
    //         qs.stringify(
    //             { searchText },
    //             {
    //                 skipNulls: true,
    //                 filter: (_, value) => {
    //                     return value || undefined
    //                 },
    //             },
    //         ),
    //     )
    // }

    useEffect(() => {
        const fetchProducts = async () => {
            if (debouncedSearchText?.length > 2) {
                const filteredProducts =
                    await getProductsListInFilter(debouncedSearchText)
                setProducts(filteredProducts)

                setSearchParams(
                    qs.stringify(
                        { debouncedSearchText },
                        {
                            skipNulls: true,
                            filter: (_, value) => value || undefined,
                        },
                    ),
                )
            } else if (!debouncedSearchText) {
                const allProducts = await getProductsList()
                setProducts(allProducts)
            }
        }
        fetchProducts()
    }, [debouncedSearchText, setSearchParams])
    return (
        <>
            <div className="flex w-full justify-center">
                <div className="flex w-[284px] items-center gap-2 lg:w-[400px]">
                    <Controller
                        name="searchText"
                        control={control}
                        render={({ field }) => (
                            <input
                                {...field}
                                className="w-full rounded-md border-2 border-solid border-black p-3 text-black"
                                placeholder="Enter Search Text"
                                required
                            />
                        )}
                    />
                    {/* <Button onClick={handleSubmit(onSubmit)}>Filter</Button> */}
                </div>
            </div>
            <form className="flex h-full w-screen flex-col items-center justify-center gap-10">
                {products?.map((data) => {
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
                                <span className="pr-2">Color:</span>{' '}
                                {data.color}
                            </div>
                            <Button className="text-xl tracking-wider lg:text-2xl">
                                Add to Card
                            </Button>
                        </div>
                    )
                })}
            </form>
        </>
    )
}

export default DisplayProduct
