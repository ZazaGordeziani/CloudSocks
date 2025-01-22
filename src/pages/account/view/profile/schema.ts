import { z } from 'zod'

export const ProfileFormSchema = z.object({
    full_name: z.string(),
    username: z.string(),
    phone_number: z.string(),
    avatar_url: z.string(),
    id: z.string(),
})
