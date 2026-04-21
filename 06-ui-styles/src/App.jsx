// IMPORTING CSS FILES IN REACT:
// When you import a CSS file in a React component, the styles are applied globally
// to the entire application. This is the traditional approach to styling in React.
// The styles in App.css will be available to all components in the app.
import './App.css'
import Catalog from './components/Catalog'

function App() {

  return (
    <>
      <Catalog />
    </>
  )
}

export default App
