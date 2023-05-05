/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,vue}', './public/index.ejs'],
  theme: {
    extend: {
      colors: {
        'main-navy': '#151D29',
        'main-gray': '#a5b3ce',
        'main-gray-lighter': 'rgba(0,0,0,0.05)',
        'main-orange': '#fe655c',
      },
    },
  },
  plugins: [],
};
