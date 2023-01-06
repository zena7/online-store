import { useState, useEffect } from 'react';
import { List } from '../../shared/ui/list';
import { fetchProducts } from '../../entities/product';
import { Product } from '../../entities/product/types';
import { ProductCard } from '../../entities/product/ui/product-card/product-card';
import styles from './product-list.module.css';
import { useDispatch } from 'react-redux';
import { basketSlice } from '../basket/basket-slice';

export function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  const dispatch = useDispatch();

  return (
    <List className={styles.list}>
      {products.map((product) => (
        <li className={styles.item} key={product.id}>
          <ProductCard
            images={product.images}
            title={product.title}
            brand={product.brand}
            price={product.price}
            onAddClick={() => {
              dispatch(basketSlice.actions.addProduct(product));
            }}
            onDropClick={() => {
              dispatch(basketSlice.actions.dropProduct(product.id));
            }}
          />
        </li>
      ))}
    </List>
  );
}
