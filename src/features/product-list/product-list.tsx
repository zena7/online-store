import { List } from '../../shared/ui/list';
import { ProductCard } from '../../entities/product/ui/product-card/product-card';
import styles from './product-list.module.css';
import { useGetProductsQuery } from '../../shared/api/api-slice';

export function ProductList() {
  const { data: response } = useGetProductsQuery();

  return (
    <List className={styles.list}>
      {response?.products?.map((product) => (
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
