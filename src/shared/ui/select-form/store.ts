import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SortItem } from './select-form';

const initialState: { sort: SortItem } = {
  sort: {
    sortProperty: '',
  },
};

export const sortingSlice = createSlice({
  name: 'sorting',
  initialState,
  reducers: {
    setSort: (state, action: PayloadAction<SortItem>) => {
      state.sort = action.payload;
    },
  },
});

export const { setSort } = sortingSlice.actions;
export default sortingSlice.reducer;
