import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { Suspense } from 'react'
import DefaultLayout from '@/layouts/default'
import { lazy } from 'react'
import { ThemeProvider } from '@/components/ui/theme-provider'

const LazyMainPage = lazy(() => import('@/pages/main/main'))
const LazyAboutPage = lazy(() => import('@/pages/about/views'))
const LazyProductsPage = lazy(() => import('@/pages/products/views'))
const LazySignInPage = lazy(() => import('@/pages/sign-in/view'))
const LazyNotFoundPage = lazy(() => import('@/pages/404/index'))

function App() {
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
                    </Route>
                    <Route path="/" element={<Navigate to="/ka/home" />} />
                    <Route path="*" element={<LazyNotFoundPage />} />
                </Routes>
            </ThemeProvider>
        </>
    )
}

export default App
