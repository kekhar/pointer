// src/components/Layout.jsx
import React, { useState, useEffect } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { getAccessToken, logout } from '../services/authService';

function Header() {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoggedIn(Boolean(getAccessToken()));
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (e) {
      console.warn('Logout error:', e);
    }
    setLoggedIn(false);
    navigate('/signin');
  };

  // общий класс для кнопки/ссылки
  const btnClass = `
    flex items-center justify-center
    w-[94px] h-[44px]
    rounded-[10px]
    bg-[#1455FF0D]
    hover:bg-[#1455FF1A]
  `;

  const icon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
      <path
        fill="#1455FF"
        d="M8.542 6.54a.65.65 0 0 1 .92 0l3 3a.65.65 0 0 1 0 .92l-3 3a.65.65 0 1 1-.92-.92l1.89-1.89h-6.93a.65.65 0 1 1 0-1.3h6.93l-1.89-1.89a.65.65 0 0 1 0-.92Z"
      />
      <path
        fill="#1455FF"
        fillRule="evenodd"
        d="M13 3.65H8v-1.3h5A4.65 4.65 0 0 1 17.65 7v6A4.65 4.65 0 0 1 13 17.65H8v-1.3h5c1.85 0 3.35-1.5 3.35-3.35V7c0-1.85-1.5-3.35-3.35-3.35Z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <header className="w-full bg-white shadow-sm px-6 py-4 flex items-center">
      {/* Логотип */}
      <Link
        to="/"
        className="
          font-roboto font-black text-[32px] leading-[22.08px]
          tracking-[0px] text-[#1455FF]
        "
      >
        УКАЗКА
      </Link>

      {/* Центр навигации */}
      <nav className="flex-1 flex justify-center space-x-8">
        <Link to="/" className="text-gray-600 hover:text-blue-600">
          Главная
        </Link>
        <Link to="/about" className="text-gray-600 hover:text-blue-600">
          О нас
        </Link>
      </nav>

      {/* Справа: Войти или Выйти */}
      {loggedIn ? (
        <button onClick={handleLogout} className={btnClass}>
          {icon}
          <span className="ml-2 text-[#1455FF]">Выйти</span>
        </button>
      ) : (
        <Link to="/signin" className={btnClass}>
          {icon}
          <span className="ml-2 text-[#1455FF]">Войти</span>
        </Link>
      )}
    </header>
  );
}

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      <main className="flex-1 p-6 overflow-auto">
        <Outlet />
      </main>

      <footer className="w-full bg-white py-4 text-center text-sm text-gray-500">
        © Указка, 2025
      </footer>
    </div>
  );
}
