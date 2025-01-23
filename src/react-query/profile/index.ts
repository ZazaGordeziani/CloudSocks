import { getProfileInfo } from '@/supabase/account'
import { useQuery } from '@tanstack/react-query'

export const useUserProfile = (userId: string | null) => {
    return useQuery({
        queryKey: ['profile', userId],
        queryFn: async () => {
            if (userId) {
                const result = await getProfileInfo(userId)

                return result.data || null
            }
            return null
        },
        enabled: !!userId,
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 5,
    })
}
