import type { TextSegment } from ".";
import { useCallback, useState } from "react";
import TextLine from "./TextLine";

// _ is unused (array value), i is the index
const generateSegments = (count: number): TextSegment[] => {
    return Array.from({ length: count }, (_, i) => ({
        id: `seg-${i}`,                          // Unique ID for each segment
        text: `Text segment ${i + 1}`
    }));
};

// Generate 1,000 segments to test performance
// This happens once at module load time (not on every render)
const mockSegments = generateSegments(10);

//--------------------------------------------------------------------------------

export const TextList = () => {
    const [segments, setSegments] = useState<TextSegment[]>(mockSegments);

//useCallback keep this method reference in memory and prevent it from being replicated for each TextLine subcomponent it is passed to.

//Without useCallback: modifying a text in TextLine cause the parent TextList re-render 
// The parent re-renders, creates a brand-new changeHandler function reference, and passes it down. 
// TextLine sees a new prop and re-renders needlessly.

//With useCallback: modifying a text in TextLine still causes the TextList re-render
// However, React returns the same function reference for changeHandler
// React.memo (in TextLine) sees the exact same prop reference and skips re-rendering the button. 
    
    const changeHandler = useCallback((id: string, text: string) =>
        setSegments(prevSegments => prevSegments.map(prevSeg => prevSeg.id === id ? { ...prevSeg, text } : prevSeg))
        , []
    );

    return (
        <div>
            {segments.map(segment =>
                <TextLine key={segment.id} textSeg={segment} onUpdate={changeHandler} />
            )}
        </div>
    )

}