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
      lg: ['18px', '21px'],
      md: ['16px', '19px'], //기준
      sm: ['14px', '17px'],
      xs: ['13px', '16px'],
      '2xs': ['12px', '14px'],
    },
    fontWeight: {
      bold: '700',
      semibold: '600',
      medium: '500',
      regular: '400',
    },
    screens: {
      dt: { min: '1200px' }, //데스크탑 퍼스트
      tb: { max: '1199px' }, //태블릿
      mb: { max: '743px' }, //모바일
    },
    colors: {
      white: {
        100: '#fff', //기존 배경색 및 다크모드 글씨
        200: '#F8F9Fa',
        300: '#E8EAEd',
        400: '#bbc1c9', //disabled
        500: '#98a0a6', //default
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
      //Figma
      brand: {
        primary: '#10B981',
        secondary: '#34D399',
        tertiary: '#A3E635',
        gradient: 'linear-gradient(to right, #10B981, #A3E635)',
      },
      point: {
        purple: '#A855F7',
        blue: '#3B82F6',
        cyan: '#06B6D4',
        pink: '#EC4899',
        rose: '#F43F5E',
        orange: '#F97316',
        yellow: '#EAB308',
      },
      background: {
        primary: '#FFFFFF', //라이트모드
        secondary: '#1E293B',
        tertiary: '#334155',
        inverse: '#101218', //다크모드
        overlay: '#00000080', //모달 오버레이
      },
      interaction: {
        inactive: '#94A3B8',
        hover: '#059669',
        pressed: '#047857',
        focus: '#10B981',
      },
      border: {
        primary: '#F8FAFC80', // 50% 투명도 적용
      },
      text: {
        primary: '#1F1F1F', //라이트모드
        secondary: '#CBD5E1',
        tertiary: '#E2E8F0',
        default: '#64748B',
        inverse: '#FFFFFF', //다크모드
        disabled: '#94A3B8',
      },

      icon: {
        primary: '#64748B',
        inverse: '#F8FAFC',
        brand: '#10B981',
        danger: '#DC2626',
      },
      status: {
        danger: '#DC2626',
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    animation: {
      'fade-in': 'fadeInBottomToTop 0.3s ease-out',
    },
    keyframes: {
      fadeInBottomToTop: {
        '0%': { opacity: '0', transform: 'translateY(20px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      },
    },
  },
  plugins: [],
} satisfies Config;
