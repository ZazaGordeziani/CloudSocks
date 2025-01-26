import { Button } from '@/components/ui/button'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { SignInFormSchema } from '@/pages/auth/sign-in/components/schema'
import { SignInFormValues, useLogin } from '@/react-query/auth'
import Spinner from '@/pages/common-components/spinner'
import { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

const SignInFormDefaultValues = {
    email: '',
    password: '',
}
const SignIn = () => {
    const location = useLocation()
    const { lang } = useParams()
    const navigate = useNavigate()
    const { t } = useTranslation()
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [loginError, setLoginError] = useState<string | null>(null)

    const toNavigate =
        location?.state?.from?.pathname + location?.state?.from?.search ||
        `/${lang}/home`

    const { control, handleSubmit } = useForm<SignInFormValues>({
        resolver: zodResolver(SignInFormSchema),
        defaultValues: SignInFormDefaultValues,
    })

    const { mutate: handleSignIn, isPending } = useLogin({
        onSuccess: () => {
            navigate(toNavigate)
        },
        onError: () => {
            // console.error('Error during login:', error.message)
            setLoginError(t('sign_in_wrong_credentials'))
        },
    })

    // const { mutate: handleSignIn } = useMutation({
    //     mutationKey: ['login'],
    //     mutationFn: login,
    //     onSuccess: () => {
    //         navigate(`/${lang}/home`)
    //     },
    //     onError: (error) => {
    //         console.error('Error during login:', error.message)
    //     },
    // })

    const onSubmit: SubmitHandler<SignInFormValues> = (fieldValues) => {
        handleSignIn(fieldValues)
    }

    return (
        <form className="flex h-full w-screen flex-col items-center justify-center gap-4 px-4 text-xl">
            <div className="flex flex-col gap-4 rounded-lg border-2 border-solid border-black p-10 dark:border-white lg:w-[800px]">
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
                                        onChange={onChange}
                                        value={value}
                                        className="w-full rounded-md border-2 border-solid border-black p-3 text-black"
                                        placeholder={t('auth_password')}
                                        type={
                                            showPassword ? 'text' : 'password'
                                        }
                                    />

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
                {loginError && (
                    <div className="mt-2 text-red-500">{loginError}</div>
                )}
                <Button
                    onClick={handleSubmit(onSubmit)}
                    className="text-xl tracking-wider lg:text-2xl"
                    disabled={isPending}
                >
                    {isPending ? <Spinner /> : t('sign-in-submit')}
                </Button>
                <div className="flex justify-between gap-4 pt-10">
                    <p className="my-auto text-xl lg:text-2xl">
                        {' '}
                        {t('sign-in-account-question')}
                    </p>

                    <Link to={`/${lang}/signUp`}>
                        <Button className="text-xl lg:text-2xl">
                            {t('sign-in-register')}
                        </Button>
                    </Link>
                </div>
                {/* <div>
                    <Link to={`/${lang}/reset`}>Forgot password</Link>
                </div> */}
            </div>
        </form>
    )
}

export default SignIn
