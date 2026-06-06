import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { selectInStockOnly, setInStockOnly } from '../../store/slices/uiSlice';
import './InStockFilter.css';

// In-stock filter component with single checkbox
export function InStockFilter() {
  const dispatch = useAppDispatch();
  const inStockOnly = useAppSelector(selectInStockOnly);

  const handleToggle = () => {
    dispatch(setInStockOnly(!inStockOnly));
  };

  return (
    <div className="in-stock-filter">
      <label className="in-stock-filter__item">
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={handleToggle}
          className="in-stock-filter__checkbox"
        />
        <span className="in-stock-filter__label">In Stock Only</span>
      </label>
    </div>
  );
}
