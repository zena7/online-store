import api from '../../shared/api';
import { Product } from './types';

export function getProducts() {
  return api.get<Product[]>('/products');
}
