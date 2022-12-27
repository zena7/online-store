import { Product } from '../entities/product/types';

interface ProductProps {
  product: Product;
}

export function ProductCard({ product }: ProductProps) {
  console.log('Props', product.brand);
  return (
    <>
      <img src={product.images[0]} alt={product.title} />
      <p>{product.title}</p>
      <p>{product.brand}</p>
      <p>{product.price} $</p>
    </>
  );
}
