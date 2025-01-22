import { Button } from '@/components/ui/button'
import { ProfileFiledsDefaultValues } from '@/pages/account/view/profile/default-values'
import { ProfileFormSchema } from '@/pages/account/view/profile/schema'
import { userAtom } from '@/store/auth'
import { fillProfileInfo } from '@/supabase/account'
import { ProfileFiledsValues } from '@/supabase/account/index.types'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useAtomValue } from 'jotai'
// import { useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useQueryClient } from '@tanstack/react-query'
import Spinner from '@/pages/common-components/spinner'
import { useUserProfile } from '@/react-query/profile'

const ProfleView = () => {
    const { t } = useTranslation()
    const user = useAtomValue(userAtom)
    const { control, handleSubmit, setValue } = useForm<ProfileFiledsValues>({
        resolver: zodResolver(ProfileFormSchema),
        defaultValues: ProfileFiledsDefaultValues,
    })
    const queryClient = useQueryClient()

    const { data: userInfo } = useUserProfile(user?.user.id ?? null)

    // const { data: userInfo } = useQuery({
    //     queryKey: ['profile', user?.user.id],
    //     queryFn: async () => {
    //         if (user?.user.id) {
    //             const result = await getProfileInfo(user.user.id)
    //             return result.data
    //         }
    //         return null
    //     },
    //     enabled: !!user?.user.id,
    //     staleTime: 1000 * 60 * 5,
    // })

    if (userInfo && userInfo.length > 0) {
        const profileData = userInfo[0]
        setValue('avatar_url', profileData.avatar_url || '')
        setValue('full_name', profileData.full_name || '')
        setValue('phone_number', profileData.phone_number || '')
        setValue('username', profileData.username || '')
        setValue('id', profileData.id || '')
    }

    console.log('rerendering')

    const { mutate: handleFillProfileInfo, isPending } = useMutation({
        mutationKey: ['fill-profile-info'],
        mutationFn: fillProfileInfo,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['profile', user?.user.id],
            })
        },
    })

    const onSubmit: SubmitHandler<ProfileFiledsValues> = (fieldValues) =>
        handleFillProfileInfo(fieldValues)

    return (
        <div className="flex h-full w-screen flex-col items-center justify-center gap-4">
            <div className="flex flex-col gap-4 rounded-lg border-2 border-solid border-black p-10 dark:border-white">
                <label>{t('account_userName')}</label>
                <Controller
                    name="username"
                    control={control}
                    render={({
                        field: { onChange, value },
                        fieldState: { error },
                    }) => {
                        return (
                            <>
                                <input
                                    onChange={onChange}
                                    value={value}
                                    className="rounded-md border-2 border-solid border-black p-3 text-black"
                                    placeholder={t('account_userName')}
                                />
                                {error?.message ? (
                                    <span className="text-red-400">
                                        {t(error.message)}
                                    </span>
                                ) : null}
                            </>
                        )
                    }}
                />
                <label>{t('account_fullName')}</label>
                <Controller
                    name="full_name"
                    control={control}
                    render={({
                        field: { onChange, value },
                        fieldState: { error },
                    }) => {
                        return (
                            <>
                                <input
                                    onChange={onChange}
                                    value={value}
                                    className="rounded-md border-2 border-solid border-black p-3 text-black"
                                    placeholder={t('account_fullName')}
                                />
                                {error?.message ? (
                                    <span className="text-red-400">
                                        {t(error.message)}
                                    </span>
                                ) : null}
                            </>
                        )
                    }}
                />
                <label>{t('account_phoneNumber')}</label>
                <Controller
                    name="phone_number"
                    control={control}
                    render={({
                        field: { onChange, value },
                        fieldState: { error },
                    }) => {
                        return (
                            <>
                                <input
                                    onChange={onChange}
                                    value={value}
                                    className="rounded-md border-2 border-solid border-black p-3 text-black"
                                    placeholder={t('account_phoneNumber')}
                                />
                                {error?.message ? (
                                    <span className="text-red-400">
                                        {t(error.message)}
                                    </span>
                                ) : null}
                            </>
                        )
                    }}
                />

                <label>{t('account_avatarUrl')}</label>
                <Controller
                    name="avatar_url"
                    control={control}
                    render={({
                        field: { onChange, value },
                        fieldState: { error },
                    }) => {
                        return (
                            <>
                                <input
                                    onChange={onChange}
                                    value={value}
                                    className="rounded-md border-2 border-solid border-black p-3 text-black"
                                    placeholder={t('account_avatarUrl')}
                                />
                                {error?.message ? (
                                    <span className="text-red-400">
                                        {t(error.message)}
                                    </span>
                                ) : null}
                            </>
                        )
                    }}
                />

                <Button
                    onClick={handleSubmit(onSubmit)}
                    className="text-xl tracking-wider lg:text-2xl"
                    disabled={isPending}
                >
                    {isPending ? <Spinner /> : t('account_update')}
                </Button>
            </div>
        </div>
    )
}

export default ProfleView
