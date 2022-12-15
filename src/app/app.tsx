import { Provider } from 'react-redux';
import { Routes } from './routes';
import { store } from '../shared/store';

import 'normalize.css';

export function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
