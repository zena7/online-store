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
      query: ({ page = 0, limit = 48 }) => {
        const computedSkipQuery = page > 0 ? `&skip=${page * limit}` : '';

        return {
          url: `/products?&limit=${limit}${computedSkipQuery}`,
        };
      },
    }),
  }),
});

export const { useFetchProductsQuery } = productListService;
