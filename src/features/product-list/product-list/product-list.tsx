import { List } from '@/shared/ui/list';
import { Product } from '@/entities/product/types';
import { ProductCard } from '@/entities/product/ui/product-card/product-card';
import { useFetchProductsQuery } from '../service';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { basketSlice } from '@/features/basket/basket-slice';
import { Button } from '@/shared/ui/button';
import styles from './styles.module.css';

export function ProductList() {
  const [page, setPage] = useState(1);
  const {
    data: { products, total } = {},
    isLoading,
    isFetching,
  } = useFetchProductsQuery(page);

  console.log('PAGE:', products);
  // const totalPages = Math.ceil(total > 0 && total/ 24);
  const dispatch = useDispatch();

  const handleAddClick = (product: Product) => () => {
    dispatch(basketSlice.actions.addProduct(product));
  };
  const handleDropClick = (id: number) => () => {
    dispatch(basketSlice.actions.dropProduct(id));
  };
  const handlerNext = (event: MouseEvent) => {
    event.preventDefault();
    console.log('Next', event);
  };
  // const handlerPrev = (event: MouseEvent) => {
  //   event.preventDefault();
  //   console.log('Prev', event);
  // };

  if (isLoading) {
    return <div>Loading</div>;
  }
  if (!products) {
    return <div>No products </div>;
  }

  return (
    <>
      <List className={styles.list}>
        {products?.map((product) => (
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
      <div className={styles.pagination}>
        <Button
          className={styles.btnPagination}
          onClick={() => setPage((prev) => prev - 1)}
          // isLoading={isFetching}
          disabled={page === 1}
        >
          Prev
        </Button>
        <Button
          className={styles.btnPagination}
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next
        </Button>
      </div>
    </>
  );
}
