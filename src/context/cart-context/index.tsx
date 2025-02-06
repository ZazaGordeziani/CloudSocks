import { createContext, useState, ReactNode, useEffect } from 'react'

export interface Product {
    id: number
    image_url: string
    type: string
    color: string
    quantity: number
}

export type CartContextType = {
    cart: Product[]
    addToCart: (product: Product) => void
    removeFromCart: (productId: number) => void
    getProductPrice: (product: Product) => number
    clearCart: () => void
}

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext<CartContextType | undefined>(undefined)

interface CartProviderProps {
    children: ReactNode
}

export const CartProvider = ({ children }: CartProviderProps) => {
    const storedCart = localStorage.getItem('cart')
    const initialCart = storedCart ? JSON.parse(storedCart) : []

    const [cart, setCart] = useState<Product[]>(initialCart)

    useEffect(() => {
        if (cart.length > 0) {
            localStorage.setItem('cart', JSON.stringify(cart))
        } else {
            localStorage.removeItem('cart')
        }
    }, [cart])

    const addToCart = (product: Product) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === product.id)

            if (existingItem) {
                return prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item,
                )
            } else {
                return [...prevCart, { ...product, quantity: 1 }]
            }
        })
    }

    const removeFromCart = (productId: number) => {
        setCart((prevCart) => {
            const updatedCart = prevCart
                .map((item) =>
                    item.id === productId
                        ? { ...item, quantity: item.quantity - 1 }
                        : item,
                )
                .filter((item) => item.quantity > 0)

            localStorage.setItem('cart', JSON.stringify(updatedCart))
            return updatedCart
        })
    }

    const clearCart = () => {
        console.log('Clearing cart')
        setCart([])
        localStorage.setItem('cart', JSON.stringify([]))
    }
    const getProductPrice = (product: Product) => {
        return product.quantity * 12
    }
    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                getProductPrice,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}
