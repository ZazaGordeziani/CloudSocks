import { Button } from '@/components/ui/button'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'

const Subscribe = () => {
    const { t } = useTranslation()
    const emailInput = useRef<HTMLInputElement>(null)
    const handleSubscribe = () => {
        if (emailInput.current) {
            emailInput.current.value = ''
        }
    }
    return (
        <div className="flex max-w-[400px] flex-col gap-3 rounded-md bg-gray-900 p-6 text-slate-500 dark:text-slate-300">
            <h1 className="text-lg lg:text-xl">{t('footer-subscribe-text')}</h1>
            <input
                type="text"
                name="email"
                ref={emailInput}
                className="h-10 text-center text-black"
            />
            <Button onClick={handleSubscribe}>Subscribe</Button>
        </div>
    )
}

export default Subscribe
