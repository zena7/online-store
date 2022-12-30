import { Product } from './mock-product-type';
import { useSelector, useDispatch } from 'react-redux';
import { basketSlice } from './basket-slice';
import { selectAll, selectById } from './selectors';
import { RootState } from '../../shared/store';
import { Container } from '../../shared/ui/container';

const actions = basketSlice.actions;

export function Basket() {
  const dispatch = useDispatch();
  const add = (product: Product): void => {
    dispatch(actions.addProduct(product));
  };
  const drop = (id: number): void => {
    dispatch(actions.dropProduct(id));
  };
  const removeAll = (): void => {
    dispatch(actions.reset);
  };
  const increaseCount = (id: number): void => {
    dispatch(actions.increaseAmount(id));
  };
  const decreaseCount = (id: number): void => {
    dispatch(actions.decreaseAmount(id));
  };

  return <></>;
}
