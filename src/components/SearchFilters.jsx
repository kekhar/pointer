// src/components/SearchFilters.jsx
import React from 'react';

export default function SearchFilters({ filters, setFilters, onSearch }) {
  return (
    <div className="bg-[#F3F6FF] p-6 rounded-[16px] flex flex-col md:flex-row md:items-center md:space-x-4 space-y-4 md:space-y-0">
      {/* Тип анкеты */}
      <div className="inline-flex bg-white rounded-full overflow-hidden">
        <button
          className={`px-4 py-2 font-roboto font-medium ${
            filters.type === 'ученики'
              ? 'bg-[#3A86FF] text-white'
              : 'text-[#3A86FF] hover:bg-[#E5EEFF]'
          }`}
          onClick={() => setFilters((f) => ({ ...f, type: 'ученики' }))}
        >
          Ученики
        </button>
        <button
          className={`px-4 py-2 font-roboto font-medium ${
            filters.type === 'преподаватели'
              ? 'bg-[#3A86FF] text-white'
              : 'text-[#3A86FF] hover:bg-[#E5EEFF]'
          }`}
          onClick={() => setFilters((f) => ({ ...f, type: 'преподаватели' }))}
        >
          Преподаватели
        </button>
      </div>

      {/* Поле поиска */}
      <input
        type="text"
        placeholder="Поиск..."
        className="flex-1 bg-white px-4 py-2 rounded-full font-roboto text-[14px] md:text-[16px]"
        value={filters.query}
        onChange={(e) => setFilters((f) => ({ ...f, query: e.target.value }))}
        onKeyDown={(e) => e.key === 'Enter' && onSearch(filters)}
      />

      {/* Кнопка «Найти» */}
      <button
        onClick={() => onSearch(filters)}
        className="bg-[#3A86FF] text-white px-6 py-2 rounded-full font-roboto font-medium hover:bg-[#1455FF] transition-colors duration-200"
      >
        Найти
      </button>
    </div>
  );
}
