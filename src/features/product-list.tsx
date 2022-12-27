import { useState, useEffect } from 'react';
import { List } from '../shared/ui/list';
import { fetchProducts } from '../entities/product';
import { Product } from '../entities/product/types';
import { ProductCard } from '../entities/product/product-card';

export function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <List>
      {products.map((product) => (
        <li key={product.id}>
          <ProductCard product={product} />
        </li>
      ))}
    </List>
  );
}
