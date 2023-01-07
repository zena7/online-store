import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from '@/entities/product/types';
import { API_BASE_URL } from '@/shared/config';

type FetchProductsResponse = {
  products: Product[];
  limit: number;
  skip: number;
  total: number;
};

export const productListApi = createApi({
  reducerPath: 'productListApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<FetchProductsResponse, void>({
      query: () => ({
        url: '/products',
      }),
    }),
  }),
});

export const { useGetProductsQuery } = productListApi;
