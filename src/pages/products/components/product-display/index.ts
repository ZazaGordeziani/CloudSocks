import { supabase } from '@/supabase'
export interface Product {
    id: number
    type: string
    color: string
    created_at: string
    image_url: string
    user_id: string
}
export const getProductsList = async (): Promise<Product[]> => {
    const { data } = await supabase.from('products').select('*').throwOnError()

    return data as Product[]
}
