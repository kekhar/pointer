// src/index.js
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
            padding: '16px 24px',
            fontSize: '20px',
            display: 'inline-block',
            width: 'auto',
            maxWidth: '90vw',
            whiteSpace: 'pre-wrap',
          },
          containerStyle: {
            justifyContent: 'center',
          },
        }}
      />
    </BrowserRouter>
  </React.StrictMode>
);
