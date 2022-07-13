import { createSlice } from "@reduxjs/toolkit";
import { productAction, products, User } from "../shared/share";
import type { RootState } from "../app/store";

const initialState: productAction = {
  products: [],
  wishlist: [],
};

export const authSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action: { payload: products }) => {
      state.products.push(action.payload);
    },
    addWishlist: (state, action: { payload: products }) => {
      state.wishlist.push(action.payload);
    },
  },
});

export const productSelector = (state: RootState) => state.products;

export default authSlice.reducer;
