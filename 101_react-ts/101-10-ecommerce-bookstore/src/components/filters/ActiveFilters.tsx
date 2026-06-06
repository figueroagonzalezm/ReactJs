import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { selectGenreFilters, selectInStockOnly, toggleGenre, setInStockOnly, clearFilters } from '../../store/slices/uiSlice';
import type { BookGenre } from '../../types';
import './ActiveFilters.css';

// Displays active filters as removable chips
export function ActiveFilters() {
  const dispatch = useAppDispatch();
  const selectedGenres = useAppSelector(selectGenreFilters);
  const inStockOnly = useAppSelector(selectInStockOnly);

  const hasActiveFilters = selectedGenres.length > 0 || inStockOnly;

  if (!hasActiveFilters) {
    return null;
  }

  const handleRemoveGenre = (genre: BookGenre) => {
    dispatch(toggleGenre(genre));
  };

  const handleRemoveInStock = () => {
    dispatch(setInStockOnly(false));
  };

  const handleClearAll = () => {
    dispatch(clearFilters());
  };

  return (
    <div className="active-filters">
      <div className="active-filters__header">
        <span className="active-filters__label">Active Filters:</span>
        <button
          type="button"
          className="active-filters__clear-all"
          onClick={handleClearAll}
        >
          Clear All
        </button>
      </div>

      <div className="active-filters__chips">
        {/* Genre filter chips */}
        {selectedGenres.map((genre) => (
          <div key={genre} className="active-filters__chip">
            <span className="active-filters__chip-text">{genre}</span>
            <button
              type="button"
              className="active-filters__chip-remove"
              onClick={() => handleRemoveGenre(genre)}
              aria-label={`Remove ${genre} filter`}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
        ))}

        {/* In-stock filter chip */}
        {inStockOnly && (
          <div className="active-filters__chip">
            <span className="active-filters__chip-text">In Stock</span>
            <button
              type="button"
              className="active-filters__chip-remove"
              onClick={handleRemoveInStock}
              aria-label="Remove in-stock filter"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
