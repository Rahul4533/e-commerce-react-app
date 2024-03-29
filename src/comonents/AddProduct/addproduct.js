import { useState } from "react";
import "./product.css";
import { useDispatch } from "react-redux";
import { productsActions } from "../../redux/reducers/productsreducer";
export default function Products() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [des, setDes] = useState("");
  const [price, setPrice] = useState(0);
  const [rate, setRate] = useState(0);

  const handelform = (e) => {
    e.preventDefault();
    const products = {
      category: name,
      description: des,
      price: price,
      rating: rate,
    };
    dispatch(productsActions.addProducts(products));
  };

  return (
    <>
      <form onSubmit={handelform}>
        <div className="products">
          <h1>Add a Product</h1>
          <h3>
            <label>Name</label>
          </h3>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <h3>
            <label>Description</label>
          </h3>
          <input
            type="text"
            value={des}
            onChange={(e) => setDes(e.target.value)}
          />
          <h3>
            <label>Price</label>
          </h3>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <h3>
            <label>Rating</label>
          </h3>
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />

          <button>ADD</button>
        </div>
      </form>
    </>
  );
}
