import sock from '@/assets/Sock/DALL·E 2025-01-13 15.42.36 - A visually appealing e-commerce display for innovative woolen socks designed for supination correction. The socks are shown floating gently on soft, f.webp'
import { Button } from '@/components/ui/button'
import { useTranslation } from 'react-i18next'
import { useNavigate, useParams } from 'react-router-dom'

const CommercialOnMainDesktop = () => {
    const { lang } = useParams()
    const { t } = useTranslation()
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/${lang}/products`)
    }
    return (
        <div>
            <div className="border-grey-700 max-w-auto flex h-full flex-row items-center gap-5 rounded-xl border-2 border-solid p-5">
                <img
                    src={sock}
                    alt="sock poster"
                    className="max-w-auto rounded-xl lg:max-w-[500px]"
                />
                <div className="flex flex-col items-center">
                    <h2 className="text-4xl font-bold tracking-wider text-gray-700 dark:text-white">
                        CloudSocks
                    </h2>
                    <p className="text-3xl font-bold text-gray-700 dark:text-white">
                        $12
                    </p>
                </div>
                <div className="flex h-full flex-col justify-around">
                    <div className="flex w-auto flex-col items-center gap-2">
                        <p className="pt-5">⭐⭐⭐⭐⭐</p>
                        <p className="pt-5">
                            {t('commercial-card-overall-review')}
                        </p>
                    </div>

                    <Button
                        onClick={handleClick}
                        className="bg-orange-500 font-bold dark:text-white"
                    >
                        {t('main-buy')}
                        <p className="pb-2 text-lg">👉</p>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default CommercialOnMainDesktop
