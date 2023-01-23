import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SortItem } from '../../shared/ui/select-form/select-form';

type InitialStateProps = {
  limit: number;
  sort: SortItem;
  search: string;
  page: number;
};

const LIMIT = 8;
const initialState: InitialStateProps = {
  limit: LIMIT,
  sort: {
    sortProperty: '',
  },
  search: '',
  page: 1,
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
    incrementPage: (state) => {
      state.page += 1;
    },
    decrementPage: (state) => {
      state.page -= 1;
    },
    setQueryProperties: (state, action: PayloadAction<any>) => {
      state.search = action.payload.searchValue;
      state.sort.sortProperty = action.payload.sortBy;
      state.page = Number(action.payload.page);
    },
  },
});

export const {
  setSort,
  setLimit,
  setSearch,
  incrementPage,
  decrementPage,
  setQueryProperties,
} = sortingSlice.actions;
export default sortingSlice.reducer;
