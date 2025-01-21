import { z } from 'zod'

export const SignInFormSchema = z.object({
    email: z.string().email({ message: 'invalid_email' }),
    password: z.string().min(8, {
        message: 'invalid_password',
    }),
})
