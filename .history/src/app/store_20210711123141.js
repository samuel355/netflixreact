import { configureStore } from '@reduxjs/toolkit';
import useerReducer from '../features/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
