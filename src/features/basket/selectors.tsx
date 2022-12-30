import { RootState } from '../../shared/store';
import { Product } from '../../entities/product/types';

const selectAll = (state: RootState): (Product & { amount: number })[] =>
  Object.values(state.basket);
const selectById = (id: number) => (state: RootState) => {
  return state.basket[id];
};

export { selectAll, selectById };
