import { HeaderNavItem } from '@/components/base/header/header-nav-item/header-nav-item'
import { Button } from '@/components/ui/button'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const SignIn = () => {
    const { t } = useTranslation()

    return (
        <Link to="signIn">
            <Button className="bg-white dark:bg-blue-700">
                <HeaderNavItem text={t('nav-item-sign-in')} />{' '}
            </Button>
        </Link>
    )
}
export default SignIn
