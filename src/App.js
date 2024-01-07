import Products from "./comonents/AddProduct/addproduct"
import Home from "./comonents/Home/home"
import { Navbar } from "./comonents/NavBar/navbar"
import { Provider } from "react-redux"
import { store } from "./redux/store/store"
export default function App(){
  return (
  <>
  <Provider store={store}>
  <Navbar />
  <Home/>
  <Products/>
  </Provider>
  </>

  )
}