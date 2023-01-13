import styles from './styles.module.css';
import { Product } from '@/entities/product/types';
import { Button } from '@/shared/ui/button';

type BasketItemProps = Omit<
  Product & { index: number; amount: number },
  'id' | 'brand' | 'category' | 'images'
>;

const BasketItem = ({
  index,
  title,
  description,
  price,
  rating,
  stock,
  discountPercentage,
  amount,
  thumbnail,
}: BasketItemProps) => {
  return (
    <div className={styles.item}>
      <div className={styles.index}>{index}</div>
      <img src={thumbnail} alt={title} className={styles.image} />
      <div className={styles.details}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
        <p className={styles.rating}>{rating}</p>
        <p className={styles.discount}>{discountPercentage}</p>
      </div>
      <div className={styles.stockPriceContainer}>
        <div className={styles.stock}>{stock}</div>
        <Button>+</Button>
        <div className={styles.amount}>{amount}</div>
        <Button>-</Button>
        <div className={styles.price}>{price}</div>
      </div>
    </div>
  );
};

export default BasketItem;
