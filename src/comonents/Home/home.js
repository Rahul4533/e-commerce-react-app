import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { productsReducer,productsActions } from "../../redux/reducers/productsreducer";
import "./home.css";
import StarRating from "./starrating";
export default function Home() {
  const dispatch=useDispatch();
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    // fetch data
    async function FetchData() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Not Abel to fetch the data !!");
        }

        const result = await response.json();
        setProducts(result);
      } catch (error) {
        console.log(error.message);
      }
    }

    FetchData();
  }, []);
  console.log(Products);
  return (
    <>
      {Products.map((products, i) => {
        return (
          <div className="container" key={i}>
            <div className="box">
              <img src={products.image} alt="products" />

              <div className=" Title">
                <h3>{products.title}</h3>
                <h1>{"\u20B9" + products.price}</h1>

                <StarRating rating={products.rating.rate} />
                
              </div>

              <div     className="discription">
               
                {"Descriptions:"}
                <br />
                {products.description}
                
              </div>
              
                
              <div className="pencile">
              <img  src="https://cdn-icons-png.flaticon.com/128/588/588395.png" alt="pencile" />
              </div>
            </div>
            
            
          </div>
        );
      })}
    </>
  );
}
