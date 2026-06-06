import { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { selectPriceRange, setPriceRange } from '../../store/slices/uiSlice';
import { formatPrice } from '../../utils/formatPrice';
import './PriceRangeFilter.css';

// Price range filter with dual range sliders
export function PriceRangeFilter() {
  const dispatch = useAppDispatch();
  const priceRange = useAppSelector(selectPriceRange);

  // Local state for slider values to avoid dispatching on every change
  const [localMin, setLocalMin] = useState(priceRange.min);
  const [localMax, setLocalMax] = useState(priceRange.max);

  // Sync local state when Redux state changes externally
  useEffect(() => {
    setLocalMin(priceRange.min);
    setLocalMax(priceRange.max);
  }, [priceRange.min, priceRange.max]);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setLocalMin(value);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setLocalMax(value);
  };

  const handleApply = () => {
    // Ensure min is not greater than max
    const validMin = Math.min(localMin, localMax);
    const validMax = Math.max(localMin, localMax);
    dispatch(setPriceRange({ min: validMin, max: validMax }));
  };

  // Apply on mouse up for better UX
  const handleMouseUp = () => {
    handleApply();
  };

  return (
    <div className="price-range-filter">
      <h3 className="price-range-filter__title">Price Range</h3>

      <div className="price-range-filter__display">
        <span className="price-range-filter__value">{formatPrice(localMin)}</span>
        <span className="price-range-filter__separator">-</span>
        <span className="price-range-filter__value">{formatPrice(localMax)}</span>
      </div>

      <div className="price-range-filter__sliders">
        <input
          type="range"
          min="0"
          max="100"
          step="5"
          value={localMin}
          onChange={handleMinChange}
          onMouseUp={handleMouseUp}
          onTouchEnd={handleMouseUp}
          className="price-range-filter__slider"
          aria-label="Minimum price"
        />
        <input
          type="range"
          min="0"
          max="100"
          step="5"
          value={localMax}
          onChange={handleMaxChange}
          onMouseUp={handleMouseUp}
          onTouchEnd={handleMouseUp}
          className="price-range-filter__slider"
          aria-label="Maximum price"
        />
      </div>
    </div>
  );
}
