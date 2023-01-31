import { RootState } from '@/store/configure-store';
import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

type CounterProps = {
  className?: string;
};

export function TotalPriceCounter({ className }: CounterProps) {
  const basket = (state: RootState) => state.basket;

  const basketProducts = createSelector(basket, (state) =>
    Object.values(state),
  );

  const selectTotalPrice = createSelector(basketProducts, (state) =>
    state.reduce((acc, cv: any) => acc + cv.price, 0),
  );

  const totalPrice: any = `${useSelector(selectTotalPrice)} $`;

  return (
    <span className={className}>
      {parseInt(totalPrice) !== 0 && totalPrice}{' '}
    </span>
  );
}
