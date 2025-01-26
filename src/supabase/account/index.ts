import { supabase } from '@/supabase'
import { ProfileFiledsValues } from '@/supabase/account/index.types'

export const fillProfileInfo = async (payload: ProfileFiledsValues) => {
    const { data, error } = await supabase
        .from('profiles')
        .upsert(payload)
        .throwOnError()
    if (error) {
        throw error
    }
    return data
}

export const getProfileInfo = (id: string) => {
    return supabase.from('profiles').select('*').eq('id', id)
}
