import { formatPrice } from '../../utils/formatPrice';
import './CartSummary.css';

interface CartSummaryProps {
  subtotal: number;
  itemCount: number;
  onClearCart: () => void;
}

// Displays cart totals and summary information
export function CartSummary({ subtotal, itemCount, onClearCart }: CartSummaryProps) {
  return (
    <div className="cart-summary">
      <div className="cart-summary__row">
        <span className="cart-summary__label">
          Subtotal ({itemCount} {itemCount === 1 ? 'item' : 'items'})
        </span>
        <span className="cart-summary__value">{formatPrice(subtotal)}</span>
      </div>

      <div className="cart-summary__note">
        Taxes and shipping calculated at checkout
      </div>

      <button type="button" className="cart-summary__checkout">
        Proceed to Checkout
      </button>

      <button
        type="button"
        className="cart-summary__clear"
        onClick={onClearCart}
      >
        Clear Cart
      </button>
    </div>
  );
}
