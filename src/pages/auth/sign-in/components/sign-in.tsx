import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { login } from '@/supabase/auth'
import { Button } from '@/components/ui/button'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const SignIn = () => {
    const { lang } = useParams()
    const navigate = useNavigate()
    const { t } = useTranslation()

    const [signInPayload, setSignInPayload] = useState({
        email: '',
        password: '',
    })

    const { mutate: handleSignIn } = useMutation({
        mutationKey: ['login'],
        mutationFn: login,
        onSuccess: () => {
            navigate(`/${lang}/home`)
        },
        onError: (error) => {
            console.error('Error during login:', error.message)
        },
    })

    // console.log(isError, error)

    const handleSubmit = () => {
        const isEmailFilled = !!signInPayload.email
        const isPasswordFilled = !!signInPayload.password
        if (isEmailFilled && isPasswordFilled) {
            handleSignIn(signInPayload)
        }
    }

    return (
        <div className="flex h-full w-screen flex-col items-center justify-center gap-4">
            <div className="flex flex-col gap-4 rounded-lg border-2 border-solid border-black p-10 dark:border-white">
                <input
                    className="rounded-md border-2 border-solid border-black p-3 text-black"
                    name="email"
                    placeholder="E-mail"
                    value={signInPayload.email}
                    onChange={(e) => {
                        setSignInPayload({
                            email: e.target.value,
                            password: signInPayload.password,
                        })
                    }}
                />
                <input
                    className="rounded-md border-2 border-solid border-black p-3 text-black"
                    name="password"
                    placeholder="Password"
                    value={signInPayload.password}
                    onChange={(e) => {
                        setSignInPayload({
                            email: signInPayload.email,
                            password: e.target.value,
                        })
                    }}
                />
                <Button
                    onClick={handleSubmit}
                    className="text-xl tracking-wider lg:text-2xl"
                >
                    {t('sign-in-submit')}
                </Button>
                <div className="flex gap-8 pt-10">
                    <p className="my-auto text-2xl lg:text-2xl">
                        {' '}
                        {t('sign-in-account-question')}
                    </p>

                    <Link to={`/${lang}/signUp`}>
                        <Button className="text-2xl lg:text-2xl">
                            {t('sign-in-register')}
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SignIn
