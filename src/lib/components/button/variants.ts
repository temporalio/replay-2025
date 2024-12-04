// components/button.ts
import { cva, type VariantProps } from 'class-variance-authority';

export const button = cva(
  [
    'font-jaro',
    'transition-colors',
    'text-center',
    'inline-flex',
    'justify-center',
    'items-center',
    'px-20',
    'py-6',
  ],
  {
    variants: {
      intent: {
        primary: [
          'bg-pink-to-red',
          'text-4xl',
          'p-4',
          'border-transparent',
          'hover:bg-red-to-pink',
          'active:shadow-lg',
        ],
        secondary: [
          'bg-mint-to-yellow',
          'text-black',
          'text-4xl',
          'hover:bg-none',
          'active:shadow-lg',
          'hover:bg-black',
          'hover:text-teal',
        ],
        tertiary: ['bg-black', 'text-white', 'text-2xl', 'hover:text-green', 'active:text-teal'],
      },
      size: {
        full: ['w-full'],
      },
    },
    defaultVariants: {
      intent: 'primary',
      size: 'full',
    },
  },
);

export type ButtonProps = Extend<'a', VariantProps<typeof button> & { label: string }>;
