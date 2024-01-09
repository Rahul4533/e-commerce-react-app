import { createSlice } from "@reduxjs/toolkit";
import { productsActions } from "./productsreducer";


const initialState={
    message: "",
}

  const  notifySlice=createSlice({
    name:"Notify",
    initialState,
    reducers:{
         reset :(state,action)=>{
              state.message="";
       }
    },
    extraReducers: (builder)=>{
        builder.addCase(productsActions.addProducts, (state,action)=>{state.message="Product is Added"})
      }

})

export  const Reducers=notifySlice.reducer;
export const notificationAction=notifySlice.actions;