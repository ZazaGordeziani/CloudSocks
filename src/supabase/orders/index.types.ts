export type OrdersListValues = {
    user_id: string
    total_price: string
    items: {
        id: string
        type: string
        color: string
        image_url: string
        quantity: number
        price: number
    }[]
}
export const OrdersListDefaultValues = {
    type: '',
    color: '',
    image_url: '',
    total_price: '',
}
