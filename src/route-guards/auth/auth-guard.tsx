import { userAtom } from '@/store/auth'
import { useAtomValue } from 'jotai'
import { PropsWithChildren } from 'react'
import { Navigate, Outlet, useLocation, useParams } from 'react-router-dom'

const AuthGuard: React.FC<PropsWithChildren> = ({ children }) => {
    const user = useAtomValue(userAtom)
    const location = useLocation()

    const { lang } = useParams()
    const toNavigate =
        location?.state?.from?.pathname + location?.state?.from?.search ||
        `/${lang}/home`

    if (user) {
        return <Navigate to={toNavigate} />
    }
    return children || <Outlet />
}

export default AuthGuard
