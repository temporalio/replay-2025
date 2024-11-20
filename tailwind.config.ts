import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
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
        display: ['Futura', 'sans-serif'],
      },
      screens: {
        xs: '375px',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100ch', // add required value here
          },
        },
      },
    },
  },
  plugins: [typography],
} satisfies Config;
