import { Toolbar } from "@mui/material"
import { Container } from "@mui/system"
import {Route,Routes} from "react-router-dom"
import Header from "./components/Header"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import { About } from "./pages/About"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"

function App() {
  return (
    <ShoppingCartProvider>
    <Header/>
    <Toolbar/>
    <Container sx={{pt:2}}>
    <Routes>
       <Route  path="/"  element={<Home/>}  />
       <Route  path="/about"  element={<About/>}  />
       <Route  path="/store"  element={<Store/>}  />
    </Routes>
    </Container>
    </ShoppingCartProvider>
  )
}

export default App
