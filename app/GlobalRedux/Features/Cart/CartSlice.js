import { configureStore, createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { cart: 'default' },
  reducers: {
    cart: (state,action) => { state.cart = action.payload; },
  },
});

export const { cart } = cartSlice.actions;
export default cartSlice.reducer
