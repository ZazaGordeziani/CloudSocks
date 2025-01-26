import './App.css'

import { ThemeProvider } from '@/components/ui/theme-provider'
import { supabase } from '@/supabase'
import { useSetAtom } from 'jotai'
import { userAtom } from '@/store/auth'

import { CartProvider } from '@/context/cart-context'
import { useEffect } from 'react'
import { AppRoutes } from '@/routes'

function App() {
    const setUser = useSetAtom(userAtom)
    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setUser(session)
        })

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session)
        })

        return () => subscription.unsubscribe()
    }, [setUser])
    return (
        <>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <CartProvider>
                    <AppRoutes />
                </CartProvider>
            </ThemeProvider>
        </>
    )
}

export default App
