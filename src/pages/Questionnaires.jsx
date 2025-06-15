// src/pages/Questionnaires.jsx
import React, { useState } from 'react';
import SearchFilters from '../components/SearchFilters';
import QuestionnaireCard from '../components/QuestionnaireCard';

export default function Questionnaires() {
  const allItems = [
    {
      id: 1,
      title: 'Преподаватель Английского языка',
      authorName: 'Анатолий Кусов',
      rating: 4.4,
      reviews: 14,
      location: 'Москва',
      experience: 5,
      category: 'english',
    },
    {
      id: 2,
      title: 'Преподаватель Английского языка',
      authorName: 'Анатолий Кусов',
      rating: 4.4,
      reviews: 14,
      location: 'Москва',
      experience: 5,
      category: 'english',
    },
    {
      id: 3,
      title: 'Преподаватель Английского языка',
      authorName: 'Анатолий Кусов',
      rating: 4.4,
      reviews: 14,
      location: 'Москва',
      experience: 5,
      category: 'english',
    },
  ];

  const [filters, setFilters] = useState({
    query: '',
    category: '',
  });
  const [items, setItems] = useState(allItems);

  const handleSearch = ({ query, category }) => {
    const q = query.trim().toLowerCase();
    setItems(
      allItems.filter((item) => {
        const byText = item.title.toLowerCase().includes(q);
        const byCat = category ? item.category === category : true;
        return byText && byCat;
      })
    );
  };

  return (
    <div className="max-w-[1460px] mx-auto py-16 px-6 md:px-20 space-y-6">
      {/* Поиск */}
      <SearchFilters
        filters={filters}
        setFilters={setFilters}
        onSearch={handleSearch}
      />

      {/* Контейнер-счётчик (увеличенный) */}
      <div className='mt-[50px]'>
        <p className="font-roboto font-bold text-[38px] leading-[36px]">
          Найдено {items.length} {items.length === 1 ? 'анкета' : 'анкет'}
        </p>
      </div>

      {/* Список карточек */}
      <div className="space-y-4">
        {items.map((item) => (
          <QuestionnaireCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
