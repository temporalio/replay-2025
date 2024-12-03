import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      white: '#ffffff',
      black: '#151620',
      green: {
        dark: '#0A2C1D',
        DEFAULT: '#ddee59',
      },
      lilac: {
        DEFAULT: '#D9CAFB',
      },
      pink: {
        dark: '#4B0852',
        DEFAULT: '#ee46ff',
      },
      slate: {
        '50': '#f6f6f9',
        '100': '#ebecf3',
        '200': '#d3d5e4',
        '300': '#acb1cd',
        '400': '#7f89b1',
        '500': '#5f6998',
        '600': '#4b537e',
        '700': '#3e4466',
        '800': '#363b56',
        '900': '#30334a',
        '950': '#151620',
      },
      teal: {
        dark: '#0F2C2C',
        DEFAULT: '#33FFC9',
      },
    },
    extend: {
      backgroundImage: {
        grid: "url('/backgrounds/grid.svg')",
        stonehenge: "url('/backgrounds/stonehenge.png')",
        'pink-to-red': 'linear-gradient(180deg, #E3038C 3.52%, #FF0045 101%));',
        'mint-to-yellow': 'linear-gradient(180deg, #A7FFBB 4.67%, #E2FF6E 104.22%)',
        'blue-to-mint': 'linear-gradient(90deg, #2AD1DD 0%, #78DA9A 100%)',
      },
      backgroundSize: {
        grid: '25px',
      },
      backgroundPosition: {
        'center-bottom': 'center bottom',
        stonehenge: 'center bottom',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',
        },
      },
      fontFamily: {
        jaro: ['Jaro Variable', 'sans-serif'],
        afacad: ['Afacad Variable', 'sans-serif'],
        sans: ['Aeonik', 'sans-serif'],
        pixelated: ['Tiny5', 'monospace'],
      },
      maxWidth: ({ theme }) => ({
        section: theme('maxWidth.6xl'),
      }),
      screens: {
        xs: '375px',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            maxWidth: '120ch',
            '--tw-prose-body': theme('colors.black'),
            '--tw-prose-bold': theme('colors.black'),
          },
        },
      }),
    },
  },
  plugins: [typography],
} satisfies Config;
