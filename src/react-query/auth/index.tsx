import { login, register } from '@/supabase/auth'
import { AuthError, Session, User } from '@supabase/supabase-js'
import { useMutation, UseMutationOptions } from '@tanstack/react-query'
export type SignInFormValues = {
    email: string
    password: string
}
interface SignInResult {
    data: {
        user: User | null
        session: Session | null
    }
    error: AuthError | null
}

export const useLogin = (
    options?: UseMutationOptions<SignInResult, Error, SignInFormValues, void>,
) => {
    return useMutation({
        mutationKey: ['login'],
        mutationFn: async (signInData: SignInFormValues) => {
            const response = await login(signInData)
            return {
                data: {
                    user: response.data.user,
                    session: response.data.session,
                },
                error: response.error,
            }
        },
        ...options,
    })
}

interface RegisterResult {
    data: {
        user: User | null
        session: Session | null
    }
    error: AuthError | null
}

type SignUpFormValues = {
    email: string
    password: string
}
export const useRegister = (
    options?: UseMutationOptions<RegisterResult, Error, SignUpFormValues, void>,
) => {
    return useMutation({
        mutationKey: ['register'],
        mutationFn: async (registerData: SignInFormValues) => {
            const response = await register(registerData)
            return {
                data: {
                    user: response.data.user,
                    session: response.data.session,
                },
                error: response.error,
            }
        },
        ...options,
    })
}
