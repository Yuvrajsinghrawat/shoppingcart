import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import ShoppingCartProvider from './context/ShoppingCartContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ShoppingCartProvider>
    <App />
  </ShoppingCartProvider>
  </BrowserRouter>
)
