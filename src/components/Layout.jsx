// src/components/Layout.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { getAccessToken, logout } from '../services/authService';
import Footer from './Footer';

function Header() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [authMenuOpen, setAuthMenuOpen] = useState(false);
  const navigate = useNavigate();
  const wrapperRef = useRef(null);

  useEffect(() => {
    setLoggedIn(Boolean(getAccessToken()));
  }, []);

  useEffect(() => {
    const onOutsideClick = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setAuthMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', onOutsideClick);
    return () => document.removeEventListener('mousedown', onOutsideClick);
  }, []);

  const handleLogout = async (redirect = true) => {
    try {
      await logout();
    } catch (err) {
      console.warn('Logout error:', err);
    }
    setLoggedIn(false);
    setAuthMenuOpen(false);
    if (redirect) navigate('/signin');
  };

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

  const userIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
      <mask
        id="a"
        width="20"
        height="20"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: 'alpha' }}
      >
        <path fill="#D9D9D9" d="M0 0h20v20H0z" />
      </mask>
      <g mask="url(#a)">
        <path
          fill="#1455FF"
          d="M10 10a3.21 3.21 0 0 1-2.354-.98 3.21 3.21 0 0 1-.98-2.353c0-.917.327-1.702.98-2.355A3.21 3.21 0 0 1 10 3.333a3.21 3.21 0 0 1 2.354.98 3.21 3.21 0 0 1 .98 2.354 3.21 3.21 0 0 1-.98 2.354A3.21 3.21 0 0 1 10 10Zm-6.667 6.667v-2.334c0-.472.122-.906.365-1.302a2.43 2.43 0 0 1 .969-.906 12.37 12.37 0 0 1 2.625-.969A11.464 11.464 0 0 1 10 10.833c.917 0 1.82.108 2.708.323.89.215 1.764.538 2.625.969.403.208.726.51.969.906s.365.83.365 1.302v2.334H3.333ZM5 15h10v-.667a.811.811 0 0 0-.417-.708 10.863 10.863 0 0 0-2.27-.844 9.667 9.667 0 0 0-4.626 0c-.763.188-1.52.469-2.27.844a.811.811 0 0 0-.417.708V15Zm5-6.667c.458 0 .85-.163 1.177-.49.326-.326.49-.718.49-1.176 0-.459-.164-.851-.49-1.178A1.605 1.605 0 0 0 10 5c-.458 0-.85.164-1.177.49-.327.327-.49.72-.49 1.178 0 .458.163.85.49 1.177.326.326.719.49 1.177.49Z"
        />
      </g>
    </svg>
  );

  const authBtn = `
    flex items-center justify-center
    w-[120px] h-[44px]
    rounded-[10px]
    bg-[#1455FF0D]
    hover:bg-[#E8EDFF]
    cursor-pointer
  `;

  return (
    <header className="w-full bg-white shadow-sm px-6 py-4 flex items-center justify-between">
      {/* Логотип */}
      <NavLink
        to="/"
        className="font-roboto font-black text-[32px] text-[#1455FF]"
      >
        УКАЗКА
      </NavLink>

      {/* Навигация: скрываем на экранах ≤550px */}
      <nav className="flex-1 flex justify-center max-[550px]:hidden">
        <div className="inline-flex bg-[#F3F6FF] rounded-[12px] h-[44px]">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `
              w-[94px] flex items-center justify-center font-roboto text-[16px]
              rounded-l-[12px] transition-colors duration-200 ease-in-out
              ${
                isActive
                  ? 'bg-[#3A86FF] text-white hover:bg-[#1455FF]'
                  : 'text-[#3A86FF] hover:bg-[#E5EEFF]'
              }
            `}
          >
            Главная
          </NavLink>
          <NavLink
            to="/questionnaires"
            className={({ isActive }) => `
              w-[94px] flex items-center justify-center font-roboto text-[16px]
              rounded-r-[12px] transition-colors duration-200 ease-in-out
              ${
                isActive
                  ? 'bg-[#3A86FF] text-white hover:bg-[#1455FF]'
                  : 'text-[#3A86FF] hover:bg-[#E5EEFF]'
              }
            `}
          >
            Анкеты
          </NavLink>
        </div>
      </nav>

      {/* Авторизация / Профиль + дропдаун */}
      <div ref={wrapperRef} className="relative">
        <button onClick={() => setAuthMenuOpen((v) => !v)} className={authBtn}>
          {loggedIn ? userIcon : arrowIcon}
          <span className="ml-2 text-[#1455FF]">
            {loggedIn ? 'Профиль' : 'Войти'}
          </span>
        </button>

        {authMenuOpen && (
          <div
            className="absolute right-0 top-full mt-2 bg-[#F3F6FF] rounded-[16px] shadow-md px-2 py-3 flex flex-col items-center"
            style={{ width: 316 }}
          >
            {loggedIn ? (
              <>
                <NavLink to="/" className="...">
                  Главная
                </NavLink>
                <NavLink to="/questionnaires" className="...">
                  Анкеты
                </NavLink>
                <NavLink to="/profile" className="...">
                  Профиль
                </NavLink>
                <button onClick={() => handleLogout(false)} className="...">
                  Выход
                </button>
              </>
            ) : (
              <>
                <NavLink to="/signin" className="...">
                  Вход
                </NavLink>
                <NavLink to="/signup" className="...">
                  Регистрация
                </NavLink>
              </>
            )}
          </div>
        )}
      </div>
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
