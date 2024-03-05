import { configureStore } from '@reduxjs/toolkit';
import financeReducer from '../features/finance'

export const store = configureStore({
  reducer: {
    finance: financeReducer,
  },
});
