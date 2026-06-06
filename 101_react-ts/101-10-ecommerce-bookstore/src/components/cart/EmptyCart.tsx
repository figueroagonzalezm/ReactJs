import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import './EmptyCart.css';

// Displayed when cart is empty
export function EmptyCart() {
  return (
    <div className="empty-cart">
      <div className="empty-cart__icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="empty-cart__svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
      </div>
      <h3 className="empty-cart__title">Your cart is empty</h3>
      <p className="empty-cart__message">
        Add some books to get started!
      </p>
      <Link to={ROUTES.HOME} className="empty-cart__button">
        Continue Shopping
      </Link>
    </div>
  );
}
