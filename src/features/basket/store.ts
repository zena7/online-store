import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@/entities/product/types';

const initialState: Record<
  string,
  Product & { amount: number; added?: boolean }
> = {};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state[action.payload.id] = {
        ...action.payload,
        amount: 1,
        added: true,
      };
    },
    dropProduct: (state, action: PayloadAction<number>) => {
      delete state[action.payload];
    },
    increaseAmount: (state, action: PayloadAction<number>) => {
      state[action.payload] = {
        ...state[action.payload],
        amount: state[action.payload].amount + 1,
      };
    },
    decreaseAmount: (state, action: PayloadAction<number>) => {
      const amount = state[action.payload].amount;
      amount === 1
        ? delete state[action.payload]
        : (state[action.payload] = {
            ...state[action.payload],
            amount: state[action.payload].amount - 1,
          });
    },
    reset: (state) => {
      state = initialState;
    },
  },
});
