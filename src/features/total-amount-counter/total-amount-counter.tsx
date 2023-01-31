import { RootState } from '@/store/configure-store';
import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import styles from './styles.module.css';

type CounterProps = {
  className?: string;
};

export function TotalAmountCounter({ className }: CounterProps) {
  const basket = (state: RootState) => state.basket;

  const basketProducts = createSelector(basket, (state) =>
    Object.values(state),
  );

  const selectTotalAmount = createSelector(basketProducts, (state) =>
    state.reduce((acc, cv: any) => acc + cv.amount, 0),
  );

  const totalAmount: any = useSelector(selectTotalAmount);
  return (
    <span
      className={clsx(
        totalAmount !== 0 && styles.count,
        className && className,
      )}
    >
      {totalAmount !== 0 && totalAmount}
    </span>
  );
}
