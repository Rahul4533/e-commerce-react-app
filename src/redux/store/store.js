import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "../reducers/productsreducer";
export const store=configureStore({
    reducer:{
          productsReducer
    }
})