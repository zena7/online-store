import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://dummyjson.com',
});

export const api = createApi({
  baseQuery: retry(baseQuery, { maxRetries: 6 }),
  endpoints: () => ({}),
});
