import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: []
  },
  reducers: {

    addItem: (state, action) => {
      const item = state.items.find(i => i.id === action.payload.id);

      if (item) {
        item.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    updateQuantity: (state, action) => {
      const item = state.items.find(i => i.id === action.payload.id);

      if (item) {
        item.quantity = action.payload.quantity;
      }
    },

    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    }

  }
});

export const { addItem, updateQuantity, removeItem } = CartSlice.actions;

export default CartSlice.reducer;
