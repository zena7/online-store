import { RouterProvider } from 'react-router-dom';
import { router } from './router';

import 'normalize.css';
import './app.css';

export function App() {
  return <RouterProvider router={router} />;
}
