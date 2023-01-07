import { List } from '@/shared/ui/list';
import { Product } from '@/entities/product/types';
import { ProductCard } from '@/entities/product/ui/product-card/product-card';
import { useFetchProductsQuery } from '../service';
import styles from './styles.module.css';
import { useDispatch } from 'react-redux';
import { basketSlice } from '@/features/basket/basket-slice';

export function ProductList() {
  const { data: { products } = {} } = useFetchProductsQuery();

  const dispatch = useDispatch();

  const handleAddClick = (product: Product) => () => {
    dispatch(basketSlice.actions.addProduct(product));
  };
  const handleDropClick = (id: number) => () => {
    dispatch(basketSlice.actions.dropProduct(id));
  };

  return (
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
  );
}
