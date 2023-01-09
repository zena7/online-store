import { useState } from 'react';
import { List } from '@/shared/ui/list';
import { Product } from '@/entities/product/types';
import { ProductCard } from '@/features/product-list/ui/product-card';
import { useFetchProductsQuery } from '../../service';
import styles from './styles.module.css';
import { useDispatch } from 'react-redux';
import { basketSlice } from '@/features/basket/store';

export function ProductList() {
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();
  const { data: { limit = 0, skip = 0, total, products = [] } = {} } =
    useFetchProductsQuery(page);

  const handlePrevClick = () => {
    setPage((prevState) => prevState - 1);
  };

  const handleNextClick = () => {
    setPage((prevState) => prevState + 1);
  };

  const handleAddClick = (product: Product) => () => {
    dispatch(basketSlice.actions.addProduct(product));
  };

  const handleDropClick = (id: number) => () => {
    dispatch(basketSlice.actions.dropProduct(id));
  };

  return (
    <>
      <List className={styles.list}>
        {products.map((product) => (
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
      <button onClick={handlePrevClick} disabled={skip === 0}>
        prev
      </button>
      <button onClick={handleNextClick} disabled={limit + skip === total}>
        next
      </button>
    </>
  );
}
