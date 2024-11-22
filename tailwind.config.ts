import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        grid: "url('/backgrounds/grid.svg')",
        stonehenge: "url('/backgrounds/stonehenge.png')",
      },
      backgroundSize: {
        grid: '25px',
      },
      backgroundPosition: {
        'center-bottom': 'center bottom',
        stonehenge: 'center bottom',
      },
      colors: {
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
        pear: {
          '50': '#fdfee7',
          '100': '#f8fbcc',
          '200': '#eef79f',
          '300': '#ddee59',
          '400': '#cde338',
          '500': '#afc919',
          '600': '#89a010',
          '700': '#677a11',
          '800': '#536113',
          '900': '#455215',
          '950': '#242d06',
          DEFAULT: '#ddee59',
        },
        pink: {
          '50': '#fef3ff',
          '100': '#fce6ff',
          '200': '#faccff',
          '300': '#f9a3ff',
          '400': '#f76dff',
          '500': '#ee46ff',
          '600': '#d516e3',
          '700': '#b40ebd',
          '800': '#940e9a',
          '900': '#7c117e',
          '950': '#530055',
          DEFAULT: '#ee46ff',
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          sm: '2.25rem',
          md: '5rem',
        },
      },
      fontFamily: {
        jaro: ['Jaro Variable', 'sans-serif'],
        display: ['Afacad Variable', 'sans-serif'],
        sans: ['Aeonik', 'sans-serif'],
      },
      screens: {
        xs: '375px',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            maxWidth: '120ch',
            '--tw-prose-body': theme('colors.slate[950]'),
            '--tw-prose-bold': theme('colors.slate[950]'),
          },
        },
      }),
    },
  },
  plugins: [typography],
} satisfies Config;
