import { RootState } from '../../shared/store';
import { Product } from './mock-product-type';

const selectAll = (state: RootState): (Product & { amount: number })[] =>
  Object.values(state.basket);
const selectById = (id: number) => (state: RootState) => {
  return state.basket[id];
};

export { selectAll, selectById };
