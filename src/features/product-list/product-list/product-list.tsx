import { List } from '@/shared/ui/list';
import { ProductCard } from '@/entities/product/ui/product-card/product-card';
import { useFetchProductsQuery } from '../service';
import styles from './styles.module.css';

export function ProductList() {
  const { data: { products } = {} } = useFetchProductsQuery();

  return (
    <List className={styles.list}>
      {products?.map((product) => (
        <li className={styles.item} key={product.id}>
          <ProductCard
            images={product.images}
            title={product.title}
            brand={product.brand}
            price={product.price}
          />
        </li>
      ))}
    </List>
  );
}
