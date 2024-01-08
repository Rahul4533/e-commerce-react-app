import "./navbar.css";
import { Link, Outlet } from "react-router-dom";
export function Navbar() {
  return (
    <>
    <div className="nav-bar">
     <Link to={"/"} ><h4>E-commerce</h4> </Link>
      <h4>Products</h4>
      <h4>Add A Products</h4>
     <Link to={"/add"}> <img  src="https://cdn-icons-png.flaticon.com/128/12484/12484424.png"  alt="Add Button"/> </Link>
      <div className="user">
      <h3>{"Rahul"}</h3>
        <img src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" alt="User" title="User"/>
        </div>
    </div>
   
    <Outlet />
    </>
  );
}
