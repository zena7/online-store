import { Product } from '@/entities/product/types';
import { api } from '@/shared/api';

type FetchProductsResponse = {
  products: Product[];
  limit: number;
  skip: number;
  total: number;
};

type QueryArgs = { page?: number; limit?: number };
type ProductId = number | undefined;

export const productListService = api.injectEndpoints({
  endpoints: (build) => ({
    fetchProducts: build.query<FetchProductsResponse, QueryArgs>({
      query: ({ limit = 100 }) => {
        return {
          url: `/products?&limit=${limit}`,
        };
      },
    }),
    fetchSingleProduct: build.query<Product, ProductId>({
      query: (id) => {
        return {
          url: `/products/${id}`,
        };
      },
    }),
  }),
});

export const { useFetchProductsQuery, useFetchSingleProductQuery } =
  productListService;
