import { Button } from '@/components/ui/button'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const EndingPage = () => {
    const { t } = useTranslation()
    return (
        <div className="flex h-screen w-full flex-col items-center justify-center gap-10">
            <div className="rounded-md border-2 border-solid border-orange-500 p-8 text-xl md:text-3xl">
                {t('ending_title')} ✔
            </div>
            <Link to="/">
                <Button className="flex h-auto gap-5 bg-orange-500 p-5 text-xl md:text-3xl">
                    {t('ending_back_to_main_page')}{' '}
                    <span className="pb-1">👉</span>
                </Button>
            </Link>
        </div>
    )
}

export default EndingPage
