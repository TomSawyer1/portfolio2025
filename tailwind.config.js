/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FDE100',
          400: '#FFE44D',
          600: '#FACC15',
        },
        bg: {
          dark: '#0a0a0a',
          light: '#fafafa',
        },
        card: {
          dark: '#111111',
          light: '#ffffff',
        },
      },
    },
  },
  plugins: [],
}

