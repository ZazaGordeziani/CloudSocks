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
import { useTranslation } from 'react-i18next'
import { useCart } from '@/hooks/use-cart'
import { deleteProduct } from '@/supabase/products'
import { useMutation } from '@tanstack/react-query'
import { useAtomValue } from 'jotai'
import { userAtom } from '@/store/auth'

const DisplayProduct = () => {
    // const { data: DisplayData } = useQuery<Product[]>({
    //     queryKey: ['products'],
    //     queryFn: getProductsList,
    // })
    const user = useAtomValue(userAtom)
    const { t } = useTranslation()
    const [searchParams, setSearchParams] = useSearchParams()
    const [products, setProducts] = useState<Product[]>()
    const [bgColorProductId, setBgColorProductId] = useState<number | null>(
        null,
    )
    const { addToCart } = useCart()
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
    const handleAddToCart = (product: Product) => {
        addToCart(product)
        setBgColorProductId(product.id)
        setTimeout(() => {
            setBgColorProductId(null)
        }, 500)
    }

    const deleteMutation = useMutation({
        mutationKey: ['deleteProduct'],
        mutationFn: (productId: number) => deleteProduct(productId),
        onSuccess: async () => {
            const restProducts = await getProductsList()
            setProducts(restProducts)
        },
        onError: (error) => {
            console.error('Error deleting product:', error)
        },
    })

    const handleDelete = (productId: number) => {
        deleteMutation.mutate(productId)
    }
    return (
        <>
            <div className="flex w-full justify-center">
                <div className="flex w-[284px] flex-col gap-2 lg:w-[400px]">
                    <label className="font-serif text-xl lg:text-3xl">
                        {t('search_bar_heading')}
                    </label>
                    <Controller
                        name="searchText"
                        control={control}
                        render={({ field }) => (
                            <input
                                {...field}
                                className="w-full rounded-md border-2 border-solid border-black p-3 text-black"
                                placeholder={t(
                                    'product_search_bar_placeholder',
                                )}
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
                            <Button
                                className={`text-xl tracking-wider lg:text-2xl ${bgColorProductId === data.id ? 'bg-green-500' : ''}`}
                                onClick={(e) => {
                                    e.preventDefault()
                                    handleAddToCart(data)
                                }}
                            >
                                {t('add_to_card')}{' '}
                            </Button>

                            {user?.user.email === 'zg.gordeziani@gmail.com' ? (
                                <Button
                                    className="mt-2 bg-red-500 text-xl text-white hover:bg-red-700"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        handleDelete(data.id)
                                    }}
                                >
                                    {t('delete_product')}
                                </Button>
                            ) : null}
                        </div>
                    )
                })}
            </form>
        </>
    )
}

export default DisplayProduct
