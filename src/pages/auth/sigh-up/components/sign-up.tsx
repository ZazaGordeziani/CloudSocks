import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { register } from '@/supabase/auth'
import { Button } from '@/components/ui/button'
import { Link, useNavigate, useParams } from 'react-router-dom'

const SignUp = () => {
    const navigate = useNavigate()
    const { lang } = useParams()

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
                <Button onClick={handleSubmit} className="text-xl lg:text-2xl">
                    Submit
                </Button>
                <div className="flex gap-8 pt-10">
                    <p>Do you have an account?</p>

                    <Link to={`/${lang}/signin`}>Sign In</Link>
                </div>
            </div>
        </div>
    )
}

export default SignUp
