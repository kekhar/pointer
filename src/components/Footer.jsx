// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const phoneNumber = '+7 (495) 777-00-00';
  const telHref = 'tel:+74957770000';

  return (
    <footer style={{ fontFamily: 'Segoe UI, sans-serif' }} className="bg-white">
      {/* Верхняя часть */}
      <div className="px-6 md:px-[115px] py-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Телефон */}
        <div>
          {/* сам номер тоже обёрнут в tel: */}
          <div className="text-lg font-medium text-black">
            <a href={telHref} className="hover:underline">
              {phoneNumber}
            </a>
          </div>

          {/* теперь это ссылка */}
          <a
            href={telHref}
            className="
              mt-4
              inline-flex
              w-[220px] h-[51px]
              bg-[#F3F6FF]
              rounded-[12px]
              items-center justify-center
              px-[15px] py-[15px]
              space-x-2
              hover:bg-[#E5EEFF]
              transition-colors duration-200
              cursor-pointer
            "
          >
            {/* телефонная трубка */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              fill="none"
            >
              <path
                fill="#1455FF"
                d="M10 8.24h1.333A3.333 3.333 0 0 0 8 4.907V6.24a2 2 0 0 1 2 2Zm2.667 0H14c0-3.333-2.687-6-6-6v1.334a4.668 4.668 0 0 1 4.667 4.666Zm.666 2.334a7.576 7.576 0 0 1-2.38-.38.669.669 0 0 0-.68.166l-1.466 1.467a10.065 10.065 0 0 1-4.394-4.393L5.88 5.967a.669.669 0 0 0 .167-.68 7.574 7.574 0 0 1-.38-2.38A.667.667 0 0 0 5 2.24H2.667A.667.667 0 0 0 2 2.907 11.333 11.333 0 0 0 13.333 14.24a.667.667 0 0 0 .667-.666V11.24a.667.667 0 0 0-.667-.666Z"
              />
            </svg>
            <span className="text-[14px] leading-[14px] text-[#1455FF]">
              позвонить
            </span>
          </a>
        </div>

        {/* Разделитель */}
        <div className="hidden md:block border-l border-gray-200" />

        {/* О Указке + соцсети */}
        <div className="flex flex-col md:flex-row md:justify-end gap-y-8 md:gap-x-[80px]">
          {/* Колонка «О Указке» */}
          <nav className="space-y-2">
            <div className="font-sans font-medium text-black text-base">
              о Указке
            </div>
            <ul className="space-y-1">
              <li>
                <Link
                  to="/reviews"
                  className="font-sans text-base text-gray-600 hover:text-black"
                >
                  отзывы
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="font-sans text-base text-gray-600 hover:text-black"
                >
                  вопросы
                </Link>
              </li>
            </ul>
          </nav>

          {/* Блок «Соцсети» */}
          <div className="space-y-2">
            <div className="font-sans font-medium text-black text-base">
              соцсети
            </div>
            <div className="flex space-x-[6px]">
              {/* VK */}
              <a
                href="https://vk.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 bg-[#F3F6FF] rounded-lg flex items-center justify-center hover:bg-[#E5EEFF] transition-colors"
              >
                {/* ваш SVG VK */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="27"
                  fill="none"
                >
                  <path
                    fill="#1455FF"
                    fillRule="evenodd"
                    d="M2.708 9.297H1.13c-.451 0-.541.206-.541.434 0 .406.535 2.42 2.49 5.082 1.304 1.82 3.141 2.805 4.813 2.805 1.003 0 1.127-.219 1.127-.596v-1.375c0-.438.095-.525.413-.525.234 0 .635.114 1.571.99 1.07 1.04 1.246 1.506 1.848 1.506h1.578c.45 0 .676-.219.546-.651-.142-.43-.653-1.055-1.33-1.796-.368-.422-.92-.877-1.087-1.104-.234-.293-.168-.423 0-.683 0 0 1.922-2.63 2.123-3.523.1-.325 0-.564-.477-.564h-1.578c-.401 0-.586.206-.687.434 0 0-.802 1.9-1.939 3.134-.368.357-.535.47-.735.47-.1 0-.246-.113-.246-.438V9.861c0-.39-.116-.564-.45-.564h-2.48c-.251 0-.402.181-.402.352 0 .37.569.455.627 1.494v2.258c0 .495-.092.584-.292.584-.535 0-1.837-1.908-2.608-4.092-.152-.424-.303-.596-.706-.596Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              {/* Telegram */}
              <a
                href="https://t.me"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 bg-[#F3F6FF] rounded-lg flex items-center justify-center hover:bg-[#E5EEFF] transition-colors"
              >
                {/* ваш SVG Telegram */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="none"
                >
                  <path
                    fill="#1455FF"
                    d="M2.238 8.341s6.817-2.82 9.181-3.812c.907-.397 3.98-1.668 3.98-1.668s1.419-.556 1.3.794c-.039.556-.354 2.502-.67 4.607-.472 2.979-.984 6.235-.984 6.235s-.08.913-.75 1.072c-.669.16-1.772-.556-1.97-.715-.157-.119-2.955-1.906-3.98-2.78-.275-.238-.59-.714.04-1.27a151.044 151.044 0 0 0 4.138-3.972c.473-.476.945-1.588-1.025-.238C8.7 8.54 5.942 10.367 5.942 10.367s-.63.397-1.812.04c-1.183-.358-2.562-.834-2.562-.834s-.945-.596.67-1.232Z"
                  />
                </svg>
              </a>
              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 bg-[#F3F6FF] rounded-lg flex items-center justify-center hover:bg-[#E5EEFF] transition-colors"
              >
                {/* ваш SVG YouTube */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="28"
                  fill="none"
                >
                  <path
                    fill="#F93C3C"
                    d="M7.344 16.35V11.65l4.232 2.35-4.232 2.348Zm9.413-6.177a2.01 2.01 0 0 0-1.431-1.406C14.063 8.435 9 8.435 9 8.435s-5.063 0-6.325.332a2.01 2.01 0 0 0-1.432 1.406C.905 11.413.905 14 .905 14s0 2.588.338 3.828a2.01 2.01 0 0 0 1.432 1.406c1.262.332 6.325.332 6.325.332s5.063 0 6.326-.332a2.01 2.01 0 0 0 1.431-1.406c.338-1.24.338-3.828.338-3.828s0-2.587-.338-3.827Z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* hr только по ширине контента */}
      <div className="px-6 md:px-[115px]">
        <hr className="border-gray-200" />
      </div>

      {/* Нижняя часть */}
      <div
        className="
          px-6 md:px-[115px]
          py-6
          flex flex-col md:flex-row
          items-start
          gap-4
        "
      >
        {/* Логотип-аватарка */}
        <div className="flex-shrink-0 w-12 h-12 bg-[#3A86FF] rounded-lg flex items-center justify-center">
          <span className="font-sans font-bold text-white text-xl">У</span>
        </div>

        {/* Контакты */}
        <div className="text-base text-gray-600 font-sans space-y-1">
          <div>© Указка, 2025</div>
          <div>
            по всем вопросам&nbsp;
            <Link
              to="mailto:ukazka@gmail.com"
              className="text-[#3A86FF] hover:underline"
            >
              ukazka@gmail.com
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
