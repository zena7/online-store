import { combineReducers } from '@reduxjs/toolkit';
import { basketSlice } from '@/features/basket/store';
import { productListApi } from '@/features/product-list';

export const rootReducer = combineReducers({
  basket: basketSlice.reducer,
  [productListApi.reducerPath]: productListApi.reducer,
});
