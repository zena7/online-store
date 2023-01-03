import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from '../../entities/product/types';

const BASE_URL = 'https://dummyjson.com';
const GET_PRODUCTS = '/products';

type FetchProductsResponse = {
  limit: number;
  products: Product[];
  skip: number;
  total: number;
};

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getProducts: builder.query<FetchProductsResponse, void>({
      query: () => GET_PRODUCTS,
    }),
  }),
});

export const { useGetProductsQuery } = apiSlice;
