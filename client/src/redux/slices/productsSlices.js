import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  products: [],
  loading: false,
  error: false,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProductsPending: (state, action) => {
      return {
        ...state,
        loading: true,
        error: false,
      };
    },
    fetchProductsSuccess: (state, action) => {
      return {
        products: action.payload.products,
        loading: false,
        error: false,
      };
    },
    fetchProductsFailure: (state, action) => {
      return {
        ...state,
        loading: false,
        error: true,
      };
    },
  },
});

export const {
  fetchProductsPending,
  fetchProductsSuccess,
  fetchProductsFailure,
} = productsSlice.actions;

export default productsSlice.reducer;
