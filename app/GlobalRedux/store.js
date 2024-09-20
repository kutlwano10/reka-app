import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './Features/Filter/FilterSlice';
import userReducer from './Features/Users/UserSclice'

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    user:userReducer
  },
});

