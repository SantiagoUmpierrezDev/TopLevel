import './App.css'
import { Navbar } from './components/navbar/Navbar'
import { ItemDetailContainer} from "./components/itemDetailContainer/ItemDetailContainer"
import { ItemListContainer } from './components/itemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";




function App() {
  
  return (
    <BrowserRouter>
    
    <Navbar />

    <Routes>
      <Route path='/' element = { <ItemListContainer/> }/>
      <Route path="/products/:categoryId" element={ <ItemListContainer /> }/>
      <Route path="/detail/:itemId" element={ <ItemDetailContainer />} />
      <Route path="*" element={ <Navigate to={"/"}/> }/>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
