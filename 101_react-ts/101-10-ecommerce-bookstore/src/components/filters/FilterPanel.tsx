import { GenreFilter } from './GenreFilter';
import { PriceRangeFilter } from './PriceRangeFilter';
import { InStockFilter } from './InStockFilter';
import './FilterPanel.css';

// Main filter panel containing all filter controls
// Designed to work in sidebar on desktop and drawer on mobile
export function FilterPanel() {
  return (
    <div className="filter-panel">
      <div className="filter-panel__header">
        <h2 className="filter-panel__title">Filters</h2>
      </div>

      <div className="filter-panel__content">
        <GenreFilter />
        <PriceRangeFilter />
        <InStockFilter />
      </div>
    </div>
  );
}
