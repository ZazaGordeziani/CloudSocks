import { HeaderNavItem } from '@/components/base/header/header-nav-item/header-nav-item'
import { Button } from '@/components/ui/button'
import { userAtom } from '@/store/auth'
import { logout } from '@/supabase/auth'
import { useAtomValue } from 'jotai'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const SignIn = () => {
    const { t } = useTranslation()
    const user = useAtomValue(userAtom)
    return user ? (
        <Button onClick={logout} className="bg-blue-500 dark:bg-blue-700">
            <HeaderNavItem text={t('nav-item-sign-out')} />
        </Button>
    ) : (
        <Link to="signIn">
            <Button className="bg-blue-500 dark:bg-blue-700">
                <HeaderNavItem text={t('nav-item-sign-in')} />{' '}
            </Button>
        </Link>
    )
}

export default SignIn
