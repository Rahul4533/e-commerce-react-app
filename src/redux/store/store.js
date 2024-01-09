import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "../reducers/productsreducer";
import { Reducers } from "../reducers/notification";
export const store=configureStore({
    reducer:{
          productsReducer,
          Reducers
    }
})