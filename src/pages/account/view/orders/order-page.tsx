import { useQuery } from '@tanstack/react-query'
import { userAtom } from '@/store/auth'
import { useAtomValue } from 'jotai'
import { getOrderInfo } from '@/supabase/orders'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { useTranslation } from 'react-i18next'
dayjs.extend(relativeTime)
const OrdersPage = () => {
    const user = useAtomValue(userAtom)
    const userId = user?.user.id
    const { t } = useTranslation()
    const {
        data: orders,
        isLoading,
        isError,
        error,
    } = useQuery({
        queryKey: ['orders', userId],
        queryFn: async () => {
            if (userId) {
                const response = await getOrderInfo(userId)
                return response
            }
            return []
        },
        enabled: !!userId,
    })

    if (isLoading) {
        return <div className="text-4xl">{t('orders_loading')}</div>
    }

    if (isError) {
        return (
            <div>
                Error:{' '}
                {error instanceof Error ? error.message : 'Unknown error'}
            </div>
        )
    }

    if (!orders || orders.length === 0) {
        return <div className="text-4xl">{t('orders_not_found')}</div>
    }

    return (
        <div className="flex min-h-screen w-screen flex-col items-center gap-8 px-5">
            <h2 className="text-2xl text-main-blue dark:text-white lg:text-4xl">
                {t('orders_heading')}
            </h2>
            {orders.map((order) => {
                const items = order.items as {
                    id: string
                    type: string
                    color: string
                    image_url: string
                    quantity: number
                    price: number
                }[]

                if (!Array.isArray(items) || items.length === 0) return null

                return (
                    <div
                        key={order.id}
                        className="flex w-full flex-col items-center gap-10 rounded-lg border-2 border-solid border-orange-500 p-10 dark:border-white dark:bg-main-blue sm:w-auto"
                    >
                        <p className="text-2xl font-bold text-main-blue dark:text-white">
                            <strong>{t('order_id')}:</strong> {order.id}
                        </p>
                        <p className="text-xl text-main-blue dark:text-white">
                            <strong>{t('order_total_price')}:</strong>{' '}
                            {order.total_price} $
                        </p>
                        <p className="text-xl text-main-blue dark:text-white">
                            <strong>{t('order_created_at')}:</strong>{' '}
                            {dayjs(order.created_at).isBefore(
                                dayjs().subtract(3, 'days'),
                            )
                                ? dayjs(order.created_at).format('DD/MM/YYYY')
                                : dayjs(order.created_at).fromNow()}{' '}
                        </p>

                        {items.map((item) => {
                            const itemImageUrl = item.image_url
                                ? `${import.meta.env.VITE_SUPABASE_PRODUCT_IMAGES_STORAGE_URL}/${item.image_url}`
                                : ''
                            const itemKey =
                                item.id ||
                                `${order.id}-${item.type}-${item.color}`

                            return (
                                <div
                                    key={itemKey}
                                    className="flex w-[300px] flex-col items-center gap-4 rounded-lg border-2 border-solid border-orange-500 p-6 dark:border-white dark:bg-main-blue sm:w-[400px]"
                                >
                                    <p className="text-lg text-main-blue dark:text-white sm:text-xl">
                                        <strong>{t('order_type')}:</strong>{' '}
                                        {item.type}
                                    </p>
                                    <p className="text-lg text-main-blue dark:text-white sm:text-xl">
                                        <strong>{t('order_color')}:</strong>{' '}
                                        {item.color}
                                    </p>
                                    <p className="text-lg text-main-blue dark:text-white sm:text-xl">
                                        <strong>{t('order_quantity')}:</strong>{' '}
                                        {item.quantity}
                                    </p>
                                    <p className="text-lg text-main-blue dark:text-white sm:text-xl">
                                        <strong>{t('order_price')}:</strong>{' '}
                                        {item.price} $
                                    </p>

                                    <img
                                        src={itemImageUrl}
                                        alt={`Order Item ${item.id}`}
                                        className="md:h-35 md:w-35 h-24 w-24 rounded object-cover"
                                    />
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default OrdersPage
