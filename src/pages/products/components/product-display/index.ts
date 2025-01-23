import { supabase } from '@/supabase'

export const getProductsList = () => {
    return supabase
        .from('products')
        .select('*')
        .throwOnError()
        .then((res) => console.log(res))
}
