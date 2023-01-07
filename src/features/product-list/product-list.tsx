import { List } from '../../shared/ui/list';
import { ProductCard } from '../../entities/product/ui/product-card/product-card';
import { useGetProductsQuery } from './product-listApi';
import styles from './product-list.module.css';
import { Product } from '../../entities/product/types';

export function ProductList() {
  const { data: { products } = {} } = useGetProductsQuery('/');

  return (
    <List className={styles.list}>
      {products?.map((product: Product) => (
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
