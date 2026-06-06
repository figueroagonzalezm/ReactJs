import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { selectGenreFilters, toggleGenre } from '../../store/slices/uiSlice';
import { ALL_GENRES } from '../../constants/genres';
import type { BookGenre } from '../../types';
import './GenreFilter.css';

// Genre filter component with multi-select checkboxes
export function GenreFilter() {
  const dispatch = useAppDispatch();
  const selectedGenres = useAppSelector(selectGenreFilters);

  const handleToggle = (genre: BookGenre) => {
    dispatch(toggleGenre(genre));
  };

  return (
    <div className="genre-filter">
      <h3 className="genre-filter__title">Genre</h3>
      <div className="genre-filter__list">
        {ALL_GENRES.map((genre) => {
          const isSelected = selectedGenres.includes(genre);
          return (
            <label key={genre} className="genre-filter__item">
              <input
                type="checkbox"
                checked={isSelected}
                onChange={() => handleToggle(genre)}
                className="genre-filter__checkbox"
              />
              <span className="genre-filter__label">{genre}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
}
