import React from 'react';
import type { TranslationSegment, TranslationUpdateCallback } from '../types/translation';

// Props interface - defines what data this component accepts
interface TranslationRowProps {
  segment: TranslationSegment;
  onUpdate: TranslationUpdateCallback;
}

// Functional component using React.FC for type safety
const TranslationRow: React.FC<TranslationRowProps> = ({ segment, onUpdate }) => {
  // Event handler for input changes
  // TypeScript ensures 'e' is correctly typed as a React change event
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Call parent's update function with the segment ID and new value
    onUpdate(segment.id, e.target.value);
  };

  return (
    <div style={{ display: 'flex', gap: '1rem', padding: '0.5rem', borderBottom: '1px solid #ccc' }}>
      {/* Source text is read-only - just display it */}
      <span style={{ flex: 1, color: '#666' }}>{segment.sourceText}</span>

      {/* Controlled component: value comes from props, changes flow up via onUpdate */}
      <input
        type="text"
        value={segment.targetText}
        onChange={handleChange}
        style={{ flex: 1, padding: '0.25rem' }}
      />
    </div>
  );
};

// React.memo is a Higher Order Component (HOC) that optimizes performance
// It prevents re-renders if props haven't changed (shallow comparison)
// Critical for large lists - only the edited row re-renders, not all 1,000 rows
export default React.memo(TranslationRow);
