import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Redux Provider makes the store available to all components */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
