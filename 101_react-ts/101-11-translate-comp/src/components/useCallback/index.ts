

export interface TextSegment{
    id: string,
    text: string
}

// Type alias for the callback function signature
// Using a named type makes the callback reusable and easier to maintain
export type TextUpdateCallback = (id: string, text: string) => void;