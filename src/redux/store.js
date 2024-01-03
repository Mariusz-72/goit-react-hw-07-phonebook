import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '../Redux/root-reducer';

export const store = configureStore({
  reducer: rootReducer,
});