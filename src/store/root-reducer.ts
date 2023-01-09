import { combineReducers } from '@reduxjs/toolkit';
import { basketSlice } from '@/features/basket/store';
import { productListService } from '@/features/product-list';

export const rootReducer = combineReducers({
  basket: basketSlice.reducer,
  [productListService.reducerPath]: productListService.reducer,
});
