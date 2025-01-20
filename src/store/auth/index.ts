import { atom } from 'jotai'

type User = {
    id: string
    email?: string
}

type AfterLogIn = {
    access_token: string
    refresh_token: string
    user: User
    expires_at?: number
    full_name?: string
    username?: string
    phone_number?: string
    avatar_url?: string
}
export const userAtom = atom<AfterLogIn | null>(null)
