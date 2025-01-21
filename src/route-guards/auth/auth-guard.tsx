import { userAtom } from '@/store/auth'
import { useAtomValue } from 'jotai'
import { PropsWithChildren } from 'react'
import { Navigate, Outlet, useParams } from 'react-router-dom'

const UnAuthGuard: React.FC<PropsWithChildren> = ({ children }) => {
    const user = useAtomValue(userAtom)
    const { lang } = useParams()

    if (user) {
        return <Navigate to={`/${lang}/home`} />
    }
    return children || <Outlet />
}

export default UnAuthGuard
