import { configureStore } from '@reduxjs/toolkit'
import uiReducer from './slices/uiSlice'
import booksReducer from './slices/booksSlice'
import cartReducer from './slices/cartSlice'
import { cartPersistenceMiddleware } from './middleware/cartPersistence'

// Configure Redux store with Redux DevTools enabled
// Store will be populated with slices as features are implemented
export const store = configureStore({
  reducer: {
    ui: uiReducer,
    books: booksReducer,
    cart: cartReducer,
  },
  // Add middleware for cart persistence to localStorage
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cartPersistenceMiddleware),
  // Redux DevTools automatically enabled in development
  devTools: process.env.NODE_ENV !== 'production',
})

// Infer RootState type from the store itself
export type RootState = ReturnType<typeof store.getState>

// Infer AppDispatch type from the store
export type AppDispatch = typeof store.dispatch
