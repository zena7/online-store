import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../store/configure-store';
import { router } from './router';

import './app.css';

export function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}
