import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { login } from '@/supabase/auth'
import { Button } from '@/components/ui/button'
import { Link, useNavigate, useParams } from 'react-router-dom'

const SignIn = () => {
    const { lang } = useParams()
    const navigate = useNavigate()

    const [signInPayload, setSignInPayload] = useState({
        email: '',
        password: '',
    })

    const { mutate: handleSignIn } = useMutation({
        mutationKey: ['login'],
        mutationFn: login,
        onSuccess: () => {
            console.log('loggedin')
            console.log(`/${lang}/home`)
            navigate(`/${lang}/home`)
        },
    })

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
                <Button onClick={handleSubmit} className="text-xl lg:text-2xl">
                    Submit
                </Button>
                <div className="flex gap-8 pt-10">
                    <p>Do not have an account?</p>

                    <Link to={`/${lang}/signUp`}>Sign Up</Link>
                </div>
            </div>
        </div>
    )
}

export default SignIn
