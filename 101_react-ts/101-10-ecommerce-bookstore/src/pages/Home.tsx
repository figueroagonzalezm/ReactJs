// React hooks for accessing Redux store
import { useAppSelector, useAppDispatch } from '../hooks/redux';
import { selectAllBooks, selectFilteredBooks, selectViewMode, setViewMode } from '../store/slices/booksSlice';
import { selectSearchQuery } from '../store/slices/uiSlice';
import { ProductList } from '../components/product/ProductList';
import { ViewToggle } from '../components/product/ViewToggle';
import { EmptyState } from '../components/common/EmptyState';
import { SearchBar } from '../components/common/SearchBar';
import { SortDropdown } from '../components/common/SortDropdown';
import { FilterPanel } from '../components/filters/FilterPanel';
import { ActiveFilters } from '../components/filters/ActiveFilters';
import './Home.css';

export const Home = () => {
  // useAppSelector hook reads data from Redux store using selector functions
  const allBooks = useAppSelector(selectAllBooks);
  const filteredBooks = useAppSelector(selectFilteredBooks);
  const viewMode = useAppSelector(selectViewMode);
  const searchQuery = useAppSelector(selectSearchQuery);

  // useAppDispatch hook returns dispatch function to send actions to Redux store
  const dispatch = useAppDispatch();

  // Handler function that dispatches Redux action to update view mode
  const handleViewChange = (view: 'grid' | 'list') => {
    dispatch(setViewMode(view));
  };

  // Determine if showing search results or full catalog
  const isSearching = searchQuery.trim().length > 0;
  const hasResults = filteredBooks.length > 0;

  return (
    <div className="home">
      {/* Search bar */}
      <div className="home__search">
        <SearchBar />
      </div>

      <div className="home__layout">
        {/* Sidebar with filters */}
        <aside className="home__sidebar">
          <FilterPanel />
        </aside>

        {/* Main content area */}
        <div className="home__main">
          {/* Active filters chips */}
          <ActiveFilters />

          <div className="home__header">
            <div className="home__title-section">
              <h1 className="home__title">BookStore</h1>
              <p className="home__subtitle">
                {isSearching
                  ? `${filteredBooks.length} result${filteredBooks.length !== 1 ? 's' : ''} found`
                  : `${allBooks.length} books available`}
              </p>
            </div>
            <div className="home__controls">
              <SortDropdown />
              <ViewToggle currentView={viewMode} onViewChange={handleViewChange} />
            </div>
          </div>

          {/* Conditional rendering: show filtered books, no results, or empty state */}
          {hasResults ? (
            <ProductList books={filteredBooks} viewMode={viewMode} />
          ) : isSearching ? (
            <EmptyState
              message={`No results found for "${searchQuery}"`}
              description="Try searching with different keywords or browse all books"
            />
          ) : (
            <EmptyState
              message="No books available"
              description="Check back soon for new arrivals!"
            />
          )}
        </div>
      </div>
    </div>
  );
};
