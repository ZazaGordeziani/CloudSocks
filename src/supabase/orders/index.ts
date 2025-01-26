import { supabase } from '@/supabase'
import { OrdersListValues } from '@/supabase/orders/index.types'

export const fillOrderInfo = async (payload: OrdersListValues) => {
    const { data, error } = await supabase
        .from('orders')
        .upsert(payload)
        .select('*')
        .throwOnError()
    if (error) {
        throw error
    }
    return data
}

export const getOrderInfo = (id: string) => {
    return supabase
        .from('orders')
        .select('*')
        .eq('user_id', id)
        .then((res) => {
            if (res.error) {
                throw new Error(res.error.message)
            }
            return res.data
        })
}
