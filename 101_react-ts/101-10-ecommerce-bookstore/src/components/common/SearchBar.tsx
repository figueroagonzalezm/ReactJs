import { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { selectSearchQuery, setSearchQuery, clearSearch } from '../../store/slices/uiSlice';
import './SearchBar.css';

// SearchBar component for filtering books by title, author, or description
// Uses controlled component pattern with Redux state
export function SearchBar() {
  const dispatch = useAppDispatch();
  const searchQuery = useAppSelector(selectSearchQuery);

  // Local state for input to enable typing before dispatching
  const [inputValue, setInputValue] = useState(searchQuery);

  // Sync local input with Redux state when it changes externally
  useEffect(() => {
    setInputValue(searchQuery);
  }, [searchQuery]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    // Dispatch to Redux immediately for real-time filtering
    dispatch(setSearchQuery(value));
  };

  const handleClear = () => {
    setInputValue('');
    dispatch(clearSearch());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Already dispatched on input change, just ensure it's synced
    dispatch(setSearchQuery(inputValue));
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <div className="search-bar__wrapper">
        {/* Search icon */}
        <svg
          className="search-bar__icon"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>

        <input
          type="text"
          className="search-bar__input"
          placeholder="Search books by title, author, or description..."
          value={inputValue}
          onChange={handleInputChange}
          aria-label="Search books"
        />

        {/* Clear button - only shown when there's input */}
        {inputValue && (
          <button
            type="button"
            className="search-bar__clear"
            onClick={handleClear}
            aria-label="Clear search"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
    </form>
  );
}
