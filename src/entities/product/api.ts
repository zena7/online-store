import api from '../../shared/api';
import { Product } from './types';

type FetchProductsResponse = {
  limit: number;
  products: Product[];
  skip: number;
  total: number;
};

export function fetchProducts() {
  return api
    .get<FetchProductsResponse>('/products')
    .then((response) => response.products);
}
