import { useContext } from 'react'
import { CartContext, CartContextType } from '@/context/cart-context'

export const useCart = (): CartContextType => {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error('You must use useCart within a CartProvider')
    }
    return context
}
