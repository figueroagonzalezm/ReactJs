import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { selectCartItems, selectCartItemsCount, selectCartTotal, updateQuantity, removeFromCart, clearCart } from '../../store/slices/cartSlice';
import { selectIsCartDrawerOpen, closeCartDrawer } from '../../store/slices/uiSlice';
import { CartItem } from './CartItem';
import { CartSummary } from './CartSummary';
import { EmptyCart } from './EmptyCart';
import './CartDrawer.css';

// CartDrawer is a slide-in panel showing cart contents
// Uses Redux for state management and localStorage for persistence
const CartDrawer = () => {
  const dispatch = useAppDispatch();

  // Subscribe to Redux state using type-safe hooks
  const isOpen = useAppSelector(selectIsCartDrawerOpen);
  const cartItems = useAppSelector(selectCartItems);
  const itemCount = useAppSelector(selectCartItemsCount);
  const total = useAppSelector(selectCartTotal);

  // Close drawer on Escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        dispatch(closeCartDrawer());
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, dispatch]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleQuantityChange = (bookId: string, quantity: number) => {
    dispatch(updateQuantity({ bookId, quantity }));
  };

  const handleRemove = (bookId: string) => {
    dispatch(removeFromCart(bookId));
  };

  const handleClearCart = () => {
    if (window.confirm('Are you sure you want to clear your cart?')) {
      dispatch(clearCart());
    }
  };

  const handleClose = () => {
    dispatch(closeCartDrawer());
  };

  // Stop propagation when clicking inside drawer to prevent closing
  const handleDrawerClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <>
      {/* Backdrop overlay - clicking it closes the drawer */}
      <div
        className={`cart-drawer__backdrop ${isOpen ? 'cart-drawer__backdrop--open' : ''}`}
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Drawer panel that slides in from right */}
      <div
        className={`cart-drawer ${isOpen ? 'cart-drawer--open' : ''}`}
        onClick={handleDrawerClick}
        role="dialog"
        aria-label="Shopping cart"
        aria-modal="true"
      >
        {/* Header with title and close button */}
        <div className="cart-drawer__header">
          <h2 className="cart-drawer__title">Shopping Cart</h2>
          <button
            className="cart-drawer__close"
            onClick={handleClose}
            aria-label="Close cart"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M18 6L6 18M6 6l12 12" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Cart content area - scrollable */}
        <div className="cart-drawer__content">
          {/* Conditional rendering: empty state vs cart items */}
          {cartItems.length === 0 ? (
            <EmptyCart />
          ) : (
            <>
              {/* List of cart items using .map() pattern with key prop */}
              <div className="cart-drawer__items">
                {cartItems.map((item) => (
                  <CartItem
                    key={item.book.id}
                    item={item}
                    onQuantityChange={handleQuantityChange}
                    onRemove={handleRemove}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Footer with cart summary - only shown when cart has items */}
        {cartItems.length > 0 && (
          <div className="cart-drawer__footer">
            <CartSummary
              subtotal={total}
              itemCount={itemCount}
              onClearCart={handleClearCart}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
