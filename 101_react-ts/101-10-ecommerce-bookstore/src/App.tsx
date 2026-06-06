import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { Home } from './pages/Home'
import { ProductDetail } from './pages/ProductDetail'
import { NotFound } from './pages/NotFound'
import CartDrawer from './components/cart/CartDrawer'
import { ROUTES } from './constants/routes'
import './App.css'

export const App = () => {
  return (
    // BrowserRouter enables client-side routing using the HTML5 History API
    <BrowserRouter>
      {/* Layout wraps all pages with consistent header and footer */}
      <Layout>
        {/* Routes component contains all route definitions */}
        <Routes>
          {/* Main shop page showing all books */}
          <Route path={ROUTES.HOME} element={<Home />} />

          {/* Dynamic route with :id parameter for individual book details */}
          <Route path={ROUTES.PRODUCT_DETAIL} element={<ProductDetail />} />

          {/* Shopping cart page */}
          <Route path={ROUTES.CART} element={<div>Cart Page (Feature 5)</div>} />

          {/* Catch-all route for 404 errors - must be last */}
          <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
        </Routes>
      </Layout>

      {/* CartDrawer rendered outside Layout to overlay everything */}
      {/* Controlled by Redux state (isCartDrawerOpen) */}
      <CartDrawer />
    </BrowserRouter>
  )
}

export default App