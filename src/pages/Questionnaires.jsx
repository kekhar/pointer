// src/pages/Questionnaires.jsx
import React from 'react';
import QuestionnaireCard from '../components/QuestionnaireCard';

export default function Questionnaires() {
  // демонстрационные данные
  const items = [
    {
      id: 1,
      title: 'Преподаватель Английского языка',
      authorName: 'Анатолий Кусов',
      rating: 4.4,
      reviews: 14,
      location: 'Москва',
    },
    {
      id: 2,
      title: 'Преподаватель Английского языка',
      authorName: 'Анатолий Кусов',
      rating: 4.4,
      reviews: 14,
      location: 'Москва',
    },
    {
      id: 3,
      title: 'Преподаватель Английского языка',
      authorName: 'Анатолий Кусов',
      rating: 4.4,
      reviews: 14,
      location: 'Москва',
    },
  ];

  return (
    <div className="max-w-[1460px] mx-auto space-y-6 py-16 px-6 md:px-20">
      <h2 className="font-roboto font-black text-[24px]">Примеры анкет</h2>
      <div className="space-y-4">
        {items.map((item) => (
          <QuestionnaireCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
