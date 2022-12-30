import { Product } from '../../types';
import styles from './product-card.module.css';

type ProductCardProps = Pick<Product, 'images' | 'title' | 'brand' | 'price'>;

export function ProductCard({ images, title, brand, price }: ProductCardProps) {
  return (
    <div className={styles.card}>
      <img src={images[0]} alt={title} className={styles.img} />
      <div className={styles.description}>
        <p className={styles.title}>
          {title.length > 20 ? `${title.slice(0, 20)}` : title}
        </p>
        <p>{brand}</p>
        <p className={styles.price}>{price} $</p>
      </div>
    </div>
  );
}
