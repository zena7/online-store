import { createBrowserRouter } from 'react-router-dom';
import Root from './../app/ui/layout';
import ErrorPage from './../pages/error-page';
import BasketPage from '../pages/basket';
import HomePage from '../pages/home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
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
