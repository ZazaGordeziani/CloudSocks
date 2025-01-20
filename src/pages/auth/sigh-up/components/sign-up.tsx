import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { register } from '@/supabase/auth'
import { Button } from '@/components/ui/button'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const SignUp = () => {
    const navigate = useNavigate()
    const { lang } = useParams()
    const { t } = useTranslation()

    const [registerPayload, setRegisterPayload] = useState({
        email: '',
        password: '',
    })

    const { mutate: handleRegister } = useMutation({
        mutationKey: ['register'],
        mutationFn: register,
        onSuccess: () => {
            console.log('registered')
            console.log(`/${lang}/signin`)
            navigate(`/${lang}/signin`)
        },
    })

    const handleSubmit = () => {
        const isEmailFilled = !!registerPayload.email
        const isPasswordFilled = !!registerPayload.password
        if (isEmailFilled && isPasswordFilled) {
            handleRegister(registerPayload)
        }
    }

    return (
        <div className="flex h-full w-screen flex-col items-center justify-center gap-4">
            <div className="flex flex-col gap-4 rounded-lg border-2 border-solid border-black p-10 dark:border-white">
                <input
                    className="rounded-md border-2 border-solid border-black p-3 text-black"
                    name="email"
                    placeholder="E-mail"
                    value={registerPayload.email}
                    onChange={(e) => {
                        setRegisterPayload({
                            email: e.target.value,
                            password: registerPayload.password,
                        })
                    }}
                />
                <input
                    className="rounded-md border-2 border-solid border-black p-3 text-black"
                    name="password"
                    placeholder="Password"
                    value={registerPayload.password}
                    onChange={(e) => {
                        setRegisterPayload({
                            email: registerPayload.email,
                            password: e.target.value,
                        })
                    }}
                />
                <Button
                    onClick={handleSubmit}
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
        </div>
    )
}

export default SignUp
