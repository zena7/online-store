import { createBrowserRouter, useParams } from 'react-router-dom';
import Layout from './ui/layout';
import ErrorPage from '@/pages/error/error';
import BasketPage from '@/pages/basket';
import HomePage from '@/pages/home';
import ProductPage from '@/pages/product/product';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/basket',
        element: <BasketPage />,
      },
      {
        path: `/product/:id`,
        element: <ProductPage />,
      },
    ],
  },
]);
