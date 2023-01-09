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
    fetchProducts: build.query<FetchProductsResponse, number | void>({
      query: (page = 1, limit = 2) => `/products?limit=${limit}&page=${page}`,
    }),
  }),
});

export const { useFetchProductsQuery } = productListApi;
