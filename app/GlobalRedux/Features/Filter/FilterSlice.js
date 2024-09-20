import { configureStore, createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: { filter: 'default' },
  reducers: {
    filter: (state,action) => { state.filter = action.payload; },
  },
});

export const { filter } = filterSlice.actions;
export default filterSlice.reducer
// export const store = configureStore({ reducer: { filter: filterSlice.reducer } });

