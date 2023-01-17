// import { Product } from '@/entities/product/types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSort } from '@/shared/ui/select-form/store';
import styles from './styles.module.css';

export interface SortItem {
  sortProperty: string;
}

export function SortingForm() {
  const dispatch = useDispatch();

  const handleSort = (event: React.ChangeEvent) => {
    const target = event.target as typeof event.target & { value: string };
    dispatch(setSort({ sortProperty: target.value }));
  };

  return (
    <form name="sortingProducts">
      <label>
        <select
          name="sortingProducts"
          id="sort-select"
          className={styles.selectForm}
          onChange={handleSort}
        >
          <option value="" disabled>
            Sort{' '}
          </option>
          <option value="price decrease">By price high to low</option>
          <option value="price increase">By price low to high</option>
          <option value="rating increase">By rating increase </option>
          <option value="rating decrease">By rating decrease </option>
          <option value="discountPercentage increase">
            By discount increase
          </option>
          <option value="discountPercentage decrease">
            By discount decrease
          </option>
        </select>
      </label>
    </form>
  );
}
