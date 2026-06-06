// TypeScript interface defining the shape of a translation segment
// Interfaces provide compile-time type checking and IDE autocomplete
export interface TranslationSegment {
  id: string;         // Unique identifier for React keys and updates
  sourceText: string; // Original text to translate (read-only)
  targetText: string; // Translated text (editable)
}

// Type alias for the callback function signature
// Using a named type makes the callback reusable and easier to maintain
export type TranslationUpdateCallback = (id: string, targetText: string) => void;
