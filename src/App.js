import Products from "./comonents/AddProduct/addproduct"
import Home from "./comonents/Home/home"
import { Navbar } from "./comonents/NavBar/navbar"

export default function App(){
  return (
  <>
  <Navbar />
  <Home/>
  <Products/>
  </>

  )
}