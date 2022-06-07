import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartProducts: [],
  },
  reducers: {
    setCart: (state, action) => {
      state.cartProducts = [...state.cartProducts, action.payload];
    },
    setCartDeleted: (state, action) => {
      state.cartProducts = action.payload;
    },
  },
});

export const { setCart } = cartSlice.actions;
export const { setCartDeleted } = cartSlice.actions;

export default cartSlice.reducer;
