import { useEffect } from 'react'
import { BrowserRouter, Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom'
import { CartProvider } from './context/CartProvider'
import { CartDrawer } from './components/ui/CartDrawer'
import { HomePage } from './pages/HomePage'
import { ProductPage } from './pages/ProductPage'

function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1))
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo({ top: 0 })
  }, [pathname, hash])

  return null
}

function Layout() {
  return (
    <>
      <Outlet />
      <CartDrawer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <ScrollManager />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/producto/:id" element={<ProductPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}