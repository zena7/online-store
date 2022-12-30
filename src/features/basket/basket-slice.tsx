import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from './mock-product-type';

const initialState: Record<string, Product & { amount: number }> = {};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state[action.payload.id] = {
        ...action.payload,
        amount: 1,
      };
    },
    dropProduct: (state, action: PayloadAction<number>) => {
      delete state[action.payload];
    },
    increaseAmount: (state, action: PayloadAction<number>) => {
      state[action.payload] = {
        ...state[action.payload],
        amount: state[action.payload].amount++,
      };
    },
    decreaseAmount: (state, action: PayloadAction<number>) => {
      state[action.payload] = {
        ...state[action.payload],
        amount: state[action.payload].amount--,
      };
    },
    reset: (state, action) => {
      state = initialState;
    },
  },
});
