import { RootState } from '@/store/configure-store';
import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

export function TotalPriceCounter() {
  const basket = (state: RootState) => state.basket;

  const basketProducts = createSelector(basket, (state) =>
    Object.values(state),
  );

  const selectTotalPrice = createSelector(basketProducts, (state) =>
    state.reduce((acc, cv: any) => acc + cv.price, 0),
  );

  const totalPrice: any = useSelector(selectTotalPrice);

  return <span>{totalPrice}</span>;
}
