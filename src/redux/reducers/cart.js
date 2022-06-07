import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartProducts: [],
  },
  reducers: {
    setCart: (state, action) => {
      const copy = state.cartProducts.slice();
      copy.push(action.payload);
      state.cartProducts = copy;
    },
  },
});

export const { setCart } = cartSlice.actions;

export default cartSlice.reducer;
