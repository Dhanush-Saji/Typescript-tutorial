import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ProductProvider } from './Context/ProductsProvider.tsx'
import { CartProvider } from './Context/CartProvider.tsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
  <ProductProvider>
    <CartProvider>
    <App />
    </CartProvider>
  </ProductProvider>
  </BrowserRouter>
)
