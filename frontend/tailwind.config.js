/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        lavender: '#A9A0EC',
        'light-blue': '#C7E0FF',
      },
      fontFamily: {
        'albert-sans': ['Albert Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};