import { createSelector } from '@reduxjs/toolkit';

export const getProductById = createSelector(
  [(state) => state.basket, (_, id) => id],
  (basket, id) => basket[id],
);
