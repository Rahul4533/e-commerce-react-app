import { createSlice } from "@reduxjs/toolkit"



 

 const initialState = {
    products: {},
 }

 const productSlice=createSlice({
    name:"produc",
    initialState,
    reducers:{
        products:(state,action)=>{
            state.products.push({
                ...action.payload
            })
        }
    }
 })

 export const productsReducer = productSlice.reducer;
 export const productsActions=productSlice.actions;

    
  

    
   