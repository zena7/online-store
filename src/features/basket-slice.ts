import { createSlice } from '@reduxjs/toolkit';

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    add(state) {
      return state;
    },
  },
});

export const { add } = basketSlice.actions;

export default basketSlice.reducer;
