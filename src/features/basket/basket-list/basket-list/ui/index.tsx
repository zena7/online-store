import { List } from '@/shared/ui/list';
import styles from './styles.module.css';
import { RootState } from '@/store/configure-store';
import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import BasketItem from '../../basket-item';

export function BasketList() {
  const basket = (state: RootState) => state.basket;

  const selectBasketProducts = createSelector(basket, (state) =>
    Object.values(state),
  );

  const basketProducts = useSelector(selectBasketProducts);

  return (
    <List className={styles.list}>
      {basketProducts.map((product: any, index) => (
        <li key={product.id}>
          <BasketItem
            index={index + 1}
            title={product.title}
            description={product.description}
            price={product.price}
            rating={product.rating}
            stock={product.stock}
            discountPercentage={product.discountPercentage}
            amount={3}
            thumbnail={product.thumbnail}
          />
        </li>
      ))}
    </List>
  );
}
