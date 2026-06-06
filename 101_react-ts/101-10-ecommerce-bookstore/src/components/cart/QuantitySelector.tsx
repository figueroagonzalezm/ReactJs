import { useState, useEffect } from 'react';
import './QuantitySelector.css';

interface QuantitySelectorProps {
  quantity: number;
  maxQuantity: number;
  onQuantityChange: (quantity: number) => void;
}

// Controlled component for selecting item quantity
// Supports increment/decrement buttons and direct input
export function QuantitySelector({ quantity, maxQuantity, onQuantityChange }: QuantitySelectorProps) {
  // Local state for input value to allow typing before validation
  const [inputValue, setInputValue] = useState(quantity.toString());

  // Sync input value when prop changes (e.g., cart update from elsewhere)
  useEffect(() => {
    setInputValue(quantity.toString());
  }, [quantity]);

  const handleDecrement = () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1);
    }
  };

  const handleIncrement = () => {
    if (quantity < maxQuantity) {
      onQuantityChange(quantity + 1);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleInputBlur = () => {
    // Validate and apply input on blur
    const parsed = parseInt(inputValue, 10);
    if (isNaN(parsed) || parsed < 1) {
      // Reset to current quantity if invalid
      setInputValue(quantity.toString());
    } else {
      // Clamp to valid range and update
      const validQuantity = Math.max(1, Math.min(parsed, maxQuantity));
      onQuantityChange(validQuantity);
      setInputValue(validQuantity.toString());
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Apply on Enter key
    if (e.key === 'Enter') {
      e.currentTarget.blur();
    }
  };

  return (
    <div className="quantity-selector">
      <button
        type="button"
        className="quantity-selector__btn"
        onClick={handleDecrement}
        disabled={quantity <= 1}
        aria-label="Decrease quantity"
      >
        −
      </button>
      <input
        type="text"
        className="quantity-selector__input"
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        onKeyDown={handleKeyDown}
        aria-label="Quantity"
      />
      <button
        type="button"
        className="quantity-selector__btn"
        onClick={handleIncrement}
        disabled={quantity >= maxQuantity}
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
}
