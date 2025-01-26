// src/pages/CartPage.tsx
import { Button } from '@/components/ui/button'
import { useCart } from '@/hooks/use-cart'
import CommercialOnMainDesktop from '@/pages/main/components/commercial-window/desktop-version'
import CommercialOnMainMobileTablet from '@/pages/main/components/commercial-window/mobile-tablet-version'
import { userAtom } from '@/store/auth'
import { fillOrderInfo } from '@/supabase/orders'
import { OrdersListValues } from '@/supabase/orders/index.types'
import { PostgrestError } from '@supabase/supabase-js'
import { useMutation } from '@tanstack/react-query'
import { useMediaQuery } from '@uidotdev/usehooks'
import { useAtomValue } from 'jotai'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const CartPage = () => {
    const user = useAtomValue(userAtom)
    const [isButtonClicked, setIsButtonClicked] = useState(false)
    const [showLoginMessage, setShowLoginMessage] = useState(false)

    const { cart, removeFromCart, getProductPrice } = useCart()
    const [t] = useTranslation()
    const handleRemove = (productId: number) => {
        removeFromCart(productId)
    }

    const isDesktop = useMediaQuery('(min-width: 1024px)')

    const totalPrice = cart.reduce(
        (total, product) => total + getProductPrice(product),
        0,
    )

    const { mutate: handlePlaceOrder } = useMutation({
        mutationKey: ['place-order'],
        mutationFn: fillOrderInfo,
        onSuccess: (orderData) => {
            console.log('Order saved successfully:', orderData)
        },
        onError: (error: PostgrestError) => {
            console.error('Error placing order:', error)
        },
    })

    const placeOrder = () => {
        if (!user) {
            setShowLoginMessage(true)
            return
        }
        setIsButtonClicked(true)
        const orderPayload: OrdersListValues = {
            user_id: user!.user.id,
            total_price: totalPrice.toString(),
            items: cart.map((product) => ({
                id: product.id.toString(),
                type: product.type,
                color: product.color,
                image_url: product.image_url,
                quantity: product.quantity,
                price: getProductPrice(product),
            })),
        }

        handlePlaceOrder(orderPayload)
        setTimeout(() => {
            setIsButtonClicked(false)
        }, 500)
    }

    return (
        <div className="flex min-h-screen w-screen flex-col items-center gap-4">
            <h1 className="text-2xl font-semibold md:text-4xl">
                {t('cart_heading')}
            </h1>
            {cart.length === 0 ? (
                <div className="flex flex-col items-center gap-y-7">
                    <p className="text-xl md:text-2xl">{t('empty_cart')}</p>
                    {isDesktop ? (
                        <CommercialOnMainDesktop />
                    ) : (
                        <CommercialOnMainMobileTablet />
                    )}
                </div>
            ) : (
                <div className="flex flex-col gap-4">
                    {cart.map((product) => (
                        <div
                            key={product.id}
                            className="flex w-[300px] flex-col items-center gap-10 rounded-lg border-2 border-solid border-black p-8 dark:border-white md:w-auto md:flex-row md:gap-20"
                        >
                            <img
                                src={`${import.meta.env.VITE_SUPABASE_PRODUCT_IMAGES_STORAGE_URL}/${product.image_url}`}
                                alt={product.type}
                                className="md:h-30 md:w-30 h-24 w-24 rounded object-cover"
                            />
                            <div className="flex flex-col gap-y-5 text-xl md:w-[200px] md:text-2xl">
                                <span>Type: {product.type}</span>
                                <span>Color: {product.color}</span>{' '}
                            </div>
                            <div className="p-y-5 flex flex-col gap-y-5">
                                <span className="text-lg font-semibold">
                                    {t('cart_quantity')}: {product.quantity}
                                </span>
                                <Button
                                    className="remove-button"
                                    onClick={() => handleRemove(product.id)}
                                >
                                    X
                                </Button>
                                <span>Price: ${getProductPrice(product)}</span>{' '}
                            </div>
                        </div>
                    ))}
                    <div className="flex items-center justify-between text-xl font-bold md:text-2xl">
                        <p>
                            {t('cart_total_price')}: <span>${totalPrice}</span>
                        </p>
                        {/* <div> */}
                        <Button
                            className={`text-xl md:text-2xl ${isButtonClicked ? 'bg-green-500' : ''}`}
                            onClick={placeOrder}
                        >
                            {t('cart_make_order')}{' '}
                        </Button>

                        {/* </div> */}
                    </div>
                    {showLoginMessage && !user && (
                        <p className="mt-2 flex w-full justify-center text-xl text-red-500 md:text-3xl">
                            {t('log_in_to_buy_items')}
                        </p>
                    )}
                </div>
            )}
        </div>
    )
}

export default CartPage
