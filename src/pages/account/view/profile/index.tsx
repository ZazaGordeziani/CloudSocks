import { Button } from '@/components/ui/button'
import { ProfileFiledsDefaultValues } from '@/pages/account/view/profile/default-values'
import { ProfileFormSchema } from '@/pages/account/view/profile/schema'
import { userAtom } from '@/store/auth'
import { fillProfileInfo } from '@/supabase/account'
import { ProfileFiledsValues } from '@/supabase/account/index.types'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useAtomValue } from 'jotai'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useQueryClient } from '@tanstack/react-query'
import Spinner from '@/pages/common-components/spinner'
import { useUserProfile } from '@/react-query/profile'
import { PostgrestError } from '@supabase/supabase-js'
import { Link, useParams } from 'react-router-dom'

const ProfleView = () => {
    const { t } = useTranslation()
    const { lang } = useParams()
    const user = useAtomValue(userAtom)
    const { control, handleSubmit, setValue, setError } =
        useForm<ProfileFiledsValues>({
            resolver: zodResolver(ProfileFormSchema),
            defaultValues: ProfileFiledsDefaultValues,
        })
    const queryClient = useQueryClient()

    const { data: userInfo } = useUserProfile(user?.user.id ?? null)

    if (userInfo && userInfo.length > 0) {
        const profileData = userInfo[0]
        setValue('full_name', profileData.full_name || '')
        setValue('phone_number', profileData.phone_number || '')
        setValue('username', profileData.username || '')
        setValue('id', profileData.id || '')
    }

    const { mutate: handleFillProfileInfo, isPending } = useMutation({
        mutationKey: ['fill-profile-info'],
        mutationFn: fillProfileInfo,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['profile', user?.user.id],
            })
        },
        onError: (error: PostgrestError) => {
            if (error.message.includes('duplicate key value')) {
                setError('username', {
                    type: 'manual',
                    message: 'username_taken',
                })
            }
            console.log('Error occurred:', error)
        },
    })

    const onSubmit: SubmitHandler<ProfileFiledsValues> = (formValues) => {
        handleFillProfileInfo(formValues)
    }
    return (
        <form className="flex h-full w-screen flex-col items-center justify-center gap-4">
            <div className="flex flex-col gap-4 rounded-lg border-2 border-solid border-orange-500 p-10 lg:max-w-[400px]">
                <label className="text-main-blue dark:text-orange-500">
                    {t('account_userName')}
                </label>
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
                                    className="max-w-[200px] rounded-md border-2 border-solid border-orange-500 p-3 text-main-blue sm:max-w-[400px]"
                                    placeholder={t('account_userName')}
                                />
                                {error?.message ? (
                                    <span className="max-w-[200px] text-red-400">
                                        {t(error.message)}
                                    </span>
                                ) : null}
                            </>
                        )
                    }}
                />
                <label className="text-main-blue dark:text-orange-500">
                    {t('account_fullName')}
                </label>
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
                                    className="max-w-[200px] rounded-md border-2 border-solid border-orange-500 p-3 text-main-blue sm:max-w-[400px]"
                                    placeholder={t('account_fullName')}
                                />
                                {error?.message ? (
                                    <span className="max-w-[200px] text-red-400">
                                        {t(error.message)}
                                    </span>
                                ) : null}
                            </>
                        )
                    }}
                />
                <label className="text-main-blue dark:text-orange-500">
                    {t('account_phoneNumber')}
                </label>
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
                                    className="max-w-[200px] rounded-md border-2 border-solid border-orange-500 p-3 text-main-blue sm:max-w-[400px]"
                                    placeholder={t('account_phoneNumber')}
                                />
                                {error?.message ? (
                                    <span className="max-w-[200px] leading-3 text-red-400">
                                        {t(error.message)}
                                    </span>
                                ) : null}
                            </>
                        )
                    }}
                />

                <Button
                    onClick={handleSubmit(onSubmit)}
                    className="bg-orange-500 text-xl tracking-wider dark:text-white lg:text-2xl"
                    disabled={isPending}
                >
                    {isPending ? <Spinner /> : t('account_update')}
                </Button>

                <Link to={`/${lang}/orders`}>
                    <Button className="w-full bg-orange-500 text-xl tracking-wider dark:text-white lg:text-2xl">
                        {t('from_profile_to_my_orders')}
                    </Button>
                </Link>
            </div>
        </form>
    )
}

export default ProfleView
