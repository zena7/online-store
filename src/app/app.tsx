import { Provider } from 'react-redux';
import { Routes } from './routes';
import { store } from '../shared/store';
import { Layout } from './ui/layout';

import 'normalize.css';

export function App() {
  return (
    <Layout />
    // <Provider store={store}>
    //   <Routes />
    // </Provider>
  );
}
