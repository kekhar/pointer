import React, { useState, useEffect } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { getAccessToken, logout } from '../services/authService';
import Footer from './Footer';

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

  // стрелочная иконка, та же, что была
  const arrowIcon = (
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

  // общие стили для кнопки Войти/Выйти
  const authBtn = `
    flex items-center justify-center
    w-[94px] h-[44px]
    rounded-[10px]
    bg-[#1455FF0D]
    hover:bg-[#1455FF1A]
  `;

  return (
    <header className="w-full bg-white shadow-sm px-6 py-4 flex items-center">
      {/* Логотип */}
      <NavLink
        to="/"
        className="font-roboto font-black text-[32px] text-[#1455FF]"
      >
        УКАЗКА
      </NavLink>

      {/* Сегментированная навигация */}
      <nav className="flex-1 flex justify-center">
        <div className="inline-flex bg-[#F3F6FF] rounded-[12px] h-[44px]">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `w-[94px] flex items-center justify-center font-roboto text-[16px]
               ${
                 isActive
                   ? 'bg-[#3A86FF] text-white'
                   : 'text-[#3A86FF] hover:bg-[#E5EEFF]'
               }
               rounded-l-[12px]`
            }
          >
            Главная
          </NavLink>
          <NavLink
            to="/questionnaires"
            className={({ isActive }) =>
              `w-[94px] flex items-center justify-center font-roboto text-[16px]
               ${
                 isActive
                   ? 'bg-[#3A86FF] text-white'
                   : 'text-[#3A86FF] hover:bg-[#E5EEFF]'
               }
               rounded-r-[12px]`
            }
          >
            Анкеты
          </NavLink>
        </div>
      </nav>

      {/* Кнопка Войти/Выйти */}
      {loggedIn ? (
        <button onClick={handleLogout} className={authBtn}>
          {arrowIcon}
          <span className="ml-2 text-[#1455FF]">Выйти</span>
        </button>
      ) : (
        <NavLink to="/signin" className={authBtn}>
          {arrowIcon}
          <span className="ml-2 text-[#1455FF]">Войти</span>
        </NavLink>
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
      <Footer />
    </div>
  );
}
