import { Link } from 'react-router-dom';
import type { CartItem as CartItemType } from '../../types';
import { formatPrice } from '../../utils/formatPrice';
import { QuantitySelector } from './QuantitySelector';
import { ROUTES } from '../../constants/routes';
import './CartItem.css';

interface CartItemProps {
  item: CartItemType;
  onQuantityChange: (bookId: string, quantity: number) => void;
  onRemove: (bookId: string) => void;
}

// Displays a single cart item with quantity controls and remove button
export function CartItem({ item, onQuantityChange, onRemove }: CartItemProps) {
  const { book, quantity } = item;
  const price = book.salePrice || book.price;
  const itemTotal = price * quantity;

  return (
    <div className="cart-item">
      <Link to={ROUTES.PRODUCT_DETAIL.replace(':id', book.id)} className="cart-item__image-link">
        <img src={book.coverImage} alt={book.title} className="cart-item__image" />
      </Link>

      <div className="cart-item__details">
        <div className="cart-item__info">
          <Link to={ROUTES.PRODUCT_DETAIL.replace(':id', book.id)} className="cart-item__title">
            {book.title}
          </Link>
          <p className="cart-item__author">{book.author}</p>

          <div className="cart-item__pricing">
            {book.salePrice && (
              <>
                <span className="cart-item__price--original">{formatPrice(book.price)}</span>
                <span className="cart-item__price--sale">{formatPrice(book.salePrice)}</span>
              </>
            )}
            {!book.salePrice && (
              <span className="cart-item__price">{formatPrice(book.price)}</span>
            )}
          </div>
        </div>

        <div className="cart-item__actions">
          <QuantitySelector
            quantity={quantity}
            maxQuantity={book.stock}
            onQuantityChange={(newQuantity) => onQuantityChange(book.id, newQuantity)}
          />

          <button
            type="button"
            className="cart-item__remove"
            onClick={() => onRemove(book.id)}
            aria-label={`Remove ${book.title} from cart`}
          >
            Remove
          </button>
        </div>

        <div className="cart-item__total">
          {formatPrice(itemTotal)}
        </div>
      </div>
    </div>
  );
}
