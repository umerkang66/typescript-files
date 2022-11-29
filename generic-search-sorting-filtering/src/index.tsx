import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './app';
import { QueryContextProvider } from './contexts/query-context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryContextProvider>
      <App />
    </QueryContextProvider>
  </React.StrictMode>
);
