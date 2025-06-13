// src/pages/Home.jsx
import React from 'react';

export default function Home() {
  return (
    <>
      <section className="px-6 md:px-20 space-y-8">
        {/* ——— Секция «Преимущества» ——— */}
        <div
          className="
          relative
          mx-auto
          w-full max-w-[1760px]
          h-[315px]
          bg-[#F3F6FF]
          rounded-[60px]
          overflow-hidden
        "
        >
          {/* Синий оверлей — ровно половина ширины */}
          <div
            className="
            absolute inset-y-0 left-0
            w-1/2 h-full
            bg-[#3A86FF]
            rounded-l-[60px]
            z-10
          "
          />

          {/* Текст в синем блоке */}
          <div
            className="
            absolute inset-y-0 left-0
            w-1/2 h-full
            flex flex-col justify-center
            px-12               /* единый horizontal padding */
            z-20
          "
          >
            <h3
              className="
              font-roboto font-bold
              text-[36px] leading-[40px]
              tracking-[0.2px] text-white mb-2
            "
            >
              Профессиональные преподаватели
            </h3>
            <p
              className="
              font-roboto font-normal
              text-[24px] leading-[32px]
              tracking-[0.2px] text-[#B3C4E9]
            "
            >
              с педагогическим образованием и опытом обучения более 5 лет
            </p>
          </div>

          {/* Текст в правой (серой) половине */}
          <div
            className="
            absolute inset-y-0 left-1/2
            w-1/2 h-full
            flex flex-col justify-center
            px-12               /* тот же padding */
            z-10
          "
          >
            <h3
              className="
              font-roboto font-bold
              text-[36px] leading-[40px]
              tracking-[0.2px] text-black mb-2
            "
            >
              Работаем на результат
            </h3>
            <p
              className="
              font-roboto font-normal
              text-[24px] leading-[32px]
              tracking-[0.2px] text-[#5F6E8F]
            "
            >
              подготовим к экзаменам, собеседованию или путешествию
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-20 space-y-16">
        {/* …секции «Преимущества», «Преимущества» и т.д. */}

        {/* ========== Секция «Удобная платформа…» ========== */}
        <div className="space-y-12">
          <h2 className="text-center font-roboto font-black text-[32px] leading-[40px]">
            УДОБНАЯ ПЛАТФОРМА ДЛЯ ЭФФЕКТИВНОГО ПОИСКА ТЬЮТОРА
          </h2>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* —— Левая колонка */}
            <div className="flex-1 space-y-6">
              {/* первые четыре переключателя */}
              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center h-[48px] px-4 bg-[#3A86FF] text-white rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="none"
                  >
                    <path
                      fill="#fff"
                      fill-opacity=".2"
                      d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16Z"
                    />
                    <path
                      fill="#fff"
                      fill-rule="evenodd"
                      d="M14.43 12.863V10.51H9.726v10.98h12.549v-8.627H14.43Zm7.844-1.569c.866 0 1.569.702 1.569 1.569v8.627c0 .867-.703 1.569-1.57 1.569H9.726a1.569 1.569 0 0 1-1.569-1.569V10.51c0-.867.703-1.569 1.569-1.569h4.706c.866 0 1.568.702 1.568 1.569v.784h6.275Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="ml-2">Указка</span>
                </button>
                <button className="flex items-center h-[48px] px-4 bg-white text-gray-700 border border-gray-200 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="33"
                    height="32"
                    fill="none"
                  >
                    <path
                      fill="#0039F3"
                      fill-opacity=".24"
                      d="M16.493 31.407C25.003 31.407 31.9 24.51 31.9 16 31.9 7.49 25.002.593 16.493.593 7.983.593 1.086 7.49 1.086 16c0 8.51 6.898 15.407 15.407 15.407Z"
                    />
                  </svg>
                  <span className="ml-2">Функциональность</span>
                </button>
                <button className="flex items-center h-[48px] px-4 bg-white text-gray-700 border border-gray-200 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="none"
                  >
                    <path
                      fill="#FD85FF"
                      fill-opacity=".2"
                      d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16Z"
                    />
                    <path
                      fill="#FD85FF"
                      fill-rule="evenodd"
                      d="M17.11 23.04c2.047-1.666 4.402-1.73 5.714-1.597.517.052 1.018-.342 1.018-.862v-9.856c0-.73-.505-1.36-1.232-1.423-1.61-.14-4.474-.073-6.61 1.721-2.137-1.794-5.002-1.86-6.611-1.721-.728.063-1.233.693-1.233 1.423v10.158c0 .544.548.946 1.085.858 1.322-.22 3.63-.28 5.64 1.307A7.313 7.313 0 0 1 16 24.158a7.846 7.846 0 0 1 1.112-1.119Zm-.326-1.71c1.964-1.312 4.059-1.54 5.49-1.495V10.85c-1.503-.103-3.696.057-5.266 1.376l-.224.188v8.917Zm-1.569-8.917-.224-.188c-1.57-1.319-3.763-1.479-5.266-1.376v9.25c1.444-.13 3.533-.001 5.49 1.258v-8.944Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="ml-2">Преподаватели</span>
                </button>
                <button className="flex items-center h-[48px] px-4 bg-white text-gray-700 border border-gray-200 rounded-lg">
                  {/* SVG сообщества */}
                  {/* ↑ сюда вставить ваш SVG */}
                  <span className="ml-2">Из комьюнити</span>
                </button>
              </div>

              {/* заглушка-подпись */}
              <div className="font-roboto text-sm text-gray-800">
                бля ну надо преимущества
              </div>

              {/* список «преимуществ» */}
              <div className="space-y-4">
                <button className="flex items-center h-[48px] px-4 bg-white text-gray-700 border border-gray-200 rounded-lg">
                  {/* SVG преимущества */}
                  {/* ↑ сюда вставить ваш SVG */}
                  <span className="ml-2">Преимущества</span>
                </button>
                <button className="flex items-center h-[48px] px-4 bg-white text-gray-700 border border-gray-200 rounded-lg">
                  {/* SVG супер-класса */}
                  {/* ↑ сюда вставить ваш SVG */}
                  <span className="ml-2">Ваш супер-класс</span>
                </button>
              </div>
            </div>

            {/* —— Правая колонка (скрин личного кабинета) */}
            <div className="flex-1 flex justify-center">
              <div className="w-full max-w-lg aspect-[16/9] bg-[#3A86FF] rounded-lg flex items-center justify-center text-white">
                тут будет скрин личного кабинета
              </div>
            </div>
          </div>

          {/* —— Подпись под скрином */}
          <div className="max-w-3xl mx-auto space-y-4 text-gray-700 text-sm leading-relaxed">
            <p>
              Мы самостоятельно разрабатываем нашу платформу. Она создана
              специально для поиска репетиторов высшего уровня.
            </p>
            <p>
              У каждого ученика есть личный кабинет, благодаря которому он
              найдёт необходимых преподавателей в зависимости от текущих нужд.
            </p>
            <p>
              Платформа крайне хороша. Оценка её удобства нашими учениками — 9,5
              из 10!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
