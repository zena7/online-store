import { Container } from '@/shared/ui/container';
import { useParams } from 'react-router-dom';
import { Product } from '@/entities/product/types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from '@/store/configure-store';
import { basketSlice } from '@/features/basket/store';
import { Button } from '@/shared/ui/button';
import { useFetchSingleProductQuery } from '@/features/product-list/service';
import styles from './styles.module.css';

const ProductPage = () => {
  // const a = useSelector((state: RootState) => state.basket);

  const { id } = useParams<{ id: any }>();
  const { data, isLoading } = useFetchSingleProductQuery(id);
  const dispatch = useDispatch();
  const [added, setAdded] = useState<boolean>(false);

  const handleAddClick = (product: Product | undefined) => {
    product && dispatch(basketSlice.actions.addProduct(product));
  };

  const handleDropClick = (id: number) => {
    dispatch(basketSlice.actions.dropProduct(id));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <div className={styles.productSingle}>
        <div className={styles.imgs}>
          {data?.images.slice(0, 4).map((item, id) =>
            id === 0 ? (
              <div className={styles.mainImg}>
                <img src={item} alt={data.title} key={id} />
              </div>
            ) : (
              <img
                src={item}
                alt={data.title}
                key={id}
                className={styles.img}
              />
            ),
          )}
        </div>
        <div className={styles.info}>
          <h1>{data?.title}</h1>
          <p>{data?.brand}</p>
          <p>{data?.description}</p>
          <p>{data?.price} $</p>
          <Button
            className={styles.btn}
            onClick={() => {
              added ? handleDropClick(id) : handleAddClick(data);
              setAdded(!added);
            }}
          >
            {added ? 'Drop' : 'Add'}
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default ProductPage;
