/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0a0a0b',
          950: '#08080a',
          900: '#0f0f11',
          800: '#161618',
          700: '#1d1d20',
          600: '#262629',
        },
        surface: {
          DEFAULT: '#131316',
          light: '#1a1a1e',
          border: '#2a2a2e',
        },
        accent: {
          DEFAULT: '#14b8a6',
          50: '#effcf9',
          100: '#cbf6ef',
          200: '#99ece0',
          300: '#5fdcc8',
          400: '#2dc4b0',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e56',
          900: '#134e48',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'flow-down': 'flowDown 2s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        flowDown: {
          '0%, 100%': { opacity: '0.3', transform: 'translateY(0)' },
          '50%': { opacity: '1', transform: 'translateY(4px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
