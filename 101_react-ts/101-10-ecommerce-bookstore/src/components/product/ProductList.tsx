import type { Book, ViewMode } from '../../types';
import { ProductCard } from './ProductCard';
import './ProductList.css';

interface ProductListProps {
  books: Book[];
  viewMode: ViewMode;
}

// Container component that renders a list of books using the .map() pattern
export const ProductList = ({ books, viewMode }: ProductListProps) => {
  return (
    <div className={`product-list product-list--${viewMode}`}>
      {/* Array.map() transforms book data into ProductCard components */}
      {/* key prop is required for React to efficiently track list items */}
      {books.map((book) => (
        <ProductCard key={book.id} book={book} viewMode={viewMode} />
      ))}
    </div>
  );
};
