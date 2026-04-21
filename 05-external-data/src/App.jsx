import { useEffect, useState } from 'react'
import ProductList from './components/ProductList'
import CartList from './components/CartList'
import { DataProvider } from './components/DataContext'
import './App.css'

function App() {

  return (
    <>
      <div className="row">
        {/* PROVEEDOR DE CONTEXTO: DataProvider envuelve los componentes que necesitan
            acceso al contexto. ProductList y CartList pueden consumir el contexto
            sin necesidad de pasar props a través de App */}
        <DataProvider>
          <ProductList />
          <CartList />
        </DataProvider>
      </div>
    </>
  )
}

export default App
