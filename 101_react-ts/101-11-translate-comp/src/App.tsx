import './App.css'
import TranslatorWorkbench from './components/TranslatorWorkbench'
import type { TranslationSegment } from './types/translation'

// Helper function to generate mock translation data
// Array.from creates an array, second parameter is a mapper function
// _ is unused (array value), i is the index
const generateSegments = (count: number): TranslationSegment[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: `seg-${i}`,                          // Unique ID for each segment
    sourceText: `Source text segment ${i + 1}`,
    targetText: `Translation ${i + 1}`,
  }));
};

// Generate 1,000 segments to test performance
// This happens once at module load time (not on every render)
const mockSegments = generateSegments(1000);

function App() {
  return (
    // Render the TranslatorWorkbench with 1,000 segments
    // Thanks to React.memo and useCallback, editing one row won't re-render the other 999
    <TranslatorWorkbench initialSegments={mockSegments} />
  )
}

export default App
