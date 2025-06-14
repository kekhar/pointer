import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // переопределяем базовый sans
        sans: [
          '"Segoe UI"',       // ваш системный Segoe UI
          'system-ui',        // fallback на системный UI
          ...defaultTheme.fontFamily.sans,
        ],
        // если вам всё ещё нужен Roboto в других местах:
        roboto: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
