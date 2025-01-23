import { z } from 'zod'

export const ProfileFormSchema = z.object({
    full_name: z
        .string()
        .max(30, { message: 'invalid_full_name_max_length' })
        .min(3, { message: 'invalid_full_name_min_length' })
        .regex(/^[a-zA-Z\s]+$/, { message: 'invalid_full_name_type' }),
    username: z
        .string()
        .max(10, { message: 'invalid_username_max_length' })
        .min(1, { message: 'invalid_username_min_length' })
        .regex(/^\S*$/, { message: 'invalid_username_type' }),
    phone_number: z.string(),
    avatar_url: z.union([z.string(), z.instanceof(File)]),
    id: z.string(),
})
