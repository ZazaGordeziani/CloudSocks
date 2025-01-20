import { supabase } from '@/supabase'

export type SignUpPayload = {
    // name: string
    email: string
    password: string
    // confirmPassword: string
}

export const register = (payload: SignUpPayload) => {
    return supabase.auth.signUp({
        email: payload.email,
        password: payload.password,
    })
}
export const login = ({
    email,
    password,
}: {
    email: string
    password: string
}) => {
    return supabase.auth.signInWithPassword({ email, password }).then((res) => {
        if (
            res?.error &&
            res?.error.status &&
            (res?.error?.status < 200 || res?.error?.status >= 300)
        ) {
            throw new Error('Auth')
        }
        return res
    })
}

export const logout = () => {
    return supabase.auth.signOut()
}
