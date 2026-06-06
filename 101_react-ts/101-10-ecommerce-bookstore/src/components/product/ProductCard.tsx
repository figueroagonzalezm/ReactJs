import { Link } from 'react-router-dom';
import { type Book } from '../../types';
import { formatPrice } from '../../utils/formatPrice';
import { AddToCartButton } from '../common/AddToCartButton';
import './ProductCard.css';

interface ProductCardProps {
  book: Book;
  viewMode: 'grid' | 'list';
}

// Component displays a book card that adapts its layout based on viewMode prop
// Uses React Router's Link component to make the entire card clickable for navigation
export const ProductCard = ({ book, viewMode }: ProductCardProps) => {
  // Computed values derived from props - no useState needed since these change when props change
  const hasDiscount = book.salePrice && book.salePrice < book.price;
  const displayPrice = book.salePrice || book.price;
  const isOutOfStock = book.stock === 0;

  return (
    // Link makes entire card clickable - template literals build dynamic className and route
    <Link
      to={`/product/${book.id}`}
      className={`product-card product-card--${viewMode} ${isOutOfStock ? 'product-card--out-of-stock' : ''}`}
    >
      <div className="product-card__image-wrapper">
        <img
          src={book.coverImage}
          alt={book.title}
          className="product-card__image"
        />
        {/* Conditional rendering: badges only appear when conditions are true */}
        {hasDiscount && (
          <span className="product-card__badge product-card__badge--sale">Sale</span>
        )}
        {isOutOfStock && (
          <span className="product-card__badge product-card__badge--out-of-stock">Out of Stock</span>
        )}
      </div>

      <div className="product-card__content">
        <h3 className="product-card__title">{book.title}</h3>
        <p className="product-card__author">by {book.author}</p>

        {/* Description only shown in list view - CSS handles the layout differences */}
        {viewMode === 'list' && (
          <p className="product-card__description">{book.description}</p>
        )}

        <div className="product-card__meta">
          <span className="product-card__genre">{book.genre}</span>
          <span className="product-card__year">{book.publicationYear}</span>
        </div>

        <div className="product-card__footer">
          <div className="product-card__price-wrapper">
            {hasDiscount && (
              <span className="product-card__price product-card__price--original">
                {formatPrice(book.price)}
              </span>
            )}
            <span className={`product-card__price ${hasDiscount ? 'product-card__price--sale' : ''}`}>
              {formatPrice(displayPrice)}
            </span>
          </div>

          {!isOutOfStock && (
            <span className="product-card__stock">
              {book.stock < 10 ? `Only ${book.stock} left` : 'In Stock'}
            </span>
          )}
        </div>

        {/* Add to cart button - secondary variant for cards */}
        <div className="product-card__actions">
          <AddToCartButton book={book} variant="secondary" />
        </div>
      </div>
    </Link>
  );
};
