import { Product } from './mock-product-type';
import { useSelector, useDispatch } from 'react-redux';
import { basketSlice } from './basket-slice';
import { selectAll, selectById } from './selectors';
import { RootState } from '../../shared/store';
import { Container } from '../../shared/ui/container';
import { BasketList } from './basket-list';
import { List } from '../../shared/ui/list';

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
    dispatch(actions.removeAll);
  };
  const increaseCount = (id: number): void => {
    dispatch(actions.increaseAmount(id));
  };
  const decreaseCount = (id: number): void => {
    dispatch(actions.decreaseAmount(id));
  };

  return (
    <Container>
      {/* <List></List> */}

      {/* const products={useSelector<RootState, (Product & { amount: number })[]>(selectAll)}[1].price; */}
      <BasketList />

      {/* <MockComp value={useSelector<RootState, (Product & { amount: number })[]>(selectAll)}></MockComp>
            <MockComp value={useSelector(selectById(id))}></MockComp>
            <MockComp value={useSelector<RootState, ProductBasket[]>(selectAll).reduce((acc, cv) => acc + cv.price, 0)}></MockComp>
            <MockComp value={useSelector<RootState, ProductBasket[]>(selectAll).reduce((acc, cv) => acc + cv.amount, 0)}></MockComp> */}
    </Container>
  );
}
