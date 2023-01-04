import { configureStore } from '@reduxjs/toolkit';
import { basketSlice } from '../features/basket/basket-slice';

export const store = configureStore({
  reducer: {
    basket: basketSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
