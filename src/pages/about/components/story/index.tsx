import { useTranslation } from 'react-i18next'

const Story = () => {
    const { t } = useTranslation()

    return (
        <div className="flex flex-col items-center gap-7 py-12 text-center leading-8 text-slate-500 dark:text-slate-300">
            <h2 className="text-4xl font-bold md:text-5xl">{t('our-story')}</h2>
            <p className="md:max-w-auto w-2/3 text-center text-2xl md:text-2xl xl:w-1/2 2xl:w-1/3">
                {t('our-story-description')}
            </p>
        </div>
    )
}

export default Story
