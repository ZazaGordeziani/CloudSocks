import { Button } from '@/components/ui/button'
import { userAtom } from '@/store/auth'
import { fillProfileInfo, getProfileInfo } from '@/supabase/account'
import { FillProfileInfoPayload } from '@/supabase/account/index.types'
import { useMutation } from '@tanstack/react-query'
import { useAtomValue } from 'jotai'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const ProfleView = () => {
    const { t } = useTranslation()
    const user = useAtomValue(userAtom)
    // console.log(user)
    const [profilePayload, setProfilePayload] =
        useState<FillProfileInfoPayload>({
            avatar_url: '',
            full_name: '',
            phone_number: '',
            username: '',
            id: '',
        })
    useEffect(() => {
        if (user?.user.id) {
            getProfileInfo(user.user.id).then((res) => {
                if (res.data && res.data.length > 0) {
                    const profileData = res.data[0]
                    setProfilePayload({
                        avatar_url: profileData.avatar_url || '',
                        full_name: profileData.full_name || '',
                        phone_number: profileData.phone_number || '',
                        username: profileData.username || '',
                        id: profileData.id || '',
                    })
                }
            })
        }
    }, [user])

    const { mutate: handleFillProfileInfo } = useMutation({
        mutationKey: ['fill-profile-info'],
        mutationFn: fillProfileInfo,
    })

    const handleSubmit = () => {
        handleFillProfileInfo({ ...profilePayload, id: user?.user.id || '' })
    }

    return (
        <div className="flex h-full w-screen flex-col items-center justify-center gap-4">
            <div className="flex flex-col gap-4 rounded-lg border-2 border-solid border-black p-10 dark:border-white">
                <label>{t('account_userName')}</label>
                <input
                    className="rounded-md border-2 border-solid border-black p-3 text-black"
                    name={t('account_userName')}
                    placeholder={t('account_userName')}
                    value={profilePayload.username}
                    onChange={(e) => {
                        setProfilePayload({
                            username: e.target.value,
                            phone_number: profilePayload.phone_number,
                            full_name: profilePayload.full_name,
                            avatar_url: profilePayload.avatar_url,
                            id: profilePayload.id,
                        })
                    }}
                />
                <label>{t('account_fullName')}</label>
                <input
                    className="rounded-md border-2 border-solid border-black p-3 text-black"
                    name="fullName"
                    placeholder={t('account_fullName')}
                    value={profilePayload.full_name}
                    onChange={(e) => {
                        setProfilePayload({
                            username: profilePayload.username,
                            phone_number: profilePayload.phone_number,
                            full_name: e.target.value,
                            avatar_url: profilePayload.avatar_url,
                            id: profilePayload.id,
                        })
                    }}
                />{' '}
                <label>{t('account_phoneNumber')}</label>
                <input
                    className="rounded-md border-2 border-solid border-black p-3 text-black"
                    name="phoneNumber"
                    placeholder={t('account_phoneNumber')}
                    value={profilePayload.phone_number}
                    onChange={(e) => {
                        setProfilePayload({
                            username: profilePayload.username,
                            phone_number: e.target.value,
                            full_name: profilePayload.full_name,
                            avatar_url: profilePayload.avatar_url,
                            id: profilePayload.id,
                        })
                    }}
                />{' '}
                <label>{t('account_avatarUrl')}</label>
                <input
                    className="rounded-md border-2 border-solid border-black p-3 text-black"
                    name="avatarUrl"
                    placeholder={t('account_avatarUrl')}
                    value={profilePayload.avatar_url}
                    onChange={(e) => {
                        setProfilePayload({
                            username: profilePayload.username,
                            phone_number: profilePayload.phone_number,
                            full_name: profilePayload.full_name,
                            avatar_url: e.target.value,
                            id: profilePayload.id,
                        })
                    }}
                />
                <Button
                    onClick={handleSubmit}
                    className="text-xl tracking-wider lg:text-2xl"
                >
                    {t('account_update')}
                </Button>
            </div>
        </div>
    )
}

export default ProfleView
