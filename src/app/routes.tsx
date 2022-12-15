import { useRoutes } from 'react-router-dom';
import HomePage from '../pages/home';
import BasketPage from '../pages/basket';

export const Routes = () =>
  useRoutes([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/basket',
      element: <BasketPage />,
    },
  ]);
