import type { Middleware } from '@reduxjs/toolkit';
import type { RootState } from '..';

const CART_STORAGE_KEY = 'bookstore_cart';

// localStorage persistence middleware for cart state
// Listens to cart actions and saves cart items to localStorage
// This ensures cart persists across browser sessions
export const cartPersistenceMiddleware: Middleware<{}, RootState> = (store) => (next) => (action) => {
  // Call the next middleware/reducer first
  const result = next(action);

  // After state update, check if action was cart-related
  if (typeof action.type === 'string' && action.type.startsWith('cart/')) {
    // Get current cart state
    const state = store.getState();
    const cartItems = state.cart.items;

    try {
      // Save cart items to localStorage
      // Only stores cart items array, not full cart state
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    } catch (error) {
      // Fail silently if localStorage is not available (e.g., private browsing)
      console.warn('Failed to persist cart to localStorage:', error);
    }
  }

  return result;
};

// Helper to load persisted cart from localStorage
// Called during store initialization
export const loadPersistedCart = () => {
  try {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);
    if (savedCart) {
      return JSON.parse(savedCart);
    }
  } catch (error) {
    console.warn('Failed to load cart from localStorage:', error);
  }
  return [];
};
