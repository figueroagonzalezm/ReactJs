
function MyButton({ text, onClick }) {
    // the message variable is defined inside the MyButton component.
    // it is sent as a parameter to the onClick event, so when the button is clicked, 
    // the message variable is passed to the callback function defined in App.jsx 
    // and updates the message state with the data received from MyButton.
    const message = "Text from MyButton componet"

    return (
        <button onClick={()=>onClick(message)}>{text}</button>
    )
}   

export default MyButton