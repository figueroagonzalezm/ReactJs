import type { TextSegment, TextUpdateCallback } from ".";
import React from "react";

interface TextLineProps {
    textSeg: TextSegment,
    onUpdate: TextUpdateCallback
}

const TextLine = ({ textSeg, onUpdate }: TextLineProps) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onUpdate(textSeg.id, e.target.value);
    }
    return (
        <div>
            <label htmlFor={textSeg.id}>SegmentId: {textSeg.id}</label>
            <input id={textSeg.id} type="text" value={textSeg.text} onChange={handleChange} />
        </div>

    )


}
// React.memo helps prevent this component from being re-rendered unnecessarily. 
// It only enables rendering when the props change.
export default React.memo(TextLine);