import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { productsActions } from "../../redux/reducers/productsreducer";
import { useSelector } from "react-redux";
import "./home.css";
import StarRating from "./starrating";
export default function Home() {
 
  const dispatch = useDispatch();
  const Item = useSelector((state) => state.productsReducer.data);
  const [searchdata,setSearchdata]=useState("");
  const [Products, setProducts] = useState([]);

   

   //Search Function To Filter the Result based on the User Input

   function searchProduct() {
  const FilterProducts=  Item.filter((product) =>
    product.category.toLowerCase().includes(searchdata.toLowerCase())
  );
    
     setProducts(FilterProducts);
   }

   




  useEffect(() => {
    // fetch data
    async function FetchData() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Not Abel to fetch the data !!");
        }

        const result = await response.json();
        return result;
      } catch (error) {
        console.log(error.message);
      }
    }

    FetchData().then((data)=>{setProducts(data)});
  }, [searchdata]);
  dispatch(productsActions.products(Products));
  console.log(Item);
  return (
    <>
      <div className="search">
        <input type="text" placeholder="Search"
        value={searchdata} onChange={(e)=>setSearchdata(e.target.value)}
        />
        <button onClick={searchProduct}>Search</button>
      </div>
      <div>
        {Item.map((products, i) => {
          return (
            <div className="container" key={i}>
              <div className="box">
                <img src={products.image} alt="products" />

                <div className=" Title">
                  <h3>{products.title}</h3>
                  <h1>{"\u20B9" + products.price}</h1>

                  <StarRating rating={products.rating.rate} />
                </div>

                <div className="discription">
                  {"Descriptions:"}
                  <br />
                  {products.description}
                </div>

                <div className="pencile">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/588/588395.png"
                    alt="pencile"
                  />
                </div>
              </div>
            </div>
          );
        })}
        
      </div>
    </>
  );
}
