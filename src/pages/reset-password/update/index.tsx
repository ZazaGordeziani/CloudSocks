// import { useEffect } from 'react'
import { supabase } from '@/supabase'
import { Button } from '@/components/ui/button'
import { useNavigate, useParams } from 'react-router-dom'

const UpdatePasswordPage = () => {
    const { lang } = useParams()
    const navigate = useNavigate()

    let newPassword = ''
    let confirmPassword = ''

    const handlePasswordReset = async () => {
        if (newPassword === confirmPassword) {
            await supabase.auth.updateUser({
                password: newPassword,
            })

            navigate(`/${lang}/signin`)
        }
    }

    return (
        <div className="flex h-full w-screen flex-col items-center justify-center gap-4">
            <div className="flex flex-col gap-4 rounded-lg border-2 border-solid border-black p-10 dark:border-white lg:w-[800px]">
                <h2>Update Your Password</h2>
                <input
                    type="password"
                    placeholder="New Password"
                    onChange={(e) => (newPassword = e.target.value)}
                    className="rounded-md border-2 border-solid border-black p-3 text-black"
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    onChange={(e) => (confirmPassword = e.target.value)}
                    className="rounded-md border-2 border-solid border-black p-3 text-black"
                />
                <Button
                    onClick={handlePasswordReset}
                    className="text-xl tracking-wider lg:text-2xl"
                >
                    Reset Password
                </Button>
            </div>
        </div>
    )
}

export default UpdatePasswordPage
