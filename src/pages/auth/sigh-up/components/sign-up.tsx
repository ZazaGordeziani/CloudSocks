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
import { SignInFormSchema } from '@/pages/auth/sigh-up/components/schema'
type SignUpFormValues = {
    email: string
    password: string
}
const SignUpFormDefaultValues = {
    email: '',
    password: '',
}

const SignUp = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<SignUpFormValues>({
        resolver: zodResolver(SignInFormSchema),
        defaultValues: SignUpFormDefaultValues,
    })
    const navigate = useNavigate()
    const { lang } = useParams()
    const { t } = useTranslation()
    console.log(errors)
    // console.log(hookFormRegister('password'))

    // const [registerPayload, setRegisterPayload] = useState({
    //     email: '',
    //     password: '',
    // })

    const { mutate: handleRegister } = useMutation({
        mutationKey: ['register'],
        mutationFn: register,
        onSuccess: () => {
            // console.log('registered')
            // console.log(`/${lang}/signin`)
            navigate(`/${lang}/signin`)
        },
    })

    const onSubmit: SubmitHandler<SignUpFormValues> = (fieldValues) => {
        handleRegister(fieldValues)
    }

    // const handleSubmit = () => {
    //     const isEmailFilled = !!registerPayload.email
    //     const isPasswordFilled = !!registerPayload.password
    //     if (isEmailFilled && isPasswordFilled) {
    //         handleRegister(registerPayload)
    //     }
    // }

    return (
        <form className="flex h-full w-screen flex-col items-center justify-center gap-4">
            <div className="flex flex-col gap-4 rounded-lg border-2 border-solid border-black p-10 dark:border-white">
                <label>E-mail</label>
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
                                    placeholder="E-mail"
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

                <label>Password</label>
                <Controller
                    name="password"
                    control={control}
                    render={({ field: { onChange, value } }) => {
                        return (
                            <input
                                value={value}
                                onChange={onChange}
                                className="rounded-md border-2 border-solid border-black p-3 text-black"
                                placeholder="Password"
                            />
                        )
                    }}
                />

                <Button
                    onClick={handleSubmit(onSubmit)}
                    className="text-xl tracking-wider lg:text-2xl"
                >
                    {t('sign-up-submit')}
                </Button>
                <div className="flex gap-8 pt-10">
                    <p className="my-auto text-2xl lg:text-2xl">
                        {t('sign-up-account-question')}
                    </p>

                    <Link to={`/${lang}/signin`}>
                        <Button className="text-2xl lg:text-2xl">
                            {t('sign-up-login')}
                        </Button>
                    </Link>
                </div>
            </div>
        </form>
    )
}

export default SignUp
