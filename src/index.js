import React from 'react';
import ReactDOM from 'react-dom/client';
import Providers from './Providers';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Providers>
      <ToastContainer />
      <App />
    </Providers>
  </React.StrictMode>
);
