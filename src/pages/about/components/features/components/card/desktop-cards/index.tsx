// import lightHeroImage from '@/assets/white logo.jpeg'

import running from '@/assets/running.jpg'
import soles from '@/assets/soles.jpg'
import award from '@/assets/award.webp'
import { useTranslation } from 'react-i18next'

const DesktopFeatures = () => {
    const { t } = useTranslation()
    const data = [
        [t('features-title-one'), t('features-description-one'), running],
        [t('features-title-two'), t('features-description-two'), soles],
        [t('features-title-three'), t('features-description-three'), award],
    ]
    return (
        <div className="flex flex-col items-center gap-6">
            {data.map(([title, description, image], index) => (
                <div
                    key={index}
                    className="flex h-auto w-2/3 flex-row items-center justify-evenly gap-4 rounded bg-light p-4 shadow-md dark:bg-gray-800"
                >
                    {index % 2 === 0 ? (
                        <>
                            <img
                                src={image}
                                alt={title}
                                className="h-[360px] w-1/2 max-w-[500px] rounded-3xl"
                            />
                            <div className="flex w-2/3 flex-col gap-5 px-3">
                                <h2 className="text-3xl font-semibold">
                                    {title}
                                </h2>
                                <p
                                    className="mt-2 text-xl leading-7 text-gray-600 dark:text-gray-300"
                                    dangerouslySetInnerHTML={{
                                        __html: description.replace(
                                            /\n/g,
                                            '<br/><br/>',
                                        ),
                                    }}
                                />
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="flex flex-col gap-5 sm:w-1/2">
                                <h2 className="text-3xl font-semibold">
                                    {title}
                                </h2>
                                <p
                                    className="mt-2 text-xl text-gray-600 dark:text-gray-300"
                                    dangerouslySetInnerHTML={{
                                        __html: description.replace(
                                            /\n/g,
                                            '<br/><br/>',
                                        ),
                                    }}
                                />
                            </div>
                            <img
                                src={image}
                                alt={title}
                                className="h-[370px] rounded-3xl object-contain"
                            />
                        </>
                    )}
                </div>
            ))}
        </div>
    )
}

export default DesktopFeatures
