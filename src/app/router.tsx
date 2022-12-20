import { createBrowserRouter } from 'react-router-dom';
import Root from './../app/ui/layout';
import Error from './../pages/error-page';
import { Content } from './ui/content';
import BasketPage from '../pages/basket';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Content /> },
      { path: '/basket', element: <BasketPage /> },
    ],
  },
]);
