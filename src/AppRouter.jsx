import React from 'react'
import { useRoutes } from 'react-router-dom'

import Layout from './components/Layout'

import Home from './pages/Home'
import SignIn from './pages/SignIn'
import Register from './pages/Register'
import NotFound from './pages/NotFound'

export default function AppRouter() {
  return useRoutes([
    // Без общего макета
    { path: '/signin',  element: <SignIn /> },
    { path: '/register', element: <Register /> },

    // С общим Layout (header + footer)
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true,    element: <Home /> },
        { path: '*',      element: <NotFound /> }
      ],
    },

    // На всякий случай
    { path: '*', element: <NotFound /> },
  ])
}
