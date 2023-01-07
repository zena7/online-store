import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from '../../entities/product/types';

type FetchProductsResponse = {
  products: Product[];
  limit: number;
  skip: number;
  total: number;
};

export const productListApi = createApi({
  reducerPath: 'productListApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
  endpoints: (builder) => ({
    getProducts: builder.query<FetchProductsResponse, string>({
      query: (id) => ({
        url: '/products',
        params: {
          q: id,
        },
      }),
    }),
  }),
});

export const { useGetProductsQuery } = productListApi;
