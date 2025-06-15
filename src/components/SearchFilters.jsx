// src/components/SearchFilters.jsx
import React from 'react';

export default function SearchFilters({ filters, setFilters, onSearch }) {
  return (
    <div
      className="
      bg-[#F3F6FF]
      rounded-[30px]
      p-6
      flex flex-col md:flex-row md:items-center md:space-x-4
      space-y-4 md:space-y-0
    "
    >
      {/* Поле поиска */}
      <input
        type="text"
        placeholder="Поиск..."
        className="
          w-full md:max-w-[540px] h-[58px]
          bg-[#E8EDFF]
          px-4
          rounded-[16px]
          font-roboto text-[16px]
          focus:outline-none
        "
        value={filters.query}
        onChange={(e) => setFilters((f) => ({ ...f, query: e.target.value }))}
        onKeyDown={(e) => e.key === 'Enter' && onSearch(filters)}
      />

      {/* Кнопка «Найти» */}
      <button
        onClick={() => onSearch(filters)}
        className="
          w-[108px] h-[58px]
          bg-[#3A86FF] text-white
          font-roboto font-medium text-[16px]
          rounded-[16px]
          transition-colors duration-200 ease-in-out
          hover:bg-[#1455FF]
          cursor-pointer
        "
      >
        Найти
      </button>

      {/* Выпадающий фильтр */}
      <div className="relative">
        <select
          value={filters.category}
          onChange={(e) =>
            setFilters((f) => ({ ...f, category: e.target.value }))
          }
          className="
            w-[155px] h-[58px]
            bg-[#E8EDFF]
            pl-4 pr-6
            rounded-[30px]
            font-roboto text-[16px]
            focus:outline-none
            appearance-none
            cursor-pointer
          "
        >
          <option value="">Все категории</option>
          <option value="english">Английский</option>
          <option value="math">Математика</option>
          <option value="physics">Физика</option>
        </select>

        {/* Кастомная стрелка */}
        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4" /* сделали 16×16px */
            viewBox="0 0 48 48"
            fill="#1455FF"
          >
            <path
              d="M22.7 5.6c-.4.4-.7 7.5-.7 15.8v15l-6-5.9c-4.7-4.7-6.2-5.7-7.2-4.7s.5 3 7 9.5l8.2 8.2 
                     8.2-8.2c6.5-6.5 8-8.5 7-9.5s-2.5 0-7.2 4.7l-5.9 5.9-.3-15.4c-.3-14.3-.9-17.5-3.1-15.4z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
