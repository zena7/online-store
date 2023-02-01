import { Button } from '@/shared/ui/button';
import { Product } from '@/entities/product/types';
import { useState } from 'react';
import { IconRaiting } from '@/features/product-list/ui/product-card/assets/iconRaiting';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import { getProductById } from '@/shared/selector';

type ProductCardProps = Pick<
  Product,
  'images' | 'title' | 'brand' | 'price' | 'rating'
> & {
  onClick: () => void;
  onAddClick: () => void;
  onDropClick: () => void;
  id: number;
};

export function ProductCard({
  id,
  images,
  title,
  brand,
  price,
  rating,
  onClick,
  onAddClick,
  onDropClick,
}: ProductCardProps) {
  const computedTitle = title.length > 20 ? title.slice(0, 20) : title;
  const [added, setAdded] = useState(
    useSelector((state) => getProductById(state, id)),
  );

  return (
    <div className={styles.productContainer}>
      <div className={styles.info} onClick={onClick}>
        <div className={styles.raiting}>
          <p>
            <IconRaiting className={styles.raitingIcon} />
            {rating}
          </p>
        </div>
        <div className={styles.card}>
          <img src={images[0]} alt={title} className={styles.img} />
          <div className={styles.description}>
            <p className={styles.title}>{computedTitle}</p>
            <p>{brand}</p>
            <p className={styles.price}>{price} $</p>
          </div>
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
