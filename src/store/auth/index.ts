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
}
export const userAtom = atom<AfterLogIn | null>(null)
