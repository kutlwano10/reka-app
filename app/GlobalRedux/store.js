import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './Features/Filter/FilterSlice';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
  },
});

