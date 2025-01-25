import { supabase } from '@/supabase'
export interface Product {
    id: number
    type: string
    color: string
    created_at: string
    image_url: string
    user_id: string
    quantity: number
}

export type ProductFilterFormValues = {
    searchText: string
}

export const productFilterFromDefaultValues = {
    searchText: '',
}
export const getProductsList = async (): Promise<Product[]> => {
    const { data } = await supabase.from('products').select('*').throwOnError()

    return data as Product[]
}
export const getProductsListInFilter = async (
    searchText: string,
): Promise<Product[]> => {
    const { data } = await supabase
        .from('products')
        .select('*')
        .or(`type.ilike.%${searchText}%,color.ilike.%${searchText}%`)
        .throwOnError()

    return data as Product[]
}
