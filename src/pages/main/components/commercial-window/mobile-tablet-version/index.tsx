import sock from '@/assets/Sock/DALL·E 2025-01-13 15.42.36 - A visually appealing e-commerce display for innovative woolen socks designed for supination correction. The socks are shown floating gently on soft, f.webp'
import { Button } from '@/components/ui/button'
import { useTranslation } from 'react-i18next'
import { Link, useParams } from 'react-router-dom'

const CommercialOnMainMobileTablet = () => {
    const { lang } = useParams()
    const { t } = useTranslation()
    return (
        <div>
            <div className="border-grey-700 flex max-w-[350px] flex-col items-center gap-5 rounded-xl border-2 border-solid p-5">
                <img
                    src={sock}
                    alt="sock poster"
                    className="max-w-auto rounded-xl pb-5"
                />
                <div className="flex flex-col items-center">
                    <h2 className="text-2xl font-bold tracking-wider text-gray-700 dark:text-white">
                        CloudSocks
                    </h2>
                    <p className="text-xl font-bold text-gray-700 dark:text-white">
                        $12
                    </p>
                </div>

                <Button className="bg-slate-700 font-bold dark:text-white">
                    <Link to={`/${lang}/products`}>{t('main-buy')} </Link>
                    <p className="pb-2 text-lg">👉</p>
                </Button>

                <div className="border-grey-700 flex w-auto flex-row items-center gap-16 border-t-2 border-solid">
                    <p className="pt-5">⭐⭐⭐⭐⭐</p>
                    <p className="pt-5">
                        {t('commercial-card-overall-review')}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CommercialOnMainMobileTablet
