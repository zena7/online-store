import { createBrowserRouter } from 'react-router-dom';
import Layout from './ui/layout';
import ErrorPage from '../pages/error';
import BasketPage from '../pages/basket';
import HomePage from '../pages/home';

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
    ],
  },
]);
