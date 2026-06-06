import { useState } from "react"


export const Counter = () => {
    //React only knows that the count value changes when useState hook is used. 
    // Otherwise if I use a simple variable increase like count++, React will never know that the variable has changed 
    // and the component will not be re-rendered, so the changes will not be reflected in UI. 
    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(prevCount => prevCount + 1)
        console.log("increasing count: "+count)
    }

    return (
        <>
            <p> Count value: {count}  </p>
            <button onClick={increaseCount}>Increase count </button>
        </>
    )

}

