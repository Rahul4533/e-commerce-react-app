import Products from "./comonents/AddProduct/addproduct";
import Home from "./comonents/Home/home";
import { Navbar } from "./comonents/NavBar/navbar";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
export default function App() {
  // const router=createBrowserRouter([
  //   {
  //     path:"/",element:<Navbar/>,children:[
  //      {
  //         index:true,element:<Home/>
  //       }
  //     ],

  //   },{
  //     path:"products",element:<Home/>
  //   },
  //   {
  //     path:"add",element:<Products/>
  //   }

  // ]
  // )

  const route = createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index={true} element={<Home />} />
      <Route path="add" element={<Products />} />
    </Route>
  );
  const router = createBrowserRouter(route);
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}
