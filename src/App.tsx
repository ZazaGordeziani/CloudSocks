import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { Suspense, useEffect } from 'react'
import DefaultLayout from '@/layouts/default'
import { lazy } from 'react'
import { ThemeProvider } from '@/components/ui/theme-provider'
import { supabase } from '@/supabase'
import { useSetAtom } from 'jotai'
import { userAtom } from '@/store/auth'

const LazyMainPage = lazy(() => import('@/pages/main/components/view/main'))
const LazyAboutPage = lazy(() => import('@/pages/about/views'))
const LazyProductsPage = lazy(() => import('@/pages/products/views'))
const LazySignInPage = lazy(() => import('@/pages/auth/sign-in/view'))
const LazyNotFoundPage = lazy(() => import('@/pages/404/index'))
const LazyCookiePage = lazy(() => import('@/pages/cookie/index'))
const LazyPrivacyPolicyPage = lazy(() => import('@/pages/privacy/index'))
const LazyTermsConditionsPage = lazy(
    () => import('@/pages/terms-conditions/index'),
)
const LazyShippongReturnPage = lazy(
    () => import('@/pages/shipping-return/index'),
)
const LazySignUpPage = lazy(() => import('@/pages/auth/sigh-up/view/index'))
const LazyProfilePage = lazy(() => import('@/pages/account/view/profile/index'))

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
                <Routes>
                    <Route path="/:lang" element={<DefaultLayout />}>
                        <Route
                            path="home"
                            element={
                                <Suspense fallback={<div>Loading...</div>}>
                                    <LazyMainPage />
                                </Suspense>
                            }
                        />
                        <Route
                            path="about"
                            element={
                                <Suspense fallback={<div>Loading...</div>}>
                                    <LazyAboutPage />
                                </Suspense>
                            }
                        />
                        <Route
                            path="products"
                            element={
                                <Suspense fallback={<div>Loading...</div>}>
                                    <LazyProductsPage />
                                </Suspense>
                            }
                        />
                        <Route
                            path="signin"
                            element={
                                <Suspense fallback={<div>Loading...</div>}>
                                    <LazySignInPage />
                                </Suspense>
                            }
                        />
                        <Route
                            path="cookie-policy"
                            element={
                                <Suspense fallback={<div>Loading...</div>}>
                                    <LazyCookiePage />
                                </Suspense>
                            }
                        />
                        <Route
                            path="privacy-policy"
                            element={
                                <Suspense fallback={<div>Loading...</div>}>
                                    <LazyPrivacyPolicyPage />
                                </Suspense>
                            }
                        />
                        <Route
                            path="terms&conditions"
                            element={
                                <Suspense fallback={<div>Loading...</div>}>
                                    <LazyTermsConditionsPage />
                                </Suspense>
                            }
                        />
                        <Route
                            path="shipping&return"
                            element={
                                <Suspense fallback={<div>Loading...</div>}>
                                    <LazyShippongReturnPage />
                                </Suspense>
                            }
                        />
                        <Route
                            path="signup"
                            element={
                                <Suspense fallback={<div>Loading...</div>}>
                                    <LazySignUpPage />
                                </Suspense>
                            }
                        />
                        <Route
                            path="profile"
                            element={
                                <Suspense fallback={<div>Loading...</div>}>
                                    <LazyProfilePage />
                                </Suspense>
                            }
                        />
                    </Route>
                    <Route path="/" element={<Navigate to="/ka/home" />} />
                    <Route path="*" element={<LazyNotFoundPage />} />
                </Routes>
            </ThemeProvider>
        </>
    )
}

export default App
