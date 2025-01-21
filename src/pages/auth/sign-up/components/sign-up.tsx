// import { useState } from 'react'
// import { useMutation } from '@tanstack/react-query'
// import { register } from '@/supabase/auth'
import { Button } from '@/components/ui/button'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { register } from '@/supabase/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import { SignUpFormSchema } from '@/pages/auth/sign-up/components/schema'
type SignUpFormValues = {
    email: string
    password: string
}
const SignUpFormDefaultValues = {
    email: '',
    password: '',
}

const SignUp = () => {
    const { control, handleSubmit } = useForm<SignUpFormValues>({
        resolver: zodResolver(SignUpFormSchema),
        defaultValues: SignUpFormDefaultValues,
    })
    const navigate = useNavigate()
    const { lang } = useParams()
    const { t } = useTranslation()

    const { mutate: handleRegister } = useMutation({
        mutationKey: ['register'],
        mutationFn: register,
        onSuccess: () => {
            navigate(`/${lang}/signin`)
        },
    })

    const onSubmit: SubmitHandler<SignUpFormValues> = (fieldValues) => {
        handleRegister(fieldValues)
    }

    return (
        <form className="flex h-full w-screen flex-col items-center justify-center gap-4 px-4 text-xl lg:w-[800px]">
            <div className="flex flex-col gap-4 rounded-lg border-2 border-solid border-black p-10 dark:border-white">
                <label className="lg:text-2xl">{t('auth_email')}</label>
                <Controller
                    name="email"
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
                                    placeholder={t('auth_email')}
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

                <label className="lg:text-2xl">{t('auth_password')}</label>
                <Controller
                    name="password"
                    control={control}
                    render={({
                        field: { onChange, value },
                        fieldState: { error },
                    }) => {
                        return (
                            <>
                                <input
                                    value={value}
                                    onChange={onChange}
                                    className="rounded-md border-2 border-solid border-black p-3 text-black"
                                    placeholder={t('auth_password')}
                                    type="password"
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
                >
                    {t('sign-up-submit')}
                </Button>
                <div className="flex justify-between pt-10 lg:w-[800px]">
                    <p className="my-auto lg:text-2xl">
                        {t('sign-up-account-question')}
                    </p>

                    <Link to={`/${lang}/signin`}>
                        <Button className="text-xl lg:text-2xl">
                            {t('sign-up-login')}
                        </Button>
                    </Link>
                </div>
            </div>
        </form>
    )
}

export default SignUp
