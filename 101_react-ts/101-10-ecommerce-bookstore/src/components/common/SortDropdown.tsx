import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { selectSortOption, setSortOption } from '../../store/slices/uiSlice';
import type { SortOption } from '../../types';
import './SortDropdown.css';

// Sort options with user-friendly labels
const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: 'title-asc', label: 'Title: A-Z' },
  { value: 'title-desc', label: 'Title: Z-A' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'year-newest', label: 'Year: Newest First' },
  { value: 'year-oldest', label: 'Year: Oldest First' },
];

// Sort dropdown component for changing book sort order
export function SortDropdown() {
  const dispatch = useAppDispatch();
  const currentSort = useAppSelector(selectSortOption);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSortOption(e.target.value as SortOption));
  };

  return (
    <div className="sort-dropdown">
      <label htmlFor="sort-select" className="sort-dropdown__label">
        Sort by:
      </label>
      <select
        id="sort-select"
        className="sort-dropdown__select"
        value={currentSort}
        onChange={handleChange}
      >
        {SORT_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
