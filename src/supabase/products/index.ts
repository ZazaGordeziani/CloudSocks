import { supabase } from '@/supabase'

export const deleteProduct = async (productId: number): Promise<null> => {
    const { error } = await supabase
        .from('products')
        .delete()
        .eq('id', productId)

    if (error) {
        throw new Error(error.message)
    }

    const { data: product } = await supabase
        .from('products')
        .select('image_url')
        .eq('id', productId)
        .single()

    if (product?.image_url) {
        const imageFileName = product.image_url.replace('products_images/', '')

        if (imageFileName) {
            const { error } = await supabase.storage
                .from('products_images')
                .remove([imageFileName])

            if (error) {
                throw new Error(error.message)
            }
        }
    }
    return null
}
