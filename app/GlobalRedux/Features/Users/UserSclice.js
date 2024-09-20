import { configureStore, createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: { name: '',surname:'',loggedIn:false, },
  reducers: {
    login:(state,action)=>{state.name=action.payload.name;state.surname=action.payload.surname;state.loggedIn=true},
    logout:(state,action)=>{state.name='';state.surname='';state.loggedIn=false},
  },
});

export const { login,logout } = userSlice.actions;
export default userSlice.reducer
// export const store = configureStore({ reducer: { filter: filterSlice.reducer } });