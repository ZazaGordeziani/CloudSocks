import { Button } from '@/components/ui/button'
import { supabase } from '@/supabase'
import { useForm, Controller } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

type ResetPasswordForm = {
    email: string
}

const ResetPasswordForm = () => {
    const { t } = useTranslation()
    const {
        control,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm<ResetPasswordForm>()

    const onSubmit = async (data: ResetPasswordForm) => {
        const { email } = data
        console.log('email sent')

        const { error } = await supabase.auth.resetPasswordForEmail(email)

        if (error) {
            alert(error.message)
        } else {
            alert('Password reset email sent! Please check your inbox.')
        }
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex h-full w-screen flex-col items-center justify-center gap-4 px-4 text-xl"
        >
            <div className="flex flex-col gap-4 rounded-lg border-2 border-solid border-black p-10 dark:border-white lg:w-[800px]">
                {' '}
                <h2>{t('account_reset_password')}</h2>
                <div>
                    <label>{t('account_email')}</label>
                    <Controller
                        name="email"
                        control={control}
                        render={({ field }) => (
                            <input
                                {...field}
                                type="email"
                                className="rounded-md border-2 border-solid border-black p-3 text-black"
                                placeholder={t('account_email')}
                                required
                            />
                        )}
                    />

                    <Button
                        type="submit"
                        className="text-xl tracking-wider lg:text-2xl"
                        disabled={isSubmitting}
                    >
                        {t('account_send_reset_email')}
                    </Button>
                </div>
            </div>
        </form>
    )
}

export default ResetPasswordForm
