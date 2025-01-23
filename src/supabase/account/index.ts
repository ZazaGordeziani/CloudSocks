import { supabase } from '@/supabase'
import { ProfileFiledsValuesWithoutAvatar } from '@/supabase/account/index.types'

export const fillProfileInfo = async (
    payload: ProfileFiledsValuesWithoutAvatar,
) => {
    const { data, error } = await supabase
        .from('profiles')
        .upsert(payload)
        .throwOnError()
    if (error) {
        console.log('can not update profile')
        throw error
    }
    return data
}

export const getProfileInfo = (id: string) => {
    return supabase.from('profiles').select('*').eq('id', id)
}
