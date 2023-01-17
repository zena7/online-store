import { useState } from 'react';
import { List } from '@/shared/ui/list';
import { Product } from '@/entities/product/types';
import { ProductCard } from '@/features/product-list/ui/product-card';
import { useFetchProductsQuery } from '@/features/product-list/service';
import { useDispatch } from 'react-redux';
import { basketSlice } from '@/features/basket/store';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/configure-store';

type ProductListProps = {
  page: number;
  limit: number;
  skip: number;
};

export function ProductList({ page, limit, skip }: ProductListProps) {
  const dispatch = useDispatch();
  const { data: { products = [] } = {}, isLoading } = useFetchProductsQuery({});
  const sort = useSelector((state: RootState) => state.sorting.sort);

  const handleAddClick = (product: Product) => () => {
    dispatch(basketSlice.actions.addProduct(product));
  };

  const handleDropClick = (id: number) => () => {
    dispatch(basketSlice.actions.dropProduct(id));
  };

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (products?.length === 0) {
    return <div> Products are over </div>;
  }

  const sortProductlist = (): Product[] => {
    const [value, operator]: string[] = sort.sortProperty.split(' ');
    const sortingProducts = [...products].sort((a, b) =>
      a[value as keyof Product] < b[value as keyof Product]
        ? -1
        : a[value as keyof Product] > b[value as keyof Product]
        ? 1
        : 0,
    );

    return operator === 'increase'
      ? sortingProducts
      : [...sortingProducts].reverse();
  };

  return (
    <>
      <div className={styles.containerSort}>
        {/* <form name="showNumbersOfProducts">
          <label>
            <select
              name="sortingProducts"
              id="sort-select"
              value={limit}
              className={styles.selectForm}
              onChange={handleSetLimitProducts}
            >
              <option value="48"> Show 48 </option>
              <option value="64">Show 64</option>
              <option value="80">Show 80</option>
              <option value="100">Show 100</option>
            </select>
          </label>
        </form> */}
      </div>
      <List className={styles.list}>
        {(sort.property !== '' ? sortProductlist() : products)
          .slice(skip, skip + limit)
          ?.map((product) => (
            <li className={styles.item} key={product.id}>
              <ProductCard
                images={product.images}
                title={product.title}
                brand={product.brand}
                price={product.price}
                onAddClick={handleAddClick(product)}
                onDropClick={handleDropClick(product.id)}
              />
            </li>
          ))}
      </List>
    </>
  );
}
