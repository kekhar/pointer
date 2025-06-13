import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../services/authService';
import { toast } from 'react-hot-toast';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v = {};

    if (!validateEmail(email)) v.email = 'Неверный email';
    if (!password) v.password = 'Введите пароль';

    if (Object.keys(v).length > 0) {
      setErrors(v);
      Object.values(v).forEach((msg) => toast.error(msg));
      return;
    }

    try {
      await login({ email, password });
      toast.success('Успешный вход!');
      navigate('/');
    } catch (err) {
      const msg = err.message || 'Ошибка сервера';
      setErrors({ server: msg });
      toast.error(msg);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Хедер */}
      <header className="px-6 md:px-20 pt-8">
        <Link
          to="/"
          className="font-roboto font-black text-[32px] leading-[22.08px]
                     tracking-[0px] text-[#1455FF]"
        >
          УКАЗКА
        </Link>
      </header>

      {/* Контейнер с серой плашкой */}
      <div
        className="flex-1 flex justify-center
                      px-6 md:px-20 max-[426px]:px-0
                      pt-[29px] pb-[29px]"
      >
        <div
          className="w-full bg-gray-100 rounded-[60px]
                        px-6 md:px-20 py-[40px]
                        flex items-center justify-center"
        >
          <div className="w-full max-w-[400px] flex flex-col space-y-6">
            <h1
              className="font-roboto font-semibold
                           text-[36px] leading-[48px]
                           text-center text-[#04121B]"
            >
              Войти в аккаунт
            </h1>

            {errors.server && (
              <div className="text-red-600 text-center">{errors.server}</div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
              <div>
                <input
                  type="email"
                  placeholder="Введите почту"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setErrors({ ...errors, email: '' });
                  }}
                  className="w-full h-[48px] border-2 border-gray-300
                             rounded-[10px] px-4 focus:outline-none"
                />
                {errors.email && (
                  <div className="text-red-600 text-sm mt-1">
                    {errors.email}
                  </div>
                )}
              </div>

              <div>
                <input
                  type="password"
                  placeholder="Введите пароль"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setErrors({ ...errors, password: '' });
                  }}
                  className="w-full h-[48px] border-2 border-gray-300
                             rounded-[10px] px-4 focus:outline-none"
                />
                {errors.password && (
                  <div className="text-red-600 text-sm mt-1">
                    {errors.password}
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="w-full h-[48px]
                           bg-[#0081FA] hover:bg-[#006FD0]
                           text-white font-medium rounded-[10px] cursor-pointer"
              >
                Войти
              </button>
            </form>

            <p className="text-center text-sm">Нет аккаунта?</p>
            <Link
              to="/register"
              className="w-full h-[48px]
                         bg-[#B0C8E8] hover:bg-[#98B7D1]
                         text-blue-600 font-medium rounded-[10px]
                         flex items-center justify-center"
            >
              Зарегистрироваться
            </Link>
          </div>
        </div>
      </div>

      {/* Футер */}
      <footer className="px-6 md:px-20 pb-8">
        <div
          className="flex flex-col md:flex-row justify-between
                        text-gray-500 text-sm"
        >
          <span>© Указка, 2025</span>
          <nav className="hidden md:flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:underline">
              Offer Agreement
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Data Processing Agreement
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
