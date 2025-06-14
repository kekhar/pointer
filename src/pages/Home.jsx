// src/pages/Home.jsx
import React, { useState } from 'react';

export default function Home() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);

  return (
    <main className="bg-gray-50">
      {/* =====================
          Секция «Преимущества»
         ===================== */}
      <section className="px-6 md:px-20 pt-12">
  <div
    className={`
      mx-auto max-w-[1700px]
      flex flex-col xl:flex-row    /* двухколонка только с ≥1280px */
      overflow-hidden

      rounded-[24px] sm:rounded-[60px] /* маленький радиус по умолчанию, большой — с sm */
      bg-white
      shadow-md
    `}
  >
    {/* Синий блок */}
    <div
      className="
        w-full xl:w-1/2
        bg-[#3A86FF]
        flex flex-col justify-center
        p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12
      "
    >
      <h3
        className="
          font-roboto font-bold

          text-[16px]      /* <640px */
          sm:text-[20px]   /* ≥640px */
          md:text-[32px]   /* ≥768px */
          lg:text-[40px]   /* ≥1024px */
          xl:text-[48px]   /* ≥1280px */

          leading-[1.1]
          text-white mb-2
          tracking-[0.2px]
        "
      >
        Профессиональные преподаватели
      </h3>
      <p
        className="
          font-roboto font-normal

          text-[12px]      /* <640px */
          sm:text-[16px]   /* ≥640px */
          md:text-[20px]   /* ≥768px */
          lg:text-[24px]   /* ≥1024px */
          xl:text-[32px]   /* ≥1280px */

          leading-[1.4]
          text-[#B3C4E9]
          tracking-[0.2px]
        "
      >
        с педагогическим образованием и опытом обучения более 5 лет
      </p>
    </div>

    {/* Серый блок */}
    <div
      className="
        w-full xl:w-1/2
        bg-[#F3F6FF]
        flex flex-col justify-center
        p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12
      "
    >
      <h3
        className="
          font-roboto font-bold

          text-[16px]
          sm:text-[20px]
          md:text-[32px]
          lg:text-[40px]
          xl:text-[48px]

          leading-[1.1]
          text-black mb-2
          tracking-[0.2px]
        "
      >
        Работаем на результат
      </h3>
      <p
        className="
          font-roboto font-normal

          text-[12px]
          sm:text-[16px]
          md:text-[20px]
          lg:text-[24px]
          xl:text-[32px]

          leading-[1.4]
          text-[#5F6E8F]
          tracking-[0.2px]
        "
      >
        подготовим к экзаменам, собеседованию или путешествию
      </p>
    </div>
  </div>
</section>


      {/* ===================================================
          Секция «Удобная платформа для эффективного поиска»
         =================================================== */}
      <section className="px-6 md:px-20 py-16">
        {/* Заголовок */}
        <h2 className="mx-auto max-w-[868px] text-center font-roboto font-black text-[36px] md:text-[40px] leading-[48px]">
          УДОБНАЯ ПЛАТФОРМА ДЛЯ
          <br />
          ЭФФЕКТИВНОГО ПОИСКА ТЬЮТОРА
        </h2>

        {/* контейнер с двумя колонками */}
        <div className="mt-12 flex flex-col lg:flex-row gap-y-6 lg:gap-x-[60px] max-w-[1460px] mx-auto">
          {/* Левая колонка */}
          <div className="flex-1 space-y-6">
            {/* сетка из 6 кнопок */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              {/* 1. Указка */}
              <button
                className="
                  w-full
                  py-[22px] pl-[22px]
                  bg-[#3A86FF] text-white
                  rounded-[16px] border-2 border-[#1455FF]
                  flex items-center justify-start space-x-2
                  text-[16px]
                  whitespace-normal text-left
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="none"
                >
                  <path
                    fill="#fff"
                    fillOpacity=".2"
                    d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16Z"
                  />
                  <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M14.43 12.863V10.51H9.726v10.98h12.549v-8.627H14.43Zm7.844-1.569c.866 0 1.569.702 1.569 1.569v8.627c0 .867-.703 1.569-1.57 1.569H9.726a1.569 1.569 0 0 1-1.569-1.569V10.51c0-.867.703-1.569 1.569-1.569h4.706c.866 0 1.568.702 1.568 1.569v.784h6.275Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Указка</span>
              </button>

              {/* 2. Функциональность */}
              <button
                className="
                  w-full
                  py-[22px] pl-[22px]
                  bg-white text-gray-700
                  rounded-[16px] border-2 border-[#F5F5F5]
                  flex items-center justify-start space-x-2
                  text-[16px]
                  whitespace-normal text-left
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="32"
                  fill="none"
                >
                  <path
                    fill="#0039F3"
                    fillOpacity=".24"
                    d="M16.493 31.407C25.003 31.407 31.9 24.51 31.9 16 31.9 7.49 25.002.593 16.493.593 7.983.593 1.086 7.49 1.086 16c0 8.51 6.898 15.407 15.407 15.407Z"
                  />
                </svg>
                <span>Функциональность</span>
              </button>

              {/* 3. Преподаватели */}
              <button
                className="
                  w-full
                  py-[22px] pl-[22px]
                  bg-white text-gray-700
                  rounded-[16px] border-2 border-[#F5F5F5]
                  flex items-center justify-start space-x-2
                  text-[16px]
                  whitespace-normal text-left
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="none"
                >
                  <path
                    fill="#FD85FF"
                    fillOpacity=".2"
                    d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16Z"
                  />
                  <path
                    fill="#FD85FF"
                    fillRule="evenodd"
                    d="M17.11 23.04c2.047-1.666 4.402-1.73 5.714-1.597.517.052 1.018-.342 1.018-.862v-9.856c0-.73-.505-1.36-1.232-1.423-1.61-.14-4.474-.073-6.61 1.721-2.137-1.794-5.002-1.86-6.611-1.721-.728.063-1.233.693-1.233 1.423v10.158c0 .544.548.946 1.085.858 1.322-.22 3.63-.28 5.64 1.307A7.313 7.313 0 0 1 16 24.158a7.846 7.846 0 0 1 1.112-1.119Zm-.326-1.71c1.964-1.312 4.059-1.54 5.49-1.495V10.85c-1.503-.103-3.696.057-5.266 1.376l-.224.188v8.917Zm-1.569-8.917-.224-.188c-1.57-1.319-3.763-1.479-5.266-1.376v9.25c1.444-.13 3.533-.001 5.49 1.258v-8.944Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Преподаватели</span>
              </button>

              {/* 4. Типо функциональность */}
              <button
                className="
                  w-full
                  py-[22px] pl-[22px]
                  bg-white text-gray-700
                  rounded-[16px] border-2 border-[#F5F5F5]
                  flex items-center justify-start space-x-2
                  text-[16px]
                  whitespace-normal text-left
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="32"
                  fill="none"
                >
                  <path
                    fill="#FFB412"
                    fillOpacity=".2"
                    d="M16.5 31.543c8.584 0 15.543-6.959 15.543-15.543S25.084.457 16.5.457.957 7.416.957 16 7.916 31.543 16.5 31.543Z"
                  />
                </svg>
                <span>Типо функциональность</span>
              </button>

              {/* 5. Какая-то функциональность */}
              <button
                className="
                  w-full
                  py-[22px] pl-[22px]
                  bg-white text-gray-700
                  rounded-[16px] border-2 border-[#F5F5F5]
                  flex items-center justify-start space-x-2
                  text-[16px]
                  whitespace-normal text-left
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="none"
                >
                  <path
                    fill="#FF6E23"
                    fillOpacity=".2"
                    d="M16 32.82c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16Z"
                  />
                </svg>
                <span>Какая-то функциональность</span>
              </button>

              {/* 6. Хз комьюнити */}
              <button
                className="
                  w-full
                  py-[22px] pl-[22px]
                  bg-white text-gray-700
                  rounded-[16px] border-2 border-[#F5F5F5]
                  flex items-center justify-start space-x-2
                  text-[16px]
                  whitespace-normal text-left
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="33"
                  fill="none"
                >
                  <path
                    fill="#10A9FF"
                    fillOpacity=".2"
                    d="M16.5 32.363c8.584 0 15.543-6.959 15.543-15.543S25.084 1.277 16.5 1.277.957 8.236.957 16.82 7.916 32.363 16.5 32.363Z"
                  />
                  <path
                    fill="#10A9FF"
                    d="m16.043 23.753-1.143.99c-5.028-4.494-7.619-6.856-7.619-9.752 0-.914.305-1.752.762-2.438v.457c0 3.581 2.972 6.248 8 10.743Zm1.22-3.123c3.58-3.277 6.018-5.41 6.094-7.62 0-1.523-1.142-2.666-2.666-2.666-1.22 0-2.362.762-2.743 1.828H16.5c-.457-1.066-1.6-1.828-2.743-1.828-1.523 0-2.666 1.143-2.666 2.666 0 2.21 2.362 4.343 6.019 7.62l.076.076.076-.076Zm3.352-11.81c2.362 0 4.19 1.829 4.19 4.19 0 2.82-2.59 5.181-7.619 9.753-5.029-4.496-7.619-6.857-7.619-9.753 0-2.361 1.829-4.19 4.19-4.19 1.296 0 2.591.61 3.429 1.6a4.579 4.579 0 0 1 3.429-1.6Z"
                  />
                </svg>
                <span>Хз комьюнити</span>
              </button>
            </div>

            {/* подпись */}
            <p className="text-sm font-roboto text-gray-800">
              бля ну надо преимущества
            </p>

            {/* две широкие кнопки (по ширине колонки) */}
            <div className="space-y-4">
              {/* Преимущества */}
              <button
                className="
                  w-full
                  py-[22px] pl-[22px]
                  bg-white text-gray-700
                  rounded-[16px] border-2 border-[#F5F5F5]
                  flex items-center justify-start space-x-2
                  text-[16px]
                  whitespace-normal text-left
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="33"
                  fill="none"
                >
                  <path
                    fill="#FD85FF"
                    fillOpacity=".2"
                    d="M16 32.45c8.837 0 16-7.164 16-16 0-8.837-7.163-16-16-16s-16 7.163-16 16 7.163 16 16 16Z"
                  />
                  <path
                    fill="#FD85FF"
                    fillRule="evenodd"
                    d="M16 19.116a5.49 5.49 0 0 1 5.49 5.49h1.569a7.06 7.06 0 0 0-12.05-4.99 7.06 7.06 0 0 0-2.068 4.99h1.569a5.491 5.491 0 0 1 5.49-5.49ZM16 15.195a2.353 2.353 0 1 0 0-4.706 2.353 2.353 0 0 0 0 4.706Zm0 1.569a3.922 3.922 0 1 0 0-7.843 3.922 3.922 0 0 0 0 7.843Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Преимущества</span>
              </button>

              {/* Ваш супер-класс */}
              <button
                className="
                  w-full
                  py-[22px] pl-[22px]
                  bg-white text-gray-700
                  rounded-[16px] border-2 border-[#F5F5F5]
                  flex items-center justify-start space-x-2
                  text-[16px]
                  whitespace-normal text-left
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="33"
                  fill="none"
                >
                  <path
                    fill="#FF6E23"
                    fillOpacity=".2"
                    d="M16 32.45c8.837 0 16-7.164 16-16 0-8.837-7.163-16-16-16s-16 7.163-16 16 7.163 16 16 16Z"
                  />
                  <mask
                    id="a"
                    width="20"
                    height="20"
                    x="6"
                    y="7"
                    maskUnits="userSpaceOnUse"
                    style={{ maskType: 'luminance' }}
                  >
                    <path
                      fill="#fff"
                      d="M6.588 7.352v18.823h18.824V7.352H6.588Z"
                    />
                  </mask>
                  <g fill="#FF6E23" mask="url(#a)">
                    <path d="M13.881 12.57c.3-.909 1.586-.909 1.885 0a6.945 6.945 0 0 0 4.427 4.428c.91.299.91 1.586 0 1.885a6.944 6.944 0 0 0-4.427 4.427c-.3.91-1.586.91-1.885 0a6.944 6.944 0 0 0-4.427-4.427c-.91-.3-.91-1.586 0-1.885a6.944 6.944 0 0 0 4.427-4.428ZM20.823 8.785a.496.496 0 0 1 .942 0 3.472 3.472 0 0 0 2.214 2.213.496.496 0 0 1 0 .943 3.472 3.472 0 0 0-2.214 2.214.496.496 0 0 1-.942 0 3.472 3.472 0 0 0-2.214-2.214.496.496 0 0 1 0-.943 3.472 3.472 0 0 0 2.214-2.213Z" />
                  </g>
                </svg>
                <span>Ваш супер-класс</span>
              </button>
            </div>
          </div>

          {/* Правая колонка */}
          <div className="flex-1 space-y-6">
            <div className="w-full max-w-[575px] h-[300px] bg-[#3A86FF] text-white rounded-[24px] flex items-center justify-center">
              тут будет скрин личного кабинета
            </div>
            <div className="max-w-[575px] space-y-4 text-gray-700 text-sm leading-relaxed">
              <p>
                Мы самостоятельно разрабатываем нашу платформу. Она создана
                специально для поиска репетиторов высшего уровня.
              </p>
              <p>
                У каждого ученика есть личный кабинет, благодаря которому он
                найдёт необходимых преподавателей в зависимости от текущих нужд.
              </p>
              <p>
                Платформа крайне хороша. Оценка её удобства нашими учениками —
                9,5 из 10!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================
          Секция «Часто задаваемые вопросы»
         =================================== */}
      <section className="px-6 md:px-20 py-16 bg-gray-50">
        {/* Заголовок */}
        <h2 className="mx-auto max-w-[868px] text-left font-roboto font-black text-[32px] leading-[40px] mb-8">
          Часто задаваемые
          <br />
          вопросы
        </h2>

        <div className="max-w-[868px] mx-auto space-y-4">
          {/* Вопрос 1 */}
          <div>
            <button
              onClick={() => setOpen1(!open1)}
              className={`
                w-full
                h-[72px]
                flex items-center justify-between
                bg-[#F3F6FF]
                px-6
                text-[16px] text-gray-800 font-roboto
                ${open1 ? 'rounded-t-[20px]' : 'rounded-[20px]'}
              `}
            >
              <span>Что такое Указка?</span>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                  <line
                    x1="8"
                    y1="2"
                    x2="8"
                    y2="14"
                    stroke="#000"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <line
                    x1="2"
                    y1="8"
                    x2="14"
                    y2="8"
                    stroke="#000"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </button>
            {open1 && (
              <div className="bg-white px-6 py-4 rounded-b-[20px]">
                <p className="font-roboto text-gray-700 text-sm">
                  Указка — это наша внутренняя образовательная платформа,
                  позволяющая...
                </p>
              </div>
            )}
          </div>

          {/* Вопрос 2 */}
          <div>
            <button
              onClick={() => setOpen2(!open2)}
              className={`
                w-full
                h-[72px]
                flex items-center justify-between
                bg-[#F3F6FF]
                px-6
                text-[16px] text-gray-800 font-roboto
                ${open2 ? 'rounded-t-[20px]' : 'rounded-[20px]'}
              `}
            >
              <span>вопросы?</span>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                  <line
                    x1="8"
                    y1="2"
                    x2="8"
                    y2="14"
                    stroke="#000"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <line
                    x1="2"
                    y1="8"
                    x2="14"
                    y2="8"
                    stroke="#000"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </button>
            {open2 && (
              <div className="bg-white px-6 py-4 rounded-b-[20px]">
                <p className="font-roboto text-gray-700 text-sm">
                  Здесь вы можете задать любые вопросы по работе платформы...
                </p>
              </div>
            )}
          </div>

          {/* Вопрос 3 */}
          <div>
            <button
              onClick={() => setOpen3(!open3)}
              className={`
                w-full
                h-[72px]
                flex items-center justify-between
                bg-[#F3F6FF]
                px-6
                text-[16px] text-gray-800 font-roboto
                ${open3 ? 'rounded-t-[20px]' : 'rounded-[20px]'}
              `}
            >
              <span>Указка?</span>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                  <line
                    x1="8"
                    y1="2"
                    x2="8"
                    y2="14"
                    stroke="#000"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <line
                    x1="2"
                    y1="8"
                    x2="14"
                    y2="8"
                    stroke="#000"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </button>
            {open3 && (
              <div className="bg-white px-6 py-4 rounded-b-[20px]">
                <p className="font-roboto text-gray-700 text-sm">
                  Повторный вопрос про Указку, здесь можно дать более подробный
                  ответ...
                </p>
              </div>
            )}
          </div>

          {/* Вопрос 4 */}
          <div>
            <button
              onClick={() => setOpen4(!open4)}
              className={`
                w-full
                h-[72px]
                flex items-center justify-between
                bg-[#F3F6FF]
                px-6
                text-[16px] text-gray-800 font-roboto
                ${open4 ? 'rounded-t-[20px]' : 'rounded-[20px]'}
              `}
            >
              <span>Есть ли обратная связь?</span>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                  <line
                    x1="8"
                    y1="2"
                    x2="8"
                    y2="14"
                    stroke="#000"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <line
                    x1="2"
                    y1="8"
                    x2="14"
                    y2="8"
                    stroke="#000"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </button>
            {open4 && (
              <div className="bg-white px-6 py-4 rounded-b-[20px]">
                <p className="font-roboto text-gray-700 text-sm">
                  Да — мы всегда открыты к обратной связи. Напишите нам на
                  support@ukazka.ru.
                </p>
              </div>
            )}
          </div>

          {/* Вопрос 5 */}
          <div>
            <button
              onClick={() => setOpen5(!open5)}
              className={`
                w-full
                h-[72px]
                flex items-center justify-between
                bg-[#F3F6FF]
                px-6
                text-[16px] text-gray-800 font-roboto
                ${open5 ? 'rounded-t-[20px]' : 'rounded-[20px]'}
              `}
            >
              <span>гррра?</span>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                  <line
                    x1="8"
                    y1="2"
                    x2="8"
                    y2="14"
                    stroke="#000"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <line
                    x1="2"
                    y1="8"
                    x2="14"
                    y2="8"
                    stroke="#000"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </button>
            {open5 && (
              <div className="bg-white px-6 py-4 rounded-b-[20px]">
                <p className="font-roboto text-gray-700 text-sm">
                  Ответ на «гррра?» — это тестовый вопрос, замените его своим.
                </p>
              </div>
            )}
          </div>

          {/* Вопрос 6 */}
          <div>
            <button
              onClick={() => setOpen6(!open6)}
              className={`
                w-full
                h-[72px]
                flex items-center justify-between
                bg-[#F3F6FF]
                px-6
                text-[16px] text-gray-800 font-roboto
                ${open6 ? 'rounded-t-[20px]' : 'rounded-[20px]'}
              `}
            >
              <span>Можно ли мне красный диплом?</span>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                  <line
                    x1="8"
                    y1="2"
                    x2="8"
                    y2="14"
                    stroke="#000"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <line
                    x1="2"
                    y1="8"
                    x2="14"
                    y2="8"
                    stroke="#000"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </button>
            {open6 && (
              <div className="bg-white px-6 py-4 rounded-b-[20px]">
                <p className="font-roboto text-gray-700 text-sm">
                  У нас красный диплом не завезли, но если очень надо — спросите
                  у декана!
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
