import { configureStore } from '@reduxjs/toolkit';
import { basketSlice } from '../features/basket/basket-slice';
import { productListApi } from '../features/product-list/product-listApi';

export const store = configureStore({
  reducer: {
    basket: basketSlice.reducer,
    [productListApi.reducerPath]: productListApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productListApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
