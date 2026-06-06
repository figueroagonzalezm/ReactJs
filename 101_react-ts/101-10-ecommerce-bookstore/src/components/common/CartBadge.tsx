import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { selectCartItemsCount } from '../../store/slices/cartSlice';
import { openCartDrawer } from '../../store/slices/uiSlice';
import './CartBadge.css';

// CartBadge displays cart icon with item count in header
// useAppSelector subscribes to cart state - component re-renders when count changes
// Clicking the badge opens the cart drawer
export const CartBadge = () => {
  const dispatch = useAppDispatch();

  // Selector automatically recalculates when cart items change
  const itemCount = useAppSelector(selectCartItemsCount);

  const handleClick = () => {
    dispatch(openCartDrawer());
  };

  return (
    <button
      type="button"
      className="cart-badge"
      onClick={handleClick}
      aria-label="View shopping cart"
    >
      {/* Shopping cart icon using SVG */}
      <svg
        className="cart-badge__icon"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>

      {/* Conditional rendering: only show badge when cart has items */}
      {itemCount > 0 && (
        <span className="cart-badge__count" aria-label={`${itemCount} items in cart`}>
          {itemCount > 99 ? '99+' : itemCount}
        </span>
      )}
    </button>
  );
};
