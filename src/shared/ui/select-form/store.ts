import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SortItem } from './select-form';

type InitialStateProps = {
  limit: number;
  sort: SortItem;
};

const initialState: InitialStateProps = {
  limit: 8,
  sort: {
    sortProperty: '',
  },
};

export const sortingSlice = createSlice({
  name: 'sorting',
  initialState,
  reducers: {
    setLimit: (state, action: PayloadAction<number>) => {
      state.limit = action.payload;
    },
    setSort: (state, action: PayloadAction<SortItem>) => {
      state.sort = action.payload;
    },
  },
});

export const { setSort, setLimit } = sortingSlice.actions;
export default sortingSlice.reducer;
