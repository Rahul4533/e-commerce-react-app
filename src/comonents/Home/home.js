import { useEffect, useState } from "react";
import "./home.css";
export default function Home() {
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    async function FetchData() {
      try {
       
       const response=await fetch("https://fakestoreapi.com/products");
       if(!response.ok){
        throw new Error("Not Abel to fetch the data !!");
       }

       const result=await response.json();
       setProducts(result);
      } catch (error) {
        console.log(error.message);

      }
    }

    FetchData();
  }, []);
  return <>
  {
     Products.map((products)=>{
     return (
     <div className="container">
      <div className="box">
      <img src={products.image}alt="products" />
      </div>
      
     </div>
     )
     }
     
     )

  }
  </>;
}
