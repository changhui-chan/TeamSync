import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'media',
  theme: {
    fontSize: {
      '4xl': ['40px', '48px'],
      '3xl': ['32px', '38px'],
      '2xl': ['24px', '28px'],
      xl: ['20px', '24px'],
      '2lg': ['18px', '21px'],
      lg: ['16px', '19px'],
      md: ['14px', '17px'],
      sm: ['13px', '16px'],
      xs: ['12px', '14px'],
    },
    fontWeight: {
      bold: '700',
      semibold: '600',
      medium: '500',
      regular: '400',
    },
    screens: {
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    colors: {
      white: {
        100: '#fff', //기존 배경색 및 다크모드 글씨
        200: '#F8F9Fa',
        300: '#E8EAEd;',
      },
      black: {
        100: '#101218', //다크모드 배경
        200: '#1F1F1F', //기존 배경색 위 글씨
        300: '#3C4043',
        400: '#5E5E5E',
      },
      green: {
        100: '#047857',
        200: '#059669',
        300: '#10B981',
        400: '#34D399',
        500: '#A3E635',
      },
      error: '#DC2626',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
  },
  plugins: [],
} satisfies Config;
