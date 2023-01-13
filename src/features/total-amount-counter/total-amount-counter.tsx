import { RootState } from '@/store/configure-store';
import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

export function TotalAmountCounter() {
  const basket = (state: RootState) => state.basket;

  const basketProducts = createSelector(basket, (state) =>
    Object.values(state),
  );

  const selectTotalAmount = createSelector(basketProducts, (state) =>
    state.reduce((acc, cv: any) => acc + cv.amount, 0),
  );

  const totalAmount: any = useSelector(selectTotalAmount);

  return <span>{totalAmount}</span>;
}
