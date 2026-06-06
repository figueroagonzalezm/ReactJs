import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '..';
import type { Book, CartItem } from '../../types';
import { loadPersistedCart } from '../middleware/cartPersistence';

interface CartState {
  items: CartItem[];
}

// Load persisted cart from localStorage on initialization
const initialState: CartState = {
  items: loadPersistedCart(),
};

// Cart slice manages shopping cart items with full book data embedded
// Uses the embedded book approach (CartItem = Book + quantity)
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add book to cart or increment quantity if already in cart
    // PayloadAction<Book> means this action expects a Book object as payload
    addToCart: (state, action: PayloadAction<Book>) => {
      const book = action.payload;

      // Find if book already exists in cart
      const existingItem = state.items.find((item) => item.book.id === book.id);

      if (existingItem) {
        // Book exists: increment quantity (up to stock limit)
        if (existingItem.quantity < book.stock) {
          existingItem.quantity += 1;
        }
      } else {
        // New book: add to cart with quantity 1
        // Embedded approach: store full book object + quantity
        state.items.push({
          book,
          quantity: 1,
        });
      }
    },

    // Remove book from cart by book ID
    removeFromCart: (state, action: PayloadAction<string>) => {
      const bookId = action.payload;
      // Filter out the item with matching book ID
      state.items = state.items.filter((item) => item.book.id !== bookId);
    },

    // Update quantity for a specific cart item
    // Payload: { bookId: string, quantity: number }
    updateQuantity: (state, action: PayloadAction<{ bookId: string; quantity: number }>) => {
      const { bookId, quantity } = action.payload;
      const item = state.items.find((item) => item.book.id === bookId);

      if (item) {
        // Enforce stock limits and minimum quantity of 1
        const newQuantity = Math.max(1, Math.min(quantity, item.book.stock));
        item.quantity = newQuantity;
      }
    },

    // Clear all items from cart
    clearCart: (state) => {
      state.items = [];
    },
  },
});

// Export actions
export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;

// Selectors
// Get all cart items
export const selectCartItems = (state: RootState) => state.cart.items;

// Get total number of items in cart (sum of all quantities)
export const selectCartItemsCount = (state: RootState) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);

// Get cart total price (sum of item prices * quantities)
// Handles sale prices when available
export const selectCartTotal = (state: RootState) =>
  state.cart.items.reduce((total, item) => {
    const price = item.book.salePrice || item.book.price;
    return total + price * item.quantity;
  }, 0);

// Export reducer
export default cartSlice.reducer;
