import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/home';
import BasketPage from '../pages/basket';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/basket',
    element: <BasketPage />,
  },
]);
