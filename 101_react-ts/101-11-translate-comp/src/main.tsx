import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Counter } from './components/use-state/Counter.tsx'
import { ProductList } from './components/use-fetch/ProductList.tsx'
import { TextList } from './components/useCallback/TextList.tsx'
import { Main } from './components/use-context/Main.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <Counter/> */}
    {/* <App/> */}
    {/* <ProductList/> */}
    {/* <TextList/> */}
    <Main/>
  </StrictMode>,
)
