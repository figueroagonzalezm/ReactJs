
import './App.css'
import { useState, useCallback, use } from 'react' // hooks used in this component
import MyEmoji from './components/MyEmoji'
import MyButton from './components/MyButton'

function App() {
  const buttonText = "Search a destination"
  const emoji = "🛫"
  const [message, setMessage] = useState("Where do you want to go?")


  const handleClick = () => {
    setMessage("Let's find the best destination for you!")
  }
  // the callback function is created with the useCallback hook, which allows us to memoize the function 
  // and avoid unnecessary re-renders of the component that uses it. 
  // The callback function is passed as a parameter to the onClick event used in MyButton, so when the button is clicked, 
  // the callback function is executed and updates the message state with the data received from MyButton.
  const callback = useCallback(
    (datos) => { setMessage(datos) },
    [message]
  )

  return (
    <>
      <div>
        <h2>{message}</h2>
        <MyEmoji emoji={emoji} />
        {/* the handleClick event is passed as a parameter to the onClick event used in MyButton */}
        <MyButton text={buttonText} onClick={handleClick} />
        <MyButton text="Callback" onClick={callback} />
      </div>
    </>
  )
}

export default App
