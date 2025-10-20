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
        // Primary pointe vers BVB par défaut (dark mode)
        primary: {
          DEFAULT: '#FDE100', // Jaune BVB (dark) / Rouge Arsenal (light via CSS)
          400: '#FFE44D',
          600: '#FACC15',
        },
        // BVB Dark Mode
        'primary-dark': {
          DEFAULT: '#FDE100',
          400: '#FFE44D',
          600: '#FACC15',
        },
        // Arsenal Light Mode
        'primary-light': {
          DEFAULT: '#EF0107',
          400: '#FF1E2D',
          600: '#C70108',
        },
        secondary: {
          DEFAULT: '#023474', // Bleu Arsenal
          400: '#0A4595',
          600: '#011F47',
        },
        accent: {
          DEFAULT: '#9C824A', // Or Arsenal
          400: '#B39A6B',
          600: '#7D6A3B',
        },
        bg: {
          dark: '#0a0a0a',
          light: '#f8f9fa',
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

