import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "produc",
  initialState: {
    data: [],
  },
  reducers: {
    products: (state, action) => {
      state.data = action.payload;
    },
    addProducts: (state, action) => {
      console.log(action.payload);
      state.data.concat(action.payload);
    },
  },

  
});

export const productsReducer = productSlice.reducer;
export const productsActions = productSlice.actions;
