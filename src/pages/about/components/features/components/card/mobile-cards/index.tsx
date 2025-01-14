// import lightHeroImage from '@/assets/white logo.jpeg'
import trophy from '@/assets/trophy-outline.svg'
import walkIcon from '@/assets/walk-outline.svg'
import footSteps from '@/assets/footsteps-outline.svg'
import { useTranslation } from 'react-i18next'

const MobileFeatures = () => {
    const { t } = useTranslation()
    const data = [
        [t('features-title-one'), t('features-description-one'), walkIcon],
        [t('features-title-two'), t('features-description-two'), footSteps],
        [t('features-title-three'), t('features-description-three'), trophy],
    ]
    return (
        <div className="flex h-auto flex-col items-center gap-6">
            {data.map(([title, description, image], index) => (
                <div
                    key={index}
                    className="bg-light flex w-full flex-col items-center gap-4 p-4 shadow-md dark:bg-gray-800"
                >
                    <>
                        <div className="flex w-1/2 flex-col gap-5">
                            <img
                                className="h-9 w-9 stroke-black dark:stroke-white"
                                src={image}
                                alt=""
                            />
                            <h2 className="text-2xl font-semibold">{title}</h2>
                            <p
                                className="text-md mt-2 leading-5 text-gray-600 dark:text-gray-300"
                                dangerouslySetInnerHTML={{
                                    __html: description.replace(
                                        /\n/g,
                                        '<br/><br/>',
                                    ),
                                }}
                            />
                        </div>
                    </>
                </div>
            ))}
        </div>
    )
}

export default MobileFeatures
