


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

 const initialState = {
    products: FetchData().then((data)=>data),
 }


 console.log(initialState.products)

    
  

    
   