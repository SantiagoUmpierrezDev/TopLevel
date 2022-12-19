import './App.css'
import { Navbar } from './components/navbar/Navbar'
import { ItemListContainer } from './components/slogan/ItemListContainer'




function App() {
  
  return (
    <div>
        <Navbar />
        <ItemListContainer greeting={"IT'S NOT JUST A GAME"} subGreeting = {"IT'S A COMPETITION"}/>
    </div>
  )
}

export default App
