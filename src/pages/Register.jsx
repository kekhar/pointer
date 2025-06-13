// src/pages/Register.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUser } from '../services/authService';
import { toast } from 'react-hot-toast';
import { Eye, EyeOff } from 'lucide-react';

function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}
function validatePhone(value) {
  const digits = value.replace(/\D/g, '');
  return digits.length === 10 || digits.length === 11;
}
function normalizePhone(value) {
  const d = value.replace(/\D/g, '');
  return d.length === 10 ? '+7' + d : '+' + d;
}
function formatPhone(value) {
  let d = value.replace(/\D/g, '');
  if (d.startsWith('8')) d = '7' + d.slice(1);
  if (!d.startsWith('7')) d = '7' + d;
  let r = '+7';
  if (d.length > 1) r += ' (' + d.slice(1, 4);
  if (d.length >= 4) r += ') ' + d.slice(4, 7);
  if (d.length >= 7) r += '-' + d.slice(7, 9);
  if (d.length >= 9) r += '-' + d.slice(9, 11);
  return r;
}

export default function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [patronymic, setPatronymic] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirm] = useState('');
  const [showPassword, setShow] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const toggleShow = () => setShow((v) => !v);
  const onPhoneChange = (e) => {
    setPhone(formatPhone(e.target.value));
    setErrors({ ...errors, phone: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v = {};
    if (!firstName.trim()) v.firstName = 'Введите имя';
    if (!lastName.trim()) v.lastName = 'Введите фамилию';
    if (!validatePhone(phone)) v.phone = 'Неверный телефон';
    if (!validateEmail(email)) v.email = 'Неверный email';
    if (password.length < 8) v.password = 'Пароль ≥ 8 символов';
    if (password !== confirmPassword) v.confirmPassword = 'Пароли не совпадают';

    if (Object.keys(v).length) {
      setErrors(v);
      Object.values(v).forEach((m) => toast.error(m));
      return;
    }

    try {
      await createUser({
        name: firstName,
        surname: lastName,
        patronymic,
        phone_number: normalizePhone(phone),
        email,
        password,
      });
      toast.success('Регистрация прошла успешно!');
      navigate('/signin');
    } catch (err) {
      if (err.validation) {
        setErrors(err.validation);
        Object.values(err.validation).forEach((m) => toast.error(m));
      } else {
        const m = err.message || 'Серверная ошибка';
        setErrors({ server: m });
        toast.error(m);
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Хедер */}
      <header className="px-6 md:px-20 pt-8">
        <Link
          to="/"
          className="font-roboto font-black text-[32px] leading-[22.08px] text-[#1455FF]"
        >
          УКАЗКА
        </Link>
      </header>

      {/* Контейнер с серой плашкой */}
      <div
        className="
          flex-1 flex justify-center
          px-6 md:px-20 max-[426px]:px-0
          pt-[40px] pb-[24px]
        "
      >
        <div
          className="
            w-full
            bg-gray-100 rounded-[60px]
            px-6 md:px-20
            pt-[24px] pb-[32px]
            flex items-center justify-center
          "
        >
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-[400px] flex flex-col space-y-6"
          >
            <h1
              className="
                font-roboto font-semibold
                text-[36px] leading-[48px]
                text-center text-[#04121B]
                mb-4
              "
            >
              Регистрация
            </h1>

            {errors.server && (
              <div className="text-red-600 text-center text-sm mb-2">
                {errors.server}
              </div>
            )}

            <input
              type="text"
              placeholder="Имя"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
                setErrors({ ...errors, firstName: '' });
              }}
              className="w-full h-[40px] border-2 border-gray-300 rounded-[10px] px-3 focus:outline-none"
            />
            {errors.firstName && (
              <div className="text-red-600 text-sm">{errors.firstName}</div>
            )}

            <input
              type="text"
              placeholder="Фамилия"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
                setErrors({ ...errors, lastName: '' });
              }}
              className="w-full h-[40px] border-2 border-gray-300 rounded-[10px] px-3 focus:outline-none"
            />
            {errors.lastName && (
              <div className="text-red-600 text-sm">{errors.lastName}</div>
            )}

            <input
              type="text"
              placeholder="Отчество (необязательно)"
              value={patronymic}
              onChange={(e) => setPatronymic(e.target.value)}
              className="w-full h-[40px] border-2 border-gray-300 rounded-[10px] px-3 focus:outline-none"
            />

            <input
              type="tel"
              placeholder="+7 (999) 999-99-99"
              value={phone}
              onChange={onPhoneChange}
              className="w-full h-[40px] border-2 border-gray-300 rounded-[10px] px-3 focus:outline-none"
            />
            {errors.phone && (
              <div className="text-red-600 text-sm">{errors.phone}</div>
            )}

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrors({ ...errors, email: '' });
              }}
              className="w-full h-[40px] border-2 border-gray-300 rounded-[10px] px-3 focus:outline-none"
            />
            {errors.email && (
              <div className="text-red-600 text-sm">{errors.email}</div>
            )}

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Пароль"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrors({ ...errors, password: '' });
                }}
                className="w-full h-[40px] border-2 border-gray-300 rounded-[10px] px-3 focus:outline-none"
              />
              <div
                onClick={toggleShow}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
                title={showPassword ? 'Скрыть пароль' : 'Показать пароль'}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </div>
            </div>
            {errors.password && (
              <div className="text-red-600 text-sm">{errors.password}</div>
            )}

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Повторите пароль"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirm(e.target.value);
                  setErrors({ ...errors, confirmPassword: '' });
                }}
                className="w-full h-[40px] border-2 border-gray-300 rounded-[10px] px-3 focus:outline-none"
              />
            </div>
            {errors.confirmPassword && (
              <div className="text-red-600 text-sm">
                {errors.confirmPassword}
              </div>
            )}

            <button
              type="submit"
              className="w-full h-[40px] bg-[#0081FA] hover:bg-[#006FD0] text-white font-medium rounded-[10px]"
            >
              Зарегистрироваться
            </button>

            <p className="text-center text-sm mt-2">Уже есть аккаунт?</p>
            <Link
              to="/signin"
              className="w-full h-[40px] bg-[#B0C8E8] hover:bg-[#98B7D1]
                         text-blue-600 font-medium rounded-[10px]
                         flex items-center justify-center"
            >
              Войти
            </Link>
          </form>
        </div>
      </div>

      {/* Футер */}
      <footer className="px-6 md:px-20 pb-8">
        <div className="flex flex-col md:flex-row justify-between text-gray-500 text-sm">
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
