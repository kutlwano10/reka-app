import { configureStore, createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: { filter: 'default' },
  reducers: {
    increment: (state) => { state.filter = 1; },
    decrement: (state) => { state.filter = 1; },
  },
});

export const { increment, decrement } = filterSlice.actions;
export const store = configureStore({ reducer: { filter: filterSlice.reducer } });

