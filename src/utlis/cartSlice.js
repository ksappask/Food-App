import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      //state => above initialState
      //action => data from different components to update here
      state.items.push(action.payload);
    },
    clearCart: (state) => {
      // clear the items adde
      state.items = [];
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
