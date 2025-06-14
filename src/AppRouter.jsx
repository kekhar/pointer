// src/AppRouter.jsx
import React from 'react';
import { useRoutes } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import Questionnaires from './pages/Questionnaires';

export default function AppRouter() {
  return useRoutes([
    // Без общего макета
    { path: '/signin', element: <SignIn /> },
    { path: '/register', element: <Register /> },

    // С общим Layout (header + footer)
    {
      path: '/',
      element: <Layout />,
      children: [
        // главная страница на "/"
        { index: true, element: <Home /> },
        // анкеты на "/questionnaires"
        { path: 'questionnaires', element: <Questionnaires /> },
        // все остальные — 404 внутри Layout
        { path: '*', element: <NotFound /> },
      ],
    },

    // глобальный 404-й
    { path: '*', element: <NotFound /> },
  ]);
}
