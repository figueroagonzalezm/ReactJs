// React Router hook to access URL parameters
import { useParams, useNavigate } from 'react-router-dom';
// Redux hook to read book data from store
import { useAppSelector } from '../hooks/redux';
import { selectBookById } from '../store/slices/booksSlice';
import { formatPrice } from '../utils/formatPrice';
import { ROUTES } from '../constants/routes';
import { AddToCartButton } from '../components/common/AddToCartButton';
import './ProductDetail.css';



export const ProductDetail = () => {

  // useParams extracts route parameters from URL (e.g., /product/:id -> {id: '123'})
  const { id } = useParams<{ id: string }>();

  // useNavigate hook returns function for programmatic navigation
  const navigate = useNavigate();

  // Find specific book using selector with parameter
  // Note: We pass RootState and id to the selector function
  const book = useAppSelector((state) => selectBookById(state, id || ''));

  // Handle case where book is not found
  if (!book) {
    return (
      <div className="product-detail">
        <div className="product-detail__not-found">
          <h1>Book Not Found</h1>
          <p>The book you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate(ROUTES.HOME)}
            className="product-detail__back-btn"
          >
            Back to Store
          </button>
        </div>
      </div>
    );
  }

  // Calculate if book is on sale
  const isOnSale = book.salePrice !== undefined && book.salePrice < book.price;
  const displayPrice = isOnSale ? book.salePrice! : book.price;

  return (
    <div className="product-detail">
      {/* Back navigation button */}
      <button
        onClick={() => navigate(-1)}
        className="product-detail__back-btn"
        aria-label="Go back"
      >
        ← Back
      </button>

      <div className="product-detail__content">
        {/* Book cover image section */}
        <div className="product-detail__image-section">
          <img
            src={book.coverImage}
            alt={`${book.title} cover`}
            className="product-detail__image"
          />
        </div>

        {/* Book information section */}
        <div className="product-detail__info-section">
          <h1 className="product-detail__title">{book.title}</h1>
          <p className="product-detail__author">by {book.author}</p>

          {/* Price display with sale indicator */}
          <div className="product-detail__price-section">
            {isOnSale ? (
              <>
                <span className="product-detail__sale-price">
                  {formatPrice(displayPrice)}
                </span>
                <span className="product-detail__original-price">
                  {formatPrice(book.price)}
                </span>
                <span className="product-detail__sale-badge">ON SALE</span>
              </>
            ) : (
              <span className="product-detail__price">
                {formatPrice(displayPrice)}
              </span>
            )}
          </div>

          {/* Stock indicator component */}
          <div className="product-detail__stock">
            {book.stock > 0 ? (
              <span className="product-detail__in-stock">
                ✓ In Stock ({book.stock} available)
              </span>
            ) : (
              <span className="product-detail__out-of-stock">
                Out of Stock
              </span>
            )}
          </div>

          {/* Book description */}
          <div className="product-detail__description">
            <h2>Description</h2>
            <p>{book.description}</p>
          </div>

          {/* Book metadata */}
          <div className="product-detail__metadata">
            <div className="product-detail__metadata-item">
              <strong>Genre:</strong> {book.genre}
            </div>
            <div className="product-detail__metadata-item">
              <strong>Categories:</strong> {book.categories.join(', ')}
            </div>
            <div className="product-detail__metadata-item">
              <strong>ISBN:</strong> {book.isbn}
            </div>
            <div className="product-detail__metadata-item">
              <strong>Publisher:</strong> {book.publisher}
            </div>
            <div className="product-detail__metadata-item">
              <strong>Publication Year:</strong> {book.publicationYear}
            </div>
          </div>

          {/* Add to cart button - full width variant for detail page */}
          <AddToCartButton book={book} variant="primary" fullWidth />
        </div>
      </div>
    </div>
  );
};
