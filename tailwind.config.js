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
        chalkboard: {
          dark: '#15201e',
          DEFAULT: '#1f2d2a',
          light: '#2a3b37',
          border: '#374c47',
        },
        wood: {
          dark: '#5c3d24',
          DEFAULT: '#8c5d37',
          light: '#b5835a',
          surface: '#deb887',
        },
        chalk: {
          DEFAULT: '#f4f1ea',
          dim: '#dcd7cc',
          yellow: '#f4e04d',
          blue: '#82c0cc',
          pink: '#f19cbb',
          green: '#99d98c',
        },
        gold: {
          light: '#fde047',
          DEFAULT: '#f2b84b',
          dark: '#d97706',
        },
        paper: {
          light: '#fdfbf7',
          DEFAULT: '#faf8f3',
          dark: '#f0ebe1',
          line: '#e2dcd2',
        },
        brand: {
          blue: '#5b8def',
          coral: '#e76f51',
          teal: '#2a9d8f',
        }
      },
      fontFamily: {
        chalk: ['"Patrick Hand"', '"Caveat"', 'cursive'],
        handwriting: ['"Caveat"', 'cursive'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'chalk': '0 0 10px rgba(244, 241, 234, 0.25)',
        'wood': '0 12px 30px -8px rgba(92, 61, 36, 0.45)',
        'paper': '0 4px 20px -2px rgba(40, 30, 20, 0.08)',
        'lamp': '0 0 60px 20px rgba(242, 184, 75, 0.15)',
      }
    },
  },
  plugins: [],
}
