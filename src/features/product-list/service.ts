import { Product } from '@/entities/product/types';
import { api } from '@/shared/api';

type FetchProductsResponse = {
  products: Product[];
  limit: number;
  skip: number;
  total: number;
};

type QueryArgs = { page?: number; limit?: number };

export const productListService = api.injectEndpoints({
  endpoints: (build) => ({
    fetchProducts: build.query<FetchProductsResponse, QueryArgs>({
      query: ({ limit = 100 }) => {
        return {
          url: `/products?&limit=${limit}`,
        };
      },
    }),
  }),
});

export const { useFetchProductsQuery } = productListService;
