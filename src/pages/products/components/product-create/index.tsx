import { Button } from '@/components/ui/button'
import { userAtom } from '@/store/auth'
import { supabase } from '@/supabase'
import { useAtomValue } from 'jotai'
import { Controller, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useRef, useState } from 'react'

type ProductsListCreateValues = {
    type: string
    color: string
    image_file: null | File
}

const ProductsListDefaultValues = {
    type: '',
    color: '',
    image_file: null,
}

const ProductsCreate = () => {
    const user = useAtomValue(userAtom)
    const { t } = useTranslation()
    const [buttonBgColor, setButtonBgColor] = useState(false)
    const { control, handleSubmit, watch, reset } =
        useForm<ProductsListCreateValues>({
            defaultValues: ProductsListDefaultValues,
        })
    const imageFile = watch('image_file')

    const onSubmit = (productValues: ProductsListCreateValues) => {
        reset({
            ...ProductsListDefaultValues,
        })
        if (fileInputRef.current) {
            fileInputRef.current.value = ''
        }
        if (productValues.image_file) {
            supabase.storage
                .from('products_images')
                .upload(
                    productValues?.image_file?.name,
                    productValues.image_file,
                )
                .then((res) => {
                    return supabase.from('products').insert({
                        type: productValues.type,
                        color: productValues.color,
                        image_url: res.data?.fullPath,
                        user_id: user?.user?.id,
                    })
                    // .then((res) => {
                    //     console.log('Successfully created product', res)
                    // })
                    // console.log('upload file response ', res)
                })

            // console.log('Product values :', productValues)
        }
        setButtonBgColor(true)
        setTimeout(() => {
            setButtonBgColor(false)
        }, 500)
    }
    const fileInputRef = useRef<HTMLInputElement | null>(null)

    const handleClearFileInput = () => {
        if (fileInputRef.current) {
            fileInputRef.current.value = ''
        }
    }

    return (
        <form className="flex h-full w-screen flex-col items-center justify-center gap-4">
            <div className="flex flex-col gap-4 rounded-lg border-2 border-solid border-black p-10 dark:border-white lg:max-w-[400px]">
                <label>Sock Type</label>
                <Controller
                    name="type"
                    control={control}
                    render={({
                        field: { onChange, value },
                        fieldState: { error },
                    }) => {
                        return (
                            <>
                                <input
                                    onChange={onChange}
                                    value={value}
                                    className="max-w-[200px] rounded-md border-2 border-solid border-black p-3 text-black sm:max-w-[400px]"
                                    placeholder="Type"
                                />
                                {error?.message ? (
                                    <span className="max-w-[200px] text-red-400">
                                        {t(error.message)}
                                    </span>
                                ) : null}
                            </>
                        )
                    }}
                />
                <label>Sock Color</label>
                <Controller
                    name="color"
                    control={control}
                    render={({
                        field: { onChange, value },
                        fieldState: { error },
                    }) => {
                        // console.log('Full name error:', error)
                        return (
                            <>
                                <input
                                    onChange={onChange}
                                    value={value}
                                    className="max-w-[200px] rounded-md border-2 border-solid border-black p-3 text-black sm:max-w-[400px]"
                                    placeholder="Color"
                                />
                                {error?.message ? (
                                    <span className="max-w-[200px] text-red-400">
                                        {t(error.message)}
                                    </span>
                                ) : null}
                            </>
                        )
                    }}
                />

                <label>Sock Image</label>
                <Controller
                    name="image_file"
                    control={control}
                    render={({
                        field: { onChange },
                        fieldState: { error },
                    }) => {
                        return (
                            <div className="relative">
                                <>
                                    <input
                                        ref={fileInputRef}
                                        type="file"
                                        onChange={(e) => {
                                            const file = e.target.files?.[0]
                                            onChange(file)
                                        }}
                                        className="max-w-[200px] rounded-md border-2 border-solid border-black bg-white p-3 text-black sm:max-w-[400px]"
                                        placeholder="Image URL"
                                    />{' '}
                                    {imageFile && (
                                        <button
                                            type="button"
                                            onClick={handleClearFileInput}
                                            className="absolute right-2 top-1/2 ml-2 -translate-y-1/2 transform font-bold text-red-500"
                                        >
                                            ❌
                                        </button>
                                    )}
                                    {error?.message ? (
                                        <span className="max-w-[200px] text-red-400">
                                            {t(error.message)}
                                        </span>
                                    ) : null}
                                </>
                            </div>
                        )
                    }}
                />

                <Button
                    onClick={handleSubmit(onSubmit)}
                    className={`text-xl tracking-wider lg:text-2xl ${buttonBgColor ? 'bg-green-500' : ''}`}
                >
                    Add Product
                </Button>
            </div>
        </form>
    )
}

export default ProductsCreate
