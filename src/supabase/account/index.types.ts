export type ProfileFiledsValues = {
    id: string
    avatar_url: null | File | string
    full_name: string
    phone_number: string
    username: string
}

export type ProfileFiledsValuesWithoutAvatar = {
    id: string
    full_name: string
    phone_number: string
    username: string
}
