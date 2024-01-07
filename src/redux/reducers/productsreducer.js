import { createSlice } from "@reduxjs/toolkit"



 

 

 
 const productSlice=createSlice({
    name:"produc",
    initialState:{
        data: []
    },
    reducers:{
        products:(state,action)=>{
           state.data=action.payload;
        }
    }
 })

 export const productsReducer = productSlice.reducer;
 export const productsActions=productSlice.actions;

    
  

    
   