import { useState } from 'react';
import type { Book } from '../../types';
import { useAppDispatch } from '../../hooks/redux';
import { addToCart } from '../../store/slices/cartSlice';
import './AddToCartButton.css';

interface AddToCartButtonProps {
  book: Book;
  // Variant controls button size and styling
  variant?: 'primary' | 'secondary';
  // Full width option for detail pages
  fullWidth?: boolean;
}

// Reusable button component that dispatches addToCart action
// Shows temporary success feedback after adding item
export const AddToCartButton = ({
  book,
  variant = 'primary',
  fullWidth = false,
}: AddToCartButtonProps) => {
  // Local state for temporary success feedback (not persisted in Redux)
  const [showSuccess, setShowSuccess] = useState(false);

  const dispatch = useAppDispatch();

  const handleAddToCart = (e: React.MouseEvent) => {
    // Stop event propagation to prevent card click when button is inside Link
    e.preventDefault();
    e.stopPropagation();

    // Dispatch Redux action to add book to cart
    dispatch(addToCart(book));

    // Show success feedback temporarily
    setShowSuccess(true);

    // Reset success state after animation completes
    setTimeout(() => {
      setShowSuccess(false);
    }, 2000);
  };

  const isOutOfStock = book.stock === 0;

  return (
    <button
      onClick={handleAddToCart}
      disabled={isOutOfStock || showSuccess}
      className={`add-to-cart-btn add-to-cart-btn--${variant} ${
        fullWidth ? 'add-to-cart-btn--full' : ''
      } ${showSuccess ? 'add-to-cart-btn--success' : ''}`}
      aria-label={`Add ${book.title} to cart`}
    >
      {/* Conditional rendering: button text changes based on state */}
      {isOutOfStock ? (
        'Out of Stock'
      ) : showSuccess ? (
        <>
          <span className="add-to-cart-btn__icon">✓</span> Added to Cart
        </>
      ) : (
        'Add to Cart'
      )}
    </button>
  );
};
