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
    },
  },
  plugins: [],
} satisfies Config;
