import './App.css'
import { Navbar } from './components/navbar/Navbar'
import { ItemDetailContainer} from "./components/itemDetailContainer/ItemDetailContainer"
import { ItemListContainer } from './components/itemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from "./context/cartContext"
import { Cart } from "./components/cart/cart"
import { Checkout } from './components/checkout/Checkout';
import { Footer } from './components/footer/footer'


function App() {
  
  return (

    < CartProvider >

      <BrowserRouter>
      
        <Navbar />

        <Routes>
          <Route path='/' element = { <ItemListContainer/> }/>
          <Route path="/products/:categoryId" element={ <ItemListContainer /> }/>
          <Route path="/detail/:itemId" element={ <ItemDetailContainer />} />
          <Route path="/cart" element={ <Cart /> } />
          <Route path='/checkout' element = { <Checkout /> } />
          <Route path="*" element={ <Navigate to={"/"}/> }/>
        </Routes>

        <Footer />

      </BrowserRouter>
    
    </CartProvider>
  )
}

export default App
