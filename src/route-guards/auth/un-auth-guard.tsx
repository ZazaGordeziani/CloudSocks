import { userAtom } from '@/store/auth'
import { useAtomValue } from 'jotai'
import { PropsWithChildren, useEffect, useState } from 'react'
import { Navigate, Outlet, useParams } from 'react-router-dom'

const UnAuthorizedGuard: React.FC<PropsWithChildren> = ({ children }) => {
    const user = useAtomValue(userAtom)
    const [isLoading, setIsLoading] = useState(true)
    const { lang } = useParams()

    useEffect(() => {
        if (user !== null) {
            setIsLoading(false)
        }
    }, [user])
    if (isLoading) {
        return null
    }

    if (!user) {
        return <Navigate to={`/${lang}/home`} />
    }
    return children || <Outlet />
}

export default UnAuthorizedGuard
