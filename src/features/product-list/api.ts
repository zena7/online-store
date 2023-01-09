import { Product } from '@/entities/product/types';
import { api } from '@/shared/api';

type FetchProductsResponse = {
  products: Product[];
  limit: number;
  skip: number;
  total: number;
};

export const productListApi = api.injectEndpoints({
  endpoints: (build) => ({
    fetchProducts: build.query<FetchProductsResponse, void>({
      query: () => ({
        url: '/products',
      }),
    }),
  }),
});

export const { useFetchProductsQuery } = productListApi;
