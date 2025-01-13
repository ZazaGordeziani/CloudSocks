import { useTranslation } from 'react-i18next'

const Story = () => {
    const { t } = useTranslation()

    return (
        <div className="flex flex-col items-center gap-7 text-center leading-8 text-slate-500 dark:text-slate-300">
            <h2 className="text-4xl font-bold md:text-5xl">{t('our-story')}</h2>
            <p className="w-2/3 text-left text-sm md:max-w-[600px] md:text-xl">
                {t('our-story-description')}
            </p>
        </div>
    )
}

export default Story
