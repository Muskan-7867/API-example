/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundSize: {
        '125%': '125%',
      },
      backgroundPosition: {
        custom: '50% 10%',
      },
    },
  },
  plugins: [],
}