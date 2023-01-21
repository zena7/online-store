import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SortItem } from './ui/select-form';

type InitialStateProps = {
  limit: number;
  sort: SortItem;
  search: string;
};

const LIMIT = 8;
const initialState: InitialStateProps = {
  limit: LIMIT,
  sort: {
    sortProperty: '',
  },
  search: '',
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
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

export const { setSort, setLimit, setSearch } = sortingSlice.actions;
export default sortingSlice.reducer;
