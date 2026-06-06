import { type ViewMode } from '../../types';
import './ViewToggle.css';

interface ViewToggleProps {
  currentView: ViewMode;
  // Function type definition: takes ViewMode, returns nothing (void)
  onViewChange: (view: ViewMode) => void;
}

// Controlled component pattern: receives current state and callback to change it
// Parent component manages the actual state, this component just displays and notifies
export const ViewToggle = ({ currentView, onViewChange }: ViewToggleProps) => {
  return (
    <div className="view-toggle">
      {/* Dynamic className based on currentView - shows which button is active */}
      <button
        className={`view-toggle__button ${currentView === 'grid' ? 'view-toggle__button--active' : ''}`}
        onClick={() => onViewChange('grid')}
        aria-label="Grid view"
        title="Grid view"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
          <rect x="2" y="2" width="7" height="7" />
          <rect x="11" y="2" width="7" height="7" />
          <rect x="2" y="11" width="7" height="7" />
          <rect x="11" y="11" width="7" height="7" />
        </svg>
      </button>

      <button
        className={`view-toggle__button ${currentView === 'list' ? 'view-toggle__button--active' : ''}`}
        onClick={() => onViewChange('list')}
        aria-label="List view"
        title="List view"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
          <rect x="2" y="3" width="16" height="2" />
          <rect x="2" y="9" width="16" height="2" />
          <rect x="2" y="15" width="16" height="2" />
        </svg>
      </button>
    </div>
  );
};
