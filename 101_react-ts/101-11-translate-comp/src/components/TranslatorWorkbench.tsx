import { useState, useCallback } from 'react';
import type { TranslationSegment, TranslationUpdateCallback } from '../types/translation';
import TranslationRow from './TranslationRow';

interface TranslatorWorkbenchProps {
  initialSegments: TranslationSegment[];
}

const TranslatorWorkbench: React.FC<TranslatorWorkbenchProps> = ({ initialSegments }) => {
  // useState hook: manages component state
  // TypeScript generic <TranslationSegment[]> ensures type safety
  // State updates trigger re-renders
  const [segments, setSegments] = useState<TranslationSegment[]>(initialSegments);


  // useCallback hook: memoizes the function to prevent recreating it on every render
  // CRITICAL for React.memo to work - if this function changes, all TranslationRow components re-render
  // Empty dependency array [] means this function is created once and never changes
  const handleSegmentUpdate = useCallback<TranslationUpdateCallback>(
    (id: string, targetText: string) => {
      // setSegments with updater function ensures we work with the latest state
      // prevSegments is the current state value
      setSegments(prevSegments =>
        // Immutable update pattern: create new array with .map()
        // Only the segment with matching ID gets updated
        prevSegments.map(segment =>
          segment.id === id ? { ...segment, targetText } : segment
        )
      );
    },
    [] // Empty deps: setSegments is stable (guaranteed by React)
  );

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '1rem' }}>
      <h1>Translator Workbench</h1>
      <p style={{ color: '#666', marginBottom: '1rem' }}>
        {segments.length} translation segments loaded
      </p>
      <div style={{ border: '1px solid #ddd', borderRadius: '4px' }}>
        {/* Map over segments to create TranslationRow components */}
        {segments.map(segment => (
          <TranslationRow
            key={segment.id}  // key prop: React uses this for efficient reconciliation
            segment={segment}
            onUpdate={handleSegmentUpdate}  // Same function reference thanks to useCallback
          />
        ))}
      </div>
    </div>
  );
};

export default TranslatorWorkbench;
