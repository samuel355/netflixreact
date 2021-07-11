import { configureStore } from '@reduxjs/toolkit';
import usererReducer from '../features/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
