import { Product } from './types';
import styles from './product.module.css';

interface ProductProps {
  product: Product;
}

export function ProductCard({ product }: ProductProps) {
  return (
    <>
      <img
        src={product.images[0]}
        alt={product.title}
        className={styles.productImg}
      />
      <p className={styles.productTitle}>{product.title}</p>
      <p>{product.brand}</p>
      <p className={styles.productCost}>{product.price} $</p>
    </>
  );
}
