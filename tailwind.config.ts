import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
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
