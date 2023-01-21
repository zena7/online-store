import { Button } from '@/shared/ui/button';
import { Product } from '@/entities/product/types';
import styles from './styles.module.css';
import { useState } from 'react';

type ProductCardProps = Pick<
  Product,
  'images' | 'title' | 'brand' | 'price'
> & {
  onAddClick: () => void;
  onDropClick: () => void;
};

export function ProductCard({
  images,
  title,
  brand,
  price,
  onAddClick,
  onDropClick,
}: ProductCardProps) {
  const computedTitle = title.length > 20 ? title.slice(0, 20) : title;
  const [added, setAdded] = useState(false);

  return (
    <div className={styles.productContainer}>
      <div className={styles.card}>
        <img src={images[0]} alt={title} className={styles.img} />
        <div className={styles.description}>
          <p className={styles.title}>{computedTitle}</p>
          <p>{brand}</p>
          <p className={styles.price}>{price} $</p>
        </div>
      </div>
      <div className={styles.containerBtns}>
        <Button
          className={styles.btn}
          onClick={() => {
            added ? onDropClick() : onAddClick();
            setAdded(!added);
          }}
        >
          {added ? 'Drop' : 'Add'}
        </Button>
      </div>
    </div>
  );
}
