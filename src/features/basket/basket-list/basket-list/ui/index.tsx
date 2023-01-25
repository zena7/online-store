import { List } from '@/shared/ui/list';
import styles from './styles.module.css';
import { RootState } from '@/store/configure-store';
import { createSelector } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import BasketItem from '../../basket-item';
import { basketSlice } from '@/features/basket/store';

export function BasketList() {
  const basket = (state: RootState) => state.basket;

  const selectBasketProducts = createSelector(basket, (state) =>
    Object.values(state),
  );

  const basketProducts = useSelector(selectBasketProducts);

  const dispatch = useDispatch();

  const increaseHandler = (id: number) => () => {
    console.log(`increase: ${id}`);
    dispatch(basketSlice.actions.increaseAmount(id));
  };

  const decreaseHandler = (id: number) => () => {
    dispatch(basketSlice.actions.decreaseAmount(id));
  };

  return (
    <List className={styles.list}>
      {basketProducts[0]
        ? basketProducts.map((product: any, index) => (
            <li key={product.id}>
              <BasketItem
                index={index + 1}
                title={product.title}
                description={product.description}
                price={product.price}
                rating={product.rating}
                stock={product.stock}
                discountPercentage={product.discountPercentage}
                amount={product.amount}
                thumbnail={product.thumbnail}
                onIncrease={increaseHandler(product.id)}
                onDecrease={decreaseHandler(product.id)}
              />
            </li>
          ))
        : 'Your basket is empty'}
    </List>
  );
}
