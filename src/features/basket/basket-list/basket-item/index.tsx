import styles from './styles.module.css';
import { Product } from '@/entities/product/types';
import { Button } from '@/shared/ui/button';

type BasketItemProps = Omit<
  Product & {
    index: number;
    amount: number;
    onIncrease: () => void;
    onDecrease: () => void;
  },
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
  onIncrease,
  onDecrease,
}: BasketItemProps) => {
  return (
    <div className={styles.item}>
      <div className={styles.index}>{index}</div>
      <img src={thumbnail} alt={title} className={styles.image} />
      <div className={styles.details}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
        <p className={styles.rating}>Rating: {rating}</p>
        <p className={styles.discount}>Discount: {discountPercentage}</p>
      </div>
      <div className={styles.stockPriceContainer}>
        <div className={styles.stock}>In stock: {stock}</div>
        <Button className={styles.button} onClick={onIncrease}>
          +
        </Button>
        <div className={styles.amount}>Quantity: {amount}</div>
        <Button className={styles.button} onClick={onDecrease}>
          -
        </Button>
        <div className={styles.price}>Price: {price}$</div>
      </div>
    </div>
  );
};

export default BasketItem;
