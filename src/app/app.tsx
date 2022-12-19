import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '../pages/home';
import BasketPage from '../pages/basket';

import 'normalize.css';
import './app.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/basket',
    element: <BasketPage />,
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
