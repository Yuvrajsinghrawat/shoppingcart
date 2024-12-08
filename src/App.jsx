import { Routes,Route } from 'react-router-dom'
import CartList from './pages/CartList'
import ProductList from './pages/ProductList'
import ProductDetail from './pages/ProductDetail'
import './App.css'

function App() {

  return (
    <>
      <h1>App</h1>
      <Routes>
        <Route path="cartList" element={<CartList/>}/>
        <Route path="productList" element={<ProductList/>}/>
        <Route path="productDetail/:id" element={<ProductDetail/>}/>
      </Routes>
    </>
  )
}

export default App
