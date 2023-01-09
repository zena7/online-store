import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import 'normalize.css';
import { App } from './app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
