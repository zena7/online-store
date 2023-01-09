import { Product } from '@/entities/product/types';
import { api } from '@/shared/api';

type FetchProductsResponse = {
  products: Product[];
  limit: number;
  skip: number;
  total: number;
};

type PageNumber = number;

export const productListApi = api.injectEndpoints({
  endpoints: (build) => ({
    fetchProducts: build.query<FetchProductsResponse, PageNumber>({
      query: (page = 0) => ({
        url: `/products?&limit=48${page > 0 ? `&skip=${page * 48}` : ''}`,
      }),
    }),
  }),
});

export const { useFetchProductsQuery } = productListApi;
