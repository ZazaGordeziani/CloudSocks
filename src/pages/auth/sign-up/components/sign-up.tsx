import { Button } from '@/components/ui/button'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { SignUpFormSchema } from '@/pages/auth/sign-up/components/schema'
import { useRegister } from '@/react-query/auth'
import Spinner from '@/pages/common-components/spinner'
import { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
type SignUpFormValues = {
    email: string
    password: string
}
const SignUpFormDefaultValues = {
    email: '',
    password: '',
}

const SignUp = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false)

    const { control, handleSubmit } = useForm<SignUpFormValues>({
        resolver: zodResolver(SignUpFormSchema),
        defaultValues: SignUpFormDefaultValues,
    })
    const navigate = useNavigate()
    const { lang } = useParams()
    const { t } = useTranslation()

    const { mutate: handleRegister, isPending } = useRegister({
        onSuccess: () => {
            navigate(`/${lang}/signin`)
        },
        onError: (error) => {
            console.error('Error during registration:', error.message)
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
                                <div className="relative">
                                    <input
                                        value={value}
                                        onChange={onChange}
                                        className="w-full rounded-md border-2 border-solid border-black p-3 text-black"
                                        placeholder={t('auth_password')}
                                        type={
                                            showPassword ? 'text' : 'password'
                                        }
                                    />{' '}
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                        className="absolute right-3 top-1/2 -translate-y-1/2 transform text-black"
                                    >
                                        {showPassword ? (
                                            <FaEye />
                                        ) : (
                                            <FaEyeSlash />
                                        )}
                                    </button>
                                </div>
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
                    {isPending ? <Spinner /> : t('sign-up-submit')}
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
