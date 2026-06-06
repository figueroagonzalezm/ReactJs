// Route path constants for the application
export const ROUTES = {
  HOME: '/',
  PRODUCT_DETAIL: '/product/:id',
  CART: '/cart',
  NOT_FOUND: '*',
} as const

// Helper to generate product detail URL with specific ID
export const getProductDetailPath = (id: string): string => `/product/${id}`
