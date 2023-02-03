import { Container } from '@/shared/ui/container';
import { useParams } from 'react-router-dom';
import { Product } from '@/entities/product/types';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { basketSlice } from '@/features/basket/store';
import { Button } from '@/shared/ui/button';
import { useFetchSingleProductQuery } from '@/features/product-list/service';
import styles from './styles.module.css';
import { getProductById } from '@/shared/selector';

const ProductPage = () => {
  const { id } = useParams<{ id: any }>();
  const { data, isLoading } = useFetchSingleProductQuery(id);
  const dispatch = useDispatch();
  const [added, setAdded] = useState(
    useSelector((state) => getProductById(state, id)),
  );

  function convertData(arg: string) {
    return `${arg[0].toUpperCase()}${arg.slice(1).toLowerCase()}`;
  }

  const handleAddClick = (product: Product | undefined) => {
    product && dispatch(basketSlice.actions.addProduct(product));
  };

  const handleDropClick = (id: number) => {
    dispatch(basketSlice.actions.dropProduct(id));
  };

  const [zoom, setZoom] = useState(false);
  const handleToggle = () => {
    setZoom(!zoom);
  };
  const limitNumberOfImages = (imgs: string[] | undefined) =>
    imgs?.slice(0, 3) ?? [];

  const [src, setSrc] = useState<string | undefined>('');
  useEffect(() => {
    setSrc(data?.images[0]);
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <ul className={styles.breadcrumb}>
        <li>Store / </li>
        <li> {data && convertData(data.category)} / </li>
        <li> {data && convertData(data.brand)} /</li>
        <li className={styles.currentItem}>
          {data && convertData(data.category)}
        </li>
      </ul>
      <div className={styles.productSingle}>
        <div className={styles.imgs}>
          {limitNumberOfImages(data?.images).map((item, index) => (
            <img
              src={item}
              alt={data?.title}
              key={index}
              className={styles.img}
              onClick={() => setSrc(item)}
            />
          ))}
          <div className={styles.mainImg} onClick={handleToggle}>
            {data && (
              <img
                src={src}
                alt={data?.title}
                key={id}
                className={`${zoom && styles.zoom}`}
              />
            )}
          </div>
        </div>
        <div className={styles.info}>
          <h1 className={styles.header}>{data && convertData(data.title)}</h1>
          <p>{data && convertData(data.brand)}</p>
          <p>{data?.description}</p>
          <p className={styles.price}>{data?.price} $</p>
          <div className={styles.containerBtn}>
            <Button
              className={`${styles.btn} ${styles.add}`}
              onClick={() => {
                added ? handleDropClick(id) : handleAddClick(data);
                setAdded(!added);
              }}
            >
              {added ? 'Drop' : 'Add'}
            </Button>
            <Button
              className={`${styles.btn} ${styles.checkout}`}
              onClick={() => {}}
            >
              Order checkout
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductPage;
