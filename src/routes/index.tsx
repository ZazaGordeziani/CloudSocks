import DefaultLayout from '@/layouts/default'
import Spinner from '@/pages/common-components/spinner'
import AuthGuard from '@/route-guards/auth/auth-guard'
import UnAuthorizedGuard from '@/route-guards/auth/un-auth-guard'
import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

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
const LazyShippingReturnPage = lazy(
    () => import('@/pages/shipping-return/index'),
)
const LazySignUpPage = lazy(() => import('@/pages/auth/sign-up/view/index'))
const LazyProfilePage = lazy(() => import('@/pages/account/view/profile/index'))

const LazyCartPage = lazy(() => import('@/pages/cart/view/index'))
const LazyOrdersPage = lazy(
    () => import('@/pages/account/view/orders/order-page'),
)
const LazyEndingPage = lazy(() => import('@/pages/ending/views/index'))

export const AppRoutes = () => {
    return (
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
                        <Suspense fallback={<Spinner />}>
                            <LazyProductsPage />
                        </Suspense>
                    }
                />
                <Route
                    path="signin"
                    element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <AuthGuard>
                                <LazySignInPage />
                            </AuthGuard>
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
                            <LazyShippingReturnPage />
                        </Suspense>
                    }
                />
                <Route
                    path="signup"
                    element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <AuthGuard>
                                <LazySignUpPage />
                            </AuthGuard>
                        </Suspense>
                    }
                />
                <Route
                    path="profile"
                    element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <UnAuthorizedGuard>
                                <LazyProfilePage />
                            </UnAuthorizedGuard>
                        </Suspense>
                    }
                />

                <Route
                    path="cart"
                    element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <LazyCartPage />
                        </Suspense>
                    }
                />
                <Route
                    path="orders"
                    element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <UnAuthorizedGuard>
                                <LazyOrdersPage />
                            </UnAuthorizedGuard>
                        </Suspense>
                    }
                />
                <Route
                    path="endingPage"
                    element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <UnAuthorizedGuard>
                                <LazyEndingPage />
                            </UnAuthorizedGuard>
                        </Suspense>
                    }
                />
            </Route>
            <Route path="/" element={<Navigate to="/ka/home" />} />
            <Route path="*" element={<LazyNotFoundPage />} />
        </Routes>
    )
}
