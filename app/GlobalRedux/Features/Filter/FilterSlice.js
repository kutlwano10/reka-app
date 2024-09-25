import { configureStore, createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: { filter: 'default' ,search1:null},
  reducers: {
    filter: (state,action) => { state.filter = action.payload; },
    search1:(state,action)=>{state.search1 = action.payload}
  },
});
export const { filter,search1 } = filterSlice.actions;
export default filterSlice.reducer
// export const store = configureStore({ reducer: { filter: filterSlice.reducer } });

