import { createSlice } from "@reduxjs/toolkit";
import { productsActions } from "./productsreducer";

  const  notifySlice=createSlice({
    name:"Notify",
    initialState:{
        message: ""
    },
    reducers:{
       Add :(state,action)=>{
              state.message="Products Added SuucessFully"
       }
    },
    extraReducers: (builder)=>{
        builder.addCase(productsActions.addProducts, (state,action)=>{state.message="Product is Added"})
      }

})

export  const notifictionReducers=notifySlice.reducer;
export const notificationAction=notifySlice.actions;