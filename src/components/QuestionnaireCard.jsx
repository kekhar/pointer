// src/components/QuestionnaireCard.jsx
import React from 'react';
import { toast } from 'react-hot-toast';
import { getAccessToken } from '../services/authService';

export default function QuestionnaireCard({ item }) {
  const isLoggedIn = Boolean(getAccessToken());

  const handleView = () => {
    if (!isLoggedIn) {
      toast.error('Ошибка: Пожалуйста авторизуйтесь, чтоб перейти на анкету');
      return;
    }
    toast.success(`Переходим к анкете ${item.id}`);
  };

  const handleContacts = () => {
    if (!isLoggedIn) {
      toast.error('Ошибка: Пожалуйста авторизуйтесь, чтоб увидеть контакты');
      return;
    }
    toast.success(`Показываем контакты для ${item.id}`);
  };

  return (
    <div
      className="
        bg-[#F3F6FF]
        rounded-[16px]
        w-full
        h-[296px]
        p-8
        flex flex-col justify-between
        shadow-sm
      "
    >
      {/* Текстовая часть */}
      <div className="space-y-4">
        {/* Заголовок */}
        <h3 className="font-roboto font-bold text-[28px] max-[425px]:text-[20px] text-[#040B1B]">
          {item.title}
        </h3>

        {/* Автор + бейдж опыта */}
        <div className="flex items-center space-x-4">
          <span className="font-roboto font-semibold text-[16px] max-[425px]:text-[14px] text-[#9498A4]">
            {item.authorName}
          </span>
          <span
            className="
              flex items-center justify-center
              w-[90px] h-[30px]
              bg-[#E8EDFF]
              rounded-[8px]
              font-roboto font-bold text-[14px] max-[425px]:text-[12px]
              text-[#9498A4]
            "
          >
            Опыт {item.experience} лет
          </span>
        </div>

        {/* Рейтинг + отзывы */}
        <div className="flex items-center space-x-2">
          <svg
            className="w-[24px] h-[24px] flex-shrink-0"
            viewBox="0 0 24 24"
            fill="#FFD700"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
          <span className="font-roboto font-bold text-[16px] max-[425px]:text-[14px] text-[#040B1B]">
            {item.rating.toFixed(1)}
          </span>
          <span className="font-roboto text-[14px] max-[425px]:text-[12px] text-[#9498A4]">
            • {item.reviews} отзывов
          </span>
        </div>

        {/* Локация */}
        <p className="font-roboto font-semibold text-[16px] max-[425px]:text-[14px] text-[#000000]">
          {item.location}
        </p>
      </div>

      {/* Кнопки */}
      <div className="flex space-x-4 max-[425px]:mt-4">
        <button
          onClick={handleView}
          className="
            w-[116px] h-[46px]
            bg-[#3A86FF] text-white
            font-[Segoe UI] font-bold text-[16px] max-[425px]:text-[14px]
            rounded-[14px]
            transition-colors duration-200 ease-in-out
            hover:bg-[#1455FF] hover:shadow-md
            cursor-pointer
          "
        >
          Перейти
        </button>
        <button
          onClick={handleContacts}
          className="
            w-[125px] h-[46px]
            bg-[#E5EEFF] text-[#3A86FF]
            font-[Segoe UI] font-bold text-[16px] max-[425px]:text-[14px]
            rounded-[16px]
            shadow-sm
            transition-colors duration-200 ease-in-out
            hover:bg-[#D1E4FF] hover:shadow-md
            cursor-pointer
          "
        >
          Контакты
        </button>
      </div>
    </div>
  );
}
