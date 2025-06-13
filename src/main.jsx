import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './AppRouter';
import './index.css';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRouter />
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            padding: '16px',
            fontSize: '14px',
          },
        }}
      />
    </BrowserRouter>
  </React.StrictMode>
);
