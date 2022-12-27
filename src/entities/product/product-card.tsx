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
      <p>{product.title}</p>
      <p>{product.brand}</p>
      <p>{product.price} $</p>
    </>
  );
}
