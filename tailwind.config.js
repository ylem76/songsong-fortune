/** @type {import('tailwindcss').Config} */

const tailwindConfig = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        yclover: ['YClover', 'sans-serif'],
        gmarket: ['GmarketSans', 'sans-serif'],
      },
      colors: {
        body: {
          primary: '#999',
          secondary: '#ccc',
          accent: '#00FFA3',
        },
      },

      animation: {
        marquee: 'marquee 45s linear infinite',
        marquee2: 'marquee2 45s linear infinite',
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;
