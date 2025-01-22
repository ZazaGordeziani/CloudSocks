import { userAtom } from '@/store/auth'
import { useAtomValue } from 'jotai'
import { PropsWithChildren } from 'react'
import { Navigate, Outlet, useLocation, useParams } from 'react-router-dom'

const UnAuthorizedGuard: React.FC<PropsWithChildren> = ({ children }) => {
    const user = useAtomValue(userAtom)
    // const [isLoading, setIsLoading] = useState(true)
    const { lang } = useParams()
    const location = useLocation()
    // console.log(user)

    // useEffect(() => {
    //     if (user !== null) {
    //         setIsLoading(false)
    //     }
    // }, [user])
    // if (isLoading) {
    //     return null
    // }

    if (!user) {
        return <Navigate state={{ from: location }} to={`/${lang}/signIn`} />
    }
    return children || <Outlet />
}

export default UnAuthorizedGuard
