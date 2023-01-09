import { List } from '@/shared/ui/list';
import { Product } from '@/entities/product/types';
import { ProductCard } from '@/features/product-list/ui/product-card';
import { useFetchProductsQuery } from '../../api';
import styles from './styles.module.css';
import { useDispatch } from 'react-redux';
import { basketSlice } from '@/features/basket/store';

export function ProductList() {
  const dispatch = useDispatch();
  const { data: { products = [] } = {} } = useFetchProductsQuery();

  const handleAddClick = (product: Product) => () => {
    dispatch(basketSlice.actions.addProduct(product));
  };

  const handleDropClick = (id: number) => () => {
    dispatch(basketSlice.actions.dropProduct(id));
  };

  return (
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
  );
}
