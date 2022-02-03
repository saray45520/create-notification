import { configureStore } from '@reduxjs/toolkit';
import navbarReducer from './NavberSlice';

export const store = configureStore({
  reducer: {
    navbar: navbarReducer,
  },
});
