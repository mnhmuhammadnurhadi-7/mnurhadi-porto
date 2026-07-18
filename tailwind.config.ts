import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
      },
      colors: {
        navy: {
          DEFAULT: '#1A3557',
          dark: '#0F2137',
          light: '#1E4A7A',
        },
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(15px, -15px)' },
          '50%': { transform: 'translate(0, -20px)' },
          '75%': { transform: 'translate(-15px, -10px)' },
        },
        floatSlower: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '33%': { transform: 'translate(-20px, 15px)' },
          '66%': { transform: 'translate(15px, -15px)' },
        },
        floatIcon: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-15px)' },
        },
      },
      animation: {
        'float-slow': 'floatSlow 14s ease-in-out infinite',
        'float-slower': 'floatSlower 16s ease-in-out infinite',
        'float-icon': 'floatIcon 8s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
} satisfies Config;
